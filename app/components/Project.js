'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A Netflix-inspired platform recreating the interface and basic functionality with responsive design',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'cyan',
      emoji: '🎬',
      link: '#'
    },
    {
      title: 'Spotify Clone',
      description: 'A Spotify-like music application interface with interactive features and smooth animations',
      tags: ['React', 'CSS', 'JavaScript'],
      color: 'purple',
      emoji: '🎵',
      link: 'https://sanket-4545.github.io/SDB-music/'
    },
    {
      title: 'Hacking Terminal',
      description: 'An interactive terminal emulator with command simulation and visual effects',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'pink',
      emoji: '⌨️',
      link: '#'
    },
    {
      title: 'Random Color Change Box',
      description: 'Interactive project demonstrating DOM manipulation and event handling with color transitions',
      tags: ['JavaScript', 'CSS', 'DOM API'],
      color: 'cyan',
      emoji: '🎨',
      link: 'https://sanket-4545.github.io/Random-colour-change-box/'
    },
    {
      title: 'Login Page',
      description: 'A secure and responsive login page with form validation and smooth user experience',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'purple',
      emoji: '🔐',
      link: 'https://sanket-4545.github.io/login-page/'
    },
    {
      title: 'Todo List',
      description: 'A task manager app with add, complete, and remove functionality for daily productivity',
      tags: ['React', 'CSS', 'JavaScript'],
      color: 'pink',
      emoji: '📝',
      link: 'https://todo-list-drab-eight-19.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-5xl font-bold mb-4 text-slate-900 fraktur-heading">Projects</h2>
          <p className="text-slate-700 text-lg">I have worked on several web development projects that showcase my skills and creativity</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const colorClasses = {
              cyan: {
                border: 'border-cyan-500/20',
                text: 'text-cyan-300',
                button: 'border-cyan-500 text-cyan-400',
                bg: 'bg-cyan-500/10',
                glow: 'shadow-cyan-500/30'
              },
              purple: {
                border: 'border-purple-500/20',
                text: 'text-purple-300',
                button: 'border-purple-500 text-purple-400',
                bg: 'bg-purple-500/10',
                glow: 'shadow-purple-500/30'
              },
              pink: {
                border: 'border-pink-500/20',
                text: 'text-pink-300',
                button: 'border-pink-500 text-pink-400',
                bg: 'bg-pink-500/10',
                glow: 'shadow-pink-500/30'
              }
            };
            
            const colors = colorClasses[project.color];
            
            return (
              <div
                key={idx}
                className="group animate-slide-up preserve-3d transition-all duration-300"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:${colors.glow} hover:-translate-y-2`}>
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{project.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 fraktur-heading">{project.title}</h3>
                  <p className="text-slate-400 mb-4 grow">{project.description}</p>
                  
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
                    className={`block text-center w-full py-2 px-4 rounded-lg border-2 ${colors.button} font-semibold hover:${colors.bg} transition-all duration-300 group-hover:translate-x-1`}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
