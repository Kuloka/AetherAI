const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('api',{
 dataGet:async()=>({groups:[],chats:[]}),dataSave:async()=>({}),settingsGet:async()=>({appLanguage:'ru',theme:'dark',localAi:true,selectedModel:'llama3.2:1b',localSetupDismissed:true,discordActivity:{enabled:false}}),settingsSave:async()=>({}),
 accountStatus:async()=>({configured:false,user:null}),memoryList:async()=>[],memoryContext:async()=>'',skillsList:async()=>[],skillsPresets:async()=>[],pluginsList:async()=>[],
 ollamaStatus:async()=>({running:true,models:[{name:'llama3.2:1b',size:1000000000}]}),localStatus:async()=>({supported:true,installed:false,models:[]}),
 providersStatus:async()=>[],providersModels:async()=>[],providersUsage:async()=>({}),cloudStatus:async()=>({configured:false}),cloudModels:async()=>[],fluxStatus:async()=>({ok:true,variants:[]}),getProjectsRoot:async()=>({}),
 onPullProgress:()=>()=>{},onLocalProgress:()=>()=>{},onFluxProgress:()=>()=>{},onFluxGenerateProgress:()=>()=>{},
 updatesStatus:()=>ipcRenderer.invoke('notification:status'),updatesCheck:()=>ipcRenderer.invoke('notification:check'),updatesDownload:()=>ipcRenderer.invoke('notification:download'),updatesInstall:()=>ipcRenderer.invoke('notification:install'),updatesOpenRelease:()=>ipcRenderer.invoke('notification:release'),
 onUpdateState:cb=>{const listener=(_e,state)=>cb(state);ipcRenderer.on('updates:state',listener);return()=>ipcRenderer.removeListener('updates:state',listener);}
});
