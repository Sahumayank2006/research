import { AWARDS } from '@/lib/config';
import { IconTrophy, IconChip, IconSpark, IconDoc } from '@/components/Icons';

const ICONS = [IconTrophy, IconChip, IconSpark, IconDoc];

export default function AwardsSection() {
  return (
    <section className="band awards" id="awards">
      <div className="shell">
        <div className="sec-head sec-head--center">
          <span className="kicker" data-reveal>06 — Recognition</span>
          <h2 className="sec-head__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
            Awards that mean something on a CV
          </h2>
          <p className="lede" data-reveal style={{ '--reveal-delay': '160ms' }}>
            Judged on substance by an expert panel, endorsed by ASET and the IEEE
            Student Chapter.
          </p>
        </div>

        <ul className="awards__grid">
          {AWARDS.map((award, i) => {
            const Icon = ICONS[i] || IconTrophy;
            return (
              <li
                className={`award ${i === 0 ? 'award--lead' : ''}`}
                key={award.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                <span className="award__icon" aria-hidden="true">
                  <Icon width={i === 0 ? 26 : 22} height={i === 0 ? 26 : 22} />
                </span>
                <h3 className="award__title">{award.title}</h3>
                <p className="award__body">{award.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
