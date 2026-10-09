(function(root){
  const A=[
    'M28 168 C52 126 77 83 99 43 C112 20 134 20 148 43 C174 83 198 127 222 168 C191 154 175 130 151 101 C137 83 120 78 106 94 C81 123 59 150 28 168 Z',
    'M30 178 C65 158 79 134 105 120 C124 110 139 113 154 127 C177 147 192 174 216 195 C235 213 217 239 193 225 C164 208 148 171 133 162 C120 154 111 169 102 184 C93 197 84 210 75 222 C60 243 28 237 23 217 C19 202 23 188 30 178 Z'
  ];
  const waves=[
    'M24 95 C59 42 99 39 129 55 C158 69 180 97 205 101 C216 103 226 100 234 92 C235 118 217 135 194 130 C159 126 140 92 110 85 C80 69 50 77 24 95 Z',
    'M24 155 C48 118 77 112 99 119 C120 125 135 142 155 156 C174 170 202 178 233 161 C230 192 207 213 183 209 C157 205 137 183 119 167 C103 153 90 151 75 156 C62 162 54 179 44 187 C30 198 16 182 19 170 C20 164 22 159 24 155 Z'
  ];
  const smooth=value=>{const t=Math.max(0,Math.min(1,value));return t*t*(3-2*t);};
  function amount(progress){if(progress<.1||progress>=.9)return 0;if(progress<.4)return smooth((progress-.1)/.3);if(progress<.6)return 1;return 1-smooth((progress-.6)/.3);}
  const numbers=waves.map(value=>value.match(/-?\d+(?:\.\d+)?/g).map(Number));
  function frame(progress){const mix=amount(progress);return A.map((value,part)=>{let index=0;return value.replace(/-?\d+(?:\.\d+)?/g,n=>{const to=numbers[part][index++];return (Number(n)+(to-Number(n))*mix).toFixed(2);});});}
  function attach(element){
    if(!element||element.dataset.logoMotion)return;element.dataset.logoMotion='ready';
    const parts=[element.querySelector('.aether-crown'),element.querySelector('.aether-ribbon')];if(parts.some(part=>!part))return;
    const original=parts.map(part=>part.getAttribute('d')),reduced=root.matchMedia('(prefers-reduced-motion: reduce)');let request=null;
    function reset(){if(request!==null)root.cancelAnimationFrame(request);request=null;parts.forEach((part,i)=>part.setAttribute('d',original[i]));element.dataset.logoMotion='ready';}
    element.addEventListener('pointerenter',()=>{if(reduced.matches||request!==null)return;const started=root.performance.now();element.dataset.logoMotion='flow';function tick(now){const progress=(now-started)/2600;if(progress>=1||reduced.matches||root.document.hidden){reset();return;}frame(progress).forEach((value,i)=>parts[i].setAttribute('d',value));request=root.requestAnimationFrame(tick);}request=root.requestAnimationFrame(tick);});
    reduced.addEventListener('change',()=>{if(reduced.matches)reset();});root.document.addEventListener('visibilitychange',()=>{if(root.document.hidden)reset();});
  }
  const api={A,waves,frame,attach};root.AetherAILogo=api;if(typeof module!=='undefined')module.exports=api;
  root.document?.querySelectorAll('.side-logo').forEach(attach);
  const welcome=root.document?.querySelector('.welcome-brand-logo');
  if(welcome){
    const parts=[welcome.querySelector('.aether-crown'),welcome.querySelector('.aether-ribbon')],original=parts.map(part=>part.getAttribute('d'));
    const reduced=root.matchMedia('(prefers-reduced-motion: reduce)');let request=null,start=0;
    function reset(){if(request!==null)root.cancelAnimationFrame(request);request=null;parts.forEach((part,i)=>part.setAttribute('d',original[i]));}
    function sync(){const visible=!root.document.hidden&&!reduced.matches&&!root.document.documentElement.classList.contains('ui-loading')&&!root.document.body.classList.contains('auth-visible')&&welcome.getClientRects().length>0;
      if(!visible){reset();return;}if(request!==null)return;start=root.performance.now();
      function tick(now){frame(((now-start)%4200)/4200).forEach((value,i)=>parts[i].setAttribute('d',value));request=root.requestAnimationFrame(tick);}request=root.requestAnimationFrame(tick);
    }
    root.setInterval(sync,250);root.document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
  }
})(typeof globalThis!=='undefined'?globalThis:window);
