'use client';

import { useEffect, useRef, useState } from 'react';

/* ─── milestone data ──────────────────────────────────────── */
const milestones = [
  {
    period: '2025',
    title: 'Started Web Development',
    accent: '#0ea5e9',        // cyan
    icon: '🌐',
    points: [
      'Started learning HTML',
      'Learned CSS fundamentals',
      'Began writing JavaScript',
      'Built my first small web projects',
      'Developed a real interest in creating websites',
    ],
  },
  {
    period: '2025 → 2026',
    title: 'Full-Stack Development',
    accent: '#8b5cf6',        // purple
    icon: '⚙️',
    points: [
      'Learned React and component-based thinking',
      'Learned Next.js and server-side rendering',
      'Learned Node.js and Express.js',
      'Learned MongoDB and MongoDB Atlas',
      'Started working with REST APIs',
      'Started building complete web applications',
    ],
  },
  {
    period: '2026',
    title: 'Java & Data Structures',
    accent: '#f59e0b',        // amber
    icon: '☕',
    points: [
      'Started learning Java',
      'Learned core programming concepts',
      'Started Data Structures and Algorithms',
      'Began practising problem solving',
      'Started practising on LeetCode',
    ],
  },
  {
    period: '2026',
    title: 'Building Real Projects',
    accent: '#ec4899',        // pink
    icon: '🚀',
    points: [
      'Built and continuously improved this portfolio',
      'Worked on the Pandharpur Wari Seva platform',
      'Started building EyeBreak',
      'Started using Git & GitHub for all projects',
      'Started preparing for hackathons',
    ],
  },
  {
    period: '2026 → Future',
    title: 'AI / ML — Next Chapter',
    accent: '#34d399',        // emerald
    icon: '🤖',
    points: [
      'Beginning my AI/ML learning journey',
      'Exploring AI/ML fundamentals and core concepts',
      'Planning to combine AI/ML with web development',
    ],
    isFuture: true,
  },
];

/* ─── individual card ─────────────────────────────────────── */
function MilestoneCard({ milestone, side, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const delay = index * 120;

  return (
    <article
      ref={ref}
      className={`journey-card ${visible ? 'journey-card--visible' : ''} ${
        side === 'right' ? 'journey-card--right' : 'journey-card--left'
      }`}
      style={{
        '--jc-accent': milestone.accent,
        transitionDelay: `${delay}ms`,
      }}
      aria-label={`${milestone.period}: ${milestone.title}`}
    >
      {/* accent bar */}
      <div className="journey-card__bar" />

      {/* header */}
      <div className="journey-card__head">
        <span className="journey-card__icon" aria-hidden="true">
          {milestone.icon}
        </span>
        <div>
          <time className="journey-card__period">{milestone.period}</time>
          <h3 className="journey-card__title">{milestone.title}</h3>
        </div>
      </div>

      {/* points */}
      <ul className="journey-card__list" role="list">
        {milestone.points.map((pt, i) => (
          <li key={i} className="journey-card__point">
            <span className="journey-card__dot" aria-hidden="true" />
            {pt}
          </li>
        ))}
      </ul>

      {/* future badge */}
      {milestone.isFuture && (
        <span className="journey-future-badge">Upcoming</span>
      )}
    </article>
  );
}

/* ─── main section ────────────────────────────────────────── */
export default function Journey() {
  return (
    <section
      id="journey"
      className="journey-section"
      aria-labelledby="journey-heading"
    >
      {/* header */}
      <div className="journey-header">
        <h2 id="journey-heading" className="journey-heading">
          My Journey
        </h2>
        <p className="journey-subheading">
          How I started, what I learned, and where I&apos;m heading.
        </p>
      </div>

      {/* timeline */}
      <div className="journey-timeline" role="list">
        {/* animated centre line */}
        <div className="journey-line" aria-hidden="true">
          <div className="journey-line__glow" />
        </div>

        {milestones.map((m, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          return (
            <div key={i} className="journey-row" role="listitem">
              {/* left slot */}
              <div className="journey-slot journey-slot--left">
                {side === 'left' && (
                  <MilestoneCard milestone={m} side="left" index={i} />
                )}
              </div>

              {/* node */}
              <div className="journey-node-wrap" aria-hidden="true">
                <div
                  className="journey-node"
                  style={{ '--jc-accent': m.accent }}
                >
                  <div className="journey-node__ring" />
                  <div className="journey-node__dot" />
                </div>
              </div>

              {/* right slot */}
              <div className="journey-slot journey-slot--right">
                {side === 'right' && (
                  <MilestoneCard milestone={m} side="right" index={i} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
