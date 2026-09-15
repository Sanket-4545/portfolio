'use client';

import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────────
   Animated canvas background
   • Star-field (depth-based speed & size)
   • Connected floating particles (mesh / constellation effect)
   • Slow gradient aurora blobs
   • Fully mobile-responsive — particle count auto-scales to viewport
   ───────────────────────────────────────────────────────────────── */

function lerp(a, b, t) { return a + (b - a) * t; }

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    /* ── helpers ── */
    const isMobile = () => window.innerWidth <= 768;
    const isReduced = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W, H, dpr;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    /* ── stars ── */
    const starCount = () => (isMobile() ? 90 : 180);
    let stars = [];
    const initStars = () => {
      stars = Array.from({ length: starCount() }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random(),          // 0 = far, 1 = close
        twinkle: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.2,
      }));
    };
    initStars();

    /* ── mesh particles ── */
    const meshCount = () => (isMobile() ? 28 : 55);
    let mesh = [];
    const LINK_DIST = isMobile() ? 130 : 180;

    const initMesh = () => {
      mesh = Array.from({ length: meshCount() }, (_, i) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1.2 + Math.random() * 1.6,
        hue: Math.random() > 0.5 ? 200 : 268,  // cyan or violet
      }));
    };
    initMesh();

    /* ── aurora blobs ── */
    const blobs = [
      { x: 0.15, y: 0.25, r: 0.38, hue: 268, speed: 0.00018 },
      { x: 0.75, y: 0.60, r: 0.42, hue: 200, speed: 0.00014 },
      { x: 0.50, y: 0.85, r: 0.30, hue: 230, speed: 0.00022 },
    ];

    let t = 0;
    let raf;

    /* ── draw loop ── */
    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      if (!isReduced()) {
        /* ── aurora ── */
        blobs.forEach((b) => {
          const bx = lerp(0, W, b.x + Math.sin(t * b.speed * 60) * 0.08);
          const by = lerp(0, H, b.y + Math.cos(t * b.speed * 45) * 0.06);
          const br = Math.min(W, H) * b.r;
          const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
          g.addColorStop(0, `hsla(${b.hue}, 90%, 55%, 0.055)`);
          g.addColorStop(1, 'transparent');
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, H);
        });

        /* ── stars ── */
        stars.forEach((s) => {
          s.y -= s.speed;
          if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }
          s.twinkle += 0.03;
          const alpha = 0.35 + 0.45 * Math.abs(Math.sin(s.twinkle));
          const radius = 0.5 + s.z * 1.2;
          ctx.beginPath();
          ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 230, 255, ${alpha})`;
          ctx.fill();
        });

        /* ── mesh links ── */
        const ld = isMobile() ? 130 : 180;
        for (let i = 0; i < mesh.length; i++) {
          for (let j = i + 1; j < mesh.length; j++) {
            const a = mesh[i], b = mesh[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < ld) {
              const alpha = (1 - dist / ld) * 0.18;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(100,180,255,${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

        /* ── mesh particles ── */
        mesh.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) { p.x = 0; p.vx *= -1; }
          if (p.x > W) { p.x = W; p.vx *= -1; }
          if (p.y < 0) { p.y = 0; p.vy *= -1; }
          if (p.y > H) { p.y = H; p.vy *= -1; }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 85%, 72%, 0.65)`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.5)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        /* ── shooting stars (rare, desktop only) ── */
        if (!isMobile() && t % 320 === 0) {
          const sx = Math.random() * W;
          const sy = Math.random() * H * 0.5;
          const len = 80 + Math.random() * 60;
          const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.4);
          grad.addColorStop(0, 'rgba(255,255,255,0)');
          grad.addColorStop(0.5, 'rgba(180,230,255,0.7)');
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(sx + len, sy + len * 0.4);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      } else {
        /* reduced-motion: static dim overlay only */
        const g = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, Math.max(W, H) * 0.7);
        g.addColorStop(0, 'rgba(14,165,233,0.04)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      resize();
      initStars();
      initMesh();
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      {/* Deep base gradient — always rendered even before canvas */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background:
            'radial-gradient(ellipse at 20% 20%, rgba(139,92,246,0.08) 0%, transparent 55%),' +
            'radial-gradient(ellipse at 80% 70%, rgba(14,165,233,0.07) 0%, transparent 50%),' +
            'linear-gradient(180deg, #050508 0%, #080b14 100%)',
          pointerEvents: 'none',
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          display: 'block',
        }}
      />
    </>
  );
}
