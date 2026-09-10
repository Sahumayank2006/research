import Image from 'next/image';
import { VENUE, EVENT } from '@/lib/config';
import { IconPin, IconArrow } from '@/components/Icons';

export default function VenueSection() {
  return (
    <section className="band venue" id="venue">
      <div className="shell">
        <div className="venue__grid">
          <div className="venue__media" data-reveal data-reveal-from="left">
            <Image
              src="/aump.jpg"
              alt="Amity University Madhya Pradesh campus, Gwalior"
              width={1200}
              height={900}
              className="venue__img"
              sizes="(max-width: 900px) 92vw, 46vw"
            />
            <span className="venue__plate">
              <IconPin width={16} height={16} />
              {VENUE.campus}
            </span>
          </div>

          <div className="venue__copy" data-reveal data-reveal-from="right">
            <span className="kicker">09 — Venue</span>
            <h2 className="venue__title">
              Gwalior. Three kilometres <span className="serif-em">from the runway.</span>
            </h2>
            <p className="venue__address">
              {VENUE.school}
              <br />
              {VENUE.address}
            </p>

            <ul className="venue__travel">
              {VENUE.travel.map((t) => (
                <li key={t.mode}>
                  <span className="venue__mode">{t.mode}</span>
                  <span className="venue__detail">{t.detail}</span>
                </li>
              ))}
            </ul>

            <div className="venue__actions">
              <a
                href={VENUE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Open in Maps
                <span className="btn__arrow" aria-hidden="true">→</span>
              </a>
              <a href="#register" className="tlink">
                Register for {EVENT.dateShort}
                <IconArrow width={15} height={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
