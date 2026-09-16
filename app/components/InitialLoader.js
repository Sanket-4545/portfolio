'use client';
import { useState, useEffect } from 'react';
import './loader.css';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFading(true);
      setTimeout(() => setLoading(false), 800);
    };

    if (document.readyState === 'complete') {
      // Just a tiny timeout to ensure browser paints before fading
      const timer = setTimeout(handleLoad, 50);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`initial-loader ${fading ? 'loader-fade-out' : ''}`}>
      {/* Background Particles */}
      <div className="loader-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`loader-particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className="loader-content">
        <div className="loader-core-wrapper">
          {/* 3D Rings */}
          <div className="loader-ring loader-ring-1"></div>
          <div className="loader-ring loader-ring-2"></div>
          <div className="loader-ring loader-ring-3"></div>

          {/* Neural Nodes */}
          <div className="loader-nodes">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`loader-node node-${i + 1}`}>
                <div className="loader-node-dot"></div>
                <div className="loader-node-line"></div>
              </div>
            ))}
          </div>

          {/* Central AI Core */}
          <div className="loader-core">
            <div className="loader-core-inner"></div>
            <div className="loader-core-glow"></div>
            {/* Holographic detail inside core */}
            <div className="loader-holo"></div>
          </div>
        </div>

        <div className="loader-text-wrapper">
          <h1 className="loader-name">SANKET</h1>
          <p className="loader-role">MERN STACK DEVELOPER</p>
          <div className="loader-status">
            LOADING<span className="loader-dots"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
