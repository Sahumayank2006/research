'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasAnimated]); // eslint-disable-line react-hooks/exhaustive-deps

  function animateCount() {
    const start = 0;
    const end = value;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  return (
    <span ref={ref} className="mono">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatCounters({ stats }) {
  return (
    <div className="stat-counters">
      {stats.map((stat, i) => (
        <div key={i} className="stat-counters__item">
          <div className="stat-counters__value">
            <AnimatedCounter
              value={stat.value}
              prefix={stat.prefix || ''}
              suffix={stat.suffix || ''}
            />
          </div>
          <div className="stat-counters__label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
