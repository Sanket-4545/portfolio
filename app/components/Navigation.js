'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-700/50" style={{background: 'rgba(5, 5, 8, 0.85)', backdropFilter: 'blur(12px)'}}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style={{background: 'var(--accent-cyan)'}}>
                S
              </div>
              <div>
                <span className="font-bold text-lg text-slate-100">Sanket</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-cyan-400 transition-colors font-medium text-slate-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors"
          >
            <span className="text-cyan-400">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-700/50 pt-4">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
