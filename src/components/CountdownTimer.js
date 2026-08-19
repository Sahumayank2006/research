'use client';

import { useState, useEffect, useRef } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState('counting'); // 'counting' | 'started' | 'ended'
  const intervalRef = useRef(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setStatus('started');
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      setStatus('counting');
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }

    update();
    intervalRef.current = setInterval(update, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [targetDate]);

  const pad = (n) => String(n).padStart(2, '0');

  if (status === 'started') {
    return (
      <div className="countdown" role="timer" aria-label="Event status">
        <div className="countdown__message">Event In Progress</div>
      </div>
    );
  }

  return (
    <div className="countdown" role="timer" aria-label="Countdown to event start">
      <div className="countdown__grid">
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((unit) => (
          <div key={unit.label} className="countdown__unit">
            <span className="countdown__number">{pad(unit.value)}</span>
            <span className="countdown__label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
