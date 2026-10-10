const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('api',{
 dataGet:()=>ipcRenderer.invoke('answer:data'),dataSave:async()=>({}),
 settingsGet:()=>ipcRenderer.invoke('answer:settings'),settingsSave:value=>ipcRenderer.invoke('answer:save-settings',value),
 accountStatus:async()=>({configured:false,user:null}),memoryList:async()=>[],memoryContext:async()=>'',
 skillsList:()=>ipcRenderer.invoke('answer:skills'),skillsPresets:()=>ipcRenderer.invoke('answer:skill-presets'),skillsToggle:(name,enabled)=>ipcRenderer.invoke('answer:skill-toggle',name,enabled),
 pluginsList:async()=>[],
 ollamaStatus:async()=>({running:true,models:[{name:'llama3.2:1b',size:1000000000}]}),localStatus:async()=>({supported:true,installed:false,models:[]}),
 providersStatus:async()=>[],providersModels:async()=>[],providersUsage:async()=>({}),
 cloudStatus:async()=>({configured:false}),cloudModels:async()=>[],fluxStatus:async()=>({ok:true,variants:[]}),
 getProjectsRoot:async()=>({}),onPullProgress:()=>()=>{},onLocalProgress:()=>()=>{},onFluxProgress:()=>()=>{},onFluxGenerateProgress:()=>()=>{},
 openExternal:url=>ipcRenderer.invoke('answer:open',url)
});
