const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
test('composer examples type, hold five seconds, erase and rotate without touching drafts',()=>{
 let now=0,tick;const events={},input={placeholder:'Ask AetherAI anything...',value:'',setAttribute(){},addEventListener(name,fn){events[name]=fn;}};
 const document={hidden:false,activeElement:null,documentElement:{lang:'en',classList:{contains:()=>false}},body:{classList:{contains:()=>false}},getElementById:()=>input,addEventListener(){}};
 const reduced={matches:false,addEventListener(){}};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../composer-prompts.js'),'utf8'),{document,matchMedia:()=>reduced,performance:{now:()=>now},setInterval:fn=>{tick=fn;}});
 const step=ms=>{for(let i=0;i<ms;i+=35){now+=35;tick();}};
 step(2500);assert.equal(input.placeholder,'List 100 cat breeds');step(4300);assert.equal(input.placeholder,'List 100 cat breeds');step(1100);assert.notEqual(input.placeholder,'List 100 cat breeds');step(3500);assert.equal(input.placeholder,'Explain black holes simply');
 input.value='Never overwrite my draft';events.input();step(9000);assert.equal(input.value,'Never overwrite my draft');assert.equal(input.placeholder,'Ask AetherAI anything...');
 input.value='';document.activeElement=input;step(4000);assert.equal(input.placeholder,'Ask AetherAI anything...');document.activeElement=null;reduced.matches=true;step(4000);assert.equal(input.placeholder,'Ask AetherAI anything...');
});
