"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// Adapted from the supplied LiquidButton: the glass is behind the content,
// and its displacement never filters text or changes the control's geometry.
export function GlassFilter() {
  return <svg width="0" height="0" aria-hidden="true" className="liquid-glass-defs"><defs>
    <filter id="aether-liquid-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
      <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
      <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
      <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
      <feComposite in="finalBlur" in2="finalBlur" operator="over" />
    </filter>
  </defs></svg>;
}

export function LiquidGlassLayers() {
  return <><span className="liquid-glass-distortion"/><span className="liquid-glass-rim"/></>;
}

export const LiquidButton=React.forwardRef<HTMLButtonElement,React.ButtonHTMLAttributes<HTMLButtonElement>>(({className,children,...props},ref)=>(
  <button ref={ref} className={cn("liquid-button",className)} {...props}><span className="liquid-glass-layer" aria-hidden="true"><LiquidGlassLayers/></span><span className="liquid-button-content">{children}</span></button>
));
LiquidButton.displayName="LiquidButton";
