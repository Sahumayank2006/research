'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function RegistrationSection() {
  return (
    <section className="section" id="register">
      <div className="container container--narrow">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Official Entry</span>
            <h2>Registration &amp; Fees</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="reg-card">
            <div className="reg-card__header">
              <div className="reg-card__badge">
                <span className="eyebrow" style={{ marginBottom: 0, color: 'var(--parchment)' }}>All Categories</span>
              </div>
              <div className="reg-card__fee">
                <span className="reg-card__currency">₹</span>
                <span className="reg-card__amount mono">300</span>
              </div>
              <p className="reg-card__note">
                Students · IEEE Members · Professionals · Industry Participants<br />
                <em>One inclusive fee — a deliberate accessibility choice.</em>
              </p>
            </div>

            <div className="reg-card__body">
              <h4 className="reg-card__includes-title">What&apos;s Included</h4>
              <ul className="reg-card__includes">
                {EVENT_CONFIG.inclusions.map((item, i) => (
                  <li key={i} className="reg-card__include-item">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="8" stroke="#1F7A4D" strokeWidth="1" fill="none" />
                      <path d="M5 9L8 12L13 6" stroke="#1F7A4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reg-card__footer">
              <Link href="/register" className="btn btn--gold btn--lg" style={{ width: '100%' }}>
                Register Now — ₹300
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
