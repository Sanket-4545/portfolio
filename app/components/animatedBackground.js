'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* SVG Animated Gradient Waves */}
      <svg 
        className="absolute w-full h-full" 
        preserveAspectRatio="none" 
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#d946ef" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
          </linearGradient>
          
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d946ef" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#00d9ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.12" />
          </linearGradient>

          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Wave 1 - Top */}
        <path 
          d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z" 
          fill="url(#gradient1)" 
          filter="url(#blur)"
          className="animate-wave-1"
        />

        {/* Wave 2 - Middle */}
        <path 
          d="M0,400 Q300,300 600,400 T1200,400 L1200,300 Q300,250 0,300 Z" 
          fill="url(#gradient2)" 
          filter="url(#blur)"
          className="animate-wave-2"
        />

        {/* Wave 3 - Bottom */}
        <path 
          d="M0,600 Q300,500 600,600 T1200,600 L1200,800 L0,800 Z" 
          fill="url(#gradient1)" 
          filter="url(#blur)"
          className="animate-wave-3"
        />

        {/* Additional floating shapes */}
        <circle cx="100" cy="150" r="50" fill="#00d9ff" opacity="0.08" className="animate-float" />
        <circle cx="1100" cy="650" r="70" fill="#d946ef" opacity="0.06" className="animate-float" style={{ animationDelay: '1s' }} />
        <circle cx="600" cy="100" r="60" fill="#ec4899" opacity="0.07" className="animate-float" style={{ animationDelay: '2s' }} />
      </svg>

      <style jsx>{`
        @keyframes wave-1 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(50px) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes wave-2 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-40px) translateY(10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes wave-3 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(60px) translateY(-5px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        .animate-wave-1 {
          animation: wave-1 8s ease-in-out infinite;
        }

        .animate-wave-2 {
          animation: wave-2 10s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-wave-3 {
          animation: wave-3 9s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
