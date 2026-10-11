const {contextBridge,ipcRenderer}=require('electron');let listener;
contextBridge.exposeInMainWorld('api',{
 clipboardWrite:text=>ipcRenderer.invoke('interaction:clipboard',text),
 dataGet:()=>ipcRenderer.invoke('interaction:data'),dataSave:data=>ipcRenderer.invoke('interaction:save',data),settingsGet:()=>ipcRenderer.invoke('interaction:settings'),settingsSave:settings=>ipcRenderer.invoke('interaction:save-settings',settings),
 accountStatus:async()=>({configured:false,user:null}),memoryList:async()=>[],memoryContext:async()=>'',skillsList:async()=>[],skillsPresets:async()=>[],pluginsList:async()=>[],
 ollamaStatus:async()=>({running:true,models:[]}),localStatus:async()=>({supported:true,installed:false,models:[]}),
 providersStatus:async()=>[{id:'openrouter',configured:true,enabled:true,modelCount:2}],providersModels:async()=>[{name:'cloud:openrouter/test',cloudName:'Test model',provider:'openrouter',free:true},{name:'cloud:openrouter/second',cloudName:'Second model',provider:'openrouter',free:true}],providersUsage:async()=>({}),
 cloudStatus:async()=>({configured:false}),cloudModels:async()=>[],fluxStatus:async()=>({ok:true,variants:[]}),getProjectsRoot:async()=>({}),
 onPullProgress:()=>()=>{},onLocalProgress:()=>()=>{},onFluxProgress:()=>()=>{},onFluxGenerateProgress:()=>()=>{},
 onCloudEvent:callback=>{listener=callback;return()=>{listener=null;};},cloudRequest:(id,body)=>ipcRenderer.invoke('interaction:request',id,body),cloudCancel:async()=>{},openExternal:async()=>({})
});
ipcRenderer.on('interaction:chunk',(_event,event)=>listener?.(event));
