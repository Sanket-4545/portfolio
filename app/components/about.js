'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-slate-100">About Me</h2>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Reveal delay={100} className="shrink-0">
            <div className="about-photo-wrap">
              <div className="about-photo-ring" />
              <Image
                src="/Sanket.jpg"
                alt="Sanket Dadasaheb Bhojane"
                width={224}
                height={224}
                className="about-photo"
                sizes="(max-width: 768px) 192px, 224px"
                style={{ objectPosition: 'center 15%' }}
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={200} className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 mb-1">Sanket Dadasaheb Bhojane</h3>
            <p className="text-cyan-400 font-semibold text-sm mb-1">MERN Stack Developer</p>
            <p className="text-slate-400 text-sm mb-4">Computer Science Engineering Student</p>

            <p className="text-slate-300 text-base mb-3 leading-relaxed">
              Motivated Computer Science student with a strong foundation in full-stack web development and a passion for building scalable applications. I enjoy creating clean, responsive, and user-friendly websites using Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-slate-300 text-base mb-6 leading-relaxed">
              Currently pursuing my B.Tech. in Computer Science and Engineering at SVERI&apos;s College of Engineering, Pandharpur. I am seeking a Software Engineering internship to apply my problem-solving skills, contribute to impactful projects, and continuously learn in a dynamic environment.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-purple-400">9.38</div>
                <div className="text-xs text-slate-400">CGPA</div>
              </div>
              <div className="bg-slate-800/50 border border-pink-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-pink-400">2028</div>
                <div className="text-xs text-slate-400">Graduation</div>
              </div>
              <div className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-cyan-400">B.Tech</div>
                <div className="text-xs text-slate-400">CSE</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
