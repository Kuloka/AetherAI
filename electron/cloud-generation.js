function generationOptions(selected,body){
 const opts=body.options||{},reasoning=selected.reasoning||null,parameters=selected.supportedParameters||[],level=opts.reasoning_effort||'medium';
 const reasoningModel=!!reasoning||parameters.includes('reasoning')||/\/glm[-.]?[45]/i.test(selected.name||'');
 let maximum=Number.isSafeInteger(opts.num_predict)&&opts.num_predict>0?opts.num_predict:1000;
 if(reasoningModel)maximum=Math.max(maximum,level==='max'?32768:level==='high'?16384:8192);
 if(Number.isSafeInteger(selected.maxCompletionTokens)&&selected.maxCompletionTokens>0)maximum=Math.min(maximum,selected.maxCompletionTokens);
 const result={max_tokens:maximum};
 if(selected.provider==='openrouter'&&(parameters.includes('reasoning')||reasoning)){
  const efforts=reasoning?.supported_efforts;
  if(Array.isArray(efforts)&&efforts.length){const order=['max','xhigh','high','medium','low','minimal','none'],target=order.indexOf(level),allowed=efforts.filter(e=>order.includes(e)&&(!reasoning.mandatory||e!=='none'));const effort=allowed.sort((a,b)=>Math.abs(order.indexOf(a)-target)-Math.abs(order.indexOf(b)-target))[0];if(effort)result.reasoning={effort};}
  else if(efforts===null&&['none','low','medium','high','max'].includes(level)&&!(reasoning?.mandatory&&level==='none'))result.reasoning={effort:level};
 }
 return result;
}
module.exports={generationOptions};
