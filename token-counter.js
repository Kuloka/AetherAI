(function(root){
 function update(host,value){
  const previous=host.counterValue;host.counterValue=String(value);const existing=new Map([...host.children].map(node=>[node.dataset.place,node]));let place=0;const entries=[];
  for(const char of [...String(value)].reverse()){const digit=/[0-9]/.test(char),key=(digit?'d':'s')+place;if(digit)place++;entries.unshift({char,key});}
  for(let i=0;i<entries.length;i++){const {char,key}=entries[i];let node=existing.get(key);if(!node){node=host.ownerDocument.createElement('span');node.className='token-digit';node.dataset.place=key;}existing.delete(key);
   if(node.dataset.digit!==char){const before=node.dataset.digit,column=host.ownerDocument.createElement('span');column.className='token-digit-column';column.textContent=char;if(previous!==undefined&&/[0-9]/.test(char)){const old=host.ownerDocument.createElement('span');old.className='token-digit-previous';old.setAttribute('aria-hidden','true');old.textContent=before||'';column.append(old);column.classList.add('rolling');column.addEventListener('animationend',()=>{column.classList.remove('rolling');old.remove();},{once:true});}node.dataset.digit=char;node.replaceChildren(column);}
   const position=host.children[i];if(position!==node)host.insertBefore(node,position||null);
  }for(const node of existing.values())node.remove();
 }
 root.AetherAITokenCounter={update};
})(typeof window!=='undefined'?window:globalThis);
