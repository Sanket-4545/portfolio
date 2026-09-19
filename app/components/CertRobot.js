'use client';

export default function CertRobot() {
  return (
    <svg
      viewBox="0 0 220 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cert-robot-svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cr-back-glow" cx="50%" cy="42%" r="48%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#8b5cf6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cr-head-fill" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#0c1524" />
        </radialGradient>
        <radialGradient id="cr-face-fill" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#162036" />
          <stop offset="100%" stopColor="#0a1020" />
        </radialGradient>
        <radialGradient id="cr-body-fill" cx="50%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#15203a" />
          <stop offset="100%" stopColor="#0b1428" />
        </radialGradient>
        <radialGradient id="cr-eye-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.5" />
        </radialGradient>
        <linearGradient id="cr-neck-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2744" />
          <stop offset="100%" stopColor="#0f1a2e" />
        </linearGradient>
        <linearGradient id="cr-shoulder-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#162036" />
          <stop offset="100%" stopColor="#0c1524" />
        </linearGradient>
      </defs>

      {/* ── Layer 1: Back glow ── */}
      <ellipse cx="110" cy="125" rx="95" ry="110" fill="url(#cr-back-glow)" />

      {/* ── Layer 2: Head back silhouette (depth) ── */}
      <rect x="58" y="28" width="104" height="92" rx="30" fill="#090e1a" opacity="0.5" />

      {/* ── Layer 3: Main head ── */}
      <rect x="52" y="22" width="116" height="98" rx="32" fill="url(#cr-head-fill)"
        stroke="rgba(14,165,233,0.25)" strokeWidth="1.2" />

      {/* ── Head top accent ── */}
      <rect x="72" y="18" width="76" height="10" rx="5" fill="#1a2744"
        stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />

      {/* ── Ear/sensor modules ── */}
      <rect x="38" y="42" width="16" height="36" rx="6" fill="#121c30"
        stroke="rgba(14,165,233,0.28)" strokeWidth="0.8" />
      <circle cx="46" cy="52" r="3" fill="#0ea5e9" fillOpacity="0.55" className="cr-sensor-pulse" />
      <rect x="166" y="42" width="16" height="36" rx="6" fill="#121c30"
        stroke="rgba(14,165,233,0.28)" strokeWidth="0.8" />
      <circle cx="174" cy="52" r="3" fill="#0ea5e9" fillOpacity="0.55" className="cr-sensor-pulse" />

      {/* ── Layer 4: Face panel ── */}
      <rect x="64" y="42" width="92" height="62" rx="22" fill="url(#cr-face-fill)"
        stroke="rgba(14,165,233,0.15)" strokeWidth="0.8" />

      {/* ── Face inner lines (dimension) ── */}
      <line x1="68" y1="55" x2="152" y2="55" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />
      <line x1="68" y1="90" x2="152" y2="90" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />

      {/* ── Layer 5: Eyes ── */}
      <g className="cr-eyes">
        <ellipse cx="88" cy="64" rx="14" ry="10" fill="url(#cr-eye-glow)" fillOpacity="0.9" />
        <ellipse cx="88" cy="64" rx="14" ry="10" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
        <ellipse cx="88" cy="64" rx="6" ry="4.5" fill="#e0f2fe" fillOpacity="0.9" />
        <ellipse cx="88" cy="63" rx="2.5" ry="1.8" fill="white" fillOpacity="0.95" />

        <ellipse cx="132" cy="64" rx="14" ry="10" fill="url(#cr-eye-glow)" fillOpacity="0.9" />
        <ellipse cx="132" cy="64" rx="14" ry="10" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.5" />
        <ellipse cx="132" cy="64" rx="6" ry="4.5" fill="#e0f2fe" fillOpacity="0.9" />
        <ellipse cx="132" cy="63" rx="2.5" ry="1.8" fill="white" fillOpacity="0.95" />
      </g>

      {/* ── Eye glow halos ── */}
      <ellipse cx="88" cy="64" rx="20" ry="14" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.15" className="cr-eye-halo" />
      <ellipse cx="132" cy="64" rx="20" ry="14" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.15" className="cr-eye-halo" />

      {/* ── Mouth / speaker grille ── */}
      <line x1="96" y1="84" x2="124" y2="84" stroke="rgba(14,165,233,0.35)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="100" y1="88" x2="120" y2="88" stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" strokeLinecap="round" />

      {/* ── Forehead AI core ── */}
      <g className="cr-core-pulse">
        <circle cx="110" cy="36" r="7" fill="#0ea5e9" fillOpacity="0.2" />
        <circle cx="110" cy="36" r="5" fill="#0ea5e9" fillOpacity="0.7" />
        <circle cx="110" cy="36" r="3" fill="#38bdf8" />
        <circle cx="110" cy="36" r="9" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeOpacity="0.3" />
      </g>

      {/* ── Neck ── */}
      <rect x="96" y="120" width="28" height="20" rx="5" fill="url(#cr-neck-grad)"
        stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />
      <line x1="102" y1="126" x2="118" y2="126" stroke="rgba(14,165,233,0.12)" strokeWidth="0.5" />
      <line x1="102" y1="132" x2="118" y2="132" stroke="rgba(14,165,233,0.12)" strokeWidth="0.5" />

      {/* ── Shoulders ── */}
      <path d="M56 150 Q56 140 72 140 L148 140 Q164 140 164 150 L164 162 Q164 168 158 168 L62 168 Q56 168 56 162 Z"
        fill="url(#cr-shoulder-grad)" stroke="rgba(14,165,233,0.2)" strokeWidth="0.8" />

      {/* ── Body ── */}
      <rect x="62" y="148" width="96" height="88" rx="18" fill="url(#cr-body-fill)"
        stroke="rgba(14,165,233,0.22)" strokeWidth="1" />

      {/* ── Body panel lines (depth) ── */}
      <line x1="70" y1="160" x2="150" y2="160" stroke="rgba(14,165,233,0.08)" strokeWidth="0.5" />
      <line x1="70" y1="218" x2="150" y2="218" stroke="rgba(14,165,233,0.08)" strokeWidth="0.5" />
      <line x1="110" y1="160" x2="110" y2="218" stroke="rgba(14,165,233,0.06)" strokeWidth="0.5" />

      {/* ── Chest core / certificate indicator ── */}
      <g className="cr-chest-core">
        <circle cx="110" cy="182" r="14" fill="rgba(14,165,233,0.08)" />
        <circle cx="110" cy="182" r="10" fill="none" stroke="#0ea5e9" strokeWidth="0.6" strokeOpacity="0.35" />
        <circle cx="110" cy="182" r="6" fill="#0ea5e9" fillOpacity="0.35" />
        <circle cx="110" cy="182" r="3" fill="#38bdf8" fillOpacity="0.8" />
        <circle cx="110" cy="182" r="18" fill="none" stroke="#0ea5e9" strokeWidth="0.4" strokeOpacity="0.15" className="cr-core-ring" />
      </g>

      {/* ── Certificate badge on chest ── */}
      <g>
        <rect x="90" y="200" width="40" height="16" rx="4" fill="rgba(14,165,233,0.12)"
          stroke="rgba(14,165,233,0.3)" strokeWidth="0.6" />
        <text x="110" y="211" textAnchor="middle" fontSize="7" fontWeight="700"
          fill="#7dd3fc" fontFamily="'Courier New', monospace" letterSpacing="0.06em">CERT</text>
      </g>

      {/* ── Body detail lights ── */}
      <circle cx="82" cy="175" r="2" fill="#8b5cf6" fillOpacity="0.4" className="cr-detail-light" />
      <circle cx="138" cy="175" r="2" fill="#0ea5e9" fillOpacity="0.4" className="cr-detail-light" />
      <circle cx="82" cy="215" r="1.5" fill="#0ea5e9" fillOpacity="0.3" className="cr-detail-light" />
      <circle cx="138" cy="215" r="1.5" fill="#8b5cf6" fillOpacity="0.3" className="cr-detail-light" />

      {/* ── Arm stubs ── */}
      <rect x="42" y="158" width="18" height="48" rx="9" fill="#121c30"
        stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />
      <rect x="160" y="158" width="18" height="48" rx="9" fill="#121c30"
        stroke="rgba(14,165,233,0.18)" strokeWidth="0.8" />

      {/* ── Foreground highlights (depth) ── */}
      <rect x="62" y="28" width="50" height="8" rx="4" fill="white" fillOpacity="0.04" />
      <rect x="68" y="152" width="40" height="5" rx="2.5" fill="white" fillOpacity="0.03" />

      {/* ── Floating particles around robot ── */}
      <g className="cr-particles">
        <circle cx="28" cy="60" r="1.5" fill="#0ea5e9" fillOpacity="0.5" />
        <circle cx="192" cy="48" r="1.2" fill="#8b5cf6" fillOpacity="0.45" />
        <circle cx="35" cy="180" r="1" fill="#a78bfa" fillOpacity="0.4" />
        <circle cx="185" cy="200" r="1.3" fill="#38bdf8" fillOpacity="0.4" />
        <circle cx="18" cy="130" r="1.4" fill="#0ea5e9" fillOpacity="0.35" />
        <circle cx="202" cy="140" r="1.1" fill="#8b5cf6" fillOpacity="0.35" />
        <circle cx="52" cy="250" r="1" fill="#38bdf8" fillOpacity="0.3" />
        <circle cx="168" cy="260" r="1.2" fill="#a78bfa" fillOpacity="0.3" />
      </g>

      {/* ── Signal/data pulse line ── */}
      <line x1="110" y1="250" x2="110" y2="270" stroke="#0ea5e9" strokeWidth="0.8" strokeOpacity="0.2" className="cr-signal" />
      <circle cx="110" cy="250" r="2" fill="#0ea5e9" fillOpacity="0.5" className="cr-signal-dot" />
    </svg>
  );
}
