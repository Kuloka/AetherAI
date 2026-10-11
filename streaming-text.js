(function(root){
  function visibleText(value){return String(value||'').replace(/```[\s\S]*?(?:```|$)|`[^`\n]*`|<think>[\s\S]*?(?:<\/think>|$)|<\/?think>/gi,part=>part.startsWith('`')?part:'').replace(/<\/?(?:t|th|thi|thin|think)$/i,'');}
  function create(render,{schedule=root.requestAnimationFrame,cancel=root.cancelAnimationFrame,reduced=()=>false}={}){
    let target='',shown='',request=null,closed=false,lastTick=null;
    function emit(){render(shown);}
    function tick(time){
      request=null;if(closed)return;
      if(Number.isFinite(time)&&lastTick!==null&&time-lastTick<80){request=schedule(tick);return;}
      lastTick=Number.isFinite(time)?time:null;
      const rest=target.slice(shown.length),words=rest.match(/\s+|\S+\s*/gu)||[];
      // Reveal whole words at the reference's 80 ms cadence. Catch up on large
      // provider bursts without imposing a long extra wait on the answer.
      const count=Math.max(1,Math.ceil(words.length/24));
      shown+=words.slice(0,count).join('');emit();if(shown!==target)request=schedule(tick);
    }
    return {update(value){if(closed)return;target=visibleText(value);if(!target.startsWith(shown))shown='';if(reduced()){if(request!==null)cancel(request);request=null;shown=target;emit();}else if(request===null&&shown!==target)request=schedule(tick);},finish(){if(request!==null)cancel(request);request=null;shown=target;emit();closed=true;},stop(){if(request!==null)cancel(request);request=null;closed=true;return target;},get text(){return target;}};
  }
  const api={visibleText,create};root.AetherAIStreaming=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
