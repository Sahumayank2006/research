'use client';

import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import SealAnimation from '@/components/SealAnimation';
import { EVENT_CONFIG } from '@/lib/config';

export default function CommitteeSection() {
  const { committee } = EVENT_CONFIG;

  return (
    <section className="section" id="committee">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Organizing Authority</span>
            <h2>Committee &amp; Governance</h2>
          </div>
        </ScrollReveal>

        <div className="committee__layout">
          <div className="committee__main">
            {/* Chief Patron */}
            <ScrollReveal delay={100}>
              <div className="committee__block certificate-card">
                <span className="eyebrow eyebrow--navy">{committee.patron.title}</span>
                <h3>{committee.patron.name}</h3>
                <p>{committee.patron.designation}</p>
              </div>
            </ScrollReveal>

            {/* Organizing Chair */}
            <ScrollReveal delay={200}>
              <div className="committee__block certificate-card">
                <span className="eyebrow eyebrow--navy">{committee.chair.title}</span>
                <h3>{committee.chair.name}</h3>
                <p>{committee.chair.designation}</p>
              </div>
            </ScrollReveal>

            {/* IEEE Co-Sponsorship Notice */}
            <ScrollReveal delay={300}>
              <div className="committee__ieee-notice">
                <span className="eyebrow">IEEE Co-Sponsorship Notice</span>
                <p>{committee.ieeeNotice}</p>
              </div>
            </ScrollReveal>

            {/* Committee Grid */}
            <ScrollReveal delay={400}>
              <h3 style={{ marginBottom: 'var(--space-6)', marginTop: 'var(--space-8)' }}>
                Organizing Committee
              </h3>
              <div className="committee__roster">
                <table className="committee__table">
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Name</th>
                      <th>Affiliation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {committee.members.map((member, i) => (
                      <tr key={i}>
                        <td className="committee__role">{member.role}</td>
                        <td>{member.name}</td>
                        <td>{member.affiliation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>

          {/* Seal */}
          <div className="committee__seal">
            <SealAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
