'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsCondensed(window.scrollY > 80);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Overview' },
    { href: '#tracks', label: 'Tracks' },
    { href: '#format', label: 'Format' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#committee', label: 'Committee' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#register', label: 'Register' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className={`header ${isCondensed ? 'header--condensed' : ''}`} id="header">
      <div className="header__inner container--wide">
        {/* Logo / Crest */}
        <div className="header__brand">
          <div className="header__crest" aria-hidden="true">
            <img src="/ieee.jpg" alt="IEEE Logo" className="header__logo-img" />
          </div>
          <div className="header__wordmark">
            <span className="header__title">Research-O-Thon</span>
            <span className="header__year">2025</span>
          </div>
        </div>

        {/* Partner lockups */}
        <div className="header__partners">
          <span className="header__partner-label">Co-presented by</span>
          <span className="header__partner-name">IEEE MP Section</span>
          <span className="header__partner-divider">·</span>
          <span className="header__partner-name">ASET, Amity University MP</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Register CTA */}
        <Link href="/register" className="btn btn--primary btn--register btn--sm header__cta">
          Register Now — ₹300
        </Link>

        {/* Mobile hamburger */}
        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__mobile-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/register"
            className="btn btn--primary btn--lg"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ marginTop: '1rem', width: '100%' }}
          >
            Register Now — ₹300
          </Link>
        </nav>
      </div>
    </header>
  );
}
