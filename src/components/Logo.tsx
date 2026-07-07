import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = "h-12 w-12", showText = true, light = false }: LogoProps) {
  const primaryColor = light ? "text-brand-cream-dark" : "text-brand-brown-light";
  const secondaryColor = light ? "text-brand-gold/60" : "text-brand-beige";
  const textColor = light ? "text-white" : "text-brand-brown";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Ship's Wheel and Anchor merged SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-10 h-10 transform hover:rotate-12 transition-transform duration-500 ease-out"
        fill="currentColor"
      >
        {/* Outer Wheel Handles */}
        <g className={secondaryColor}>
          <rect x="48" y="2" width="4" height="12" rx="2" />
          <rect x="48" y="86" width="4" height="12" rx="2" />
          <rect x="2" y="48" width="12" height="4" rx="2" />
          <rect x="86" y="48" width="12" height="4" rx="2" />
          
          <g transform="rotate(45 50 50)">
            <rect x="48" y="2" width="4" height="12" rx="2" />
            <rect x="48" y="86" width="4" height="12" rx="2" />
            <rect x="2" y="48" width="12" height="4" rx="2" />
            <rect x="86" y="48" width="12" height="4" rx="2" />
          </g>
        </g>

        {/* Wheel Rim */}
        <circle 
          cx="50" 
          cy="50" 
          r="30" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          className={secondaryColor} 
        />
        <circle 
          cx="50" 
          cy="50" 
          r="24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className={secondaryColor} 
          strokeDasharray="2 2"
        />

        {/* Anchor SVG overlay */}
        <g className={primaryColor}>
          {/* Anchor stock (horizontal bar at the top) */}
          <rect x="36" y="22" width="28" height="3" rx="1.5" />
          <circle cx="36" cy="23.5" r="2" />
          <circle cx="64" cy="23.5" r="2" />

          {/* Anchor shackle / ring */}
          <circle cx="50" cy="15" r="5" fill="none" stroke="currentColor" strokeWidth="2.5" />

          {/* Anchor shank (vertical post) */}
          <rect x="48.5" y="18" width="3" height="45" rx="1" />

          {/* Anchor crown and flukes (curved bottom) */}
          <path 
            d="M 28 50 C 28 68, 72 68, 72 50" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
          {/* Left fluke pointer */}
          <path d="M 28 50 L 24 45 L 32 46 Z" />
          {/* Right fluke pointer */}
          <path d="M 72 50 L 76 45 L 68 46 Z" />

          {/* Center core hub */}
          <circle cx="50" cy="50" r="6" fill="currentColor" />
          <circle cx="50" cy="50" r="3" className="fill-brand-cream" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-serif text-lg tracking-[0.15em] font-bold uppercase ${textColor}`}>
            The Voyage
          </span>
          <span className={`font-sans text-[10px] tracking-[0.3em] uppercase opacity-70 font-medium ${light ? 'text-brand-gold/80' : 'text-brand-brown-light'}`}>
            Voyage Cafe
          </span>
        </div>
      )}
    </div>
  );
}
