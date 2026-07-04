'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Messages', href: '#messages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-(--background) backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-extrabold text-white tracking-tight shadow-lg shadow-cyan-500/20">
                S
              </div>
              <div>
                <span className="text-(--foreground) font-bold text-lg sm:text-xl">Sanket</span>
                <p className="text-cyan-600 text-sm">Portfolio</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-(--foreground) hover:text-cyan-400 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-(--background) border border-cyan-500/30 flex items-center justify-center hover:glow-cyan transition-all"
          >
            <span className="text-cyan-600">{isOpen ? '✕' : '☰'}</span>
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:block px-6 py-2 bg-linear-to-r from-cyan-500 to-cyan-600 text-(--foreground) font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-slate-200/20 pt-4">
            {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-4 py-2 text-(--foreground) hover:text-cyan-400 hover:bg-(--background) rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
                className="block px-4 py-2 bg-linear-to-r from-cyan-500 to-cyan-600 text-(--foreground) font-bold rounded-lg hover:shadow-lg transition-all"
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
