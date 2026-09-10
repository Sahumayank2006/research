import Counter from '@/components/Counter';
import { EVENT, STATS } from '@/lib/config';
import { IconDoc, IconUsers, IconClock, IconShield } from '@/components/Icons';

const MARKS = [
  {
    icon: IconClock,
    label: 'Format',
    body: 'A three-day intensive sprint built around rapid manuscript drafting, hardware and software prototyping, data processing and research methodology.',
  },
  {
    icon: IconUsers,
    label: 'Teams',
    body: 'One to four participants per team. Interdisciplinary teams are actively encouraged — a systems mind and a domain mind write a better paper together.',
  },
  {
    icon: IconDoc,
    label: 'Output',
    body: 'Every registered team aims to leave with a complete, submission-ready research paper. The event targets 35 to 50 manuscripts generated overall.',
  },
  {
    icon: IconShield,
    label: 'Standard',
    body: 'IEEE two-column formatting, a similarity index under 15%, disclosed AI use, and a live defence in front of an expert jury panel.',
  },
];

export default function AboutSection() {
  return (
    <section className="band about" id="about">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">01 — The Event</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              Three days. One manuscript. <span className="serif-em">No shortcuts.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Research-O-Thon is not a hackathon with a paper bolted on. It is a
            structured research sprint run by {EVENT.host}, {EVENT.university}, in
            association with the IEEE MP Section and the IEEE Student Chapter — and
            the deliverable is the paper itself.
          </p>
        </div>

        {/* Headline figures */}
        <ul className="stats" data-reveal>
          {STATS.map((stat) => (
            <li className="stats__item" key={stat.label}>
              <span className="stats__value">
                <Counter value={stat.value} prefix={stat.prefix || ''} suffix={stat.suffix || ''} />
                {stat.alt && <span className="stats__alt">/ {stat.alt}</span>}
              </span>
              <span className="stats__label">{stat.label}</span>
              <span className="stats__note">{stat.note}</span>
            </li>
          ))}
        </ul>

        {/* Structural marks */}
        <div className="marks">
          {MARKS.map((mark, i) => {
            const Icon = mark.icon;
            return (
              <article
                className="mark"
                key={mark.label}
                data-reveal
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                <span className="mark__icon" aria-hidden="true">
                  <Icon width={22} height={22} />
                </span>
                <h3 className="mark__label">{mark.label}</h3>
                <p className="mark__body">{mark.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
