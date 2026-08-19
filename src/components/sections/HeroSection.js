'use client';

import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';
import ScrollReveal from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function HeroSection() {
  return (
    <section className="hero section" id="hero">
      {/* Background watermark */}
      <div className="hero__watermark" aria-hidden="true">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" opacity="0.03">
          <circle cx="200" cy="200" r="180" stroke="#0A1F44" strokeWidth="2" />
          <circle cx="200" cy="200" r="150" stroke="#0A1F44" strokeWidth="1" />
          <circle cx="200" cy="200" r="120" stroke="#0A1F44" strokeWidth="0.5" />
          <path d="M100 200 Q150 100 200 130 Q250 100 300 200 Q270 280 240 300 Q220 340 200 360 Q180 340 160 300 Q130 280 100 200Z" stroke="#0A1F44" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="hero__content">
            <span className="eyebrow hero__eyebrow">
              IEEE Madhya Pradesh Section · Technically &amp; Financially Co-Sponsored Event
            </span>
            
            <h1 className="hero__headline">
              Transform Ideas into Research Publications — <em>in 48 Hours.</em>
            </h1>
            
            <p className="hero__subtitle">
              {EVENT_CONFIG.subtitle}
            </p>

            <div className="hero__countdown">
              <span className="eyebrow eyebrow--navy" style={{ marginBottom: '0.75rem' }}>
                Event Begins In
              </span>
              <CountdownTimer targetDate={EVENT_CONFIG.startDate} />
            </div>

            <div className="hero__actions">
              <Link href="/register" className="btn btn--primary btn--register btn--lg">
                Register for ₹300
              </Link>
              <a href="#" className="btn btn--secondary btn--lg">
                Download Official Brochure
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Trust strip */}
      <div className="hero__trust-strip">
        <div className="container">
          <div className="hero__trust-items">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">◆</span>
              <span>Co-Sponsored by IEEE MP Section</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">◆</span>
              <span>Hosted by ASET, Amity University MP</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">◆</span>
              <span>48 Hrs Format</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">◆</span>
              <span>IEEE Xplore Eligible Proceedings*</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
