import { EVENT, VENUE } from '@/lib/config';
import { IconMail, IconPin, IconCalendar } from '@/components/Icons';

export default function ContactSection() {
  return (
    <section className="band band--ink contact grain" id="contact">
      <div className="contact__glow" aria-hidden="true" />

      <div className="shell">
        <div className="contact__head" data-reveal>
          <span className="kicker">11 — Contact</span>
          <h2 className="contact__title">
            Bring the idea.
            <br />
            <span className="contact__accent">We will handle the rest.</span>
          </h2>
        </div>

        <ul className="contact__cards">
          <li className="ccard" data-reveal style={{ '--reveal-delay': '0ms' }}>
            <span className="ccard__icon" aria-hidden="true">
              <IconMail width={20} height={20} />
            </span>
            <span className="ccard__label">Contact Email</span>
            <a className="ccard__value ccard__value--link" href={`mailto:${EVENT.email}`}>
              {EVENT.email}
            </a>
            <span className="ccard__note">
              Event Organizing Chair, Department of CSE, ASET
            </span>
          </li>

          <li className="ccard" data-reveal style={{ '--reveal-delay': '110ms' }}>
            <span className="ccard__icon" aria-hidden="true">
              <IconPin width={20} height={20} />
            </span>
            <span className="ccard__label">Venue</span>
            <span className="ccard__value">{VENUE.campus}</span>
            <span className="ccard__note">{VENUE.address}</span>
          </li>

          <li className="ccard" data-reveal style={{ '--reveal-delay': '220ms' }}>
            <span className="ccard__icon" aria-hidden="true">
              <IconCalendar width={20} height={20} />
            </span>
            <span className="ccard__label">Dates</span>
            <span className="ccard__value">{EVENT.dateLabel}</span>
            <span className="ccard__note">Three days · 48 hours of sprint</span>
          </li>
        </ul>

        <div className="contact__cta" data-reveal>
          <p className="contact__cta-text">
            Registrations for Research-O-Thon {EVENT.year} are open.
          </p>
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg"
          >
            Register Now
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
