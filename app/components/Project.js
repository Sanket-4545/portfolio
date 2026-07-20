'use client';

import Reveal from './Reveal';

export default function Projects() {
  const projects = [
    {
      title: 'Pandharpur Wari Management Platform',
      description: 'A full-stack platform to improve coordination between volunteers and pilgrims during the Pandharpur Wari. Includes emergency services, missing person support, lost & found, medical assistance, volunteer coordination, and an admin dashboard for managing emergency contacts.',
      tags: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'cyan',
      emoji: '🛕',
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing skills, projects, certifications, and contact information. Features interactive UI components, smooth animations, GitHub version control, and deployment on Vercel.',
      tags: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      color: 'purple',
      emoji: '💼',
      link: '#'
    },
    {
      title: 'To-Do List Application',
      description: 'A responsive task management application enabling users to create, edit, delete, and mark tasks as complete. Uses JavaScript DOM manipulation for dynamic updates and Tailwind CSS for a clean, modern UI.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      color: 'pink',
      emoji: '📝',
      link: 'https://todo-list-drab-eight-19.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <Reveal className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 text-slate-900">Projects</h2>
          <p className="text-slate-700 text-lg">I have worked on several web development projects that showcase my skills and creativity</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const colorClasses = {
              cyan: {
                border: 'border-cyan-500/20',
                text: 'text-cyan-600',
                button: 'border-cyan-500 text-cyan-600',
                bg: 'bg-cyan-50',
              },
              purple: {
                border: 'border-purple-500/20',
                text: 'text-purple-600',
                button: 'border-purple-500 text-purple-600',
                bg: 'bg-purple-50',
              },
              pink: {
                border: 'border-pink-500/20',
                text: 'text-pink-600',
                button: 'border-pink-500 text-pink-600',
                bg: 'bg-pink-50',
              }
            };
            
            const colors = colorClasses[project.color];
            
            return (
              <Reveal
                key={idx}
                delay={(idx % 3) * 120}
              >
                <div className={`bg-white border ${colors.border} rounded-2xl p-6 shadow-sm lift-hover h-full flex flex-col group`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">{project.emoji}</div>
                    {project.status && (
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-500/30 font-semibold">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-2 px-4 rounded-lg border-2 ${colors.button} font-semibold hover:${colors.bg} transition-colors`}
                  >
                    View Project →
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
