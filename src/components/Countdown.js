'use client';

import { useEffect, useState } from 'react';

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

function remaining(target, now) {
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown({ iso }) {
  const target = new Date(iso).getTime();
  // `null` until the clock is read on the client, so SSR and first paint agree
  const [now, setNow] = useState(null);

  useEffect(() => {
    const read = () => setNow(Date.now());
    const raf = requestAnimationFrame(read);
    const id = setInterval(read, 1000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(id);
    };
  }, []);

  const time = now === null ? null : remaining(target, now);

  if (time?.done) {
    return <p className="countdown__live">The sprint is live.</p>;
  }

  return (
    <div className="countdown" role="timer" aria-live="off">
      {UNITS.map(({ key, label }) => (
        <div className="countdown__unit" key={key}>
          <span className="countdown__value">
            {time ? String(time[key]).padStart(2, '0') : '––'}
          </span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}
