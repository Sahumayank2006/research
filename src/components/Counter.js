'use client';

import { useEffect, useRef, useState } from 'react';

/** Counts a number up once, the first time it scrolls into view. */
export default function Counter({ value, prefix = '', suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setShown(value);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast settle, no bounce
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setShown(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
