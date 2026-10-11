const test=require('node:test'),assert=require('node:assert/strict'),{describe}=require('../model-quota');
test('quota ring uses the smallest known remaining ratio without inventing unreported limits',()=>{
 assert.deepEqual(describe({limits:{unknown:{remaining:50}}}),{known:false,percentage:null});
 assert.equal(describe({limits:{requests:{total:100,remaining:70},tokens:{total:1000,remaining:250}}}).percentage,25);
 assert.equal(describe({limits:{requests:{total:50,remaining:0}}}).percentage,0);
 assert.equal(describe({limits:{requests:{total:50,remaining:70}}}).percentage,100);
 assert.equal(describe({limits:{requests:{total:50,remaining:25,label:'Daily free requests'}}},{provider:'openrouter',free:false}).known,false);
});
test('Groq ring follows daily requests, never the replenishing minute token budget',()=>{
 const model={provider:'groq'},limits={requests:{total:1000,remaining:999,label:'Daily requests'},tokens:{total:8000,remaining:40}};
 assert.equal(describe({limits},model).percentage,99.9);
 limits.tokens.remaining=8000;assert.equal(describe({limits},model).percentage,99.9);
 limits.requests.remaining=998;assert.equal(describe({limits},model).percentage,99.8);
 limits.requests.remaining=0;assert.equal(describe({limits},model).percentage,0);
 limits.requests.remaining=1000;assert.equal(describe({limits},model).percentage,100);
 assert.equal(describe({limits:{tokens:limits.tokens}},model).known,false);
 assert.equal(describe({limits:{requests:{total:2000,remaining:1800}}},model).percentage,90);
});
