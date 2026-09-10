import { SPONSOR_LOGOS } from '@/lib/config';

/**
 * Sponsor / host lockup.
 *
 * These are plain <img> tags on purpose. The files are static assets in
 * public/, so this bypasses the image optimizer entirely — no `fill`, no
 * positioned-parent requirement, no quality allowlist, nothing that can
 * fail between the file and the screen. The cells also deliberately carry
 * no scroll-reveal, so a logo can never be left sitting at zero opacity.
 */
export default function SponsorsSection() {
  return (
    <section className="band band--flush-top sponsors" aria-labelledby="sponsors-title">
      <div className="shell shell--wide">
        <div className="sponsors__head">
          <span className="sponsors__rule" aria-hidden="true" />
          <h2 className="sponsors__title" id="sponsors-title">
            Technical Sponsors <span className="sponsors__amp">&amp;</span> Host Institution
          </h2>
          <span className="sponsors__rule" aria-hidden="true" />
        </div>

        <ul className="sponsors__row">
          {SPONSOR_LOGOS.map((logo) => (
            <li className="sponsors__cell" key={logo.src}>
              <div className="sponsors__plate">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="sponsors__logo"
                  decoding="async"
                />
              </div>
              <span className="sponsors__name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
