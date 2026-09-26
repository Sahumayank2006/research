import { EVENT } from '@/lib/config';
import { IconWhatsApp } from '@/components/Icons';

/** Floating "join the WhatsApp group" button, stacked above the email button. */
export default function WhatsAppButton() {
  return (
    <a
      href={EVENT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa"
      aria-label="Join the Research-O-Thon WhatsApp group"
    >
      <span className="wa__label" aria-hidden="true">
        <span className="wa__label-title">Join our WhatsApp group</span>
        <span className="wa__label-sub">Live updates &amp; announcements</span>
      </span>
      <span className="wa__orb" aria-hidden="true">
        <IconWhatsApp width={30} height={30} />
      </span>
    </a>
  );
}
