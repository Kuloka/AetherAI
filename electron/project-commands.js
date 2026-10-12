const fs=require('node:fs'),path=require('node:path'),{spawn}=require('node:child_process'),{projectBoundary}=require('./security');
function createProjectCommands(root,{confirm}={}){
 const calls=new Map();
 async function run({folder,command,timeoutMs=60000},id,owner,onProgress){
  if(typeof id!=='string'||!id||id.length>200||calls.has(id))throw Error('Invalid command request');
  if(typeof folder!=='string'||!folder.trim()||folder==='.'||path.isAbsolute(folder))throw Error('Choose a project folder');
  if(typeof command!=='string'||!command.trim()||command.length>4000||/[\x00-\x1f]/.test(command))throw Error('Use one complete command line');
  const cwd=projectBoundary(root,path.resolve(root,folder));if(cwd===path.resolve(root)||!fs.statSync(cwd).isDirectory())throw Error('Choose an existing project folder');
  const controller=new AbortController();calls.set(id,{controller,owner});
  try{
   if(!confirm||!await confirm({command,cwd,signal:controller.signal,owner}))return {ok:false,denied:true,command,folder,output:'Command declined. No process started.'};
   controller.signal.throwIfAborted();projectBoundary(root,cwd);
   return await new Promise(resolve=>{
    const started=Date.now(),windows=process.platform==='win32',env={...process.env};delete env.ELECTRON_RUN_AS_NODE;delete env.NODE_OPTIONS;
    const child=spawn(windows?(process.env.ComSpec||'cmd.exe'):'/bin/sh',windows?['/d','/s','/c','"'+command+'"']:['-c',command],{cwd,env,windowsHide:true,windowsVerbatimArguments:windows,shell:false,detached:!windows,stdio:['ignore','pipe','pipe']});
    let output='',truncated=false,timedOut=false,cancelled=false,settled=false,forceTimer;
    const notify=()=>onProgress?.({command,folder,output,truncated,running:true});const append=data=>{const remaining=65536-output.length;if(data.length>remaining)truncated=true;if(remaining>0){output+=data.slice(0,remaining);notify();}};notify();
    child.stdout.setEncoding('utf8');child.stderr.setEncoding('utf8');child.stdout.on('data',append);child.stderr.on('data',append);
    function stop(){if(!child.pid)return;if(windows){const killer=spawn('taskkill.exe',['/pid',String(child.pid),'/t','/f'],{windowsHide:true,stdio:'ignore',shell:false});killer.on('error',()=>child.kill());}else{try{process.kill(-child.pid,'SIGTERM');}catch{child.kill();}forceTimer=setTimeout(()=>{try{process.kill(-child.pid,'SIGKILL');}catch{}},500);}}
    const abort=()=>{cancelled=true;stop();};controller.signal.addEventListener('abort',abort,{once:true});
    const timer=setTimeout(()=>{timedOut=true;stop();},Math.max(1000,Math.min(120000,Number(timeoutMs)||60000)));
    function finish(exitCode,error){if(settled)return;settled=true;clearTimeout(timer);clearTimeout(forceTimer);controller.signal.removeEventListener('abort',abort);resolve({ok:exitCode===0&&!error&&!timedOut&&!cancelled,command,folder,exitCode,output,truncated,timedOut,cancelled,durationMs:Date.now()-started,...(error?{error:error.message}:{})});}
    child.on('error',error=>finish(null,error));child.on('close',code=>finish(code));if(controller.signal.aborted)abort();
   });
  }finally{calls.delete(id);}
 }
 return {run,cancel:id=>calls.get(id)?.controller.abort(),cancelOwner:owner=>{for(const call of calls.values())if(call.owner===owner)call.controller.abort();},close:()=>{for(const call of calls.values())call.controller.abort();}};
}
module.exports={createProjectCommands};
