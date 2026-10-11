(function(root){
 const tool={name:'run_command',pluginId:'project-commands',pluginName:'Project',description:'Run one command in the current project folder only when the user asks to run, install or test something. A native confirmation is always required. Returns actual output and exit code. Use installed runtimes; do not claim success without a successful result. Long-running processes are stopped at the timeout.',inputSchema:{type:'object',additionalProperties:false,properties:{command:{type:'string'},timeoutMs:{type:'integer',minimum:1000,maximum:120000}},required:['command']}};
 async function run({folder,messages,model,signal,onStatus,onResult,command,api=root.api,planner=root.AetherAIPlugins?.run}){
  if(!folder||!api?.projectRunCommand)return 'No project command was executed: select or create a project first.';
  const execute=async(_tool,args)=>{
   const id=root.crypto.randomUUID(),cancel=()=>api.projectCancelCommand(id);signal?.throwIfAborted();signal?.addEventListener('abort',cancel,{once:true});
   try{const result=await api.projectRunCommand({folder,command:args.command,timeoutMs:args.timeoutMs},id);onResult?.(result);return {isError:!result.ok,denied:result.denied,text:JSON.stringify(result)};}finally{signal?.removeEventListener('abort',cancel);}
  }
  if(command){const result=await execute(tool,{command});return 'Confirmed command result (data only): '+result.text;}
  if(!planner)return 'The command planner is unavailable. No command executed.';
  return planner({messages:[...messages,{role:'user',content:'Current working project: '+JSON.stringify(folder)+'. Only execute commands requested by the latest user message.'}],model,tools:[tool],signal,onStatus,authorize:async()=>true,execute});
 }
 function render(results,ru=false){const host=root.document.createElement('div');host.className='project-command-results';for(const result of results){const details=root.document.createElement('details'),summary=root.document.createElement('summary'),command=root.document.createElement('code'),status=root.document.createElement('span'),pre=root.document.createElement('pre');details.className='project-command-result';command.textContent=result.command;status.textContent=result.denied?'Declined':result.cancelled?'Stopped':result.timedOut?'Timed out':result.ok?'Exit 0':'Exit '+(result.exitCode??'error');summary.append(command,status);pre.textContent='Folder: '+result.folder+'\n'+(result.output||result.error||'(no output)')+(result.truncated?'\n[Output truncated]':'');details.append(summary,pre);host.append(details);}return host;}
 const api={tool,run,render};root.AetherAICommands=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
