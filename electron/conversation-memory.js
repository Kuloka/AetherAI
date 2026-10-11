const crypto=require('node:crypto');
const prefixes={name:'Preferred name: ',preference:'Response preference: ',fact:'Remembered fact: ',like:'Liked response example ('};
const sensitive=text=>/(?:api[ _-]?key|password|парол|секретный ключ|bearer\s|sk-[a-z0-9]{12})/iu.test(text);
function extract(text){
 if(typeof text!=='string'||text.length>3000||sensitive(text)||/[`<>]/.test(text))return null;
 const value=text.trim();
 const name=value.match(/^(?:(?:пожалуйста[, ]+)?(?:называй(?:те)? меня|зови(?:те)? меня|меня зовут)|(?:please\s+)?call me|my name is)\s+([^\n.!?;,]{1,80})[.!]?$/iu);
 if(name&&name[1].trim().split(/\s+/).length<=5)return {key:'name',content:prefixes.name+name[1].trim()};
 const remember=value.match(/^(?:запомни(?:те)?|помни|remember(?: that)?)[\s,:—-]+([^\n]{1,500})$/iu);
 if(remember){const nested=extract(remember[1]);return nested||{key:'fact',content:prefixes.fact+remember[1].trim()};}
 const preference=value.match(/^(?:(?:пожалуйста[, ]+)?(?:отвечай(?:те)?|пиши(?:те)?)(?: мне)?\s+(?:кратко|коротко|подробно|на русском|на английском|простыми словами)|(?:please\s+)?(?:reply|respond|answer)\s+(?:briefly|concisely|in detail|in English|in Russian|in simple terms))[.!]?$/iu);
 return preference?{key:'preference',content:prefixes.preference+value.replace(/[.!]$/,'')}:null;
}
function createConversationMemory(store){
 function remember(owner,text){
  const candidate=extract(text);if(!candidate)return {updated:false};
  const entries=store.list(owner);if(entries.some(entry=>entry.content===candidate.content))return {updated:false};
  const previous=candidate.key==='fact'?null:entries.find(entry=>entry.content.startsWith(prefixes[candidate.key]));
  store.save(owner,{id:previous?.id,content:candidate.content,enabled:true,projectId:null});return {updated:true};
 }
 function feedback(owner,value){
  if(!value||typeof value.key!=='string'||value.key.length>200||!['up','down',null].includes(value.vote))throw Error('Invalid memory feedback');
  const prefix=prefixes.like+crypto.createHash('sha256').update(value.key).digest('hex').slice(0,16)+'): ';
  const existing=store.list(owner).find(entry=>entry.content.startsWith(prefix));
  if(value.vote!=='up'){if(existing)store.remove(owner,existing.id);return {updated:false};}
  if(typeof value.answer!=='string'||typeof value.question!=='string'||sensitive(value.answer+' '+value.question))return {updated:false};
  if(existing||!value.answer.trim())return {updated:false};
  store.save(owner,{content:prefix+JSON.stringify({question:value.question.slice(0,120),answer:value.answer.slice(0,500)}),projectId:null,enabled:true});
  const likes=store.list(owner).filter(entry=>entry.content.startsWith(prefixes.like)).sort((a,b)=>a.updatedAt.localeCompare(b.updatedAt));
  for(const entry of likes.slice(0,Math.max(0,likes.length-5)))store.remove(owner,entry.id);
  return {updated:true};
 }
 function localContext(owner,model){if(typeof model!=='string'||model.startsWith('cloud:'))throw Error('Personal memory is currently limited to local models');return store.context(owner);}
 return {remember,feedback,localContext};
}
module.exports={extract,createConversationMemory};
