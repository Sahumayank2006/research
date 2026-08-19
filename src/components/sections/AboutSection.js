'use client';

import StatCounters from '@/components/StatCounters';
import ScrollReveal from '@/components/ScrollReveal';
import { EVENT_CONFIG } from '@/lib/config';

export default function AboutSection() {
  return (
    <section className="section section--warm" id="overview">
      <div className="container container--narrow">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Official Overview</span>
            <h2>About Research-O-Thon</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="certificate-card about__card">
            <p>
              <strong>Research-O-Thon</strong> is a 48-hour structured research-paper drafting sprint
              organized by the Amity School of Engineering &amp; Technology (ASET), Amity University Madhya Pradesh,
              with Technical and Financial Co-Sponsorship from the IEEE Madhya Pradesh Section.
            </p>
            <p>
              Unlike conventional hackathons that focus on prototype building, Research-O-Thon is designed to bridge
              the gap between raw research ideas and structured, publishable academic manuscripts. Participants —
              students, early-career researchers, academics, and industry R&amp;D professionals — work through a guided
              pipeline from ideation to a polished manuscript draft in just two days.
            </p>
            <p>
              With dedicated mentorship sprints, keynote lectures, and a rigorous evaluation process, every participant
              leaves with a tangible output: a research manuscript draft aligned with IEEE publication standards and
              ready for further refinement and submission.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <StatCounters stats={EVENT_CONFIG.stats} />
        </ScrollReveal>
      </div>
    </section>
  );
}
