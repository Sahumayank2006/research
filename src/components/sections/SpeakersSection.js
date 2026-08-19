'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function SpeakersSection() {
  return (
    <section className="section section--warm" id="speakers">
      <div className="container container--narrow">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Invited Lectures</span>
            <h2>Keynote Speakers</h2>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="speakers__grid" staggerMs={150}>
          {EVENT_CONFIG.speakers.map((speaker, i) => (
            <div key={i} className="speaker-card">
              <div className="speaker-card__photo">
                <div className="speaker-card__placeholder">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="18" r="10" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
                    <path d="M8 42 Q8 30 24 30 Q40 30 40 42" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>
              <h3 className="speaker-card__name">{speaker.name}</h3>
              <p className="speaker-card__designation">{speaker.designation}</p>
              <p className="speaker-card__focus">{speaker.focus}</p>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
