'use client';

export default function HeroVisual3D() {
  return (
    <div className="hero-visual">
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="hero-ai-core-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hero-ai-glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <filter id="hero-ai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* === DEPTH LAYER 3: Far background ring === */}
        <g className="hero-ai-ring hero-ai-ring--far">
          <ellipse cx="300" cy="300" rx="255" ry="255"
            stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
          <ellipse cx="300" cy="300" rx="255" ry="255"
            stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.05" fill="none"
            strokeDasharray="4 20" />
        </g>

        {/* === DEPTH LAYER 2: Middle orbit === */}
        <g className="hero-ai-ring hero-ai-ring--mid">
          <ellipse cx="300" cy="300" rx="190" ry="190"
            stroke="#8b5cf6" strokeWidth="0.8" strokeOpacity="0.18" fill="none" />
          <ellipse cx="300" cy="300" rx="190" ry="190"
            stroke="#a78bfa" strokeWidth="0.4" strokeOpacity="0.08" fill="none"
            strokeDasharray="3 16" />
        </g>

        {/* === DEPTH LAYER 1: Near orbit === */}
        <g className="hero-ai-ring hero-ai-ring--near">
          <ellipse cx="300" cy="300" rx="130" ry="130"
            stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.22" fill="none" />
          <ellipse cx="300" cy="300" rx="130" ry="130"
            stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" fill="none"
            strokeDasharray="2 12" />
        </g>

        {/* === CONNECTION LINES === */}
        <g className="hero-ai-connections">
          <line x1="398" y1="165" x2="455" y2="210" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="455" y1="210" x2="490" y2="300" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="115" y1="250" x2="165" y2="205" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="165" y1="205" x2="202" y2="165" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="300" y1="430" x2="340" y2="410" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="340" y1="410" x2="410" y2="400" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="190" y1="400" x2="245" y2="410" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.12" />
          <line x1="245" y1="410" x2="300" y2="430" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.1" />
          <line x1="398" y1="165" x2="340" y2="200" stroke="#38bdf8" strokeWidth="0.4" strokeOpacity="0.1" />
          <line x1="202" y1="165" x2="260" y2="200" stroke="#a78bfa" strokeWidth="0.4" strokeOpacity="0.1" />
        </g>

        {/* === SIGNAL DOTS traveling along rings === */}
        <circle className="hero-ai-signal hero-ai-signal--1" r="2.5" fill="#0ea5e9" fillOpacity="0.8">
          <animateMotion dur="8s" repeatCount="indefinite"
            path="M300,170 A130,130 0 1,1 299.99,170" />
        </circle>
        <circle className="hero-ai-signal hero-ai-signal--2" r="2" fill="#8b5cf6" fillOpacity="0.7">
          <animateMotion dur="12s" repeatCount="indefinite"
            path="M300,110 A190,190 0 1,1 299.99,110" />
        </circle>
        <circle className="hero-ai-signal hero-ai-signal--3" r="1.5" fill="#a78bfa" fillOpacity="0.6">
          <animateMotion dur="16s" repeatCount="indefinite"
            path="M300,45 A255,255 0 1,0 299.99,45" />
        </circle>

        {/* === NEURAL NODES on rings === */}
        <g className="hero-ai-node hero-ai-node--counter-near">
          <circle cx="398" cy="165" r="3.5" fill="#0ea5e9" fillOpacity="0.85" filter="url(#hero-ai-glow)" />
          <circle cx="398" cy="165" r="5" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-near">
          <circle cx="202" cy="165" r="3" fill="#8b5cf6" fillOpacity="0.75" filter="url(#hero-ai-glow)" />
          <circle cx="202" cy="165" r="4.5" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.25" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-near">
          <circle cx="300" cy="430" r="3" fill="#38bdf8" fillOpacity="0.7" filter="url(#hero-ai-glow)" />
          <circle cx="300" cy="430" r="4.5" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.25" />
        </g>

        <g className="hero-ai-node hero-ai-node--counter-mid">
          <circle cx="455" cy="210" r="3" fill="#0ea5e9" fillOpacity="0.75" filter="url(#hero-ai-glow)" />
          <circle cx="455" cy="210" r="4.5" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.25" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-mid">
          <circle cx="165" cy="205" r="2.5" fill="#a78bfa" fillOpacity="0.7" filter="url(#hero-ai-glow)" />
          <circle cx="165" cy="205" r="4" fill="none" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.2" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-mid">
          <circle cx="340" cy="410" r="2.5" fill="#38bdf8" fillOpacity="0.65" filter="url(#hero-ai-glow)" />
          <circle cx="340" cy="410" r="4" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-mid">
          <circle cx="190" cy="400" r="2.5" fill="#8b5cf6" fillOpacity="0.65" filter="url(#hero-ai-glow)" />
          <circle cx="190" cy="400" r="4" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.2" />
        </g>

        <g className="hero-ai-node hero-ai-node--counter-far">
          <circle cx="490" cy="300" r="2" fill="#a78bfa" fillOpacity="0.6" filter="url(#hero-ai-glow)" />
          <circle cx="490" cy="300" r="3.5" fill="none" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.18" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-far">
          <circle cx="115" cy="250" r="2" fill="#8b5cf6" fillOpacity="0.55" filter="url(#hero-ai-glow)" />
          <circle cx="115" cy="250" r="3.5" fill="none" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.18" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-far">
          <circle cx="410" cy="400" r="2" fill="#38bdf8" fillOpacity="0.55" filter="url(#hero-ai-glow)" />
          <circle cx="410" cy="400" r="3.5" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.15" />
        </g>
        <g className="hero-ai-node hero-ai-node--counter-far">
          <circle cx="245" cy="410" r="2" fill="#0ea5e9" fillOpacity="0.55" filter="url(#hero-ai-glow)" />
          <circle cx="245" cy="410" r="3.5" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.15" />
        </g>

        {/* === FLOATING DEVELOPER / AI SYMBOLS === */}
        <text className="hero-ai-symbol hero-ai-symbol--1" x="470" y="160" fontSize="15" fill="#38bdf8" fillOpacity="0.22" fontFamily="'Courier New', monospace" fontWeight="700">&lt;/&gt;</text>
        <text className="hero-ai-symbol hero-ai-symbol--2" x="110" y="340" fontSize="13" fill="#a78bfa" fillOpacity="0.2" fontFamily="'Courier New', monospace" fontWeight="700">{"{}"}</text>
        <text className="hero-ai-symbol hero-ai-symbol--3" x="440" y="440" fontSize="14" fill="#0ea5e9" fillOpacity="0.2" fontFamily="'Courier New', monospace" fontWeight="700">[ ]</text>
        <text className="hero-ai-symbol hero-ai-symbol--4" x="155" y="140" fontSize="12" fill="#8b5cf6" fillOpacity="0.18" fontFamily="'Courier New', monospace" fontWeight="700">AI</text>
        <text className="hero-ai-symbol hero-ai-symbol--5" x="500" y="320" fontSize="13" fill="#ec4899" fillOpacity="0.16" fontFamily="'Courier New', monospace" fontWeight="700">fn()</text>

        {/* === CENTRAL AI CORE === */}
        <g className="hero-ai-core-glow">
          <circle cx="300" cy="300" r="90" fill="url(#hero-ai-glow-gradient)" />
        </g>
        <circle cx="300" cy="300" r="55" fill="url(#hero-ai-core-gradient)" filter="url(#hero-ai-glow)" className="hero-ai-core" />
        <g className="hero-ai-core-inner">
          <polygon points="300,268 328,284 328,316 300,332 272,316 272,284"
            fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.7"
            style={{ transform: 'rotate(30deg)', transformOrigin: '300px 300px', transformBox: 'fill-box' }} />
          <polygon points="300,278 318,288 318,312 300,322 282,312 282,288"
            fill="none" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.35"
            style={{ transform: 'rotate(30deg)', transformOrigin: '300px 300px', transformBox: 'fill-box' }} />
          <circle cx="300" cy="300" r="5" fill="#38bdf8" fillOpacity="0.9" filter="url(#hero-ai-glow)" />
          <circle cx="300" cy="300" r="8" fill="none" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.5" />
          <circle cx="300" cy="300" r="13" fill="none" stroke="#38bdf8" strokeWidth="0.4" strokeOpacity="0.25" />
        </g>
      </svg>
    </div>
  );
}
