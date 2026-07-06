'use client';

import NameAnimator from './NameAnimator';
import Sanket from './image/Sanket.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="hero-pulse-circle"></div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        {/* Left side - Profile Photo with decorative elements */}
        <div className="shrink-0 animate-slide-in-left">
          <div className="relative w-60 h-80 md:w-72 md:h-96">
            {/* Decorative background blur circles */}
            <div className="absolute -inset-8 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            
            {/* Photo container with enhanced styling */}
            <div className="relative w-full h-full rounded-3xl border-4 border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-500 bg-slate-900/50 backdrop-blur-sm">
              <img 
                src={Sanket.src} 
                alt="Sanket Dadasaheb Bhojane" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-400/20 opacity-0 hero-photo-overlay pointer-events-none"></div>
            </div>

            {/* Floating corner accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-cyan-400 rounded-full opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-purple-400 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          {/* Main heading with 3D text effect */}
          <div className="animate-slide-up mb-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight fraktur-heading">
              <div>
                <NameAnimator className="text-slate-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">Sanket</NameAnimator>
              </div>
              <div>
                <NameAnimator className="text-slate-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]">Dadasaheb</NameAnimator>
              </div>
              <div>
                <NameAnimator className="text-cyan-700 drop-shadow-[0_0_14px_rgba(0,217,255,0.25)]">Bhojane</NameAnimator>
              </div>
            </h1>
          </div>

          {/* Role subtitle */}
          <div className="animate-slide-up mb-6" style={{ animationDelay: '0.1s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-cyan-700">
              MERN Stack Developer
            </p>
          </div>

          {/* Description */}
          <div className="animate-slide-up mb-8" style={{ animationDelay: '0.2s' }}>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              I build modern, responsive web applications using HTML, CSS and JavaScript. I focus on clean code, good UX and scalable solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#projects" 
              className="px-8 py-4 bg-linear-to-r from-cyan-500 to-cyan-600 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* 3D rotating cube */}
        <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-32 h-32 preserve-3d animate-rotate-3d">
            <div className="w-full h-full border-2 border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
