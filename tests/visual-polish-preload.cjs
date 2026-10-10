const {contextBridge,ipcRenderer}=require('electron');let listener;
contextBridge.exposeInMainWorld('api',{
 dataGet:()=>ipcRenderer.invoke('polish:data'),dataSave:async()=>({}),settingsGet:()=>ipcRenderer.invoke('polish:settings'),settingsSave:async()=>({}),
 accountStatus:async()=>({configured:false,user:null}),memoryList:async()=>[],memoryContext:async()=>'',skillsList:async()=>[],skillsPresets:async()=>[],pluginsList:async()=>[],
 ollamaStatus:async()=>({running:true,models:[]}),localStatus:async()=>({supported:true,installed:false,models:[]}),
 providersStatus:async()=>[{id:'openrouter',configured:true,enabled:true,modelCount:2}],providersModels:async()=>[{name:'cloud:openrouter/test',cloudName:'Test model',provider:'openrouter',contextLength:131072,free:true},{name:'cloud:openrouter/second',cloudName:'Second model with a long descriptive name',provider:'openrouter',contextLength:65536,free:true}],providersUsage:async()=>({}),
 cloudStatus:async()=>({configured:false}),cloudModels:async()=>[],fluxStatus:async()=>({ok:true,variants:[]}),getProjectsRoot:async()=>({}),
 onPullProgress:()=>()=>{},onLocalProgress:()=>()=>{},onFluxProgress:()=>()=>{},onFluxGenerateProgress:()=>()=>{},
 onCloudEvent:callback=>{listener=callback;return()=>{listener=null;};},cloudRequest:async(id,body)=>{await ipcRenderer.invoke('polish:request',id,body);},cloudCancel:async()=>{},
 openExternal:async()=>({})
});
ipcRenderer.on('polish:chunk',(_event,event)=>listener?.(event));
