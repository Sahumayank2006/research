'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function PrizesSection() {
  const iconSVGs = {
    trophy: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 8H34V16C34 22.627 28.627 28 22 28H26C19.373 28 14 22.627 14 16V8Z" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
        <path d="M14 12H10C8.895 12 8 12.895 8 14V16C8 18.761 10.239 21 13 21H14" stroke="#C79A2B" strokeWidth="1.5" />
        <path d="M34 12H38C39.105 12 40 12.895 40 14V16C40 18.761 37.761 21 35 21H34" stroke="#C79A2B" strokeWidth="1.5" />
        <path d="M20 28V34H28V28" stroke="#C79A2B" strokeWidth="1.5" />
        <path d="M16 34H32V38H16V34Z" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
        <path d="M24 14L25.5 17H28.5L26 19L27 22L24 20L21 22L22 19L19.5 17H22.5L24 14Z" fill="#C79A2B" />
      </svg>
    ),
    mic: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="18" y="8" width="12" height="20" rx="6" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
        <path d="M12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24" stroke="#C79A2B" strokeWidth="1.5" />
        <path d="M24 36V42M18 42H30" stroke="#C79A2B" strokeWidth="1.5" />
      </svg>
    ),
    certificate: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="28" rx="2" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
        <rect x="10" y="14" width="28" height="20" rx="1" stroke="#C79A2B" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />
        <path d="M16 20H32M16 24H28M16 28H24" stroke="#C79A2B" strokeWidth="1" />
        <circle cx="36" cy="34" r="6" stroke="#C79A2B" strokeWidth="1.5" fill="none" />
        <path d="M34 34L36 36L39 32" stroke="#C79A2B" strokeWidth="1" />
      </svg>
    ),
  };

  return (
    <section className="section section--navy" id="prizes">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Recognition</span>
            <h2>Prizes &amp; Awards</h2>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="prizes__grid grid--3" staggerMs={150}>
          {EVENT_CONFIG.prizes.map((prize, i) => (
            <div key={i} className="prize-card">
              <div className="prize-card__icon">
                {iconSVGs[prize.icon]}
              </div>
              <h3 className="prize-card__title">{prize.title}</h3>
              <p className="prize-card__desc">{prize.description}</p>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
