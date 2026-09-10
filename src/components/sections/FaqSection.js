import Accordion from '@/components/Accordion';
import { FAQ, EVENT } from '@/lib/config';

export default function FaqSection() {
  return (
    <section className="band band--tint faq" id="faq">
      <div className="shell">
        <div className="faq__grid">
          <aside className="faq__aside" data-reveal data-reveal-from="left">
            <span className="kicker">10 — Questions</span>
            <h2 className="faq__title">
              Everything a first-time author asks
            </h2>
            <p className="faq__note">
              Still unsure whether your idea qualifies? Write to us — we would rather
              answer a question than lose a good paper.
            </p>
            <a href={`mailto:${EVENT.email}`} className="tlink">
              {EVENT.email}
            </a>
          </aside>

          <div className="faq__body" data-reveal data-reveal-from="right">
            <Accordion items={FAQ} />
          </div>
        </div>
      </div>
    </section>
  );
}
