'use client';

import { useState, useEffect, useRef } from 'react';
import CVDownloadModal from './CVDownloadModal';

const ROLES = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
  'Next.js Enthusiast',
  'Problem Solver',
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const SIZE = 340;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2, cy = SIZE / 2;
    const particles = Array.from({ length: 28 }, (_, i) => ({
      angle: (i / 28) * Math.PI * 2,
      radius: 145 + Math.random() * 18,
      speed: 0.003 + Math.random() * 0.004,
      size: 1.2 + Math.random() * 2,
      alpha: 0.3 + Math.random() * 0.5,
      hue: Math.random() > 0.5 ? 200 : 270,
    }));
    let frame;
    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      particles.forEach((p) => {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 70%, 0.5)`;
        ctx.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: '-10px', width: 'calc(100% + 20px)', height: 'calc(100% + 20px)', pointerEvents: 'none', zIndex: 2 }}
    />
  );
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

        {/* Profile Photo with animated glow ring & particles */}
        <div className="shrink-0 hero-photo-wrap animate-fade-in-scale">
          <div className="relative" style={{ width: 240, height: 320 }}>
            {/* Rotating gradient ring */}
            <div className="hero-ring" />
            {/* Particle orbit */}
            <Particles />
            {/* Photo card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl z-10"
              style={{ background: 'var(--surface)', border: '1px solid rgba(14,165,233,0.3)' }}>
              <img
                src="/Sanket.jpg"
                alt="Sanket Dadasaheb Bhojane"
                className="w-full h-full object-cover"
              />
              {/* Shine sweep */}
              <div className="hero-shine" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          {/* Badge */}
          <div className="hero-badge animate-fade-up delay-100 mb-4">
            <span className="hero-badge-dot" />
            Available for Internship
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-up delay-200">
            <span className="gradient-text">Sanket Dadasaheb Bhojane</span>
          </h1>

          {/* Typewriter role */}
          <div className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6 animate-fade-up delay-300 h-8 flex items-center gap-1">
            <span>{role}</span>
            <span className="hero-cursor">|</span>
          </div>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 animate-fade-up delay-400">
            I build modern, responsive web applications using HTML, CSS and JavaScript.
            I focus on clean code, great UX and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-up delay-500">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              <span className="btn-shimmer" />
              <span className="relative z-10">⬇ Download CV</span>
            </button>

            <a
              href="#contact"
              className="btn-outline"
            >
              Get in Touch →
            </a>
          </div>

          {/* Scroll hint */}
          <div className="hero-scroll-hint animate-fade-up delay-600 mt-10 hidden lg:flex">
            <div className="hero-scroll-mouse">
              <div className="hero-scroll-wheel" />
            </div>
            <span className="text-slate-500 text-xs ml-2">Scroll down</span>
          </div>
        </div>
      </div>

      <CVDownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
