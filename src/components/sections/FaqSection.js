'use client';

import ScrollReveal from '@/components/ScrollReveal';
import FaqAccordion from '@/components/FaqAccordion';
import { EVENT_CONFIG } from '@/lib/config';

export default function FaqSection() {
  return (
    <section className="section section--warm" id="faq">
      <div className="container container--narrow">
        <ScrollReveal>
          <div className="section-heading">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>FAQ</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <FaqAccordion items={EVENT_CONFIG.faq} />
        </ScrollReveal>
      </div>
    </section>
  );
}
