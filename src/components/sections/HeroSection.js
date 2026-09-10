import Image from 'next/image';
import Countdown from '@/components/Countdown';
import { EVENT } from '@/lib/config';
import { IconPin, IconCalendar } from '@/components/Icons';

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      {/* ---- backdrop ---- */}
      <div className="hero__bg" aria-hidden="true">
        <Image
          src="/aump.jpg"
          alt=""
          fill
          preload
          quality={88}
          sizes="100vw"
          className="hero__img"
        />
        <div className="hero__scrim" />
        <div className="hero__grid" />
        <div className="hero__vignette" />
      </div>

      {/* ---- content ---- */}
      <div className="hero__inner shell shell--wide">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-dot" aria-hidden="true" />
          Amity School of Engineering &amp; Technology
          <span className="hero__eyebrow-sep" aria-hidden="true">/</span>
          In association with IEEE MP Section
        </p>

        <h1 className="hero__title">
          <span className="hero__line">
            <span className="hero__word">Research-O-Thon</span>
          </span>
          <span className="hero__line hero__line--year">
            <span className="hero__year">{EVENT.year}</span>
            <span className="hero__year-tag">
              48-Hour
              <br />
              Research Sprint
            </span>
          </span>
        </h1>

        <ul className="hero__meta">
          <li className="hero__meta-item">
            <IconPin className="hero__meta-icon" />
            <span>
              <span className="hero__meta-label">Location</span>
              Amity University Madhya Pradesh, Gwalior
            </span>
          </li>
          <li className="hero__meta-item">
            <IconCalendar className="hero__meta-icon" />
            <span>
              <span className="hero__meta-label">Date</span>
              21 to 23 September 2026
            </span>
          </li>
        </ul>

        <p className="hero__lede">{EVENT.subtitle}</p>

        <div className="hero__actions">
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            Register Now
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a href="#format" className="btn btn--ghost-light btn--lg">
            See the Format
          </a>
        </div>
      </div>

      {/* ---- foot rail ---- */}
      <div className="hero__rail">
        <div className="shell shell--wide hero__rail-inner">
          <div className="hero__countdown">
            <span className="hero__rail-label">Sprint begins in</span>
            <Countdown iso={EVENT.startISO} />
          </div>

          <a href="#about" className="hero__cue" aria-label="Scroll to content">
            <span className="hero__cue-text">Scroll</span>
            <span className="hero__cue-line" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
