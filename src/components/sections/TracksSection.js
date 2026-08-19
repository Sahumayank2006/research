'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function TracksSection() {
  return (
    <section className="section section--warm" id="tracks">
      {/* Graph paper watermark */}
      <div className="tracks__watermark" aria-hidden="true"></div>
      
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Technical Scope</span>
            <h2>Research Tracks</h2>
            <p>Five focused tracks covering the breadth of modern computing and research methodology.</p>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="tracks__grid grid--5" staggerMs={100}>
          {EVENT_CONFIG.tracks.map((track) => (
            <div key={track.id} className="track-card hairline-card">
              <span className="clause-number">Track {track.number}</span>
              <div className="track-card__icon" aria-hidden="true">{track.icon}</div>
              <h3 className="track-card__name">{track.name}</h3>
              <p className="track-card__scope">{track.scope}</p>
              <div className="track-card__audience">
                <span className="track-card__audience-label">Who should apply:</span>
                <span>{track.audience}</span>
              </div>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
