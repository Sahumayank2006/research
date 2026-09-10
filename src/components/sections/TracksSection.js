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
            Six tracks, mapped to where engineering research is actually being
            published right now. Choose one at registration — the exact problem
            statement gets sharpened with your mentor on Day&nbsp;1.
          </p>
        </div>

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
