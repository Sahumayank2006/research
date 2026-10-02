'use client';

import { useState } from 'react';
import { TRACKS, EVENT } from '@/lib/config';
import TrackMotif from '@/components/TrackMotif';
import { IconArrow } from '@/components/Icons';

/* The panel body, shared by the desktop stage and the mobile in-row reveal. */
function TrackDetail({ track, compact = false }) {
  return (
    <div className={`tdetail ${compact ? 'tdetail--compact' : ''}`}>
      <figure className="tdetail__plate">
        <span className="motif" aria-hidden="true">
          <TrackMotif name={track.motif} />
        </span>
        <span className="tdetail__corner tdetail__corner--tl" aria-hidden="true" />
        <span className="tdetail__corner tdetail__corner--br" aria-hidden="true" />
        <figcaption className="tdetail__plate-tag">Track {track.n}</figcaption>
      </figure>

      <div className="tdetail__body">
        {!compact && <h3 className="tdetail__name">{track.name}</h3>}

        <p className="tdetail__scope">{track.scope}</p>

        <ul className="tdetail__tags">
          {track.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <p className="tdetail__output">
          <span className="tdetail__output-label">You leave with</span>
          {track.output}
        </p>

        <a
          href={EVENT.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tlink tdetail__cta"
        >
          Register on this track
          <IconArrow width={15} height={15} />
        </a>
      </div>
    </div>
  );
}

export default function TracksSection() {
  const [active, setActive] = useState(0);
  const track = TRACKS[active];
  const openIndex = TRACKS.findIndex((t) => t.motif === 'open');

  /* Jump the index to the open track and bring it into view */
  const showOpenTrack = () => {
    setActive(openIndex);
    const tab = document.getElementById(`track-tab-${openIndex}`);
    tab?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    tab?.focus({ preventScroll: true });
  };

  /* Arrow-key navigation across the index */
  const onKeyDown = (e) => {
    const delta = e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + TRACKS.length) % TRACKS.length;
    setActive(next);
    document.getElementById(`track-tab-${next}`)?.focus();
  };

  return (
    <section className="band band--tint tracks" id="tracks">
      <div className="shell">
        <div className="sec-head sec-head--split">
          <div className="sec-head__meta" data-reveal>
            <span className="kicker">03 — Research Tracks</span>
            <h2 className="sec-head__title" style={{ marginTop: '1.15rem' }}>
              Pick the ground you already <span className="serif-em">know.</span>
            </h2>
          </div>
          <p className="lede" data-reveal style={{ '--reveal-delay': '120ms' }}>
            Seven tracks, mapped to where engineering research is actually being
            published right now — plus an open track for everything else. Choose
            one at registration; the exact problem statement gets sharpened with
            your mentor on Day&nbsp;1.
          </p>
        </div>

        {/* Clears up the single most common question at registration */}
        <aside className="tnote" data-reveal style={{ '--reveal-delay': '180ms' }}>
          <span className="tnote__mark" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.5 17.5h5M10 20.5h4" />
              <path d="M12 3a6 6 0 0 1 3.6 10.8c-.6.45-.95 1.05-.95 1.7H9.35c0-.65-.35-1.25-.95-1.7A6 6 0 0 1 12 3Z" />
            </svg>
          </span>
          <p className="tnote__text">
            <strong>No idea is out of scope.</strong> Your paper title can be your
            tech project, your business or startup idea, a hardware build, a social
            initiative — anything you are already working on. Pick the track it is
            closest to, or choose{' '}
            <button type="button" className="tnote__jump" onClick={showOpenTrack}>
              Open Innovation
            </button>{' '}
            and bring whatever you have.
          </p>
        </aside>

        <div className="tsel" data-reveal>
          {/* ---------- index ---------- */}
          <div className="tsel__index" onKeyDown={onKeyDown}>
            {TRACKS.map((t, i) => {
              const isActive = i === active;
              return (
                <div className={`tsel__row ${isActive ? 'is-active' : ''}`} key={t.n}>
                  <button
                    type="button"
                    id={`track-tab-${i}`}
                    aria-expanded={isActive}
                    aria-controls={`track-panel-${i}`}
                    className="tsel__tab"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="tsel__n">{t.n}</span>
                    <span className="tsel__name">{t.name}</span>
                    <span className="tsel__chev" aria-hidden="true">
                      <IconArrow width={16} height={16} />
                    </span>
                    <span className="tsel__wash" aria-hidden="true" />
                  </button>

                  {/* mobile: the detail unfolds inside the row */}
                  <div className="tsel__fold" id={`track-panel-${i}`}>
                    <div className="tsel__fold-inner">
                      <TrackDetail track={t} compact />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ---------- desktop stage ---------- */}
          <div className="tsel__stage">
            <span className="tsel__ghost">{track.n}</span>
            {/* key forces a re-mount so the plate redraws on every change */}
            <TrackDetail key={track.n} track={track} />
          </div>
        </div>
      </div>
    </section>
  );
}
