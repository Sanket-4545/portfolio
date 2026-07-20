'use client';

import Sanket from './image/Sanket.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        
        {/* Profile Photo */}
        <div className="shrink-0 animate-fade-in-scale">
          <div className="relative w-60 h-80 md:w-72 md:h-96">
            <div className="relative w-full h-full rounded-3xl border border-slate-300 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105 hover:-rotate-1" style={{background: 'var(--surface)'}}>
              <img 
                src={Sanket.src} 
                alt="Sanket Dadasaheb Bhojane" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 animate-fade-up delay-100 whitespace-nowrap">
            <span className="gradient-text">Sanket Dadasaheb Bhojane</span>
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-cyan-600 mb-6 animate-fade-up delay-400">
            MERN Stack Developer
          </p>

          <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8 animate-fade-up delay-500">
            I build modern, responsive web applications using HTML, CSS and JavaScript. I focus on clean code, good UX and scalable solutions.
          </p>

              {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-600">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 hover:scale-105 transition-all"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-600 font-bold rounded-lg hover:bg-cyan-50 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
