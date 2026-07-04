'use client';

import Image from 'next/image';
import NameAnimator from './NameAnimator';
import Sanket from './image/Sanket.jpg';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Enhanced 3D card with photo */}
          <div className="animate-slide-in-left preserve-3d">
            <div className="relative h-full flex flex-col">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-3xl blur-2xl"></div>
              
              {/* Main card */}
              <div className="relative bg-slate-900/50 border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-sm hover:glow-cyan transition-all duration-500 h-full flex flex-col">
                {/* Photo container */}

                <div className="flex-1 relative overflow-hidden group">
                  <Image
                    src={Sanket}
                    alt="Sanket"
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Info section */}
                <div className="p-6 bg-linear-to-t from-slate-900/80 to-transparent">
                  <p className="text-cyan-400 font-semibold text-center text-lg">MERN Stack Developer</p>
                  <p className="text-slate-400 text-center text-sm mt-2">Computer Science Engineering Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About text with animations */}
          <div className="animate-slide-up flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-4 text-slate-900 fraktur-heading">
                <span className="animate-word">About</span>
                <span className="animate-word">Me</span>
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 fraktur-heading">
                <NameAnimator className="text-slate-900">Sanket Dadasaheb Bhojane</NameAnimator>
              </h3>
            </div>
            <p className="text-slate-700 text-lg mb-4 leading-relaxed mt-6">
              I am a Computer Science Engineering student with a strong interest in web development. I have solid knowledge of HTML, CSS, JavaScript, React, and Next.js. I also have experience with Node.js, Express, MongoDB and a basic understanding of C programming. I enjoy creating clean, responsive, and user-friendly websites.
            </p>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              My goal is to improve my technical skills and build projects that solve real-world problems. I focus on writing clean, maintainable code, delivering seamless user experiences, and constantly learning new technologies.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-4 hover:glow-purple transition-all">
                <div className="text-2xl font-bold text-purple-400">6+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="bg-slate-800/50 border border-pink-500/30 rounded-lg p-4 hover:glow-pink transition-all">
                <div className="text-2xl font-bold text-pink-400">CSE</div>
                <div className="text-sm text-slate-400">Student</div>
              </div>
              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 hover:glow-cyan transition-all">
                <div className="text-2xl font-bold text-cyan-400">Web</div>
                <div className="text-sm text-slate-400">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
