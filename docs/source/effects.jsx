import { Component, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import GatewayFlow from '../../gateway-flow.js';
import ShapeWaves from './backgrounds/ShapeWaves';
import './BorderGlow.css';
import './effects.css';

// BorderGlow's edge-proximity and directional cone, adapted for existing HTML.
// Keep the original elements so tabs, links and native details retain behavior.
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
function enhanceCards(){document.querySelectorAll('.feature-grid article,.detail-grid article,.download-grid article,.product-window,.demo,.faq details,.demo-tabs button,.button').forEach(card => {
  if(card.classList.contains('border-glow-card'))return;
  card.classList.add('border-glow-card');
  const edge = document.createElement('span');
  edge.className = 'edge-light';
  edge.setAttribute('aria-hidden','true');
  card.append(edge);
  card.addEventListener('pointermove', e => {
    if(reduced.matches || e.pointerType === 'touch') return;
    const {left,top,width,height} = card.getBoundingClientRect();
    const dx=e.clientX-left-width/2, dy=e.clientY-top-height/2;
    const proximity=Math.min(1,Math.max(Math.abs(dx)/(width/2),Math.abs(dy)/(height/2)));
    card.style.setProperty('--edge-proximity',String(proximity*100));
    card.style.setProperty('--cursor-angle',`${Math.atan2(dy,dx)*180/Math.PI+90}deg`);
  },{passive:true});
  card.addEventListener('pointerleave',()=>card.style.setProperty('--edge-proximity','0'));
});}
enhanceCards();
document.addEventListener('site:render',enhanceCards);

class QuietFallback extends Component {
  state={failed:false};
  static getDerivedStateFromError(){ return {failed:true}; }
  render(){return this.state.failed ? null : this.props.children;}
}
function Background(){
  const canvas=useRef(null);
  useEffect(()=>{
    const heroTitle=()=>document.querySelector('.hero h1');
    const scrollFocus={getBoundingClientRect(){
      const progress=Math.min(1,Math.max(0,scrollY/(innerHeight*.42)));
      const title=heroTitle()?.getBoundingClientRect();
      const titleViewportY=title ? title.top+title.height/2 : innerHeight/2;
      const y=titleViewportY+(innerHeight/2-titleViewportY)*progress;
      return {left:innerWidth/2-.5,right:innerWidth/2+.5,top:y-.5,bottom:y+.5,width:1,height:1};
    }};
    const flow=GatewayFlow.createGatewayFlow(canvas.current,{
      paths:matchMedia('(max-width: 600px)').matches?42:72,
      speed:.82,
      lineOpacity:.14,
      particleOpacity:.72,
      particleSize:2.4,
      focusTarget:scrollFocus,
      interactiveTarget:heroTitle,
      focusEase:.075,
      focusY:.3
    });
    canvas.current.gatewayFlow=flow;
    const refresh=()=>flow.refresh();
    document.addEventListener('site:render',refresh);
    return ()=>{document.removeEventListener('site:render',refresh);flow.destroy();};
  },[]);
  return <canvas ref={canvas}/>;
}
const layer=document.createElement('div');
layer.id='gateway-flow';layer.setAttribute('aria-hidden','true');
document.body.prepend(layer);
createRoot(layer).render(<QuietFallback><Background/></QuietFallback>);

// The product wordmark gets its own Shape Waves field; the accessible title stays HTML.
function AnimatedWordmark(){
  const [failed,setFailed]=useState(false);
  return failed || reduced.matches ? <span className="shape-wordmark-fallback">AetherAI</span> :
    <ShapeWaves text="AetherAI" color="#bbbbbb" hoverColor="#ffffff" backgroundColor="#101010" textSize={.72} cellSize={5} brightness={.7} interactive onError={()=>setFailed(true)}/>;
}
let wordmarkRoot=null;
function mountWordmark(){
  const title=document.querySelector('.hero h1');
  if(!title || document.querySelector('.shape-wordmark'))return;
  const host=document.createElement('div');host.className='shape-wordmark';host.setAttribute('aria-label','AetherAI');
  wordmarkRoot?.unmount();
  title.before(host);wordmarkRoot=createRoot(host);wordmarkRoot.render(<QuietFallback><AnimatedWordmark/></QuietFallback>);
}
mountWordmark();
document.addEventListener('site:render',mountWordmark);
