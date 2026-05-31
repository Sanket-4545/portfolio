'use client';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'cyan',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Responsive Design']
    },
    {
      category: 'Backend',
      color: 'purple',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JavaScript']
    },
    {
      category: 'Currently Learning',
      color: 'pink',
      skills: ['Java', 'DSA (Data Structures & Algorithms)', 'Git', 'GitHub', 'Problem Solving']
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-5xl font-bold mb-4 text-white">💡 Skills</h2>
          <p className="text-slate-400 text-lg">I have strong knowledge of front-end and back-end technologies that I use to design and build responsive websites</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((skillGroup, idx) => (
            <div 
              key={idx}
              className="animate-slide-up preserve-3d hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <div className={`bg-slate-900/50 border border-${skillGroup.color}-500/20 rounded-2xl p-8 backdrop-blur-sm hover:glow-${skillGroup.color} transition-all`}>
                <h3 className={`text-2xl font-bold mb-6 text-${skillGroup.color}-400`}>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className={`flex items-center text-slate-300 hover:text-${skillGroup.color}-400 transition-colors cursor-pointer group`}
                    >
                      <span className={`w-2 h-2 rounded-full bg-${skillGroup.color}-400 mr-3 group-hover:scale-150 transition-transform`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
