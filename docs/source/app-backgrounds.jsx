import {Component} from 'react';
import {createRoot} from 'react-dom/client';
import PatternWaves from './backgrounds/PatternWaves';
import PixelBlast from './backgrounds/PixelBlast';

class Fallback extends Component {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  componentDidCatch(){const host=document.getElementById('appBackgroundEffects');host.dataset.unavailable='true';host.classList.add('static-background');}
  render(){return this.state.failed?null:this.props.children;}
}
const host=document.getElementById('appBackgroundEffects');
const root=createRoot(host);
let options={};
function render(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const active=!document.hidden && !reduced;
  host.dataset.background=options.background||'none';
  root.render(<Fallback key={options.background}>{active && options.background==='pattern' ?
    <PatternWaves color={options.color} backgroundColor="transparent" interactive={false} speed={.25} opacity={.35}/> :
    active && options.background==='pixel' ? <PixelBlast color={options.color} pixelSize={3} speed={.35} enableRipples={false} antialias={false} patternDensity={.65}/> : null}</Fallback>);
  host.classList.toggle('static-background',reduced&&['pattern','pixel'].includes(options.background));
}
window.AetherAIBackgrounds={update(value){options=value;delete host.dataset.unavailable;render();}};
document.addEventListener('visibilitychange',render);
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',render);
