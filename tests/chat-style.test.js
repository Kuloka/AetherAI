const test=require('node:test'),assert=require('node:assert/strict'),style=require('../chat-style');
test('Unknown saved styles fall back to the original appearance',()=>{for(const id of [null,undefined,'constructor','missing'])assert.equal(style.apply(id),'aetherai');});
test('Visual styles do not provide instructions for model responses',()=>{assert.equal(style.prompt,undefined);assert.deepEqual(Object.keys(style.presets),['aetherai','claude','chatgpt','deepseek']);});
test('Logo preferences do not replace the welcome text',()=>{assert.equal(style.greeting,undefined);});
test('Working is text-only for every visual preset',()=>{global.AetherAIBrand=require('../brand-motion');assert.equal(global.AetherAIBrand.thinkingMarkup(),'');for(const id of Object.keys(style.presets))assert.equal(style.thinkingMarkup(id),'');});
