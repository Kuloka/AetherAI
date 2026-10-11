const test=require('node:test'),assert=require('node:assert/strict'),{family,groups}=require('../model-preferences');
test('model preferences combine related versions into one family regardless of free or paid pricing',()=>{
 const models=[{name:'cloud:openrouter/anthropic/claude-a',cloudName:'Anthropic: Claude A',free:true},{name:'cloud:openrouter/anthropic/claude-b',cloudName:'Claude B',free:false},{name:'cloud:openrouter/openai/gpt-a',cloudName:'OpenAI: GPT A'},{name:'cloud:openrouter/openai/o-a',cloudName:'OpenAI: o A'},{name:'cloud:openrouter/deepseek/a',cloudName:'DeepSeek A'}];
 const families=groups(models);assert.deepEqual(families.map(group=>[group.id,group.name,group.models.length]),[['claude','Claude',2],['chatgpt','ChatGPT',2],['deepseek','DeepSeek',1]]);assert.deepEqual(families[0].models.map(model=>model.name),models.slice(0,2).map(model=>model.name));
 assert.equal(family({name:'cloud:openrouter/anthropic/claude-future',cloudName:'Claude future version'}).id,'claude');
});
test('unrecognized models share one preference group',()=>{
 assert.equal(groups([{name:'cloud:openrouter/custom/a',cloudName:'Custom A'},{name:'cloud:openrouter/custom/b',cloudName:'Custom B'}]).length,1);
});
