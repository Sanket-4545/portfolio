'use client';

import { useState, useEffect } from 'react';
import CVDownloadModal from './CVDownloadModal';
import HeroRobot3D from './HeroRobot3D';
import './hero-robot.css';

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

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-4 hero-grid animate-fade-in-scale">

        {/* HERO ROBOT EXPERIMENT — 3D Robot Visual */}
        <HeroRobot3D />

        {/* Text Content */}
        <div className="hero-text flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl relative z-10">
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
