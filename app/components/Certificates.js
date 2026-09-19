'use client';

import Reveal from './Reveal';

const certificates = [
  {
    id: 1,
    title: 'Object Oriented Programming through Programming in Java',
    issuer: 'CodeChef',
    date: 'April 25, 2026',
    credentialId: '0d9dcc7',
    image: '/sanket9699-OOPS through Java.pdf',
    color: '#0ea5e9',
  },
  {
    id: 2,
    title: 'Data Structure in C',
    issuer: 'To be confirmed',
    date: 'To be confirmed',
    credentialId: null,
    image: '/sanket9699-Data Structure in C.pdf',
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Learn Python',
    issuer: 'To be confirmed',
    date: 'To be confirmed',
    credentialId: null,
    image: '/sanket9699-Learn Python.pdf',
    color: '#ec4899',
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="certs-section"
      aria-label="Certificates"
    >
      <div className="certs-container">
        <Reveal className="certs-header">
          <h2 className="certs-heading">Certificates</h2>
          <p className="certs-subheading">Professional certifications and achievements</p>
        </Reveal>

        <div className="certs-list">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 150}>
              <div className="cert-card">
                <div className="cert-card-accent" style={{ background: cert.color }} />
                <div className="cert-card-content">
                  <div className="cert-card-icon" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <rect x="2" y="4" width="24" height="20" rx="3" stroke={cert.color} strokeWidth="1.5" fill="none" />
                      <line x1="7" y1="10" x2="21" y2="10" stroke={cert.color} strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
                      <line x1="7" y1="14" x2="17" y2="14" stroke={cert.color} strokeWidth="1" strokeOpacity="0.4" strokeLinecap="round" />
                      <line x1="7" y1="18" x2="13" y2="18" stroke={cert.color} strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <p className="cert-card-issuer">{cert.issuer}</p>
                  <p className="cert-card-date">{cert.date}</p>
                  {cert.credentialId && <p className="cert-card-id">ID: {cert.credentialId}</p>}
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card-link"
                  >
                    View Certificate &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
