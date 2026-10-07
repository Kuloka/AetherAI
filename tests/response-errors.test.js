const test=require('node:test'),assert=require('node:assert/strict');
const {describe,format}=require('../response-errors');
test('AI errors are normalized for local, cloud, nested HTTP and mid-stream cases',()=>{
  const cases=[
    [{code:502,message:'Upstream error from Nvidia: ResourceExhausted: Worker local total request limit reached (16/16)',metadata:{error_type:'provider_unavailable'}},'overloaded'],
    ['HTTP 429: {"error":{"message":"Provider returned error","code":429,"metadata":{"raw":"temporarily rate-limited upstream"}}}','overloaded'],
    ['HTTP 429: {"error":{"message":"Rate limit exceeded"}}','rate'],
    ['HTTP 402: insufficient credits','billing'],
    [{error:{code:402,message:'Request rejected',metadata:{limit_source:'openrouter_in_flight_budget',reason:'in_flight_budget_exhausted'}}},'overloaded'],
    [{error:{code:402,message:'Request rejected',metadata:{limit_source:'openrouter_key_limit'}}},'billing'],
    ['HTTP 401: unauthorized','auth'],
    ['context_length_exceeded','context'],
    ['HTTP 403','access'],['HTTP 404','missing'],['HTTP 504','timeout'],
    [new TypeError('Failed to fetch'),'network'],['HTTP 422','request'],['HTTP 500','server'],['unexpected internal error','error']
  ];
  for(const [input,kind] of cases){assert.equal(describe(input).kind,kind);const text=format(input,'ru');assert.ok(text.length>15);assert.doesNotMatch(text,/ResourceExhausted|metadata|\{"|16\/16/);}
  const normalized=describe(cases[0][0]);assert.equal(format(new Error('HTTP 502: '+JSON.stringify({error:normalized})),'ru'),normalized.messages.ru);
});
