/**
 * The Research-O-Thon seal — a compass rose read as an academic crest:
 * an outer ring for the institution, a rotating inner orbit for the sprint,
 * and a set square at the centre for the work itself.
 */
export default function Crest({ className = '' }) {
  return (
    <svg
      className={`crest ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="crest-gold" x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F0D08F" />
          <stop offset="0.45" stopColor="#C79438" />
          <stop offset="1" stopColor="#8E6518" />
        </linearGradient>
      </defs>

      {/* outer ring */}
      <circle cx="32" cy="32" r="28.5" stroke="url(#crest-gold)" strokeWidth="1.6" />

      {/* cardinal ticks */}
      <g stroke="url(#crest-gold)" strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 1.5v6" />
        <path d="M32 56.5v6" />
        <path d="M1.5 32h6" />
        <path d="M56.5 32h6" />
      </g>

      {/* rotating orbit */}
      <circle
        className="crest__orbit"
        cx="32"
        cy="32"
        r="22"
        stroke="url(#crest-gold)"
        strokeWidth="1"
        strokeDasharray="3 5"
        opacity="0.85"
      />

      {/* set square / open manuscript */}
      <path
        d="M32 15.5 47 32 32 48.5 17 32 32 15.5Z"
        stroke="url(#crest-gold)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M32 15.5V48.5" stroke="url(#crest-gold)" strokeWidth="1" opacity="0.55" />
      <path d="M23 32h18" stroke="url(#crest-gold)" strokeWidth="1" opacity="0.55" />
      <circle cx="32" cy="32" r="3.4" fill="url(#crest-gold)" />
    </svg>
  );
}
