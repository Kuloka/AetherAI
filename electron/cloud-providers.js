const {secureStorageAvailable}=require('./security');
const fs = require('fs');
const path = require('path');
const {describe}=require('../response-errors');
const {cloudVision}=require('../model-capabilities');
const PROVIDERS = {
  openrouter: { base: 'https://openrouter.ai/api/v1', keys: 'https://openrouter.ai/settings/keys' },
  groq: { base: 'https://api.groq.com/openai/v1', keys: 'https://console.groq.com/keys' },
  gemini: { base:'https://generativelanguage.googleapis.com/v1beta/openai', keys:'https://aistudio.google.com/apikey' },
  cerebras: { base:'https://api.cerebras.ai/v1', keys:'https://cloud.cerebras.ai/platform/api-keys' },
  sambanova: { base:'https://api.sambanova.ai/v1', keys:'https://cloud.sambanova.ai/apis' }
};

function createProviders(directory, safeStorage, request = fetch) {
  const cache = new Map();
  const quota = new Map();
  const quotaFile = path.join(directory, 'provider-usage.json');
  try {
    const saved = JSON.parse(fs.readFileSync(quotaFile, 'utf8'));
    for (const [id, value] of Object.entries(saved)) if ((Object.hasOwn(PROVIDERS,id) || /^cloud:(groq|gemini|cerebras|sambanova)\//.test(id)) && value && Number.isFinite(value.updatedAt)) quota.set(id,value);
  } catch {}
  function persistUsage() { fs.mkdirSync(directory,{recursive:true});fs.writeFileSync(quotaFile,JSON.stringify(Object.fromEntries(quota))); }
  function usage() { return Object.fromEntries(quota); }
  function recordKeyUsage(data) {
    const limits = {};
    if (data?.free_model_daily_requests) {
      const { limit, remaining } = data.free_model_daily_requests;
      if (Number.isFinite(limit) && Number.isFinite(remaining)) limits.daily = { total: limit, remaining, label: 'Daily free requests' };
    }
    if (data?.limit_reset === 'weekly' && Number.isFinite(data.limit) && Number.isFinite(data.limit_remaining)) limits.weekly = { total: data.limit, remaining: data.limit_remaining, label: 'Weekly credit limit' };
    quota.set('openrouter', { ...quota.get('openrouter'), limits, updatedAt: Date.now() });
    persistUsage();
  }
  async function refreshUsage(id) {
    if (id !== 'openrouter' || !key(id)) return usage();
    const response = await request(config(id).base + '/key', { headers: { Authorization: 'Bearer ' + key(id) }, signal: AbortSignal.timeout(10000), redirect: 'error' });
    if (!response.ok) return usage();
    const { data } = await response.json();
    recordKeyUsage(data);
    return usage();
  }
  function config(id) { if (!Object.hasOwn(PROVIDERS, id)) throw new Error('Unknown provider'); return PROVIDERS[id]; }
  function file(id) { config(id); return path.join(directory, id + '.key'); }
  function key(id) { return fs.existsSync(file(id)) ? safeStorage.decryptString(fs.readFileSync(file(id))) : ''; }
  function status() { return Object.keys(PROVIDERS).map(id => ({ id, configured: fs.existsSync(file(id)) })); }
  async function list(id, token) {
    const response = await request(config(id).base + (id==='openrouter'?'/models/user':'/models'), { headers: { Authorization: 'Bearer ' + token }, signal: AbortSignal.timeout(15000), redirect: 'error' });
    if (!response.ok) throw new Error(id + ' models: HTTP ' + response.status);
    const data = await response.json();
    if (!Array.isArray(data.data)) throw new Error('Invalid provider model list');
    return data.data.filter(model => typeof model.id === 'string' && /^[a-zA-Z0-9_.:/-]{1,200}$/.test(model.id))
      .filter(model => id !== 'sambanova' || !/embed|rerank|whisper|tts|speech|audio/i.test(model.id))
      .filter(model => id === 'openrouter' ? model.architecture?.output_modalities?.includes('text') !== false : id==='gemini' ? /gemini/i.test(model.id)&&!/embedding|tts|image|live|audio|robotic/i.test(model.id) : !/whisper|tts|guard/i.test(model.id))
      .map(model => ({ name: 'cloud:' + id + '/' + model.id, cloudName: model.name || model.id, contextLength: model.context_length || model.context_window || null, provider: id, backend: 'cloud', size: 0, details: {}, pricing:model.pricing||null, free: id==='openrouter' && Number(model.pricing?.prompt)===0 && Number(model.pricing?.completion)===0 && Object.values(model.pricing||{}).every(price=>Number(price)===0), capabilities: cloudVision(id,model) ? ['completion', 'vision'] : ['completion'] }));
  }
  async function save(id, value) {
    config(id);
    if (typeof value !== 'string' || value.trim().length < 8 || value.length > 4096 || /[\r\n]/.test(value)) throw new Error('Enter a valid API key');
    if (!secureStorageAvailable(safeStorage)) throw new Error('Secure credential storage is unavailable');
    const token = value.trim();
    let keyData;
    if (id === 'openrouter') {
      const response = await request(config(id).base + '/key', { headers: { Authorization: 'Bearer ' + token }, signal: AbortSignal.timeout(15000), redirect: 'error' });
      if (!response.ok) throw new Error('OpenRouter API key: HTTP ' + response.status);
      const { data } = await response.json();
      if (!data || typeof data !== 'object') throw new Error('Invalid OpenRouter key response');
      keyData = data;
    }
    const models = await list(id, token);
    if (token !== key(id)) for (const name of quota.keys()) if (name === id || name.startsWith('cloud:' + id + '/')) quota.delete(name);
    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(file(id), safeStorage.encryptString(token),{mode:0o600});
    if (keyData) recordKeyUsage(keyData); else persistUsage();
    cache.set(id, { time: Date.now(), models });
    return status();
  }
  function disconnect(id) {
    if (fs.existsSync(file(id))) fs.unlinkSync(file(id)); cache.delete(id);
    for (const name of quota.keys()) if (name === id || name.startsWith('cloud:' + id + '/')) quota.delete(name);
    persistUsage();
    return status();
  }
  async function models(force = false) {
    const results = await Promise.allSettled(status().filter(item => item.configured).map(async ({ id }) => {
      if (!force && cache.has(id) && Date.now() - cache.get(id).time < 300000) return cache.get(id).models;
      const found = await list(id, key(id)); cache.set(id, { time: Date.now(), models: found }); return found;
    }));
    const successful = results.filter(result => result.status === 'fulfilled');
    if (results.length && !successful.length) throw results[0].reason;
    return successful.flatMap(result => result.value);
  }
  async function chat(body, signal, emit) {
    const match = /^cloud:(openrouter|groq|gemini|cerebras|sambanova)\/(.+)$/.exec(body?.model || '');
    if (!match || !Array.isArray(body.messages)) throw new Error('Invalid provider request');
    const [, id, model] = match, token = key(id);
    if (!token) throw new Error('Connect ' + id + ' in Settings → Providers');
    const selected=(await models()).find(item=>item.name===body.model);if(!selected)throw new Error('This model is no longer available');if(body.messages.some(message=>message.images?.length)&&!selected.capabilities.includes('vision'))throw new Error('This model does not support images. Choose a model marked Vision.');
    const payload = { model, stream: body.stream !== false, messages: body.messages.map(message => ({ role: message.role, content: message.images?.length ? [{ type: 'text', text: message.content || '' }, ...message.images.map(image => ({ type: 'image_url', image_url: { url: image.startsWith('data:') ? image : 'data:image/png;base64,' + image } }))] : message.content })), max_tokens: body.options?.num_predict || 1000 };
    if(id==='gemini')payload.model=model.replace(/^models\//,'');
    if (body.options?.temperature !== undefined) payload.temperature = body.options.temperature;
    if (body.format) {
      payload.response_format = id === 'openrouter' && typeof body.format === 'object' ? { type: 'json_schema', json_schema: { name: 'response', strict: true, schema: body.format } } : { type: 'json_object' };
      payload.messages = [{ role: 'system', content: 'Return a JSON object matching this schema: ' + JSON.stringify(body.format) }, ...payload.messages];
    }
    const response = await request(config(id).base + '/chat/completions', { method: 'POST', headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal, redirect: 'error' });
    const limits = {};
    for (const [type, label] of [['requests', id === 'groq' ? 'Daily requests' : 'Requests per minute'], ['requests-day', 'Daily requests'], ['tokens', 'Tokens per minute'], ['tokens-day', 'Daily tokens']]) {
      const total = response.headers.get('x-ratelimit-limit-' + type);
      const remaining = response.headers.get('x-ratelimit-remaining-' + type);
      if (total !== null && remaining !== null && Number.isFinite(Number(total)) && Number.isFinite(Number(remaining))) limits[type] = { total: Number(total), remaining: Number(remaining), label, reset: response.headers.get('x-ratelimit-reset-' + type) };
    }
    const retryHeader = response.headers.get('retry-after');
    const retrySeconds = retryHeader === null ? NaN : Number(retryHeader);
    const retryAt = Number.isFinite(retrySeconds) ? Date.now() + Math.max(0, retrySeconds) * 1000 : Date.parse(retryHeader);
    // Groq response limits belong to the requested model; OpenRouter /key
    // counters belong to the API key and are shared by all its free models.
    const quotaKey = id !== 'openrouter' ? body.model : id;
    quota.set(quotaKey, { ...quota.get(quotaKey), ...(Object.keys(limits).length ? { limits } : {}), updatedAt: Date.now(), exhausted: response.status === 429 || response.status === 402, retryAt: Number.isFinite(retryAt) ? retryAt : null });
    emit({ type: 'usage', provider: id, model: id !== 'openrouter' ? body.model : undefined, usage: quota.get(quotaKey) });
    persistUsage();
    if (!response.ok) {
      const raw = await response.text();
      const error=describe(raw.replaceAll(token,'[redacted]'),response.status);
      if (error.kind === 'overloaded') {
        quota.set(quotaKey, { ...quota.get(quotaKey), exhausted: false });
        persistUsage();
        emit({ type: 'usage', provider: id, model: id !== 'openrouter' ? body.model : undefined, usage: quota.get(quotaKey) });
      }
      emit({ type: 'headers', ...error, status:response.status, provider:id, model:body.model });
      emit({ type: 'chunk', text: JSON.stringify({ error }) }); emit({ type: 'done' }); return;
    }
    emit({ type: 'headers', status: 200 });
    if (!payload.stream) {
      const data = await response.json();
      emit({ type: 'chunk', text: JSON.stringify({ message: data.choices?.[0]?.message || { content: '' } }) });
      emit({ type: 'done' }); return;
    }
    const reader = response.body.getReader(), decoder = new TextDecoder(); let buffer = '', bytes = 0;
    function line(value) {
      if (!value.startsWith('data:')) return;
      const text = value.slice(5).trim(); if (!text || text === '[DONE]') return;
      const data = JSON.parse(text);
      if (data.error) {
        const error=describe(data.error);
        emit({type:'problem',...error,provider:id,model:body.model});
        throw new Error(JSON.stringify(error));
      }
      const delta = data.choices?.[0]?.delta || {};
      emit({ type: 'chunk', text: JSON.stringify({ message: { content: delta.content || '', thinking: delta.reasoning || delta.reasoning_content || '' } }) + '\n' });
    }
    try {
      while (true) {
        const { done, value } = await reader.read(); if (done) break;
        bytes += value.length; if (bytes > 20000000) throw new Error('Provider response is too large');
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n'); buffer = lines.pop(); lines.forEach(value => line(value.trim()));
      }
      buffer += decoder.decode(); line(buffer.trim()); emit({ type: 'done' });
    } finally { await reader.cancel().catch(() => {}); }
  }
  return { status, save, disconnect, models, chat, usage, refreshUsage, keys: id => config(id).keys };
}
module.exports = { createProviders };
