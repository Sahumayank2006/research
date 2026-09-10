import { PHASES, STANDARDS, PAPER_STRUCTURE } from '@/lib/config';
import { IconCheck } from '@/components/Icons';

export default function FormatSection() {
  return (
    <section className="band format" id="format">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">04 — Phases &amp; Standards</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              Two phases. Two defences. <span className="serif-em">One paper.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            The sprint is broken into two evaluated phases so no team drifts. You
            defend the idea before you build on it, and defend the manuscript before
            the jury scores it.
          </p>
        </div>

        {/* ---- phases ---- */}
        <div className="phases">
          {PHASES.map((phase, i) => (
            <article
              className="phase"
              key={phase.tag}
              data-reveal
              style={{ '--reveal-delay': `${i * 140}ms` }}
            >
              <header className="phase__head">
                <span className="phase__tag">{phase.tag}</span>
                <span className="phase__window">{phase.window}</span>
              </header>

              <h3 className="phase__title">{phase.title}</h3>
              <p className="phase__objective">{phase.objective}</p>

              <div className="phase__deliverables">
                <span className="phase__deliverables-label">Deliverables</span>
                <ul>
                  {phase.deliverables.map((d) => (
                    <li key={d}>
                      <IconCheck width={15} height={15} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="phase__index" aria-hidden="true">{`0${i + 1}`}</span>
            </article>
          ))}
        </div>

        {/* ---- manuscript standards ---- */}
        <div className="standards">
          <div className="standards__intro" data-reveal>
            <span className="kicker">Manuscript &amp; IEEE Standards</span>
            <h3 className="standards__title">
              What counts as a submission
            </h3>
            <p className="standards__note">
              These are hard requirements, not guidelines. A paper that misses them is
              not scored on merit.
            </p>
          </div>

          <div className="standards__grid">
            {STANDARDS.map((standard, i) => (
              <article
                className="standard"
                key={standard.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <h4 className="standard__title">{standard.title}</h4>
                <p className="standard__body">{standard.body}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- required structure ---- */}
        <div className="spine" data-reveal>
          <div className="spine__label">
            <span className="kicker">Required Structure</span>
            <p>
              Every submitted manuscript must carry these sections, in this order, in
              the IEEE two-column template.
            </p>
          </div>
          <ol className="spine__list">
            {PAPER_STRUCTURE.map((part, i) => (
              <li className="spine__item" key={part}>
                <span className="spine__n">{String(i + 1).padStart(2, '0')}</span>
                {part}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
