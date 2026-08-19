'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function WhySection() {
  return (
    <section className="section" id="why">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Why Research-O-Thon</span>
            <h2>What Sets This Apart</h2>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="why__grid grid--3" staggerMs={100}>
          {EVENT_CONFIG.differentiators.map((item, i) => (
            <div key={i} className="why__card hairline-card">
              <span className="clause-number">{String(i + 1).padStart(2, '0')} —</span>
              <h3 className="why__card-title">{item.title}</h3>
              <p className="why__card-desc">{item.description}</p>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
