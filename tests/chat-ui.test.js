const test=require('node:test'),assert=require('node:assert/strict'),stream=require('../streaming-text'),image=require('../image-prompt');
test('streaming answers arrive progressively, respect reduced motion, and stop without losing received text',()=>{
 let frame,rendered=[];const writer=stream.create(text=>rendered.push(text),{schedule:fn=>{frame=fn;return 1;},cancel:()=>{frame=null;},reduced:()=>false});writer.update('A useful streaming answer');frame();assert.ok(rendered[0].length>0&&rendered[0].length<25);while(frame&&rendered.at(-1)!=='A useful streaming answer')frame();assert.equal(rendered.at(-1),'A useful streaming answer');writer.update('A useful streaming answer with more');assert.equal(writer.stop(),'A useful streaming answer with more');assert.equal(frame,null);
 const quiet=stream.create(text=>rendered.push(text),{schedule:()=>{throw Error('Reduced motion must not schedule frames');},cancel(){},reduced:()=>true});quiet.update('Instant');assert.equal(rendered.at(-1),'Instant');
});
test('partial reasoning tags remain hidden but literal code examples are retained',()=>{
 assert.equal(stream.visibleText('<think>private reasoning'),'');assert.equal(stream.visibleText('<think>private</think>Hello <thi'),'Hello ');assert.equal(stream.visibleText('`<think>example</think>`'),'`<think>example</think>`');
});
test('image descriptions retain requested media, numbers and exact text instead of adding boilerplate',()=>{
 assert.equal(image.clean('Create a photo of a blue cat on a red chair'),'photo of a blue cat on a red chair');assert.equal(image.clean('Нарисуй баннер с надписью «AetherAI 1337»'),'баннер с надписью «AetherAI 1337»');
 const original='Создай баннер с надписью «AetherAI 1337»';assert.equal(image.extract('{"prompt":"A black banner with exact neon lettering AetherAI 1337"}',original),'A black banner with exact neon lettering AetherAI 1337');assert.equal(image.extract('{"prompt":"A banner with lettering AetherAI 1234"}',original),image.clean(original));assert.equal(image.extract('Sorry, I cannot help',original),image.clean(original));
 assert.ok(!image.clean('Create an image of a banana').includes('High quality'));
});
