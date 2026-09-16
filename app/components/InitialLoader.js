'use client';
import { useState, useEffect } from 'react';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    const minimumLoadingTime = 2000;
    const startTime = Date.now();
    let isLoaded = document.readyState === 'complete';

    const finishLoading = () => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setLoading(false), 800);
      }, 150);
    };

    interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      // Calculate progress based on time elapsed (aiming for 100% at 2 seconds)
      let nextProgress = Math.min(99, Math.floor((elapsed / minimumLoadingTime) * 100));

      if (isLoaded && elapsed >= minimumLoadingTime) {
        finishLoading();
        return;
      }

      setProgress(nextProgress);
    }, 50);

    const handleLoadEvent = () => {
      isLoaded = true;
    };

    if (!isLoaded) {
      window.addEventListener('load', handleLoadEvent);
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', handleLoadEvent);
    };
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
