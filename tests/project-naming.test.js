'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const {name} = require('../project-naming');
const html = value => ({file:'index.html',code:'<title>'+value+'</title>',complete:true});
test('complete generated title names the actual game, not the request sentence',()=>{
 assert.equal(name({prompt:'\u043d\u0430\u043f\u0438\u0448\u0438 3\u0434 \u0438\u0433\u0440\u0443',files:[html('\u041a\u0443\u0431\u043e-\u0440\u0430\u043d\u043d\u0435\u0440')]}),'\u041a\u0443\u0431\u043e-\u0440\u0430\u043d\u043d\u0435\u0440');
 assert.equal(name({prompt:'Please create a cube runner using Three.js'}),'cube runner');
 assert.equal(name({prompt:'\u043d\u0430\u043f\u0438\u0448\u0438 \u043c\u043d\u0435 3\u0434 \u0438\u0433\u0440\u0443'}),'3D \u0438\u0433\u0440\u0430');
});
test('unfinished code cannot override the prompt with an incomplete title',()=>{
 assert.equal(name({prompt:'Build a cube runner',files:[{...html('Wrong game'),complete:false}]}),'cube runner');
});
test('generic and excessively long titles fall back to the concise prompt',()=>{
 assert.equal(name({prompt:'Create a weather dashboard',files:[html('Untitled')]}),'weather dashboard');
 assert.equal(name({prompt:'Create a weather dashboard',files:[html('The generated website has '.repeat(12))]}),'weather dashboard');
 const result=name({prompt:'Create a detailed beautiful interactive dashboard showing traffic statistics and historical trends for all the available countries'});
 assert.ok(result.length<=48);assert.ok(!/^Create /i.test(result));assert.ok(result.split(' ').length<=6);
});
test('manifest titles are safely read and HTML titles take priority',()=>{
 const pkg={file:'package.json',code:JSON.stringify({name:'@demo/cube-runner'}),complete:true};
 assert.equal(name({files:[pkg]}),'cube runner');
 assert.equal(name({files:[pkg,html('Cube &amp; Friends')]}),'Cube & Friends');
 assert.equal(name({files:[html('<b>Cube</b> &#x1f3ae;')]}),'Cube \ud83c\udfae');
});
test('names are Windows-safe including reserved device names and paths',()=>{
 for(const prompt of ['CON','CON.txt','AUX','LPT1','test <foo>: bar / baz \\ end | ? * . ']){
  const result=name({prompt});assert.ok(result.length<=48);assert.ok(!/[<>:"/\\|?*\x00-\x1f]/.test(result));assert.ok(!/[. ]$/.test(result));assert.ok(!/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(result));
 }
 assert.equal(name({prompt:'Create a cube runner',files:[html('C:\\Windows\\game.html')]}),'cube runner');
});
test('collisions use deterministic case-insensitive suffixes without changing existing names',()=>{
 const existingNames=['Cube runner','cube runner-2'];
 assert.equal(name({prompt:'Create Cube runner',existingNames}),'Cube runner-3');
 assert.deepEqual(existingNames,['Cube runner','cube runner-2']);
 const long='A'.repeat(48), result=name({prompt:long,existingNames:[long]});assert.equal(result.length,48);assert.ok(result.endsWith('-2'));
});
test('empty requests have localized safe defaults and quoted product names',()=>{
 assert.equal(name({language:'ru'}),'\u041d\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442');
 assert.equal(name({}),'New project');assert.equal(name({prompt:'Create a game called "Pixel Runner" with keyboard support'}),'Pixel Runner');
});
