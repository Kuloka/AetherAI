const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
const caps=require('../model-capabilities'),{createProviders}=require('../electron/cloud-providers');
test('vision capabilities use declared modalities or verified provider models and reject text-only GPT OSS',()=>{
 assert.equal(caps.cloudVision('groq',{id:'qwen/qwen3.8-27b'}),true);assert.equal(caps.cloudVision('gemini',{id:'models/gemini-3.8-flash'}),true);
 assert.equal(caps.cloudVision('groq',{id:'openai/gpt-oss-120b'}),false);assert.equal(caps.cloudVision('openrouter',{id:'test/vision',architecture:{input_modalities:['text','image']}}),true);assert.equal(caps.cloudVision('groq',{id:'unknown-vision-sounding-model'}),false);
 assert.match(caps.prompt('GPT OSS 120B',false),/cannot see or analyze images/);assert.match(caps.notice('GPT OSS 120B',false,'en'),/No Ollama download/);assert.doesNotMatch(caps.notice('GPT OSS 120B',false,'ru'),/Скачай/);
});
test('cloud rejects images for text models and preserves MIME type for an explicitly selected vision model',async t=>{
 const dir=await fs.mkdtemp(path.join(os.tmpdir(),'multimind-vision-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));let completions=0;
 const storage={isEncryptionAvailable:()=>true,encryptString:s=>Buffer.from(s),decryptString:b=>b.toString()};
 const providers=createProviders(dir,storage,async(url,init)=>{if(url.endsWith('/models'))return Response.json({data:[{id:'openai/gpt-oss-120b'},{id:'qwen/qwen3.8-27b'}]});completions++;const body=JSON.parse(init.body);assert.equal(body.model,'qwen/qwen3.8-27b');assert.equal(body.messages[0].content[1].image_url.url,'data:image/jpeg;base64,/9j/fixture');return Response.json({choices:[{message:{content:'Fixture description'}}]});});
 await providers.save('groq','fixture-key');const messages=[{role:'user',content:'What is in this image?',images:['data:image/jpeg;base64,/9j/fixture']}];
 await assert.rejects(providers.chat({model:'cloud:groq/openai/gpt-oss-120b',messages,stream:false},undefined,()=>{}),/does not support images/);assert.equal(completions,0);
 await providers.chat({model:'cloud:groq/qwen/qwen3.8-27b',messages,stream:false},undefined,()=>{});assert.equal(completions,1);
});
