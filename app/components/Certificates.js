'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const certificate = {
  id: 1,
  title: 'Object Oriented Programming through Programming in Java',
  issuer: 'CodeChef',
  date: 'April 25, 2026',
  credentialId: '0d9dcc7',
  image: '/Codechef oops.pdf',
  color: '#0ea5e9',
};

const ring = { radius: 180, duration: 50, color: 'rgba(14, 165, 233, 0.12)' };

const techSymbols = [
  { char: '{ }', x: -320, y: -200, z: 40, rotX: 25, rotY: -15, delay: 0, dur: 18 },
  { char: '</>', x: 300, y: -170, z: -30, rotX: -20, rotY: 30, delay: 3, dur: 22 },
  { char: '( )', x: -280, y: 190, z: 20, rotX: 15, rotY: 25, delay: 6, dur: 20 },
  { char: '[ ]', x: 320, y: 160, z: -20, rotX: -30, rotY: -10, delay: 2, dur: 24 },
  { char: ';', x: 0, y: -280, z: 30, rotX: 10, rotY: 40, delay: 4, dur: 16 },
  { char: '=>', x: -50, y: 260, z: -40, rotX: -15, rotY: -25, delay: 7, dur: 21 },
  { char: 'fn', x: -350, y: 0, z: 15, rotX: 35, rotY: 20, delay: 1, dur: 19 },
  { char: '&&', x: 360, y: 20, z: -25, rotX: -25, rotY: -35, delay: 5, dur: 23 },
];

export default function Certificates() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const showCard = useCallback(() => {
    setIsActive(true);
  }, []);

  const hideCard = useCallback(() => {
    setIsActive(false);
  }, []);

  const toggleCard = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const handlePlanetKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard();
    }
    if (e.key === 'Escape') {
      setIsActive(false);
    }
  }, [toggleCard]);

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

        <Reveal delay={200}>
          <div
            className={`certs-universe ${isActive ? 'certs-universe--paused' : ''}`}
          >
            {/* 3D Tech visual */}
            <div className="certs-tech-scene" aria-hidden="true">
              <div className="certs-tech-rotator">
                {techSymbols.map((sym, i) => (
                  <span
                    key={i}
                    className="certs-tech-symbol"
                    style={{
                      left: `calc(50% + ${sym.x}px)`,
                      top: `calc(50% + ${sym.y}px)`,
                      transform: `translateZ(${sym.z}px) rotateX(${sym.rotX}deg) rotateY(${sym.rotY}deg)`,
                      animationDelay: `${sym.delay}s`,
                      animationDuration: `${sym.dur}s`,
                    }}
                  >
                    {sym.char}
                  </span>
                ))}
              </div>
            </div>

            {/* Orbit ring */}
            <div className="certs-rings" aria-hidden="true">
              <div
                className="certs-ring"
                style={{
                  width: ring.radius * 2,
                  height: ring.radius * 2,
                  borderColor: ring.color,
                }}
              />
            </div>

            {/* Central identity */}
            <div className="certs-center" aria-hidden="true">
              <div className="certs-center-glow" />
              <div className="certs-center-name">SANKET</div>
              <div className="certs-center-role">Developer &bull; CSE Student</div>
            </div>

            {/* Orbiting certificate */}
            <div
              className="certs-orbit"
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
                animationDuration: `${ring.duration}s`,
              }}
            >
              <div
                className="certs-planet"
                style={{
                  transform: `rotate(0deg) translateX(${ring.radius}px) rotate(0deg)`,
                }}
              >
                <div
                  className={`certs-orb ${isActive ? 'certs-orb--active' : ''}`}
                  role="button"
                  aria-label={`${certificate.title} from ${certificate.issuer}. ${isMobile ? 'Tap to view details.' : 'Hover or press to view details.'}`}
                  aria-expanded={isActive}
                  tabIndex={0}
                  style={{
                    '--oc': certificate.color,
                    width: 52,
                    height: 52,
                  }}
                  onClick={toggleCard}
                  onKeyDown={handlePlanetKeyDown}
                  onMouseEnter={() => { if (!isMobile) showCard(); }}
                  onMouseLeave={() => { if (!isMobile) hideCard(); }}
                  onFocus={() => showCard()}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      hideCard();
                    }
                  }}
                >
                  <div className="certs-orb-glow" />
                  <div className="certs-orb-body" />
                  <div className="certs-orb-shine" />
                </div>

                {/* Planet label badge */}
                <div className="certs-badge" aria-hidden="true">
                  <span className="certs-badge-java">JAVA</span>
                  <span className="certs-badge-oop">OOP</span>
                  <span className="certs-badge-issuer">CodeChef</span>
                </div>

                {/* Desktop info card */}
                {!isMobile && (
                  <div
                    className={`certs-card ${isActive ? 'certs-card--show' : ''}`}
                    role="tooltip"
                    onMouseEnter={showCard}
                    onMouseLeave={hideCard}
                  >
                    <div className="certs-card-bar" style={{ background: certificate.color }} />
                    <h3 className="certs-card-title">{certificate.title}</h3>
                    <p className="certs-card-issuer">{certificate.issuer}</p>
                    <p className="certs-card-date">{certificate.date}</p>
                    <p className="certs-card-id">ID: {certificate.credentialId}</p>
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certs-card-link"
                      tabIndex={isActive ? 0 : -1}
                    >
                      View Certificate &rarr;
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile info card */}
          {isMobile && (
            <div
              className={`certs-mob ${isActive ? 'certs-mob--show' : ''}`}
              role="status"
              aria-live="polite"
            >
              <div className="certs-mob-bar" style={{ background: certificate.color }} />
              <h3 className="certs-mob-title">{certificate.title}</h3>
              <p className="certs-mob-issuer">{certificate.issuer}</p>
              <p className="certs-mob-date">{certificate.date}</p>
              <p className="certs-mob-id">ID: {certificate.credentialId}</p>
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="certs-mob-link"
                tabIndex={isActive ? 0 : -1}
              >
                View Certificate &rarr;
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
