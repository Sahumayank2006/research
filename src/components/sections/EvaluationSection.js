import { RUBRIC, COMPLIANCE_MARKS, CONDUCT } from '@/lib/config';
import { IconShield, IconDoc } from '@/components/Icons';

const COMPLIANCE_ICONS = [IconDoc, IconShield];

export default function EvaluationSection() {
  return (
    <section className="band band--ink evaluation grain" id="evaluation">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">05 — Evaluation</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              How the jury <span className="eval__accent">actually scores you.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Published in advance, applied without exception. Four weighted criteria
            decide the result — and formatting and originality are scored in their
            own right inside them.
          </p>
        </div>

        {/* ---- rubric ---- */}
        <div className="rubric" data-reveal>
          <div className="rubric__head" aria-hidden="true">
            <span>Criterion</span>
            <span>Description</span>
            <span>Weightage</span>
          </div>

          <ul className="rubric__rows">
            {RUBRIC.map((row, i) => (
              <li
                className="rubric__row"
                key={row.criterion}
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms`, '--w': row.weight }}
              >
                <div className="rubric__criterion">
                  <span className="rubric__n">{String(i + 1).padStart(2, '0')}</span>
                  {row.criterion}
                </div>
                <p className="rubric__desc">{row.description}</p>
                <div className="rubric__weight">
                  <span className="rubric__pct">{row.weight}%</span>
                  <span className="rubric__bar" aria-hidden="true">
                    <span className="rubric__fill" />
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="rubric__total">
            <span>Total</span>
            <span className="rubric__total-value">100%</span>
          </div>
        </div>

        {/* ---- formatting & plagiarism ---- */}
        <div className="compliance">
          <div className="compliance__intro" data-reveal>
            <span className="kicker">Inside Manuscript Quality — 25%</span>
            <h3 className="compliance__title">Formatting &amp; Plagiarism</h3>
            <p className="compliance__note">
              The Manuscript Quality band rests on two explicitly scored components.
              Both are checked before the jury ever sees your paper.
            </p>
          </div>

          <div className="compliance__grid">
            {COMPLIANCE_MARKS.map((item, i) => {
              const Icon = COMPLIANCE_ICONS[i] || IconDoc;
              return (
                <article
                  className="comp-card"
                  key={item.label}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 130}ms` }}
                >
                  <header className="comp-card__head">
                    <span className="comp-card__icon" aria-hidden="true">
                      <Icon width={20} height={20} />
                    </span>
                    <h4 className="comp-card__label">{item.label}</h4>
                  </header>

                  <p className="comp-card__detail">{item.detail}</p>

                  <p className="comp-card__penalty">
                    <span className="comp-card__penalty-tag">Penalty</span>
                    {item.penalty}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="compliance__sum" data-reveal>
            <strong>Both components are mandatory.</strong> IEEE formatting
            compliance and originality together make up the full Manuscript Quality
            weightage — and a similarity index below 15%, excluding references, is
            required of every submitted paper.
          </p>
        </div>

        {/* ---- conduct ---- */}
        <div className="conduct">
          <div className="conduct__intro" data-reveal>
            <span className="kicker">Code of Conduct &amp; Disqualification</span>
            <h3 className="conduct__title">Non-negotiables</h3>
          </div>

          <ul className="conduct__list">
            {CONDUCT.map((rule, i) => (
              <li
                className="conduct__item"
                key={rule.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <h4 className="conduct__item-title">{rule.title}</h4>
                <p className="conduct__item-body">{rule.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
