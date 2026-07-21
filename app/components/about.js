'use client';

import Image from 'next/image';
import Reveal from './Reveal';
import sanketAbout from './image/sanketabout.jpg';

export default function About() {
  return (
    <section id="about" className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">About Me</h2>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <Reveal delay={100} className="shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg">
              <Image
                src={sanketAbout}
                alt="Sanket Dadasaheb Bhojane"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </Reveal>

          <Reveal delay={200} className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-1">Sanket Dadasaheb Bhojane</h3>
            <p className="text-cyan-600 font-semibold text-sm mb-1">MERN Stack Developer</p>
            <p className="text-slate-600 text-sm mb-4">Computer Science Engineering Student</p>

            <p className="text-slate-700 text-base mb-3 leading-relaxed">
              Motivated Computer Science student with a strong foundation in full-stack web development and a passion for building scalable applications. I enjoy creating clean, responsive, and user-friendly websites using Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-slate-700 text-base mb-6 leading-relaxed">
              Currently pursuing my B.Tech. in Computer Science and Engineering at SVERI&apos;s College of Engineering, Pandharpur. I am seeking a Software Engineering internship to apply my problem-solving skills, contribute to impactful projects, and continuously learn in a dynamic environment.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 border border-purple-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-purple-600">9.38</div>
                <div className="text-xs text-slate-600">CGPA</div>
              </div>
              <div className="bg-slate-50 border border-pink-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-pink-600">2028</div>
                <div className="text-xs text-slate-600">Graduation</div>
              </div>
              <div className="bg-slate-50 border border-cyan-500/20 rounded-lg p-3 lift-hover text-center">
                <div className="text-xl font-bold text-cyan-600">B.Tech</div>
                <div className="text-xs text-slate-600">CSE</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
