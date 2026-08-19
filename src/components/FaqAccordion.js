'use client';

import { useState } from 'react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  function handleKeyDown(e, index) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(index);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % items.length;
      document.getElementById(`faq-btn-${next}`)?.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      document.getElementById(`faq-btn-${prev}`)?.focus();
    }
  }

  return (
    <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
          <button
            id={`faq-btn-${i}`}
            className="faq-item__trigger"
            onClick={() => toggle(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="faq-item__number clause-number">
              {String(i + 1).padStart(2, '0')} —
            </span>
            <span className="faq-item__question">{item.question}</span>
            <span className="faq-item__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 8L10 13L15 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div
            id={`faq-panel-${i}`}
            className="faq-item__panel"
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            hidden={openIndex !== i}
          >
            <div className="faq-item__answer">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
