'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function PartnersSection() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">In Technical Co-Sponsorship With</span>
            <h2>Institutional Partners</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="partners__strip">
            <div className="partners__item">
              <div className="partners__logo-placeholder">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="5" y="10" width="50" height="40" rx="4" stroke="#0A1F44" strokeWidth="1.5" fill="none" />
                  <text x="30" y="35" textAnchor="middle" fontSize="8" fill="#0A1F44" fontFamily="Inter, sans-serif" fontWeight="700">IEEE</text>
                  <text x="30" y="44" textAnchor="middle" fontSize="5" fill="#0A1F44" fontFamily="Inter, sans-serif">MP Section</text>
                </svg>
              </div>
              <div className="partners__info">
                <h3>IEEE Madhya Pradesh Section</h3>
                <p>Technical &amp; Financial Co-Sponsorship</p>
              </div>
            </div>

            <div className="partners__divider" aria-hidden="true">·</div>

            <div className="partners__item">
              <div className="partners__logo-placeholder">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="5" y="10" width="50" height="40" rx="4" stroke="#0A1F44" strokeWidth="1.5" fill="none" />
                  <text x="30" y="32" textAnchor="middle" fontSize="6" fill="#0A1F44" fontFamily="Inter, sans-serif" fontWeight="700">AMITY</text>
                  <text x="30" y="40" textAnchor="middle" fontSize="4" fill="#0A1F44" fontFamily="Inter, sans-serif">University MP</text>
                  <text x="30" y="46" textAnchor="middle" fontSize="4" fill="#0A1F44" fontFamily="Inter, sans-serif">ASET</text>
                </svg>
              </div>
              <div className="partners__info">
                <h3>ASET, Amity University MP</h3>
                <p>Host Institution</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
