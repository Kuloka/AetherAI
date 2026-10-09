const test=require('node:test'),assert=require('node:assert/strict'),{describe}=require('../model-quota');
test('quota ring uses the smallest known remaining ratio without inventing unreported limits',()=>{
 assert.deepEqual(describe({limits:{unknown:{remaining:50}}}),{known:false,percentage:null});
 assert.equal(describe({limits:{requests:{total:100,remaining:70},tokens:{total:1000,remaining:250}}}).percentage,25);
 assert.equal(describe({limits:{requests:{total:50,remaining:0}}}).percentage,0);
 assert.equal(describe({limits:{requests:{total:50,remaining:70}}}).percentage,100);
 assert.equal(describe({limits:{requests:{total:50,remaining:25,label:'Daily free requests'}}},{provider:'openrouter',free:false}).known,false);
});
