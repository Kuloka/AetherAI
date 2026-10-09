const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
const {createProviders}=require('../electron/cloud-providers');
const storage={isEncryptionAvailable:()=>true,encryptString:v=>Buffer.from(v.split('').reverse().join('')),decryptString:v=>v.toString().split('').reverse().join('')};
test('SambaNova connects, streams UTF-8, preserves per-model minute/day limits and clears credentials',async t=>{
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-sambanova-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));
  let exhausted=false;
  const provider=createProviders(directory,storage,async(url,init)=>{
    assert.equal(init.headers.Authorization,'Bearer fixture-samba-key');
    if(url.endsWith('/models'))return Response.json({data:[{id:'DeepSeek-V3.1',context_length:131072,pricing:{prompt:.000001,completion:.000002}},{id:'embedding-test'}]});
    assert.equal(url,'https://api.sambanova.ai/v1/chat/completions');
    const body=JSON.parse(init.body);assert.equal(body.model,'DeepSeek-V3.1');assert.equal(body.max_tokens,128);
    const headers={'x-ratelimit-limit-requests':'20','x-ratelimit-remaining-requests':'19','x-ratelimit-limit-requests-day':'20','x-ratelimit-remaining-requests-day':exhausted?'0':'17','retry-after':'60'};
    if(exhausted)return new Response('fixture-samba-key rate limit exceeded',{status:429,headers});
    if(!body.stream)return Response.json({choices:[{message:{content:'Привет'}}]},{headers});
    const bytes=new TextEncoder().encode('data: '+JSON.stringify({choices:[{delta:{content:'Привет',reasoning:'Check'}}]})+'\n\ndata: [DONE]\n');
    return new Response(new ReadableStream({start(controller){for(let i=0;i<bytes.length;i+=3)controller.enqueue(bytes.slice(i,i+3));controller.close();}}),{headers});
  });
  await provider.save('sambanova','fixture-samba-key');
  const models=await provider.models();assert.equal(models.length,1);assert.equal(models[0].provider,'sambanova');assert.equal(models[0].contextLength,131072);assert.equal(models[0].free,false,'standard model prices must not be assumed free for every account');
  assert.ok(!(await fs.readFile(path.join(directory,'sambanova.key'),'utf8')).includes('fixture-samba-key'));
  const events=[];
  await provider.chat({model:models[0].name,messages:[{role:'user',content:'привет'}],options:{num_predict:128}},undefined,event=>events.push(event));
  const message=events.filter(e=>e.type==='chunk').map(e=>JSON.parse(e.text).message);
  assert.equal(message.map(m=>m.content).join(''),'Привет');assert.equal(message[0].thinking,'Check');
  const usage=provider.usage()[models[0].name];assert.equal(usage.limits.requests.label,'Requests per minute');assert.equal(usage.limits['requests-day'].label,'Daily requests');assert.equal(usage.limits['requests-day'].remaining,17);
  exhausted=true;const errorEvents=[];
  await provider.chat({model:models[0].name,messages:[],options:{num_predict:128}},undefined,event=>errorEvents.push(event));
  assert.equal(errorEvents.find(e=>e.type==='headers').kind,'rate');assert.equal(errorEvents.find(e=>e.type==='headers').provider,'sambanova');assert.ok(!JSON.stringify(errorEvents).includes('fixture-samba-key'));
  const restarted=createProviders(directory,storage);assert.equal(restarted.usage()[models[0].name].limits['requests-day'].remaining,0);
  exhausted=false;await provider.chat({model:models[0].name,messages:[],stream:false,options:{num_predict:128}},undefined,()=>{});assert.equal(provider.usage()[models[0].name].exhausted,false);
  provider.disconnect('sambanova');assert.deepEqual(provider.usage(),{});assert.deepEqual(await provider.models(),[]);
});
test('SambaNova rejects an unauthorized key without storing it',async t=>{
  const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-sambanova-auth-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));
  const provider=createProviders(directory,storage,async()=>new Response('unauthorized',{status:401}));
  await assert.rejects(provider.save('sambanova','fixture-samba-key'),/HTTP 401/);
  assert.equal(provider.status().find(p=>p.id==='sambanova').configured,false);
});
