'use client';

import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, stagger = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
    element.style.transition = `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function ScrollRevealGroup({ children, className = '', baseDelay = 0, staggerMs = 100 }) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const childElements = Array.from(container.children);

    childElements.forEach((child, i) => {
      if (prefersReducedMotion) {
        child.style.opacity = '1';
        child.style.transform = 'none';
        return;
      }
      child.style.opacity = '0';
      child.style.transform = 'translateY(16px)';
      const d = baseDelay + i * staggerMs;
      child.style.transition = `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${d}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${d}ms`;
    });

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          childElements.forEach((child) => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [baseDelay, staggerMs]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
