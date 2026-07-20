'use client';

export default function Contact() {

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanket-bhojane-33aa0032b' },
    { icon: '📱', label: 'WhatsApp', href: 'https://wa.me/9699007631' },
    { icon: '📷', label: 'Instagram', href: 'https://www.instagram.com/sanket.bhojane45' },
    { icon: '📧', label: 'Email', href: 'mailto:sanketdbhojane045@gmail.com' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 text-slate-900">Get in Touch</h2>
          <p className="text-slate-700 text-lg">Connect with me on social media or reach out directly</p>
        </div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                >
                  <span className="text-3xl">{link.icon}</span>
                  <span className="text-slate-900 font-semibold group-hover:text-cyan-600 transition-colors">{link.label}</span>
                  <span className="ml-auto text-slate-500 group-hover:text-cyan-600 transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="p-6 bg-white border border-cyan-500/20 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-cyan-600 font-semibold mb-2">📧 Email</p>
                <p className="text-slate-700">sanketdbhojane045@gmail.com</p>
              </div>

              <div className="p-6 bg-white border border-pink-500/20 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-pink-600 font-semibold mb-2">⏰ Availability</p>
                <p className="text-slate-700">Always open to new opportunities and collaborations</p>
              </div>

              <div className="p-6 bg-white border border-purple-500/20 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-purple-600 font-semibold mb-2">💬 Messages</p>
                <p className="text-slate-700">Use the contact links above to reach out.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
