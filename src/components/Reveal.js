'use client';

import { useEffect } from 'react';

/**
 * Global reveal engine.
 *
 * Server components simply mark up elements with `data-reveal` (and an optional
 * inline `--reveal-delay`); this mounts once, flags the document so the hidden
 * state applies only when JS is available, then reveals each element as it
 * enters the viewport.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.setAttribute('data-reveal', 'in'));
      return;
    }

    root.classList.add('js-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-reveal', 'in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );

    const targets = document.querySelectorAll('[data-reveal]:not([data-reveal="in"])');
    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);

  return null;
}
