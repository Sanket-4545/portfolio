'use client';

export default function LightPillar({
  topColor = '#5227FF',
  bottomColor = '#FF9FFC',
  className = ''
}) {
  // Removed heavy Three.js WebGL rendering
  // Replaced with simple CSS gradient background
  return (
    <div 
      className={className}
      style={{
        background: `linear-gradient(135deg, ${topColor}15 0%, ${bottomColor}15 100%)`,
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

