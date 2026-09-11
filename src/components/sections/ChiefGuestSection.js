import Image from 'next/image';

export default function ChiefGuestSection() {
  const credentials = [
    {
      icon: 'mortarboard',
      label: 'Academic Excellence & Doctorate',
      detail: 'Ph.D., School of Computing — University of Kent, United Kingdom',
    },
    {
      icon: 'globe',
      label: 'Postdoctoral Innovation',
      detail:
        'Post-Doctoral Fellowship — Advanced Future Computing & Systems Architecture',
    },
    {
      icon: 'star',
      label: 'International IEEE Leadership',
      detail:
        'Distinguished IEEE Section Chair & Global Flagship Conference Director',
    },
  ];

  return (
    <section className="band band--ink chief-guest" id="chief-guest">
      <div className="shell">
        <div className="cg__head" data-reveal>
          <span className="cg__eyebrow">
            <span className="cg__eyebrow-line" aria-hidden="true" />
            Honored Dignitary
            <span className="cg__eyebrow-line" aria-hidden="true" />
          </span>
          <h2 className="cg__section-title">
            Chief <span className="serif-em">Guest</span>
          </h2>
          <span className="cg__head-rule" aria-hidden="true" />
          <p className="cg__head-sub">
            Presiding over Research-O-Thon 2026
          </p>
        </div>
        <div className="cg">
          {/* ---- Photo column ---- */}
          <div className="cg__photo-col">
            <div className="cg__photo-wrap">
              <Image
                src="/gstomar.png"
                alt="Prof. G.S. Tomar"
                width={460}
                height={580}
                className="cg__photo"
                priority
              />
              <div className="cg__photo-overlay" aria-hidden="true" />
            </div>
            <div className="cg__badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              MIR Labs Founder &amp; Chair
            </div>
          </div>

          {/* ---- Content column ---- */}
          <div className="cg__content">
            <h3 className="cg__name">Prof. G.S. Tomar</h3>
            <p className="cg__title">
              Distinguished Principal Mentor &amp; Global Research Director
            </p>
            <span className="cg__rule" aria-hidden="true" />

            <p className="cg__bio">
              A world-renowned research scientist and visionary academic
              executive driving technological evolution in computational
              intelligence and wireless architectures. With nearly four decades
              of exemplary leadership fostering international research
              consortia, Dr. Tomar spearheads MIR Labs&rsquo; scientific
              initiatives, seamlessly translating theoretical computing
              breakthroughs into transformative, high-impact societal solutions
              worldwide.
            </p>

            <div className="cg__credentials">
              {credentials.map((c) => (
                <div className="cg__cred" key={c.label}>
                  <span className="cg__cred-icon" aria-hidden="true">
                    {c.icon === 'mortarboard' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
                      </svg>
                    )}
                    {c.icon === 'globe' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
                      </svg>
                    )}
                    {c.icon === 'star' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <span className="cg__cred-label">{c.label}</span>
                    <p className="cg__cred-detail">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://mirlabs.in/team.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cg__link"
            >
              Explore Complete Executive Network &amp; Center Heads
              <span aria-hidden="true"> →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
