import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const F1ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlasting, setIsBlasting] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsBlasting(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsBlasting(false), 800);
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed right-6 bottom-6 z-50 w-16 h-32 rounded-full bg-transparent border-none p-0
            transition-all duration-300 ease-out outline-none group`}
          aria-label="Scroll to top"
        >
          <div className="relative w-full h-full">
            {/* Speed Lines */}
            {isBlasting && (
              <div className="absolute -left-2 top-0 w-1 h-full z-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-speed-lines"
                    style={{
                      left: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Exhaust Flames */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-8 z-0">
              <div
                className={`
                  w-full h-full rounded-full
                  bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600
                  ${isBlasting ? 'animate-flame-boost' : 'animate-flame-flicker'}
                  origin-top
                `}
              />
            </div>

            {/* Smoke Effects */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 z-0">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-t from-gray-400 via-gray-300 to-transparent rounded-full animate-smoke-drift"
                  style={{
                    left: `${i * 6}px`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* F1 Car Image */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-20 z-10">
              <img
                src="/Event_Section/scrollToTop.png"
                alt="Formula 1 Race Car"
                className="w-full h-full object-contain select-none pointer-events-none"
                style={{
                  filter:
                    'drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 0 6px rgba(255,0,0,0.2))',
                }}
                draggable={false}
              />
              {/* Engine Glow */}
              <div
                className={`
                  absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-3
                  bg-gradient-to-r from-transparent via-orange-400 to-transparent
                  rounded-full opacity-40 blur-sm
                  ${isBlasting ? 'animate-engine-glow scale-150' : ''}
                `}
              />
            </div>

            {/* Glow on Hover or Blast */}
            <div
              className={`
                absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 
                transition-opacity duration-300 z-20
                ${isBlasting ? 'opacity-60' : ''}
              `}
              style={{
                background:
                  'radial-gradient(circle, hsl(var(--glow-primary, 0 100% 50%) / 0.3) 0%, transparent 70%)',
                filter: 'blur(4px)',
              }}
            />
          </div>

          {/* Accessibility */}
          <ChevronUp className="sr-only" size={24} />
        </button>
      )}

      {/* Keyframe Animations */}
      <style>{`
        @keyframes flame-boost {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.6); }
        }
        @keyframes flame-flicker {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 0.65; }
        }
        @keyframes smoke-drift {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-10px) scale(1.2); opacity: 0; }
        }
        @keyframes speed-lines {
          0% { transform: translateY(0); opacity: 0.8; }
          100% { transform: translateY(40px); opacity: 0; }
        }
        @keyframes engine-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .animate-flame-boost {
          animation: flame-boost 0.3s infinite ease-in-out;
        }
        .animate-flame-flicker {
          animation: flame-flicker 0.5s infinite ease-in-out;
        }
        .animate-smoke-drift {
          animation: smoke-drift 1.5s infinite linear;
        }
        .animate-speed-lines {
          animation: speed-lines 0.5s infinite linear;
        }
        .animate-engine-glow {
          animation: engine-glow 0.6s infinite ease-in-out;
        }

        button:focus {
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </>
  );
};

export default F1ScrollToTop;