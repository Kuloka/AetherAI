(function(root){
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function escaped(text,index){let count=0;while(index>0&&text[--index]==='\\')count++;return count%2===1;}
  function extract(value,engine=root.katex){
    const source=String(value||''),expressions=[],nonce=(root.crypto?.randomUUID?.()||Math.random().toString(16).slice(2)).replace(/-/g,'');
    let text='',index=0;
    while(index<source.length){
      // Markdown code is literal, including unfinished streamed code blocks.
      if(index===0||source[index-1]==='\n'){
        const fence=/^[ \t]{0,3}(`{3,}|~{3,})[^\n]*(?:\n|$)/.exec(source.slice(index));
        if(fence){const close=new RegExp('^[ \\t]{0,3}'+fence[1][0]+'{'+fence[1].length+',}[ \\t]*$','m');const tail=source.slice(index+fence[0].length),end=close.exec(tail);const length=end?fence[0].length+end.index+end[0].length:source.length-index;text+=source.slice(index,index+length);index+=length;continue;}
      }
      if(source[index]==='`'){const marks=/^`+/.exec(source.slice(index))[0],end=source.indexOf(marks,index+marks.length);if(end!==-1){text+=source.slice(index,end+marks.length);index=end+marks.length;continue;}}
      let open=null,close=null,display=false;
      if(!escaped(source,index)){
        if(source.startsWith('\\[',index)){open='\\[';close='\\]';display=true;}
        else if(source.startsWith('\\(',index)){open='\\(';close='\\)';}
        else if(source.startsWith('$$',index)){open=close='$$';display=true;}
        else if(source[index]==='$'&&source[index-1]!=='$'&&!/\s/.test(source[index+1]||' ')){open=close='$';}
      }
      if(open&&expressions.length<64){
        let end=source.indexOf(close,index+open.length);
        while(end!==-1&&(escaped(source,end)||(close==='$'&&(source[end-1]==='$'||source[end+1]==='$'||/\s/.test(source[end-1])||/\d/.test(source[end+1]||'')))))end=source.indexOf(close,end+close.length);
        const expression=end===-1?'':source.slice(index+open.length,end);
        if(end!==-1&&expression.trim()&&expression.length<=8192&&(open!=='$'||!expression.includes('\n'))){
          const token='\uE000AETHER_MATH_'+nonce+'_'+expressions.length+'\uE001';expressions.push({token,expression,display});text+=token;index=end+close.length;continue;
        }
      }
      text+=source[index++];
    }
    return {text,restore(html){for(const {token,expression,display} of expressions){let rendered;try{if(!engine?.renderToString)throw Error('Math renderer unavailable');rendered=engine.renderToString(expression,{displayMode:display,output:'htmlAndMathml',trust:false,throwOnError:true,strict:'ignore',maxExpand:500,maxSize:10,macros:{}});}catch{rendered='<code class="math-source">'+escape(expression)+'</code>';}html=html.replaceAll(token,'<span class="'+(display?'math-block':'math-inline')+'">'+rendered+'</span>');}return html;}};
  }
  const api={extract};root.AetherAIMath=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:window);
