import { PILLARS } from '@/lib/config';

export default function WhySection() {
  return (
    <section className="band band--ink why grain" id="why">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">02 — Why It Is Different</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              Most events hand you a certificate.
              <br />
              <span className="why__accent">This one hands you a paper.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Six things that change what you walk out with — each one built into the
            schedule rather than left to chance.
          </p>
        </div>

        <ol className="pillars">
          {PILLARS.map((pillar, i) => (
            <li
              className="pillar"
              key={pillar.n}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 110}ms` }}
            >
              <span className="pillar__n" aria-hidden="true">{pillar.n}</span>
              <h3 className="pillar__title">{pillar.title}</h3>
              <p className="pillar__body">{pillar.body}</p>
              <span className="pillar__glow" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
