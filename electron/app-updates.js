const RELEASES='https://github.com/Kuloka/AetherAI/releases/latest';
const API='https://api.github.com/repos/Kuloka/AetherAI/releases/latest';
function newer(version,current){
  const parse=v=>/^v?(\d+)\.(\d+)\.(\d+)$/.exec(String(v));
  const a=parse(version),b=parse(current);if(!a||!b)return false;
  for(let i=1;i<4;i++){if(+a[i]!==+b[i])return +a[i]>+b[i];}return false;
}
function createUpdateService({version,packaged,platform,portable,updater,emit=()=>{},openExternal,fetchImpl=fetch,prepareInstall=async()=>{}}){
  const supported=packaged&&platform==='win32'&&!portable&&!!updater;
  let state={status:packaged?'idle':'development',currentVersion:version,supported,version:null,percent:0};
  let operation=null;
  const set=value=>{state={...state,...value};emit({...state});return {...state};};
  if(supported){
    updater.autoDownload=false;updater.autoInstallOnAppQuit=false;updater.allowPrerelease=false;updater.allowDowngrade=false;
    updater.on('checking-for-update',()=>set({status:'checking',error:null}));
    updater.on('update-available',info=>set({status:'available',version:info.version,percent:0}));
    updater.on('update-not-available',()=>set({status:'current',version:null}));
    updater.on('download-progress',info=>set({status:'downloading',percent:Math.max(0,Math.min(100,Math.round(info.percent||0)))}));
    updater.on('update-downloaded',info=>set({status:'ready',version:info.version,percent:100}));
    updater.on('error',()=>set({status:'error',error:'update-failed'}));
  }
  async function run(fn){if(operation)return operation;operation=Promise.resolve().then(fn).catch(()=>set({status:'error',error:'update-failed'})).finally(()=>{operation=null;});return operation;}
  return {
    status:()=>({...state}),
    check:()=>{
      if(!packaged||['ready','downloading'].includes(state.status))return Promise.resolve({...state});
      return run(async()=>{
        set({status:'checking',error:null});
        if(supported){await updater.checkForUpdates();return {...state};}
        const response=await fetchImpl(API,{headers:{Accept:'application/vnd.github+json','User-Agent':'AetherAI'},signal:AbortSignal.timeout(15000)});
        if(!response.ok)throw Error('Release lookup failed');const release=await response.json();
        if(release.draft||release.prerelease)throw Error('Not a stable release');
        return set({status:newer(release.tag_name,version)?'available':'current',version:newer(release.tag_name,version)?release.tag_name.replace(/^v/,''):null});
      });
    },
    download:()=>{
      if(!supported)return openExternal(RELEASES);
      if(state.status!=='available')return Promise.resolve({...state});
      return run(async()=>{set({status:'downloading',percent:0});await updater.downloadUpdate();return {...state};});
    },
    install:async()=>{
      if(!supported||state.status!=='ready')throw Error('Update is not ready');
      await prepareInstall();updater.quitAndInstall(false,true);return {ok:true};
    },
    openRelease:()=>openExternal(RELEASES)
  };
}
module.exports={createUpdateService,newer,RELEASES};
