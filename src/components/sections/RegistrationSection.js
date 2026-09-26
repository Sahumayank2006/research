import { EVENT, FEES, INCLUSIONS, TEAM_RULE } from '@/lib/config';
import { IconCheck, IconCalendar, IconPin, IconUsers, IconWhatsApp } from '@/components/Icons';

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
            Registration is handled on the official Amity University events page.
            Register once for your team, and bring a valid institutional ID to the
            venue.
          </p>
        </div>

        {/* ── PER-TEAM CALLOUT BANNER ── */}
        <div className="reg-team-banner" data-reveal style={{ '--reveal-delay': '200ms' }}>
          <div className="reg-team-banner__icon">
            <IconUsers width={28} height={28} />
          </div>
          <div className="reg-team-banner__body">
            <strong className="reg-team-banner__headline">
              One registration. One payment. Covers your entire team.
            </strong>
            <p className="reg-team-banner__sub">
              The fee below is charged <em>per team</em> — not per person. Whether you
              register alone or as a group of four, you pay exactly once.
            </p>

            <p className="reg-sizes__note">
              Same fee for any team size: ₹200 for Amity teams, ₹300 for teams from
              other institutions. It is paid once, for the whole team.
            </p>
          </div>
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

                {/* Amount with per-team badge */}
                <div className="fee__amount-wrap">
                  <span className="fee__amount">{fee.amount}</span>
                  <span className="fee__per-team-badge">per team</span>
                </div>

                {/* Emphasis line */}
                <p className="fee__emphasis">
                  <IconUsers width={13} height={13} />
                  Covers up to 4 members &mdash; total, not per person
                </p>

                <p className="fee__note">{fee.note}</p>
              </article>
            ))}

            <p className="fees__team" data-reveal>
              <IconUsers width={18} height={18} />
              <span>
                <strong>{TEAM_RULE.headline}.</strong> {TEAM_RULE.body}
              </span>
            </p>

            <p className="fees__foot" data-reveal>
              Amity University Madhya Pradesh students pay <strong>₹200 total</strong>&nbsp;—
              for the <strong>whole team</strong>. The fee is all-inclusive and
              non-refundable once confirmed.
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
                Teams of 1–4 · faculty optional
              </span>
            </div>

            <a
              href={EVENT.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--gold btn--lg btn--block reg-panel__cta"
            >
              Register on the Official Page
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a
              href={EVENT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--lg btn--block btn--whatsapp"
            >
              <IconWhatsApp width={20} height={20} />
              Join the WhatsApp Group
            </a>
            <p className="reg-panel__fineprint">
              One registration and one payment for the whole team. Opens amity.edu in
              a new tab. Queries:{' '}
              <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
