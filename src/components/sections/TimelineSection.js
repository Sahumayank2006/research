'use client';

import { useState } from 'react';
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState('day1');
  const schedule = EVENT_CONFIG.schedule;
  const currentSchedule = schedule[activeDay];

  return (
    <section className="section" id="timeline">
      <div className="container container--narrow">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Event Schedule</span>
            <h2>Two-Day Timeline</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="timeline__tabs">
            <button
              className={`timeline__tab ${activeDay === 'day1' ? 'timeline__tab--active' : ''}`}
              onClick={() => setActiveDay('day1')}
            >
              <span className="timeline__tab-label">{schedule.day1.label}</span>
              <span className="timeline__tab-date mono">{schedule.day1.date}</span>
            </button>
            <button
              className={`timeline__tab ${activeDay === 'day2' ? 'timeline__tab--active' : ''}`}
              onClick={() => setActiveDay('day2')}
            >
              <span className="timeline__tab-label">{schedule.day2.label}</span>
              <span className="timeline__tab-date mono">{schedule.day2.date}</span>
            </button>
          </div>
        </ScrollReveal>

        <ScrollRevealGroup className="timeline__blocks" staggerMs={80}>
          {currentSchedule.blocks.map((block, i) => (
            <div key={`${activeDay}-${i}`} className="timeline__block">
              <div className="timeline__time mono">{block.time}</div>
              <div className="timeline__event">{block.event}</div>
            </div>
          ))}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
