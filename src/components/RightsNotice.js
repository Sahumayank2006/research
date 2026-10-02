'use client';

import { useEffect, useRef, useState } from 'react';
import { EVENT } from '@/lib/config';

/**
 * Authorship assurance shown once on every page load — participants are told,
 * before anything else, that their manuscript stays their own.
 */
export default function RightsNotice() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  /* Let the hero paint first, then surface the notice */
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(t);
  }, []);

  /* Freeze the page behind the dialog and park focus on the dismiss button */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="rights"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rights-title"
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="rights__card">
        <button
          type="button"
          ref={closeRef}
          className="rights__close"
          onClick={() => setOpen(false)}
          aria-label="Dismiss notice"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="m2 2 10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="rights__head">
          <span className="rights__seal" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2.5 4 5.8v5.4c0 4.6 3.2 8.2 8 10.3 4.8-2.1 8-5.7 8-10.3V5.8Z" />
              <path d="m8.8 11.8 2.3 2.3 4.1-4.4" />
            </svg>
          </span>
          <p className="rights__kicker">Author rights</p>
          <h2 id="rights-title" className="rights__title">Your paper remains entirely yours</h2>
        </div>

        <div className="rights__body">
          <p className="rights__lead">
            Please be assured that your submitted paper remains entirely yours. We do not
            claim any ownership, rights, or intellectual property over your research paper
            or its content.
          </p>
          <p>
            Your paper is submitted only for evaluation and review purposes as part of{' '}
            {EVENT.name} {EVENT.year}.{' '}
            <strong>
              It will be handled securely and will not be used, modified, published, or
              shared for any purpose outside the event process without appropriate
              permission.
            </strong>
          </p>
          <p className="rights__pledge">
            Your research, ideas, and intellectual contribution remain your own.
          </p>
        </div>

        <button type="button" className="btn btn--gold btn--block rights__ok" onClick={() => setOpen(false)}>
          Understood
        </button>
      </div>
    </div>
  );
}
