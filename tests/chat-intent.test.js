const test=require('node:test'),assert=require('node:assert/strict');
const intent=require('../chat-intent');
test('ordinary conversation and explanations never authorize file writes',()=>{
  for(const text of ['ю','привет','как дела?','напиши стих','составь план на день','переведи hello','объясни этот код','покажи пример кода Python','explain how to create a file','не создавай файлы','создай идею для игры']){
    assert.equal(intent.classify(text).files,false,text);
    assert.match(intent.prompt(text),/does not authorize file changes/);
  }
});
test('explicit file and software creation requests still authorize artifacts',()=>{
  for(const text of ['напиши код на Python','создай сайт','сохрани ответ в файл notes.txt','исправь баг в этом коде','build a website','create main.py','write a script'])assert.equal(intent.classify(text).files,true,text);
  assert.equal(intent.classify('ю').simple,true);
  assert.equal(intent.classify('ю').toolsMutation,false);
  assert.equal(intent.classify('запомни моё имя').toolsMutation,true);
});
