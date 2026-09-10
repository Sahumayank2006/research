import { EVENT, FEES, INCLUSIONS } from '@/lib/config';
import { IconCheck, IconCalendar, IconPin, IconUsers } from '@/components/Icons';

export default function RegistrationSection() {
  return (
    <section className="band band--ink register grain" id="register">
      <div className="shell">
        <div className="sec-head sec-head--center">
          <span className="kicker" data-reveal>08 — Registration</span>
          <h2 className="sec-head__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Take the seat. <span className="register__accent">Write the paper.</span>
          </h2>
          <p className="lede" data-reveal style={{ '--reveal-delay': '160ms' }}>
            Registration is handled through the official Google Form. Fill it once
            for your team, and bring a valid institutional ID to the venue.
          </p>
        </div>

        <div className="reg-grid">
          {/* ---- fees ---- */}
          <div className="fees">
            {FEES.map((fee, i) => (
              <article
                className={`fee ${fee.featured ? 'fee--featured' : ''}`}
                key={fee.label}
                data-reveal
                style={{ '--reveal-delay': `${i * 120}ms` }}
              >
                {fee.featured && <span className="fee__ribbon">Best Value</span>}
                <span className="fee__label">{fee.label}</span>
                <span className="fee__amount">{fee.amount}</span>
                <p className="fee__note">{fee.note}</p>
              </article>
            ))}

            <p className="fees__foot" data-reveal>
              Amity University Madhya Pradesh students pay <strong>₹200 only</strong>.
              The fee is all-inclusive and non-refundable once confirmed.
            </p>
          </div>

          {/* ---- inclusions + CTA ---- */}
          <div className="reg-panel" data-reveal data-reveal-from="right">
            <span className="reg-panel__label">What the fee covers</span>
            <ul className="reg-panel__list">
              {INCLUSIONS.map((item) => (
                <li key={item}>
                  <IconCheck width={16} height={16} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="reg-panel__facts">
              <span>
                <IconCalendar width={16} height={16} />
                {EVENT.dateLabel}
              </span>
              <span>
                <IconPin width={16} height={16} />
                {EVENT.locationShort}
              </span>
              <span>
                <IconUsers width={16} height={16} />
                Teams of 1–4
              </span>
            </div>

            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--lg btn--block reg-panel__cta"
            >
              Register on the Official Form
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <p className="reg-panel__fineprint">
              Opens the Google Form in a new tab. Queries:{' '}
              <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
