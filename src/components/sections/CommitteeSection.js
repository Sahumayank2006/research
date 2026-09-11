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
  // One rung per rank: Chief Patron alone, then Patrons, then Co-Patrons.
  const chief = COMMITTEE.patrons.filter((p) => p.role === 'Chief Patron');
  const patrons = COMMITTEE.patrons.filter((p) => p.role === 'Patron');
  const coPatrons = COMMITTEE.patrons.filter((p) => p.role === 'Co-Patron');

  // The director sits alone on the top rung; the event chairs share one box below.
  const chairs = COMMITTEE.leadership.filter(
    (p) => p.role === 'Event Organizing Chair'
  );
  const directors = COMMITTEE.leadership.filter(
    (p) => p.role !== 'Event Organizing Chair'
  );

  // Separate student organizing team from other groups
  const facultyGroups = COMMITTEE.groups.filter((g) => !g.note);
  const studentGroup = COMMITTEE.groups.find((g) => g.note);

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

          <div className="patronage__rung patronage__rung--solo">
            {chief.map((p) => (
              <Patron key={p.name} person={p} chief />
            ))}
          </div>

          <div className="patronage__rung patronage__rung--pair">
            {patrons.map((p) => (
              <Patron key={p.name} person={p} />
            ))}
          </div>

          <div className="patronage__rung patronage__rung--solo">
            {coPatrons.map((p) => (
              <Patron key={p.name} person={p} />
            ))}
          </div>
        </div>

        {/* ---- leadership ---- */}
        <div className="leads">
          {directors.map((person, i) => (
            <article
              className="lead lead--solo"
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

          {chairs.length > 0 && (
            <section
              className="chairs"
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
            >
              <header className="chairs__head">
                <span className="chairs__label">Event Organizing Chairs</span>
                <span className="chairs__rule" aria-hidden="true" />
              </header>

              <div className="chairs__grid">
                {chairs.map((person) => (
                  <div className="chairs__person" key={person.name}>
                    <span className="chairs__monogram" aria-hidden="true">
                      {initials(person.name)}
                    </span>
                    <div className="chairs__body">
                      <h3 className="chairs__name">{person.name}</h3>
                      <p className="chairs__detail">{person.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* ---- faculty committees ---- */}
        <div className="cgroups">
          {facultyGroups.map((group, i) => (
            <section
              className="cgroup"
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

        {/* ---- Student Organizing Team (table format) ---- */}
        {studentGroup && (
          <div
            className="cgroups cgroups--student"
            style={{ marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}
            data-reveal
          >
            <section className="cgroup cgroup--student" style={{ gridColumn: '1 / -1' }}>
              <header className="cgroup__head">
                <div>
                  <h3 className="cgroup__title">{studentGroup.title}</h3>
                  {studentGroup.subtitle && (
                    <p className="cgroup__subtitle">{studentGroup.subtitle}</p>
                  )}
                </div>
                <span className="cgroup__count">
                  {String(studentGroup.members.length).padStart(2, '0')}
                </span>
              </header>

              {studentGroup.note && (
                <p className="cgroup__note">{studentGroup.note}</p>
              )}

              <ul className="cgroup__list">
                {studentGroup.members.map((member) => (
                  <li className="cgroup__member" key={member}>
                    <span>{member}</span>
                    <span className="cgroup__dept">Department of CSE</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </section>
  );
}
