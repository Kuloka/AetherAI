const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { createProviders } = require('../electron/cloud-providers');
const storage = { isEncryptionAvailable: () => true, encryptString: value => Buffer.from(value.split('').reverse().join('')), decryptString: value => value.toString().split('').reverse().join('') };

test('provider keys are encrypted, paid models retain prices, split UTF-8 SSE survives, and disconnect clears catalog', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-providers-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const cloud = createProviders(dir, storage, async (url, init) => {
    assert.equal(init.headers.Authorization, 'Bearer fixture-key');
    if (url.endsWith('/key')) return Response.json({ data: {} });
    if (url.endsWith('/models/user')) return Response.json({ data: [
      { id: 'test/free', pricing: { prompt: '0', completion: '0' } },
      { id: 'test/paid', pricing: { prompt: '0.01', completion: '0' } }
    ] });
    const body = JSON.parse(init.body);
    assert.equal(body.model, 'test/free');
    if (!body.stream) return Response.json({ choices: [{ message: { content: 'Hello' } }] });
    const bytes = new TextEncoder().encode('data: {"choices":[{"delta":{"content":"Привет ","reasoning":"Check"}}]}\n\ndata: {"choices":[{"delta":{"content":"мир"}}]}\n\ndata: [DONE]\n');
    return new Response(new ReadableStream({ start(controller) { for (let i = 0; i < bytes.length; i += 3) controller.enqueue(bytes.slice(i, i + 3)); controller.close(); } }));
  });
  await cloud.save('openrouter', 'fixture-key');
  assert.ok(!(await fs.readFile(path.join(dir, 'openrouter.key'), 'utf8')).includes('fixture-key'));
  assert.equal(JSON.stringify(cloud.status()).includes('fixture-key'), false);
  assert.deepEqual((await cloud.models()).map(model => model.name), ['cloud:openrouter/test/free','cloud:openrouter/test/paid']);
  assert.equal((await cloud.models())[1].free,false);
  assert.equal((await cloud.models())[1].pricing.prompt,'0.01');
  const events = [];
  await cloud.chat({ model: 'cloud:openrouter/test/free', messages: [], stream: true }, undefined, event => events.push(event));
  assert.equal(events.find(event => event.type === 'headers').status, 200);
  const chunks = events.filter(event => event.type === 'chunk').map(event => JSON.parse(event.text).message);
  assert.equal(chunks.map(message => message.content).join(''), 'Привет мир');
  assert.equal(chunks[0].thinking, 'Check');
  await assert.rejects(cloud.chat({ model: 'cloud:openrouter/test/missing', messages: [] }, undefined, () => {}), /no longer available/);
  const json = [];
  await cloud.chat({ model: 'cloud:openrouter/test/free', messages: [], stream: false }, undefined, event => json.push(event));
  assert.equal(JSON.parse(json.find(event => event.type === 'chunk').text).message.content, 'Hello');
  cloud.disconnect('openrouter'); assert.deepEqual(await cloud.models(), []);
});

test('Groq forwards JSON requests, filters audio models and reports rate limits without exposing a key', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-groq-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const cloud = createProviders(dir, storage, async (url, init) => {
    if (url.endsWith('/models')) return Response.json({ data: [{ id: 'test-chat' }, { id: 'whisper-v3' }] });
    assert.equal(url, 'https://api.groq.com/openai/v1/chat/completions');
    assert.equal(JSON.parse(init.body).response_format.type, 'json_object');
    return new Response('fixture-key quota exceeded', { status: 429 });
  });
  await cloud.save('groq', 'fixture-key');
  assert.equal((await cloud.models()).length, 1);
  const events = [];
  await cloud.chat({ model: 'cloud:groq/test-chat', messages: [], format: 'json' }, undefined, event => events.push(event));
  assert.equal(events.find(event => event.type === 'headers').kind, 'rate'); assert.ok(!JSON.stringify(events).includes('fixture-key'));
  assert.equal(events.find(event=>event.type==='headers').provider,'groq');
});

test('provider quota counters come from API data and headers, retain genuine zero and clear rate-limit banners on success', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-quota-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  let exhausted = true;
  const cloud = createProviders(dir, storage, async url => {
    if (url.endsWith('/key')) return Response.json({ data: { label: 'never-expose-this', free_model_daily_requests: { limit: 50, remaining: 12 }, limit_reset: 'weekly', limit: 20, limit_remaining: 5 } });
    if (url.endsWith('/models')||url.endsWith('/models/user')) return Response.json({ data: url.includes('groq') ? [{ id: 'test-chat' }] : [{ id: 'free', pricing: { prompt: '0', completion: '0' } }] });
    return new Response(exhausted ? 'quota exceeded' : '{"choices":[{"message":{"content":"Hi"}}]}', { status: exhausted ? 429 : 200, headers: { 'retry-after': '60', 'x-ratelimit-limit-requests': '100', 'x-ratelimit-remaining-requests': exhausted ? '0' : '99', 'x-ratelimit-reset-requests': '1h' } });
  });
  await cloud.save('openrouter', 'fixture-key');
  const usage = await cloud.refreshUsage('openrouter');
  assert.equal(usage.openrouter.limits.daily.remaining, 12);
  assert.equal(usage.openrouter.limits.weekly.remaining, 5);
  assert.equal(usage.openrouter.limits.fiveHour, undefined);
  assert.equal(JSON.stringify(usage).includes('never-expose-this'), false);
  await cloud.save('groq', 'fixture-key');
  await cloud.chat({ model: 'cloud:groq/test-chat', messages: [], stream: false }, undefined, () => {});
  assert.equal(cloud.usage()['cloud:groq/test-chat'].exhausted, true);
  assert.equal(cloud.usage()['cloud:groq/test-chat'].limits.requests.remaining, 0);
  assert.ok(cloud.usage()['cloud:groq/test-chat'].retryAt > Date.now());
  exhausted = false;
  await cloud.chat({ model: 'cloud:groq/test-chat', messages: [], stream: false }, undefined, () => {});
  assert.equal(cloud.usage()['cloud:groq/test-chat'].exhausted, false);
  assert.equal(cloud.usage()['cloud:groq/test-chat'].limits.requests.remaining, 99);
});

test('temporary OpenRouter spending holds do not claim the account quota is exhausted and honor HTTP-date retry', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-inflight-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const retry = new Date(Date.now() + 60000).toUTCString();
  const cloud = createProviders(dir, storage, async url => {
    if (url.endsWith('/key')) return Response.json({ data: {} });
    if (url.endsWith('/models/user')) return Response.json({ data: [{ id: 'test/paid', pricing: { prompt: '1', completion: '1' } }] });
    return Response.json({ error: { code: 402, message: 'Request rejected', metadata: { limit_source: 'openrouter_in_flight_budget' } } }, { status: 402, headers: { 'retry-after': retry } });
  });
  await cloud.save('openrouter', 'fixture-key');
  const events = [];
  await cloud.chat({ model: 'cloud:openrouter/test/paid', messages: [] }, undefined, event => events.push(event));
  assert.equal(events.find(event => event.type === 'headers').kind, 'overloaded');
  assert.equal(cloud.usage().openrouter.exhausted, false);
  assert.equal(cloud.usage().openrouter.retryAt, Date.parse(retry));
  assert.equal(events.filter(event => event.type === 'usage').at(-1).usage.exhausted, false);
});

test('OpenRouter rejects an invalid key before writing credentials', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-invalid-key-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const cloud = createProviders(dir, storage, async () => new Response('unauthorized', { status: 401 }));
  await assert.rejects(cloud.save('openrouter', 'fixture-key'), /HTTP 401/);
  assert.equal(cloud.status().find(item => item.id === 'openrouter').configured, false);
});

test('Groq keeps separate model quotas and clears both after disconnect', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'multimind-model-quota-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const cloud = createProviders(dir, storage, async (url, init) => {
    if (url.endsWith('/models')) return Response.json({ data: [{ id: 'model-a' }, { id: 'model-b' }] });
    const model = JSON.parse(init.body).model;
    return Response.json({ choices: [{ message: { content: 'ok' } }] }, { headers: { 'x-ratelimit-limit-requests': model === 'model-a' ? '100' : '200', 'x-ratelimit-remaining-requests': model === 'model-a' ? '10' : '190' } });
  });
  await cloud.save('groq', 'fixture-key');
  for (const model of ['model-a', 'model-b']) await cloud.chat({ model: 'cloud:groq/' + model, messages: [], stream: false }, undefined, () => {});
  assert.equal(cloud.usage()['cloud:groq/model-a'].limits.requests.remaining, 10);
  assert.equal(cloud.usage()['cloud:groq/model-b'].limits.requests.remaining, 190);
  const restarted = createProviders(dir, storage, async()=>{throw Error('No network expected');});
  assert.equal(restarted.usage()['cloud:groq/model-a'].limits.requests.remaining, 10);
  assert.equal(restarted.usage()['cloud:groq/model-b'].limits.requests.remaining, 190);
  assert.equal(cloud.usage().groq, undefined);
  cloud.disconnect('groq'); assert.deepEqual(cloud.usage(), {});
});

test('OpenRouter mid-stream Nvidia exhaustion emits a readable overloaded event',async t=>{
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'multimind-stream-error-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
  const cloud=createProviders(dir,storage,async url=>{
    if(url.endsWith('/key'))return Response.json({data:{}});
    if(url.endsWith('/models/user'))return Response.json({data:[{id:'test/free',pricing:{prompt:'0',completion:'0'}}]});
    return new Response('data: '+JSON.stringify({error:{code:502,message:'Upstream error from Nvidia: ResourceExhausted: Worker local total request limit reached (16/16)',metadata:{error_type:'provider_unavailable'}}})+'\n\n');
  });
  await cloud.save('openrouter','fixture-key');const events=[];
  await assert.rejects(cloud.chat({model:'cloud:openrouter/test/free',messages:[],stream:true},undefined,event=>events.push(event)),/overloaded/);
  const problem=events.find(event=>event.type==='problem');assert.equal(problem.kind,'overloaded');assert.equal(problem.provider,'openrouter');assert.match(problem.messages.ru,/перегружен/);assert.doesNotMatch(problem.message,/16\/16|ResourceExhausted/);
});

for(const [id,base] of [['gemini','https://generativelanguage.googleapis.com/v1beta/openai'],['cerebras','https://api.cerebras.ai/v1']])test(id+' validates its key, lists models and generates through the correct endpoint',async t=>{
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'multimind-'+id+'-'));t.after(()=>fs.rm(dir,{recursive:true,force:true}));
  const model=id==='gemini'?'models/gemini-test':'test-model';let chats=0;
  const cloud=createProviders(dir,storage,async(url,init)=>{
    assert.equal(init.headers.Authorization,'Bearer fixture-key');
    if(url===base+'/models')return Response.json({data:[{id:model}]});
    assert.equal(url,base+'/chat/completions');assert.equal(JSON.parse(init.body).model,id==='gemini'?'gemini-test':model);chats++;
    return Response.json({choices:[{message:{content:'Привет!'}}]});
  });
  await cloud.save(id,'fixture-key');assert.equal((await cloud.models())[0].provider,id);
  const events=[];await cloud.chat({model:'cloud:'+id+'/'+model,messages:[{role:'user',content:'привет'}],stream:false},undefined,event=>events.push(event));
  assert.equal(chats,1);assert.equal(JSON.parse(events.find(event=>event.type==='chunk').text).message.content,'Привет!');
});
