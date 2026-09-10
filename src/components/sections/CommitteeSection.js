import { COMMITTEE } from '@/lib/config';

function initials(name) {
  return name
    .replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.|Prof\.)\s*/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

function Patron({ person, chief = false }) {
  return (
    <article className={`patron ${chief ? 'patron--chief' : ''}`}>
      <span className="patron__role">{person.role}</span>
      <h3 className="patron__name">{person.name}</h3>
      <ul className="patron__titles">
        {person.titles.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}

export default function CommitteeSection() {
  const chief = COMMITTEE.patrons.filter((p) => p.tier === 1);
  const seconds = COMMITTEE.patrons.filter((p) => p.tier === 2);

  return (
    <section className="band band--tint committee" id="committee">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">07 — Organizing Committee</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              The people running the <span className="serif-em">sprint.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Faculty from across Amity School of Engineering and Technology, working
            with the IEEE Student Chapter, ASET, Amity University Madhya Pradesh.
          </p>
        </div>

        {/* ---- patronage ---- */}
        <div className="patronage" data-reveal>
          <span className="patronage__label">Under the Patronage of</span>

          {chief.map((p) => (
            <Patron key={p.name} person={p} chief />
          ))}

          <div className="patronage__pair">
            {seconds.map((p) => (
              <Patron key={p.name} person={p} />
            ))}
          </div>
        </div>

        {/* ---- leadership ---- */}
        <div className="leads">
          {COMMITTEE.leadership.map((person, i) => (
            <article
              className="lead"
              key={person.name}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` }}
            >
              <span className="lead__monogram" aria-hidden="true">
                {initials(person.name)}
              </span>
              <span className="lead__role">{person.role}</span>
              <h3 className="lead__name">{person.name}</h3>
              <p className="lead__detail">{person.detail}</p>
            </article>
          ))}
        </div>

        {/* ---- committees ---- */}
        <div className="cgroups">
          {COMMITTEE.groups.map((group, i) => (
            <section
              className={`cgroup ${group.note ? 'cgroup--students' : ''}`}
              key={group.title}
              data-reveal
              style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}
            >
              <header className="cgroup__head">
                <div>
                  <h3 className="cgroup__title">{group.title}</h3>
                  {group.subtitle && (
                    <p className="cgroup__subtitle">{group.subtitle}</p>
                  )}
                </div>
                <span className="cgroup__count">
                  {String(group.members.length).padStart(2, '0')}
                </span>
              </header>
              {group.note && <p className="cgroup__note">{group.note}</p>}

              <ul className="cgroup__list">
                {group.members.map((member) => (
                  <li className="cgroup__member" key={member}>
                    {member}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
