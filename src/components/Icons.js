/* Hairline icon set — 1.5px strokes on a 24px grid, drawn to match the
   letterpress rules used across the page. */

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function IconPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconCalendar(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8.5 3v4M15.5 3v4" />
      <path d="M8 14.5h2M14 14.5h2M8 18h2M14 18h2" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 7 8.1 5.7a1.6 1.6 0 0 0 1.8 0L21 7" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.4l3.4 2" />
    </svg>
  );
}

export function IconUsers(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="8" r="3.4" />
      <path d="M3 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.5 5.2a3.4 3.4 0 0 1 0 6.6M18 14.4A6.5 6.5 0 0 1 21.5 20" />
    </svg>
  );
}

export function IconDoc(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-3.2 7-9V6.2l-7-3-7 3V12c0 5.8 7 9 7 9Z" />
      <path d="m9 12 2.2 2.2L15.3 10" />
    </svg>
  );
}

export function IconTrophy(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5.5H4.5V8a3 3 0 0 0 3 3M17 5.5h2.5V8a3 3 0 0 1-3 3" />
      <path d="M12 14v3.5M8.5 21h7M9.5 21c0-2 1-3.5 2.5-3.5s2.5 1.5 2.5 3.5" />
    </svg>
  );
}

export function IconSpark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5Z" />
    </svg>
  );
}

export function IconArrow(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconChip(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  );
}

export function IconFlask(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3h4M10.5 3v6.2L5.4 18a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3l-5.1-8.8V3" />
      <path d="M7.6 15h8.8" />
    </svg>
  );
}

export function IconDownload(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11M7 10.5l5 5 5-5" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

export function IconEye(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

export function IconMedal(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 3h8l-2.2 6.2M8 3l2.2 6.2" />
      <circle cx="12" cy="15" r="5.5" />
      <path d="m12 12.3.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3.9-1.8Z" />
    </svg>
  );
}

export function IconUser(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20.5c0-3.9 3.1-6.5 7-6.5s7 2.6 7 6.5" />
    </svg>
  );
}

export function IconTicket(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h14A1.5 1.5 0 0 1 20.5 6v2.5a2.5 2.5 0 0 0 0 5V18a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18v-4.5a2.5 2.5 0 0 0 0-5Z" />
      <path d="M14.5 4.5v15" strokeDasharray="1.5 2.2" />
    </svg>
  );
}

/* WhatsApp mark: chat bubble with handset, drawn filled to read at small sizes */
export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" {...props}>
      <path
        d="M12 2.6a9.4 9.4 0 0 0-8.1 14.1L2.6 21.4l4.8-1.26A9.4 9.4 0 1 0 12 2.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.9 7.4c.2-.4.45-.42.75-.42h.52c.18 0 .4 0 .56.42l.72 1.74c.08.2.04.42-.1.6l-.5.62c-.12.14-.2.32-.06.54a6.4 6.4 0 0 0 2.4 2.36c.22.12.4.08.54-.06l.64-.7c.16-.18.38-.22.6-.12l1.66.8c.22.1.34.28.34.5 0 .52-.24 1.14-.66 1.48-.52.42-1.24.6-2 .38-2.7-.82-4.8-2.9-5.62-5.52-.22-.72-.02-1.66.26-2.12Z"
        fill="currentColor"
      />
    </svg>
  );
}
