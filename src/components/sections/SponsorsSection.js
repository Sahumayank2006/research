import Image from 'next/image';
import { SPONSOR_LOGOS } from '@/lib/config';

export default function SponsorsSection() {
  return (
    <section className="band band--flush-top sponsors" aria-labelledby="sponsors-title">
      <div className="shell shell--wide">
        <div className="sponsors__head" data-reveal>
          <span className="sponsors__rule" aria-hidden="true" />
          <h2 className="sponsors__title" id="sponsors-title">
            Technical Sponsors <span className="sponsors__amp">&amp;</span> Host Institution
          </h2>
          <span className="sponsors__rule" aria-hidden="true" />
        </div>

        <ul className="sponsors__row">
          {SPONSOR_LOGOS.map((logo, i) => (
            <li
              className="sponsors__cell"
              key={logo.src}
              data-reveal
              data-reveal-from="scale"
              style={{ '--reveal-delay': `${i * 90}ms` }}
            >
              <div className="sponsors__plate">
                {/* `fill` + object-fit lets each logo keep its own aspect ratio
                    inside a shared plate, whatever the source file's shape is. */}
                <span className="sponsors__frame">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="sponsors__logo"
                    sizes="(max-width: 430px) 45vw, (max-width: 720px) 30vw, 240px"
                  />
                </span>
              </div>
              <span className="sponsors__name">{logo.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
