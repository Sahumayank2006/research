'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function VenueSection() {
  const { venue } = EVENT_CONFIG;

  return (
    <section className="section section--warm" id="venue">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Venue Notification</span>
            <h2>Venue &amp; Travel</h2>
          </div>
        </ScrollReveal>

        <div className="venue__layout">
          <ScrollReveal delay={100} className="venue__map-wrap">
            <div className="venue__map">
              <iframe
                src={venue.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event venue map"
              ></iframe>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="venue__info">
            <div className="certificate-card">
              <span className="eyebrow eyebrow--navy">Official Venue</span>
              <h3>{venue.name}</h3>
              <p>
                <strong>{venue.institution}</strong><br />
                {venue.university}<br />
                {venue.address}
              </p>

              <hr className="gold-rule" style={{ margin: 'var(--space-6) 0' }} />

              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>
                How to Reach
              </h4>
              {venue.travelNotes.map((note, i) => (
                <div key={i} className="venue__travel-item">
                  <strong>{note.mode}:</strong> {note.detail}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
