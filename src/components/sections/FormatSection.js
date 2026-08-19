'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function FormatSection() {
  return (
    <section className="section section--navy" id="format">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Order of Proceedings</span>
            <h2>How the 48 Hours Work</h2>
            <p>A structured sprint from inauguration to awards ceremony.</p>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="format__timeline" staggerMs={120}>
          {EVENT_CONFIG.sprintTimeline.map((item, i) => (
            <div key={i} className="format__item">
              <div className="format__marker">
                <div className="format__dot"></div>
                {i < EVENT_CONFIG.sprintTimeline.length - 1 && <div className="format__line"></div>}
              </div>
              <div className="format__content">
                <div className="format__hour">
                  <span className="mono">Hour {item.hour}</span>
                </div>
                <h3 className="format__title">{item.title}</h3>
                <p className="format__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
