(function(root){
  const modes=['none','gateway','pattern','pixel'];
  function color(value){return /^#[0-9a-f]{6}$/i.test(value||'')?value.toLowerCase():null;}
  function normalize(value={}){return {background:modes.includes(value.background)?value.background:'gateway',accent:color(value.accent)||'#c3c3c3',surface:color(value.surface)};}
  function readable(value){const rgb=value.slice(1).match(/../g).map(hex=>parseInt(hex,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722>.179?'#171717':'#eeeeee';}
  function mix(value,other,ratio){return '#'+value.slice(1).match(/../g).map((hex,i)=>Math.round(parseInt(hex,16)*(1-ratio)+parseInt(other.slice(1+i*2,3+i*2),16)*ratio).toString(16).padStart(2,'0')).join('');}
  function apply(value){const options=normalize(value),style=document.body.style;
    style.setProperty('--accent',options.accent);style.setProperty('--accent-ink',readable(options.accent));
    const variables=['--bg-darkest','--bg-activity','--bg-main','--bg-sidebar','--bg-surface','--bg-input','--bg-hover','--bg-active','--bg-user-msg','--text-primary','--text-bright','--text-secondary','--text-muted','--border','--border-light','--scrollbar-thumb'];
    variables.forEach(key=>style.removeProperty(key));
    if(options.surface){const ink=readable(options.surface),towards=ink==='#171717'?'#000000':'#ffffff';
      for(const [key,ratio] of [['--bg-darkest',0],['--bg-activity',.01],['--bg-main',0],['--bg-sidebar',.025],['--bg-surface',.07],['--bg-input',.07],['--bg-hover',.12],['--bg-active',.17],['--bg-user-msg',.09],['--border',.14],['--border-light',.21],['--scrollbar-thumb',.25]])style.setProperty(key,mix(options.surface,towards,ratio));
      style.setProperty('--text-primary',ink);style.setProperty('--text-bright',ink);style.setProperty('--text-secondary',mix(ink,options.surface,.32));style.setProperty('--text-muted',mix(ink,options.surface,.4));
    }
    document.body.dataset.customAccent=options.accent==='#c3c3c3'?'false':'true';
    return options;
  }
  root.MultiMindAppearance={normalize,apply,readable,mix};
  if(typeof module!=='undefined')module.exports={normalize,readable,mix};
})(typeof globalThis!=='undefined'?globalThis:window);
