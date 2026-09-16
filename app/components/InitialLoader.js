'use client';
import { useState, useEffect } from 'react';
import './loader.css';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    // Increment progress quickly to 90% while waiting for page load
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        const increment = Math.random() * 15;
        return Math.min(90, Math.floor(prev + increment));
      });
    }, 100);

    const handleLoad = () => {
      clearInterval(interval);
      setProgress(100);
      
      // Short timeout to let the user see 100% before fading out
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), 800);
      }, 150);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        clearInterval(interval);
        window.removeEventListener('load', handleLoad);
      };
    }

    return () => clearInterval(interval);
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
          <div className="loader-percentage">{progress}%</div>
          <div className="loader-status">
            LOADING<span className="loader-dots"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
