'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 py-12 px-4" style={{background: 'white'}}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-white">
                ✦
              </div>
              <span className="text-slate-900 font-bold">Portfolio</span>
            </div>
            <p className="text-slate-600 text-sm">Building amazing digital experiences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li><a href="#hero" className="hover:text-cyan-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-600 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-600 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a href="https://github.com/Sanket-4545" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:shadow-md transition-shadow text-slate-700" style={{color: 'var(--foreground)'}}>🐙</a>
              <a href="https://www.linkedin.com/in/sanket-bhojane-33aa0032b" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:shadow-md transition-shadow text-slate-700 hover:text-purple-600">💼</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:shadow-md transition-shadow text-slate-700 hover:text-pink-600">𝕏</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 py-6"></div>

            {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-700 text-sm">
          <p>&copy; {currentYear} Sanket Dadasaheb Bhojane. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
