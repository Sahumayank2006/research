import Image from 'next/image';
import Countdown from '@/components/Countdown';
import { EVENT, PRIZE_POOL, PRIZES, inr } from '@/lib/config';
import { IconPin, IconCalendar, IconUsers, IconTrophy, IconEye, IconTicket } from '@/components/Icons';

export default function HeroSection() {
  const topPrize = PRIZES.podium[0].amount;

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
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__vignette" />
      </div>

      {/* ---- content ---- */}
      <div className="hero__inner shell">
        <p className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Registrations Open
          <span className="hero__badge-sep" aria-hidden="true" />
          <span className="hero__badge-soft">In association with IEEE MP Section</span>
        </p>

        <p className="hero__presents">
          Amity School of Engineering &amp; Technology presents
        </p>

        <h1 className="hero__title">
          <span className="hero__word">Research-O-Thon</span>
          <span className="hero__year-row">
            <span className="hero__year-rule" aria-hidden="true" />
            <span className="hero__year">{EVENT.year}</span>
            <span className="hero__year-rule" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero__tagline">
          Transform your idea into an <em>IEEE research paper</em> in 48 hours.
        </p>

        <ul className="hero__chips">
          <li className="hero__chip">
            <IconCalendar width={17} height={17} />
            {EVENT.dateLabel}
          </li>
          <li className="hero__chip">
            <IconPin width={17} height={17} />
            {EVENT.locationShort}
          </li>
          <li className="hero__chip">
            <IconUsers width={17} height={17} />
            Teams of 1–4 · faculty optional
          </li>
          <li className="hero__chip hero__chip--fee">
            <IconTicket width={17} height={17} />
            <span>
              Registration fee is <strong>per team</strong>, not per student
            </span>
          </li>
        </ul>

        <a href="#prizes" className="hero__prize">
          <span className="hero__prize-icon" aria-hidden="true">
            <IconTrophy width={20} height={20} />
          </span>
          <span className="hero__prize-text">
            <strong>{inr(PRIZE_POOL)}</strong> in cash prizes
            <span className="hero__prize-sub">First prize {inr(topPrize)}</span>
          </span>
          <span className="hero__prize-arrow" aria-hidden="true">→</span>
        </a>

        <div className="hero__actions">
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg hero__btn"
          >
            Register Now
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={EVENT.templateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost-light btn--lg hero__btn"
          >
            <IconEye width={18} height={18} />
            See the Format
          </a>
        </div>

        <div className="hero__timer">
          <span className="hero__timer-label">Sprint begins in</span>
          <Countdown iso={EVENT.startISO} />
        </div>
      </div>

      <a href="#prizes" className="hero__cue" aria-label="Scroll to prizes">
        <span className="hero__cue-mouse" aria-hidden="true">
          <span />
        </span>
      </a>
    </section>
  );
}
