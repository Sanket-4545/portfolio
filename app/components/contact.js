'use client';

export default function Contact() {

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: '📱', label: 'WhatsApp', href: 'https://wa.me/1234567890' },
    { icon: '📷', label: 'Instagram', href: 'https://instagram.com' },
    { icon: '📧', label: 'Email', href: 'mailto:sanketdbhojane045@gmail.com' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-slide-up">
          <h2 className="text-5xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-slate-400 text-lg">Connect with me on social media or reach out directly</p>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-900/50 border border-purple-500/20 rounded-lg hover:glow-purple transition-all group"
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-white font-semibold group-hover:text-purple-400 transition-colors">{link.label}</span>
                  <span className="ml-auto text-slate-500 group-hover:text-purple-400 transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="p-6 bg-slate-900/50 border border-cyan-500/20 rounded-lg hover:glow-cyan transition-all">
                <p className="text-cyan-400 font-semibold mb-2">📧 Email</p>
                <p className="text-slate-300">sanketdbhojane045@gmail.com</p>
              </div>

              <div className="p-6 bg-slate-900/50 border border-pink-500/20 rounded-lg hover:glow-pink transition-all">
                <p className="text-pink-400 font-semibold mb-2">⏰ Availability</p>
                <p className="text-slate-300">Always open to new opportunities and collaborations</p>
              </div>

              <div className="p-6 bg-slate-900/50 border border-purple-500/20 rounded-lg hover:glow-purple transition-all">
                <p className="text-purple-400 font-semibold mb-2">💬 Messages</p>
                <p className="text-slate-300">Use the Messages section above to send me a message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
