(function(root){
  function describe(usage={},model={}){
    const limits=usage.limits||{},groq=model.provider==='groq';
    // Groq's requests headers describe the daily request budget. Its tokens
    // headers describe a separate minute window and must not drive this ring.
    const candidates=groq?[limits['requests-day']||limits.requests]:Object.values(limits);
    const rows=candidates.filter(limit=>limit&&Number.isFinite(limit.total)&&limit.total>0&&Number.isFinite(limit.remaining)&&!(model.provider==='openrouter'&&model.free!==true&&/free/i.test(limit.label||'')));
    if(!rows.length)return {known:false,percentage:null};
    const limit=rows.reduce((best,value)=>value.remaining/value.total<best.remaining/best.total?value:best),precision=groq?10:1;
    return {known:true,percentage:Math.round(Math.max(0,Math.min(1,limit.remaining/limit.total))*100*precision)/precision,label:groq?'Daily requests':limit.label||'',remaining:limit.remaining,total:limit.total,reset:limit.reset||null};
  }
  const api={describe};root.AetherAIQuota=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
