import { MARQUEE } from '@/lib/config';

/**
 * Announcement marquee that sits directly under the navbar.
 * The item list is rendered twice so the -50% keyframe loops seamlessly.
 */
export default function Ticker() {
  const lane = [...MARQUEE, ...MARQUEE];

  return (
    <div className="ticker" aria-label="Event announcements">
      <div className="ticker__track">
        {lane.map((item, i) => (
          <span className="ticker__item" key={`${item}-${i}`} aria-hidden={i >= MARQUEE.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
