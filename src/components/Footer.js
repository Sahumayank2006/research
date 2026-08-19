import Link from 'next/link';
import { EVENT_CONFIG } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="saffron-rule" aria-hidden="true"></div>
      
      <div className="footer__main container">
        <div className="footer__grid">
          {/* Column 1 — Brand */}
          <div className="footer__col footer__col--brand">
            <div className="footer__crest" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="16" stroke="#C79A2B" strokeWidth="1.5" />
                <circle cx="18" cy="18" r="12" stroke="#C79A2B" strokeWidth="0.5" />
                <path d="M10 14 Q14 8 18 10 Q22 8 26 14 Q24 20 22 22 Q20 26 18 28 Q16 26 14 22 Q12 20 10 14Z" stroke="#F7F5EF" strokeWidth="1" fill="none" />
                <circle cx="18" cy="17" r="3" stroke="#F7F5EF" strokeWidth="0.8" fill="none" />
                <path d="M16 17 L18 15 L20 17 L18 19Z" fill="#C79A2B" opacity="0.8" />
              </svg>
            </div>
            <h3 className="footer__title">Research-O-Thon 2025</h3>
            <p className="footer__tagline">Transform Ideas into Research Publications — in 48 Hours.</p>
            <p className="footer__dates mono">17–18 September 2025</p>
          </div>

          {/* Column 2 — IEEE MP Section */}
          <div className="footer__col">
            <h4 className="footer__heading">IEEE Madhya Pradesh Section</h4>
            <p className="footer__address">
              135-E, Mayur Nagar, Thatipur<br />
              Gwalior – 474011<br />
              Madhya Pradesh, India
            </p>
            <p className="footer__role">Technical & Financial Co-Sponsorship</p>
          </div>

          {/* Column 3 — ASET */}
          <div className="footer__col">
            <h4 className="footer__heading">ASET, Amity University MP</h4>
            <p className="footer__address">
              Maharajpura Dang, Opp. Airport<br />
              Gwalior – 474005<br />
              Madhya Pradesh, India
            </p>
            <p className="footer__role">Host Institution</p>
          </div>

          {/* Column 4 — Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <nav className="footer__links" aria-label="Footer navigation">
              <a href="#overview">Overview</a>
              <a href="#tracks">Tracks</a>
              <a href="#format">Format</a>
              <a href="#timeline">Timeline</a>
              <a href="#speakers">Speakers</a>
              <a href="#committee">Committee</a>
              <a href="#prizes">Prizes</a>
              <a href="#faq">FAQ</a>
              <Link href="/register">Register</Link>
            </nav>
          </div>

          {/* Column 5 — Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <p className="footer__contact">
              <a href={`mailto:${EVENT_CONFIG.contact.email}`}>{EVENT_CONFIG.contact.email}</a>
            </p>
            <div className="footer__actions">
              <a href="#" className="btn btn--secondary btn--sm" style={{ fontSize: '0.7rem' }}>
                Download Official Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © {currentYear} Research-O-Thon. Organized by ASET, Amity University Madhya Pradesh. Co-sponsored by IEEE Madhya Pradesh Section. All rights reserved.
          </p>
        </div>
      </div>

      <div className="saffron-rule" aria-hidden="true"></div>
    </footer>
  );
}
