'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-(--background) border-t border-cyan-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-(--foreground)">
                ✦
              </div>
              <span className="text-(--foreground) font-bold">Portfolio</span>
            </div>
            <p className="text-slate-400 text-sm">Building amazing digital experiences</p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h3 className="text-(--foreground) font-bold mb-4 fraktur-heading">Quick Links</h3>
            <ul className="space-y-2 text-(--foreground) text-sm">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-slide-up">
            <h3 className="text-(--foreground) font-bold mb-4 fraktur-heading">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-(--background) border border-cyan-500/30 flex items-center justify-center hover:glow-cyan transition-all text-cyan-600 hover:text-cyan-500">🐙</a>
              <a href="#" className="w-10 h-10 rounded-lg bg-(--background) border border-purple-500/30 flex items-center justify-center hover:glow-purple transition-all text-purple-600 hover:text-purple-500">💼</a>
              <a href="#" className="w-10 h-10 rounded-lg bg-(--background) border border-pink-500/30 flex items-center justify-center hover:glow-pink transition-all text-pink-600 hover:text-pink-500">𝕏</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/20 py-6"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-(--foreground) text-sm">
          <p>&copy; {currentYear} Sanket Dadasaheb Bhojane. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
