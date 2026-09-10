/**
 * Specimen plates — one line drawing per research track.
 *
 * Every stroke carries `data-draw` so the parent can animate them in with a
 * dash-offset sweep when the track becomes active (see .motif in sections.css).
 */

const frame = {
  viewBox: '0 0 120 120',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
};

const S = {
  stroke: 'currentColor',
  strokeWidth: 1.1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/* 01 — layered network */
function Neural() {
  const layers = [
    [30, [34, 60, 86]],
    [60, [26, 48, 72, 94]],
    [90, [44, 76]],
  ];
  const lines = [];
  for (let i = 0; i < layers.length - 1; i += 1) {
    const [x1, ys1] = layers[i];
    const [x2, ys2] = layers[i + 1];
    ys1.forEach((y1) => ys2.forEach((y2) => lines.push([x1, y1, x2, y2])));
  }
  return (
    <svg {...frame}>
      <g opacity="0.4">
        {lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} data-draw x1={x1} y1={y1} x2={x2} y2={y2} {...S} strokeWidth={0.6} />
        ))}
      </g>
      {layers.map(([x, ys]) =>
        ys.map((y) => <circle key={`${x}-${y}`} data-pop cx={x} cy={y} r="4.2" {...S} />)
      )}
    </svg>
  );
}

/* 02 — distribution & trend */
function Data() {
  const bars = [
    [26, 78],
    [40, 62],
    [54, 70],
    [68, 46],
    [82, 54],
    [96, 32],
  ];
  return (
    <svg {...frame}>
      <path data-draw d="M18 18v84h86" {...S} />
      <g opacity="0.45">
        {[40, 60, 80].map((y) => (
          <line key={y} data-draw x1="18" y1={y} x2="104" y2={y} {...S} strokeWidth={0.5} strokeDasharray="2 4" />
        ))}
      </g>
      {bars.map(([x, y]) => (
        <line key={x} data-draw x1={x} y1="102" x2={x} y2={y} {...S} strokeWidth={2.6} />
      ))}
      <path
        data-draw
        d="M26 70 40 56 54 60 68 38 82 44 96 24"
        {...S}
        strokeWidth={1.4}
        opacity="0.75"
      />
      {bars.map(([x, y]) => (
        <circle key={`d${x}`} data-pop cx={x} cy={y - 8} r="2.4" fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

/* 03 — shield over a routed board */
function Security() {
  return (
    <svg {...frame}>
      <g opacity="0.42">
        <path data-draw d="M8 34h26v18h20M8 86h20V64h30" {...S} strokeWidth={0.7} />
        <path data-draw d="M112 34H88v22H70M112 86H92V62H74" {...S} strokeWidth={0.7} />
        <circle data-pop cx="8" cy="34" r="2" fill="currentColor" stroke="none" />
        <circle data-pop cx="112" cy="86" r="2" fill="currentColor" stroke="none" />
      </g>
      <path data-draw d="M60 14 96 27v29c0 27-19 41-36 50-17-9-36-23-36-50V27L60 14Z" {...S} />
      <path data-draw d="M60 26 86 35v21c0 20-14 30-26 37-12-7-26-17-26-37V35l26-9Z" {...S} strokeWidth={0.6} opacity="0.5" />
      <circle data-pop cx="60" cy="58" r="6.5" {...S} />
      <path data-draw d="M60 64.5v11" {...S} />
    </svg>
  );
}

/* 04 — silicon die broadcasting */
function Iot() {
  return (
    <svg {...frame}>
      <g opacity="0.5">
        {[22, 34, 46].map((r, i) => (
          <path
            key={r}
            data-draw
            d={`M${60 - r} 60a${r} ${r} 0 0 1 ${r * 2} 0`}
            {...S}
            strokeWidth={0.8}
            transform={`rotate(${-90 + i * 0} 60 60)`}
          />
        ))}
      </g>
      <rect data-draw x="42" y="42" width="36" height="36" rx="3" {...S} />
      <rect data-draw x="52" y="52" width="16" height="16" rx="1.5" {...S} strokeWidth={0.7} opacity="0.6" />
      <g {...S} strokeWidth={0.9}>
        {[50, 60, 70].map((v) => (
          <g key={v}>
            <line data-draw x1={v} y1="42" x2={v} y2="32" />
            <line data-draw x1={v} y1="78" x2={v} y2="88" />
            <line data-draw x1="42" y1={v} x2="32" y2={v} />
            <line data-draw x1="78" y1={v} x2="88" y2={v} />
          </g>
        ))}
      </g>
      <circle data-pop cx="60" cy="60" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* 05 — growth through a circuit leaf */
function Sustain() {
  return (
    <svg {...frame}>
      <path
        data-draw
        d="M96 22c0 38-22 62-52 62-8 0-14-2-18-5 2-32 24-55 54-57 8-1 14 0 16 0Z"
        {...S}
      />
      <path data-draw d="M26 100C40 66 62 44 92 28" {...S} strokeWidth={1.3} />
      <g opacity="0.55" {...S} strokeWidth={0.7}>
        <path data-draw d="M44 74c4-12 10-18 22-22" />
        <path data-draw d="M56 58c2-10 8-15 18-19" />
        <path data-draw d="M38 88c3-14 8-22 16-29" />
      </g>
      <g opacity="0.75">
        <circle data-pop cx="66" cy="52" r="2.4" fill="currentColor" stroke="none" />
        <circle data-pop cx="74" cy="39" r="2.4" fill="currentColor" stroke="none" />
        <circle data-pop cx="54" cy="59" r="2.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/* 06 — stacked manuscript under a lens */
function Method() {
  return (
    <svg {...frame}>
      <rect data-draw x="24" y="26" width="58" height="74" rx="2" {...S} />
      <path data-draw d="M32 20h56a2 2 0 0 1 2 2v70" {...S} strokeWidth={0.7} opacity="0.5" />
      <g {...S} strokeWidth={0.8} opacity="0.7">
        <line data-draw x1="34" y1="42" x2="60" y2="42" />
        <line data-draw x1="34" y1="52" x2="72" y2="52" />
        <line data-draw x1="34" y1="62" x2="66" y2="62" />
        <line data-draw x1="34" y1="82" x2="58" y2="82" />
        <line data-draw x1="34" y1="90" x2="70" y2="90" />
      </g>
      <circle data-draw cx="80" cy="72" r="20" {...S} strokeWidth={1.3} />
      <path data-draw d="M94 86 106 98" {...S} strokeWidth={1.6} />
      <path data-draw d="M72 72h16M80 64v16" {...S} strokeWidth={0.7} opacity="0.6" />
    </svg>
  );
}

const MOTIFS = {
  neural: Neural,
  data: Data,
  security: Security,
  iot: Iot,
  sustain: Sustain,
  method: Method,
};

export default function TrackMotif({ name }) {
  const Motif = MOTIFS[name] || Neural;
  return <Motif />;
}
