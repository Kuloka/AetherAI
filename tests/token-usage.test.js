const test=require('node:test'),assert=require('node:assert/strict'),tokens=require('../token-usage');
test('Usage accepts actual OpenAI, Groq and Ollama counts; reasoning/cache are not added twice',()=>{
 assert.deepEqual(tokens.normalize({usage:{prompt_tokens:12,completion_tokens:8,total_tokens:20,completion_tokens_details:{reasoning_tokens:5},prompt_tokens_details:{cached_tokens:9}}}),{input:12,output:8,total:20});
 assert.deepEqual(tokens.normalize({x_groq:{usage:{prompt_tokens:0,completion_tokens:7,total_tokens:7}}}),{input:0,output:7,total:7});
 assert.deepEqual(tokens.normalize({prompt_eval_count:10,eval_count:5}),{input:10,output:5,total:15});
 assert.equal(tokens.normalize({usage:{prompt_tokens:-1,completion_tokens:'5'}}),null);assert.equal(tokens.normalize(null),null);
});
test('Per-request snapshots replace cumulative counts, aggregate parallel calls, and flag missing usage',()=>{
 const ledger=tokens.create();ledger.update('main',null);assert.equal(ledger.snapshot().total,null);
 ledger.update('main',{usage:{prompt_tokens:10,completion_tokens:3,total_tokens:13}});ledger.update('main',{usage:{prompt_tokens:10,completion_tokens:8,total_tokens:18}});assert.equal(ledger.snapshot().total,18);
 ledger.update('agent',null);assert.equal(ledger.snapshot().partial,true);assert.match(tokens.present(ledger.snapshot(),'ru').text,/^≥ 18/);
 ledger.update('agent',{usage:{prompt_tokens:2,completion_tokens:0,total_tokens:2}});assert.equal(ledger.snapshot().total,20);assert.equal(ledger.snapshot().partial,false);
 ledger.update('main',{});assert.equal(ledger.snapshot().total,20);
 for(const lang of ['en','ru','es','pt','fr','de','it','tr','pl','uk'])assert.ok(tokens.present(ledger.snapshot(),lang).title.includes('20'));
});
test('Transport records Ollama final NDJSON metadata, including a line split across byte chunks',async()=>{
 const api=require('../aetherai'),original=global.fetch,ledger=tokens.create();api.setUsageListener((id,data)=>ledger.update(id,data));
 const bytes=new TextEncoder().encode('{"message":{"content":"Привет"}}\n{"done":true,"prompt_eval_count":4,"eval_count":2}');
 global.fetch=async()=>new Response(new ReadableStream({start(c){for(let i=0;i<bytes.length;i+=3)c.enqueue(bytes.slice(i,i+3));c.close();}}));
 try{const response=await api.chatFetch('http://local/api/chat',{body:JSON.stringify({model:'local-test',messages:[],stream:true})});assert.match(await response.text(),/Привет/);assert.equal(ledger.snapshot().total,6);assert.equal(ledger.snapshot().partial,false);}finally{global.fetch=original;api.setUsageListener(null);}
});
test('Embedded SSE adapter preserves final usage while leaving text intact',async()=>{
 const api=require('../aetherai'),original=global.fetch,ledger=tokens.create();api.setUsageListener((id,data)=>ledger.update(id,data));
 global.fetch=async(_url,init)=>{assert.equal(JSON.parse(init.body).stream_options.include_usage,true);return new Response('data: {"choices":[{"delta":{"content":"ok"}}]}\n\ndata: {"choices":[],"usage":{"prompt_tokens":3,"completion_tokens":4,"total_tokens":7}}\n\ndata: [DONE]\n\n');};
 try{const response=await api.chatFetch('',{body:JSON.stringify({model:'multimind:test',messages:[],stream:true})});const lines=(await response.text()).trim().split('\n').map(JSON.parse);assert.equal(lines[0].message.content,'ok');assert.equal(ledger.snapshot().total,7);assert.equal(ledger.snapshot().requests,1);}finally{global.fetch=original;api.setUsageListener(null);}
});
test('Live estimates grow with observed text, stay separate from exact usage and settle to API totals',async()=>{
 const api=require('../aetherai'),original=global.fetch,ledger=tokens.create(),snapshots=[];
 api.setUsageListener((id,data)=>{ledger.update(id,data);snapshots.push(ledger.snapshot());});
 global.fetch=async()=>new Response('{"message":{"thinking":"12345678"}}\n{"message":{"content":"abcdefgh"}}\n{"usage":{"prompt_tokens":2,"completion_tokens":3,"total_tokens":5}}\n');
 try{
  const response=await api.chatFetch('',{body:JSON.stringify({model:'local-test',messages:[{role:'user',content:'1234'}],stream:true})});await response.text();
  assert.equal(snapshots[1].estimateTotal,3);assert.equal(snapshots[2].estimateTotal,5);assert.equal(snapshots[2].total,null);
  assert.equal(tokens.display(snapshots[2],'en',true).prefix,'≈ ');assert.equal(tokens.display(snapshots[2],'en',false).number,null);
  assert.equal(tokens.display(ledger.snapshot(),'en',true).estimated,false);assert.equal(ledger.snapshot().total,5);
 }finally{global.fetch=original;api.setUsageListener(null);}
});
