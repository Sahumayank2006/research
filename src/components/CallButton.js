import { EVENT } from '@/lib/config';

/** Floating "call the helpdesk" button, stacked above the WhatsApp button. */
export default function CallButton() {
  return (
    <a
      href={`tel:${EVENT.phone}`}
      className="call"
      aria-label={`Call the Research-O-Thon helpdesk on ${EVENT.phoneLabel}`}
    >
      <span className="call__label" aria-hidden="true">
        <span className="call__label-title">Call the helpdesk</span>
        <span className="call__label-num">{EVENT.phoneLabel}</span>
      </span>

      <span className="call__orb" aria-hidden="true">
        <span className="call__pulse" />
        <span className="call__pulse call__pulse--late" />
        <svg
          className="call__icon"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.6 3.5h-2A2.5 2.5 0 0 0 3.1 6.2c.5 7.6 6.9 14 14.5 14.6a2.5 2.5 0 0 0 2.7-2.5v-2a1.6 1.6 0 0 0-1.3-1.6l-2.9-.6a1.6 1.6 0 0 0-1.6.6l-.9 1.2a13 13 0 0 1-5.4-5.4l1.2-.9a1.6 1.6 0 0 0 .6-1.6l-.6-2.9a1.6 1.6 0 0 0-1.6-1.3Z" />
        </svg>
      </span>
    </a>
  );
}
