import Image from 'next/image';
import { EVENT, NAV, VENUE } from '@/lib/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="shell shell--wide">
        <div className="foot__grid">
          <div>
            <span className="brand__mark foot__crest" aria-hidden="true">
              <Image
                src="/logo.jpg"
                alt="Amity University"
                width={42}
                height={42}
                className="brand__logo-img"
              />
            </span>
            <p className="foot__lockup">
              Research-O-Thon <em>{EVENT.year}</em>
            </p>
            <p className="foot__blurb">
              {EVENT.tagline}. Organized by {EVENT.host}, {EVENT.university}.{' '}
              {EVENT.association}.
            </p>
            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--sm"
            >
              Register
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="foot__col-title">Navigate</p>
            <ul className="foot__list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="foot__col-title">Reach Us</p>
            <ul className="foot__list">
              <li>
                <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
              </li>
              <li>{VENUE.school}</li>
              <li>{VENUE.address}</li>
              <li>{EVENT.dateLabel}</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="foot__ghost" aria-hidden="true">
        RESEARCH-O-THON
      </p>

      <div className="shell shell--wide">
        <div className="foot__bar">
          <span>
            © {year} Amity University Madhya Pradesh · All rights reserved
          </span>
          <span>{EVENT.dateShort} · {EVENT.locationShort}</span>
        </div>
      </div>
    </footer>
  );
}
