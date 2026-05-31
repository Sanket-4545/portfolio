'use client';

import { useEffect, useRef } from 'react';

export default function CursorFlower() {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '💐'];
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create flower particle
      const flower = document.createElement('div');
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.position = 'fixed';
      flower.style.left = mouseX + 'px';
      flower.style.top = mouseY + 'px';
      flower.style.pointerEvents = 'none';
      flower.style.fontSize = '1.5rem';
      flower.style.zIndex = '9999';
      flower.style.opacity = '1';
      flower.style.transform = 'translate(-50%, -50%) scale(1)';
      flower.style.transition = 'all 0.8s ease-out';

      container.appendChild(flower);

      // Animate flower falling
      setTimeout(() => {
        flower.style.opacity = '0';
        flower.style.transform = `translate(-50%, -100px) scale(0.5)`;
      }, 10);

      // Remove particle after animation
      setTimeout(() => {
        flower.remove();
      }, 800);

      particlesRef.current.push(flower);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
}
