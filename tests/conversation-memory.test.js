const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs/promises'),os=require('node:os'),path=require('node:path');
const {extract,createConversationMemory}=require('../electron/conversation-memory'),{createMemoryStore}=require('../electron/user-memory');
async function fixture(t){const directory=await fs.mkdtemp(path.join(os.tmpdir(),'aetherai-personal-memory-'));t.after(()=>fs.rm(directory,{recursive:true,force:true}));const store=createMemoryStore(directory);return {directory,store,memory:createConversationMemory(store)};}
test('Only direct name, response preferences and explicit remember requests are captured',()=>{
 assert.equal(extract('называй меня King').content,'Preferred name: King');assert.equal(extract('Запомни: меня зовут Alex').content,'Preferred name: Alex');
 assert.ok(extract('отвечай кратко'));assert.ok(extract('remember that I am learning Python'));
 for(const text of ['кто я','он сказал: называй меня King','"call me King"','запомни мой пароль: secret','remember API key sk-123456789abcdef','```call me King```'])assert.equal(extract(text),null);
});
test('Name updates replace old names, duplicates do not claim updates, and memory persists across chats/owners',async t=>{
 const {directory,store,memory}=await fixture(t);assert.equal(memory.remember('local','называй меня King').updated,true);
 assert.equal(memory.remember('local','называй меня King').updated,false);memory.remember('local','call me Alex');assert.equal(store.list('local').length,1);
 assert.match(createConversationMemory(createMemoryStore(directory)).localContext('local','local-test'),/Alex/);
 const owner='12345678-1234-1234-1234-123456789abc';assert.equal(memory.localContext(owner,'local-test'),'');
 const entry=store.list('local')[0];store.save('local',{...entry,enabled:false});assert.equal(memory.localContext('local','local-test'),'');store.remove('local',entry.id);assert.equal(store.list('local').length,0);
});
test('Liked examples are bounded, repeated likes deduplicate, unlike removes examples and local memory rejects cloud destinations',async t=>{
 const {store,memory}=await fixture(t),value={key:'chat:1',vote:'up',question:'Explain addition',answer:'A short example: 2+2=4.'};
 assert.equal(memory.feedback('local',value).updated,true);assert.equal(memory.feedback('local',value).updated,false);
 assert.match(memory.localContext('local','local-test'),/2\+2=4/);memory.feedback('local',{...value,vote:null});assert.equal(store.list('local').length,0);
 for(let i=0;i<8;i++)memory.feedback('local',{...value,key:'chat:'+i});assert.equal(store.list('local').length,5);
 assert.throws(()=>memory.localContext('local','cloud:groq/test'),/local models/);
 assert.equal(memory.feedback('local',{...value,key:'secret',answer:'API key: private'}).updated,false);
 assert.throws(()=>memory.feedback('local',{...value,vote:'bogus'}),/Invalid/);
});
