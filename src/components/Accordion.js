'use client';

import { useState } from 'react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc__row ${isOpen ? 'acc__row--open' : ''}`} key={item.q}>
            <h3 className="acc__heading">
              <button
                type="button"
                className="acc__trigger"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-trigger-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="acc__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="acc__q">{item.q}</span>
                <span className="acc__icon" aria-hidden="true">
                  <span />
                  <span />
                </span>
              </button>
            </h3>
            <div
              className="acc__panel"
              id={`acc-panel-${i}`}
              role="region"
              aria-labelledby={`acc-trigger-${i}`}
            >
              <div className="acc__panel-inner">
                <p className="acc__a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
