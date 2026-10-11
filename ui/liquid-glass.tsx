import { createRoot, type Root } from "react-dom/client";
import { GlassFilter, LiquidGlassLayers } from "@/components/ui/liquid-glass-button";

const definitions=document.createElement('div');definitions.className='liquid-glass-definitions';definitions.setAttribute('aria-hidden','true');document.body.append(definitions);createRoot(definitions).render(<GlassFilter/>);
const roots=new Map<HTMLElement,Root>();
function refresh(){
 for(const [layer,root] of roots)if(!layer.isConnected){root.unmount();roots.delete(layer);}
 for(const host of Array.from(document.querySelectorAll<HTMLElement>('.composer-inner,.model-dropdown,.model-hover-info, .model-reasoning-options,.composer-command-menu'))){
  if(host.querySelector(':scope>.liquid-glass-layer'))continue;
  host.classList.add('liquid-glass-surface');const layer=document.createElement('div');layer.className='liquid-glass-layer';layer.setAttribute('aria-hidden','true');host.prepend(layer);const root=createRoot(layer);roots.set(layer,root);root.render(<LiquidGlassLayers/>);
 }
}
new MutationObserver(refresh).observe(document.body,{childList:true,subtree:true});refresh();
