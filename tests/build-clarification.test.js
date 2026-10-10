const test=require('node:test'),assert=require('node:assert/strict'),{infer}=require('../build-clarification');
test('Generic interfaces and games never open website archetype presets',()=>{
 const {usesWebsitePresets}=require('../build-clarification');
 for(const text of ['я хочу игру','сделай игру с интерфейсом','я с интерфейсом хочу','Create a beautiful app interface','Сделай красивый сайт с игрой'])assert.equal(usesWebsitePresets(text),false);
 assert.equal(usesWebsitePresets('Сделай красивый сайт'),true);
});
test('Calculator interface follow-ups retain the actual task, without dashboard presets',()=>{
 const history=[{role:'user',content:'напиши калькулятор'},{role:'assistant',content:'Консольный калькулятор на Python'}];
 assert.deepEqual(infer('я с интерфейсом хочу',history),{application:'calculator',platform:null,language:null});
 assert.deepEqual(infer('Build a calculator GUI with Python Tkinter'),{application:'calculator',platform:'desktop',language:'python'});
 assert.deepEqual(infer('Сделай калькулятор в браузере на React'),{application:'calculator',platform:'browser',language:'react'});
});
test('A different latest task does not inherit calculator clarification',()=>{
 assert.equal(infer('Сделай интерфейс портфолио',[{role:'user',content:'напиши калькулятор'}]),null);
 assert.equal(infer('я с интерфейсом хочу',[{role:'user',content:'калькулятор'},{role:'user',content:'Теперь напиши игру'}]),null);
});
