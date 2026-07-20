'use client';

import Reveal from './Reveal';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      color: 'cyan',
      skills: ['Java', 'JavaScript', 'C']
    },
    {
      category: 'Frontend',
      color: 'purple',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Next.js']
    },
    {
      category: 'Backend & Database',
      color: 'pink',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MongoDB Atlas']
    },
    {
      category: 'Tools',
      color: 'cyan',
      skills: ['GitHub', 'VS Code', 'Vercel', 'Windows 11']
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <Reveal className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 text-slate-900">💡 Skills</h2>
          <p className="text-slate-700 text-lg">I have strong knowledge of front-end and back-end technologies that I use to design and build responsive websites</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((skillGroup, idx) => (
            <Reveal
              key={idx}
              delay={idx * 150}
            >
              <div className={`bg-white border border-${skillGroup.color}-500/20 rounded-2xl p-8 shadow-sm lift-hover h-full`}>
                <h3 className={`text-2xl font-bold mb-6 text-${skillGroup.color}-600`}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className={`flex items-center text-slate-700 hover:text-${skillGroup.color}-600 transition-colors cursor-pointer group`}
                    >
                      <span className={`w-2 h-2 rounded-full bg-${skillGroup.color}-400 mr-3`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
