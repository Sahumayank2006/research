'use client';

import { useEffect, useRef, useState } from 'react';

export default function SealAnimation({ className = '' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`seal-stamp ${isVisible ? 'seal-stamp--visible' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer ring */}
        <circle cx="60" cy="60" r="56" stroke="#C79A2B" strokeWidth="2" />
        <circle cx="60" cy="60" r="52" stroke="#C79A2B" strokeWidth="0.5" strokeDasharray="3 3" />
        
        {/* Laurel wreath left */}
        <path d="M20 60 Q25 40 35 30 Q30 42 28 55 Q27 62 30 70 Q25 65 22 58Z" fill="#C79A2B" opacity="0.6" />
        <path d="M25 70 Q30 55 38 45 Q34 55 33 65 Q33 72 36 78 Q30 74 27 68Z" fill="#C79A2B" opacity="0.5" />
        <path d="M32 78 Q36 65 43 56 Q40 65 39 73 Q39 79 42 84 Q37 81 34 76Z" fill="#C79A2B" opacity="0.4" />
        
        {/* Laurel wreath right */}
        <path d="M100 60 Q95 40 85 30 Q90 42 92 55 Q93 62 90 70 Q95 65 98 58Z" fill="#C79A2B" opacity="0.6" />
        <path d="M95 70 Q90 55 82 45 Q86 55 87 65 Q87 72 84 78 Q90 74 93 68Z" fill="#C79A2B" opacity="0.5" />
        <path d="M88 78 Q84 65 77 56 Q80 65 81 73 Q81 79 78 84 Q83 81 86 76Z" fill="#C79A2B" opacity="0.4" />
        
        {/* Inner circuit/spark */}
        <circle cx="60" cy="55" r="12" stroke="#C79A2B" strokeWidth="1" fill="none" />
        <path d="M54 55 L60 49 L66 55 L60 61Z" fill="#C79A2B" opacity="0.8" />
        <circle cx="60" cy="55" r="4" stroke="#C79A2B" strokeWidth="0.5" fill="none" />
        
        {/* Text arc — top */}
        <path id="sealTextTop" d="M20 60 A40 40 0 0 1 100 60" fill="none" />
        <text fontSize="6" fill="#C79A2B" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="2">
          <textPath href="#sealTextTop" startOffset="50%" textAnchor="middle">
            RESEARCH-O-THON
          </textPath>
        </text>
        
        {/* Text arc — bottom */}
        <path id="sealTextBottom" d="M25 75 A38 38 0 0 0 95 75" fill="none" />
        <text fontSize="5" fill="#C79A2B" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="1.5">
          <textPath href="#sealTextBottom" startOffset="50%" textAnchor="middle">
            APPROVED &amp; CHARTERED
          </textPath>
        </text>
        
        {/* Year */}
        <text x="60" y="80" textAnchor="middle" fontSize="8" fill="#C79A2B" fontFamily="IBM Plex Mono, monospace" fontWeight="600">
          2025
        </text>
        
        {/* Stars */}
        <circle cx="35" cy="90" r="1.5" fill="#C79A2B" />
        <circle cx="85" cy="90" r="1.5" fill="#C79A2B" />
      </svg>
    </div>
  );
}
