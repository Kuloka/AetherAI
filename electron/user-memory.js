const fs=require('fs'),path=require('path'),crypto=require('crypto');
function createMemoryStore(directory){
  function file(owner='local'){if(owner!=='local'&&!/^[0-9a-f-]{36}$/i.test(owner))throw Error('Invalid memory owner');return path.join(directory,'memory-'+owner+'.json');}
  function read(owner){try{const value=JSON.parse(fs.readFileSync(file(owner),'utf8'));if(!Array.isArray(value))throw Error('Invalid memory file');return value;}catch(e){if(e.code==='ENOENT')return [];throw e;}}
  function write(owner,entries){if(entries.length>500)throw Error('Memory storage limit reached');fs.mkdirSync(directory,{recursive:true});const target=file(owner),temp=target+'.tmp';fs.writeFileSync(temp,JSON.stringify(entries,null,2));fs.renameSync(temp,target);return entries.filter(e=>!e.deletedAt);}
  function list(owner){return read(owner).filter(e=>!e.deletedAt);}
  function validate(value,allowDeleted=false){if(typeof value.content!=='string'||(!value.content.trim()&&!(allowDeleted&&value.deletedAt&&value.content===''))||value.content.length>1500)throw Error('Memory must contain 1–1,500 characters');if(value.projectId!==null&&value.projectId!==undefined&&(typeof value.projectId!=='string'||value.projectId.length>100))throw Error('Invalid memory project');}
  function save(owner,value){validate(value);const entries=read(owner);const previous=value.id?entries.find(e=>e.id===value.id&&!e.deletedAt):null;if(value.id&&!previous)throw Error('Memory not found');const entry={id:previous?.id||crypto.randomUUID(),content:value.content.trim(),projectId:value.projectId||null,enabled:value.enabled!==false,updatedAt:new Date().toISOString(),deletedAt:null};if(previous)entries.splice(entries.indexOf(previous),1,entry);else entries.push(entry);return write(owner,entries);}
  function remove(owner,id){const entries=read(owner),entry=entries.find(e=>e.id===id&&!e.deletedAt);if(!entry)throw Error('Memory not found');entry.deletedAt=entry.updatedAt=new Date().toISOString();entry.content='';entry.enabled=false;return write(owner,entries);}
  function context(owner,projectId){return list(owner).filter(e=>e.enabled&&(!e.projectId||e.projectId===projectId)).map(e=>e.content).join('\n').slice(0,8000);}
  async function sync(owner,auth){if(owner==='local')throw Error('Sign in to sync account memory');
    const remote=await auth.dataCall('multimind_memories?select=*&user_id=eq.'+encodeURIComponent(owner),'GET',undefined,{},owner);
    if(!Array.isArray(remote))throw Error('Invalid memory sync response');const merged=new Map(read(owner).map(e=>[e.id,e]));
    for(const row of remote){if(row.user_id!==owner||!/^[0-9a-f-]{36}$/i.test(row.id))throw Error('Invalid remote memory');const entry={id:row.id,content:row.deleted_at?'':row.content,projectId:row.project_id,enabled:row.deleted_at?false:row.enabled===true,updatedAt:row.updated_at,deletedAt:row.deleted_at};validate(entry,true);if(!Number.isFinite(Date.parse(entry.updatedAt)))throw Error('Invalid remote timestamp');const local=merged.get(entry.id);if(!local||Date.parse(local.updatedAt)<Date.parse(entry.updatedAt))merged.set(entry.id,entry);}
    const entries=[...merged.values()];if(entries.length>500)throw Error('Memory storage limit reached');
    if(entries.length)await auth.dataCall('multimind_memories?on_conflict=user_id,id','POST',entries.map(e=>({user_id:owner,id:e.id,content:e.content,project_id:e.projectId,enabled:e.enabled,updated_at:e.updatedAt,deleted_at:e.deletedAt})),{Prefer:'resolution=merge-duplicates,return=minimal'},owner);
    return write(owner,entries);
  }
  return {list,save,remove,context,sync};
}
module.exports={createMemoryStore};
