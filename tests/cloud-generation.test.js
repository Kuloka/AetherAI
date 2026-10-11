const test=require('node:test'),assert=require('node:assert/strict'),{generationOptions}=require('../electron/cloud-generation');
test('Reasoning and artifact budgets leave room for visible output and respect provider limits',()=>{
 const model={name:'cloud:openrouter/z-ai/glm-5.3-flash',provider:'openrouter',maxCompletionTokens:16000,reasoning:{supported_efforts:['high','low'],mandatory:true}};
 assert.deepEqual(generationOptions(model,{options:{num_predict:1000,reasoning_effort:'medium'}}),{max_tokens:8192,reasoning:{effort:'high'}});
 assert.equal(generationOptions(model,{options:{num_predict:8192,reasoning_effort:'high'}}).max_tokens,16000);
 assert.notEqual(generationOptions(model,{options:{reasoning_effort:'none'}}).reasoning.effort,'none');
 assert.deepEqual(generationOptions({name:'cloud:groq/ordinary'},{options:{num_predict:900}}),{max_tokens:900});
});
