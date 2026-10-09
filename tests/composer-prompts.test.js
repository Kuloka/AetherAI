const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),path=require('node:path'),{create}=require('../prompt-examples');
test('examples stay unique through a cycle and resume their shuffled queue after restart',()=>{
 const saved=new Map(),storage={getItem:key=>saved.get(key),setItem:(key,value)=>saved.set(key,value)};let choices=create(storage),seen=new Set(),last;
 for(let i=0;i<140;i++){if(i===70)choices=create(storage);const question=choices.next('en');assert.ok(!seen.has(question));seen.add(question);last=question;}
 assert.notEqual(choices.next('en'),last);assert.equal(seen.size,140);
 for(const lang of ['ru','de','fr','es','pt','it','tr','pl','uk']){const values=Array.from({length:36},()=>choices.next(lang));assert.equal(new Set(values).size,36);assert.ok(values.every(value=>!value.includes('{topic}')));}
});
test('terminal suggestions start immediately, hold five seconds, and never overwrite drafts or composition',()=>{
 let now=0,tick,index=0;const events={},input={placeholder:'',value:'',addEventListener(name,fn){events[name]=fn;}},prompt={hidden:true},text={textContent:''},slot={dataset:{}};
 const elements={userInput:input,composerPrompt:prompt,composerPromptText:text,composerInputSlot:slot};
 const document={hidden:false,documentElement:{lang:'en',classList:{contains:()=>false}},body:{classList:{contains:()=>false}},getElementById:id=>elements[id],addEventListener(){}};
 input.focus=()=>{document.activeElement=input;};
 const reduced={matches:false,addEventListener(){}};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../composer-prompts.js'),'utf8'),{document,window:{AetherAIPrompts:{create:()=>({next:()=>['List 100 cat breeds','Explain black holes simply'][index++%2]})}},matchMedia:()=>reduced,performance:{now:()=>now},setInterval:fn=>{tick=fn;},MutationObserver:class{observe(){}},queueMicrotask:fn=>fn()});
 const step=ms=>{for(let i=0;i<ms;i+=35){now+=35;tick();}};
 assert.equal(text.textContent,'L');assert.equal(input.placeholder,'');assert.equal(prompt.hidden,false);
 step(1400);assert.equal(text.textContent,'List 100 cat breeds');step(4300);assert.equal(text.textContent,'List 100 cat breeds');step(1100);assert.notEqual(text.textContent,'List 100 cat breeds');step(4000);assert.equal(text.textContent,'Explain black holes simply');
 input.value='Never overwrite my draft';events.input();step(9000);assert.equal(input.value,'Never overwrite my draft');assert.equal(prompt.hidden,true);assert.equal(input.placeholder,'');
 input.value='';events.input();assert.equal(prompt.hidden,false);assert.ok(text.textContent.length>0);events.compositionstart();step(4000);assert.equal(prompt.hidden,true);events.compositionend();reduced.matches=true;tick();assert.ok(text.textContent.length>1);const staticQuestion=text.textContent;step(9000);assert.equal(text.textContent,staticQuestion);
 events.pointerdown();assert.equal(prompt.hidden,true);assert.equal(slot.dataset.prompt,'false');step(5000);assert.equal(prompt.hidden,true);assert.equal(input.value,'');events.blur();assert.equal(prompt.hidden,false);
});
