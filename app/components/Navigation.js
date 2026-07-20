'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200" style={{background: 'var(--surface)'}}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white" style={{background: 'var(--accent-cyan)'}}>
                S
              </div>
              <div>
                <span className="font-bold text-lg" style={{color: 'var(--foreground)'}}>Sanket</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-cyan-500 transition-colors font-medium"
                style={{color: 'var(--foreground)'}}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            <span className="text-cyan-500">{isOpen ? '✕' : '☰'}</span>
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:block px-6 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-200 pt-4">
            {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-4 py-2 hover:text-cyan-500 hover:bg-slate-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{color: 'var(--foreground)'}}
                >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
