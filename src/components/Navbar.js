'use client';

import { useEffect, useState } from 'react';
import { EVENT, NAV } from '@/lib/config';
import Crest from '@/components/Crest';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  /* Condense the bar once the hero starts scrolling away */
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock the page behind the mobile drawer */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Close the drawer on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* Scroll-spy: highlight the section currently in view */
  useEffect(() => {
    const ids = NAV.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`nav ${solid ? 'nav--solid' : ''}`}
        aria-label="Primary"
      >
        <div className="nav__inner shell shell--wide">
          <a href="#top" className="brand" aria-label={`${EVENT.name} ${EVENT.year} — home`}>
            <span className="brand__mark" aria-hidden="true">
              <Crest />
            </span>
            <span className="brand__text">
              <span className="brand__name">
                Research-O-Thon <em>{EVENT.year}</em>
              </span>
              <span className="brand__sub">ASET · Amity University MP</span>
            </span>
          </a>

          <div className="nav__links">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav__link ${active === item.href ? 'nav__link--active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--sm nav__cta"
          >
            Register
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            className={`burger ${open ? 'burger--open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-drawer"
        className={`drawer ${open ? 'drawer--open' : ''}`}
        aria-hidden={!open}
      >
        <ul className="drawer__list">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="drawer__item"
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                <span className="drawer__num">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="drawer__foot">
          <p className="drawer__meta">
            {EVENT.dateLabel}
            <br />
            {EVENT.locationShort}
            <br />
            {EVENT.email}
          </p>
          <a
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--gold btn--lg btn--block"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Register Now
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
