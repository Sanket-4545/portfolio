'use client';

import Image from 'next/image';
import SanketAbout from './image/sanketabout.jpg';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Photo */}
          <Reveal>
            <div className="relative h-full flex flex-col">
              <div className="relative h-full flex flex-col rounded-3xl overflow-hidden">
               <div
   className="relative rounded-3xl overflow-hidden shadow-xl p-[3px]"
   style={{ background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899)" }}
 >
   <div className="relative w-full rounded-3xl overflow-hidden bg-slate-100">
     <Image
       src={SanketAbout}
       alt="Sanket About"
       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
       className="w-full h-auto object-contain"
       placeholder="blur"
     />
   </div>
 </div>

                  <div className="mt-4 p-6 bg-slate-50 rounded-3xl border border-cyan-500/10">
                    <p className="text-cyan-600 font-semibold text-center text-lg">MERN Stack Developer</p>
                    <p className="text-slate-600 text-center text-sm mt-2">Computer Science Engineering Student</p>
                  </div>
                </div>
              </div>
          </Reveal>

          {/* Right side - About text */}
          <Reveal delay={150} className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-5xl font-bold mb-4 text-slate-900">About Me</h2>
              <h3 className="text-2xl font-bold text-slate-800">Sanket Dadasaheb Bhojane</h3>
            </div>
            <p className="text-slate-700 text-lg mb-4 leading-relaxed mt-6">
              Motivated Computer Science student with a strong foundation in full-stack web development and a passion for building scalable applications. I enjoy creating clean, responsive, and user-friendly websites using Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              Currently pursuing my B.Tech. in Computer Science and Engineering at SVERI&apos;s College of Engineering, Pandharpur. I am seeking a Software Engineering internship to apply my problem-solving skills, contribute to impactful projects, and continuously learn in a dynamic environment.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-50 border border-purple-500/20 rounded-lg p-4 lift-hover">
                <div className="text-2xl font-bold text-purple-600">9.38</div>
                <div className="text-sm text-slate-600">CGPA</div>
              </div>
              <div className="bg-slate-50 border border-pink-500/20 rounded-lg p-4 lift-hover">
                <div className="text-2xl font-bold text-pink-600">2028</div>
                <div className="text-sm text-slate-600">Graduation</div>
              </div>
              <div className="bg-slate-50 border border-cyan-500/20 rounded-lg p-4 lift-hover">
                <div className="text-2xl font-bold text-cyan-600">B.Tech</div>
                <div className="text-sm text-slate-600">CSE</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
