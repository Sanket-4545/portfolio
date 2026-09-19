'use client';

export default function HeroRobot3D() {
  return (
    <div className="hero-robot" aria-hidden="true">
      <svg
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-robot-svg"
      >
        <defs>
          <radialGradient id="hr-back-glow" cx="50%" cy="44%" r="46%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hr-head-fill" cx="50%" cy="36%" r="64%">
            <stop offset="0%" stopColor="#1c2d50" />
            <stop offset="100%" stopColor="#0c1830" />
          </radialGradient>
          <radialGradient id="hr-face-fill" cx="50%" cy="32%" r="60%">
            <stop offset="0%" stopColor="#141e38" />
            <stop offset="100%" stopColor="#0a1224" />
          </radialGradient>
          <radialGradient id="hr-body-fill" cx="50%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#18263e" />
            <stop offset="100%" stopColor="#0c1628" />
          </radialGradient>
          <linearGradient id="hr-neck-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2d50" />
            <stop offset="100%" stopColor="#101c32" />
          </linearGradient>
          <radialGradient id="hr-eye-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="hr-chest-panel" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#141e38" />
            <stop offset="100%" stopColor="#0a1224" />
          </radialGradient>
          <filter id="hr-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hr-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── LAYER 1: Back ambient glow ── */}
        <g className="hero-robot-glow">
          <ellipse cx="150" cy="175" rx="130" ry="155" fill="url(#hr-back-glow)" />
        </g>

        {/* ── LAYER 2: Head back silhouette (depth shadow) ── */}
        <rect x="72" y="36" width="156" height="130" rx="42" fill="#060d1a" opacity="0.55" />

        {/* ── LAYER 3: Main head ── */}
        <g className="hero-robot-head">
          <rect x="66" y="30" width="168" height="138" rx="44" fill="url(#hr-head-fill)"
            stroke="rgba(14,165,233,0.28)" strokeWidth="1.4" />

          {/* Head top ridge */}
          <rect x="96" y="24" width="108" height="14" rx="7" fill="#1c2d50"
            stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />

          {/* ── Ear/sensor modules ── */}
          <rect x="44" y="60" width="24" height="50" rx="8" fill="#101c32"
            stroke="rgba(14,165,233,0.3)" strokeWidth="1" />
          <circle cx="56" cy="72" r="4" fill="#0ea5e9" fillOpacity="0.6"
            className="hero-robot-sensor" />
          <rect x="48" y="84" width="16" height="3" rx="1.5" fill="rgba(14,165,233,0.15)" />

          <rect x="232" y="60" width="24" height="50" rx="8" fill="#101c32"
            stroke="rgba(14,165,233,0.3)" strokeWidth="1" />
          <circle cx="244" cy="72" r="4" fill="#0ea5e9" fillOpacity="0.6"
            className="hero-robot-sensor" />
          <rect x="236" y="84" width="16" height="3" rx="1.5" fill="rgba(14,165,233,0.15)" />

          {/* ── LAYER 4: Face panel ── */}
          <rect x="84" y="56" width="132" height="92" rx="30" fill="url(#hr-face-fill)"
            stroke="rgba(14,165,233,0.15)" strokeWidth="0.8" />

          {/* Face inner accent lines */}
          <line x1="90" y1="72" x2="210" y2="72" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />
          <line x1="90" y1="130" x2="210" y2="130" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />

          {/* ── LAYER 5: Eyes ── */}
          <g className="hero-robot-eyes">
            {/* Left eye */}
            <ellipse cx="120" cy="86" rx="20" ry="14" fill="url(#hr-eye-glow)" fillOpacity="0.9" />
            <ellipse cx="120" cy="86" rx="20" ry="14" fill="none" stroke="#38bdf8"
              strokeWidth="0.8" strokeOpacity="0.45" />
            <ellipse cx="120" cy="86" rx="8" ry="6" fill="#e0f2fe" fillOpacity="0.92" />
            <ellipse cx="120" cy="85" rx="3.5" ry="2.5" fill="white" fillOpacity="0.95" />
            {/* Left eye halo */}
            <ellipse cx="120" cy="86" rx="26" ry="18" fill="none" stroke="#38bdf8"
              strokeWidth="0.5" strokeOpacity="0.12" className="hero-robot-eye-glow" />

            {/* Right eye */}
            <ellipse cx="180" cy="86" rx="20" ry="14" fill="url(#hr-eye-glow)" fillOpacity="0.9" />
            <ellipse cx="180" cy="86" rx="20" ry="14" fill="none" stroke="#38bdf8"
              strokeWidth="0.8" strokeOpacity="0.45" />
            <ellipse cx="180" cy="86" rx="8" ry="6" fill="#e0f2fe" fillOpacity="0.92" />
            <ellipse cx="180" cy="85" rx="3.5" ry="2.5" fill="white" fillOpacity="0.95" />
            {/* Right eye halo */}
            <ellipse cx="180" cy="86" rx="26" ry="18" fill="none" stroke="#38bdf8"
              strokeWidth="0.5" strokeOpacity="0.12" className="hero-robot-eye-glow" />
          </g>

          {/* Mouth / speaker grille */}
          <line x1="132" y1="118" x2="168" y2="118" stroke="rgba(14,165,233,0.4)"
            strokeWidth="1.5" strokeLinecap="round" />
          <line x1="138" y1="123" x2="162" y2="123" stroke="rgba(14,165,233,0.22)"
            strokeWidth="0.8" strokeLinecap="round" />

          {/* ── Forehead AI core ── */}
          <g className="hero-robot-core" filter="url(#hr-glow)">
            <circle cx="150" cy="46" r="10" fill="#0ea5e9" fillOpacity="0.22" />
            <circle cx="150" cy="46" r="7" fill="#0ea5e9" fillOpacity="0.7" />
            <circle cx="150" cy="46" r="4" fill="#38bdf8" />
            <circle cx="150" cy="46" r="13" fill="none" stroke="#0ea5e9"
              strokeWidth="0.6" strokeOpacity="0.3" />
          </g>

          {/* Head surface highlight */}
          <rect x="82" y="36" width="72" height="10" rx="5" fill="white" fillOpacity="0.04" />
        </g>

        {/* ── Neck ── */}
        <rect x="128" y="168" width="44" height="26" rx="8" fill="url(#hr-neck-grad)"
          stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />
        <line x1="136" y1="176" x2="164" y2="176" stroke="rgba(14,165,233,0.12)" strokeWidth="0.5" />
        <line x1="136" y1="184" x2="164" y2="184" stroke="rgba(14,165,233,0.12)" strokeWidth="0.5" />

        {/* ── Shoulders ── */}
        <path d="M72 214 Q72 202 92 202 L208 202 Q228 202 228 214 L228 228 Q228 234 222 234 L78 234 Q72 234 72 228 Z"
          fill="#141e38" stroke="rgba(14,165,233,0.22)" strokeWidth="1" />

        {/* ── LAYER 6: Body ── */}
        <rect x="78" y="212" width="144" height="120" rx="24" fill="url(#hr-body-fill)"
          stroke="rgba(14,165,233,0.24)" strokeWidth="1.2" />

        {/* Body panel lines */}
        <line x1="88" y1="228" x2="212" y2="228" stroke="rgba(14,165,233,0.08)" strokeWidth="0.5" />
        <line x1="88" y1="314" x2="212" y2="314" stroke="rgba(14,165,233,0.08)" strokeWidth="0.5" />
        <line x1="150" y1="228" x2="150" y2="314" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />

        {/* ── Chest AI/code panel ── */}
        <g>
          <rect x="108" y="238" width="84" height="56" rx="12" fill="url(#hr-chest-panel)"
            stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" />

          {/* Chest glow backdrop */}
          <rect x="112" y="242" width="76" height="48" rx="10" fill="rgba(14,165,233,0.04)"
            className="hero-robot-chest-glow" />

          {/* Data lines (code effect) */}
          <g className="hero-robot-data" opacity="0.45">
            <line x1="116" y1="252" x2="146" y2="252" stroke="#0ea5e9" strokeWidth="1.2"
              strokeLinecap="round" strokeDasharray="6 4" />
            <line x1="152" y1="252" x2="176" y2="252" stroke="#8b5cf6" strokeWidth="0.8"
              strokeLinecap="round" strokeDasharray="4 6" />
            <line x1="116" y1="262" x2="138" y2="262" stroke="#a78bfa" strokeWidth="1"
              strokeLinecap="round" strokeDasharray="5 5" />
            <line x1="144" y1="262" x2="180" y2="262" stroke="#38bdf8" strokeWidth="0.8"
              strokeLinecap="round" strokeDasharray="3 7" />
            <line x1="116" y1="272" x2="160" y2="272" stroke="#0ea5e9" strokeWidth="1"
              strokeLinecap="round" strokeDasharray="7 3" />
            <line x1="166" y1="272" x2="180" y2="272" stroke="#8b5cf6" strokeWidth="0.8"
              strokeLinecap="round" strokeDasharray="4 4" />
            <line x1="116" y1="282" x2="142" y2="282" stroke="#a78bfa" strokeWidth="0.8"
              strokeLinecap="round" strokeDasharray="5 5" />
          </g>

          {/* Chest core indicator */}
          <circle cx="150" cy="250" r="4" fill="#38bdf8" fillOpacity="0.8" filter="url(#hr-glow)" />
          <circle cx="150" cy="250" r="6" fill="none" stroke="#0ea5e9"
            strokeWidth="0.5" strokeOpacity="0.4" />
        </g>

        {/* Body detail indicator lights */}
        <circle cx="96" cy="250" r="2.5" fill="#8b5cf6" fillOpacity="0.4"
          className="hero-robot-sensor" />
        <circle cx="204" cy="250" r="2.5" fill="#0ea5e9" fillOpacity="0.4"
          className="hero-robot-sensor" />
        <circle cx="96" cy="306" r="2" fill="#0ea5e9" fillOpacity="0.3"
          className="hero-robot-sensor" />
        <circle cx="204" cy="306" r="2" fill="#8b5cf6" fillOpacity="0.3"
          className="hero-robot-sensor" />

        {/* ── Arms ── */}
        <rect x="52" y="220" width="24" height="64" rx="12" fill="#101c32"
          stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" />
        <rect x="224" y="220" width="24" height="64" rx="12" fill="#101c32"
          stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" />
        {/* Arm joints */}
        <circle cx="64" cy="226" r="3" fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.2)" strokeWidth="0.5" />
        <circle cx="236" cy="226" r="3" fill="rgba(14,165,233,0.15)" stroke="rgba(14,165,233,0.2)" strokeWidth="0.5" />

        {/* ── Foreground highlights ── */}
        <rect x="84" y="38" width="60" height="6" rx="3" fill="white" fillOpacity="0.04" />
        <rect x="90" y="216" width="50" height="5" rx="2.5" fill="white" fillOpacity="0.03" />

        {/* ── ORBITING LIGHT TRAILS ── */}
        <g className="hero-robot-orbit" opacity="0.5">
          <ellipse cx="150" cy="190" rx="145" ry="45" fill="none"
            stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.25"
            strokeDasharray="12 30" />
          <circle cx="295" cy="190" r="3" fill="#0ea5e9" fillOpacity="0.7" filter="url(#hr-glow)" />
        </g>
        <g className="hero-robot-orbit--2" opacity="0.35">
          <ellipse cx="150" cy="190" rx="125" ry="55" fill="none"
            stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.2"
            strokeDasharray="8 35" />
          <circle cx="25" cy="190" r="2.5" fill="#8b5cf6" fillOpacity="0.65" filter="url(#hr-glow)" />
        </g>

        {/* ── FLOATING PARTICLES ── */}
        <g>
          <circle cx="30" cy="70" r="1.8" fill="#0ea5e9" fillOpacity="0.5"
            className="hero-robot-particle" />
          <circle cx="270" cy="55" r="1.5" fill="#8b5cf6" fillOpacity="0.45"
            className="hero-robot-particle" />
          <circle cx="22" cy="200" r="1.3" fill="#a78bfa" fillOpacity="0.4"
            className="hero-robot-particle" />
          <circle cx="278" cy="220" r="1.6" fill="#38bdf8" fillOpacity="0.4"
            className="hero-robot-particle" />
          <circle cx="40" cy="320" r="1.2" fill="#0ea5e9" fillOpacity="0.35"
            className="hero-robot-particle" />
          <circle cx="260" cy="340" r="1.4" fill="#8b5cf6" fillOpacity="0.35"
            className="hero-robot-particle" />
          <circle cx="15" cy="140" r="1.5" fill="#38bdf8" fillOpacity="0.3"
            className="hero-robot-particle" />
          <circle cx="285" cy="150" r="1.3" fill="#a78bfa" fillOpacity="0.3"
            className="hero-robot-particle" />
        </g>

        {/* ── FLOATING DEVELOPER / AI SYMBOLS ── */}
        <g>
          <text className="hero-robot-sym" x="16" y="110" fontSize="14" fill="#38bdf8"
            fillOpacity="0.22" fontFamily="'Courier New', monospace" fontWeight="700">&lt;/&gt;</text>
          <text className="hero-robot-sym" x="258" y="290" fontSize="12" fill="#a78bfa"
            fillOpacity="0.2" fontFamily="'Courier New', monospace" fontWeight="700">{"{}"}</text>
          <text className="hero-robot-sym" x="244" y="110" fontSize="13" fill="#0ea5e9"
            fillOpacity="0.2" fontFamily="'Courier New', monospace" fontWeight="700">[ ]</text>
          <text className="hero-robot-sym" x="32" y="300" fontSize="11" fill="#8b5cf6"
            fillOpacity="0.18" fontFamily="'Courier New', monospace" fontWeight="700">AI</text>
          <text className="hero-robot-sym" x="260" y="180" fontSize="12" fill="#ec4899"
            fillOpacity="0.16" fontFamily="'Courier New', monospace" fontWeight="700">fn()</text>
        </g>
      </svg>
    </div>
  );
}
