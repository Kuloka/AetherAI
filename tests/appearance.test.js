const test=require('node:test'),assert=require('node:assert/strict');
const {normalize,readable}=require('../appearance');
test('appearance preferences reject invalid modes and colors and choose readable foregrounds',()=>{
  assert.deepEqual(normalize({background:'javascript:bad',accent:'red',surface:'url(bad)'}),{background:'gateway',accent:'#ffffff',surface:null});
  assert.deepEqual(normalize({accent:'#B5F36D',surface:'#222222'}),{background:'gateway',accent:'#ffffff',surface:'#222222'});
  for(const background of ['none','gateway','pattern','pixel'])assert.equal(normalize({background}).background,background);
  assert.equal(normalize({accent:'#ABCDEF'}).accent,'#abcdef');
  assert.equal(readable('#ffffff'),'#171717');assert.equal(readable('#000000'),'#eeeeee');
});
