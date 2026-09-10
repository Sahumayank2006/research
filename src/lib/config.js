// ============================================================
// RESEARCH-O-THON 2026 — Single source of truth
// Amity School of Engineering & Technology (ASET)
// Amity University Madhya Pradesh, Gwalior
// ============================================================

export const EVENT = {
  name: 'Research-O-Thon',
  year: '2026',
  tagline: 'Transform Ideas into Research Publications in 48 Hours',
  subtitle:
    'A three-day intensive research sprint where a raw idea becomes a submission-ready, IEEE-formatted manuscript — drafted, prototyped, defended and judged, all inside one campus.',

  host: 'Amity School of Engineering and Technology (ASET)',
  university: 'Amity University Madhya Pradesh',
  association: 'In association with IEEE MP Section & IEEE Student Chapter',

  location: 'Amity University Madhya Pradesh, Gwalior',
  locationShort: 'AUMP, Gwalior',
  dateLabel: '21 – 23 September 2026',
  dateShort: '21–23 Sep 2026',
  startISO: '2026-09-21T09:00:00+05:30',

  registerUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSchuKNbOQUCnhj-ydam1_olMUBqyZJ9VOr7nhdBK2eSPGHYiw/viewform?usp=publish-editor',

  email: 'dsharma@gwa.amity.edu',
};

// --- Marquee ticker items (below the navbar) ------------------
export const MARQUEE = [
  'Registrations Open',
  '21 – 23 September 2026',
  'Amity University Madhya Pradesh, Gwalior',
  'Amity Students — ₹200 Only',
  'Teams of 1 to 4',
  'IEEE Two-Column Manuscript',
  'Draft. Defend. Publish.',
  '35–50 Manuscripts Targeted',
  'IEEE MP Section Co-Sponsored',
];

// --- Sponsors / host logos (public/1.jpg … public/5.jpg) ------
export const SPONSOR_LOGOS = [
  { src: '/1.jpg', name: 'IEEE MP Section' },
  { src: '/2.jpg', name: 'IETE' },
  { src: '/3.jpg', name: 'AII' },
  { src: '/4.jpg', name: 'Amity University Madhya Pradesh' },
  { src: '/5.jpg', name: 'MIR Labs Society' },
];

// --- Headline numbers ----------------------------------------
export const STATS = [
  { value: 48, suffix: '', label: 'Hours of Sprint', note: 'Across three days' },
  { value: 50, prefix: '', suffix: '', label: 'Manuscripts Targeted', note: '35–50 papers generated' },
  { value: 4, suffix: '', label: 'Members per Team', note: 'Interdisciplinary encouraged' },
  {
    value: 200,
    prefix: '₹',
    suffix: '',
    alt: '₹300',
    label: 'Registration Fee',
    note: '₹200 for Amity students · ₹300 for students other than Amity',
  },
];

// --- Why participate -----------------------------------------
export const PILLARS = [
  {
    n: '01',
    title: 'You leave with a manuscript',
    body: 'Not a certificate of attendance. Not a slide deck. A complete, submission-ready paper in IEEE two-column format, written by you and stress-tested by a jury.',
  },
  {
    n: '02',
    title: 'Mentors sit beside you',
    body: 'Faculty and IEEE reviewers work the floor through both drafting nights — framing your research gap, tightening methodology, and fixing citations in real time.',
  },
  {
    n: '03',
    title: 'A defence, not a demo',
    body: 'Phase 1 makes you defend your research gap and proof-of-implementation. Phase 2 puts your final paper in front of an expert panel. Both build the muscle publication demands.',
  },
  {
    n: '04',
    title: 'Publication-grade discipline',
    body: 'Similarity under 15%, disclosed AI use, IEEE referencing, a real abstract. The habits that separate an accepted paper from a desk rejection.',
  },
  {
    n: '05',
    title: 'Build hardware or software',
    body: 'Prototyping benches and datasets are open through the sprint. Your results section can be backed by an actual working artefact, not a hypothetical.',
  },
  {
    n: '06',
    title: 'IEEE on your record',
    body: 'Organised with IEEE MP Section and the IEEE Student Chapter, with a membership drive and orientation for participants who want the pathway.',
  },
];

// --- Tracks ---------------------------------------------------
// `motif` selects the plate drawing in components/TrackMotif.js
export const TRACKS = [
  {
    n: '01',
    motif: 'neural',
    name: 'Artificial Intelligence & Machine Learning',
    short: 'AI & Machine Learning',
    scope:
      'Deep learning, natural language processing, computer vision, generative models, reinforcement learning, and responsible AI.',
    tags: ['Deep Learning', 'NLP', 'Computer Vision', 'Generative Models', 'AI Ethics'],
    output: 'A trained model, an ablation table, and a results section that survives review.',
  },
  {
    n: '02',
    motif: 'data',
    name: 'Data Science & Analytics',
    short: 'Data Science',
    scope:
      'Big-data pipelines, statistical modelling, visualisation, forecasting, and decision-support systems.',
    tags: ['Pipelines', 'Statistical Modelling', 'Forecasting', 'Visualisation', 'Decision Support'],
    output: 'A reproducible pipeline and a dataset your figures actually come from.',
  },
  {
    n: '03',
    motif: 'security',
    name: 'Computing Systems & Cybersecurity',
    short: 'Systems & Security',
    scope:
      'Algorithms, distributed systems, networking, cryptography, secure software engineering, and cloud infrastructure.',
    tags: ['Algorithms', 'Distributed Systems', 'Cryptography', 'Networking', 'Cloud'],
    output: 'A threat model, a benchmark, and a defensible complexity argument.',
  },
  {
    n: '04',
    motif: 'iot',
    name: 'IoT, Embedded & Hardware Prototyping',
    short: 'IoT & Embedded',
    scope:
      'Sensor networks, embedded firmware, FPGA design, robotics, and integrated hardware–software builds.',
    tags: ['Sensors', 'Firmware', 'FPGA', 'Robotics', 'Edge Computing'],
    output: 'A working bench prototype and measurements taken from it, not from a datasheet.',
  },
  {
    n: '05',
    motif: 'sustain',
    name: 'Sustainable & Interdisciplinary Engineering',
    short: 'Sustainable Engineering',
    scope:
      'Green computing, smart infrastructure, health-tech, agri-tech, and engineering built for social impact.',
    tags: ['Green Computing', 'Smart Infrastructure', 'Health-Tech', 'Agri-Tech', 'Social Impact'],
    output: 'An impact case backed by numbers a reviewer can check.',
  },
  {
    n: '06',
    motif: 'method',
    name: 'Research Methodology & Publication Ethics',
    short: 'Methodology & Ethics',
    scope:
      'Study design, systematic literature review, citation practice, reproducibility, and academic integrity.',
    tags: ['Study Design', 'Systematic Review', 'Citation Practice', 'Reproducibility', 'Integrity'],
    output: 'A survey or methodology paper with a literature map that holds up.',
  },
];

// --- Phases ---------------------------------------------------
export const PHASES = [
  {
    tag: 'Phase 01',
    window: 'Day 1 → Day 2',
    title: 'Research Gap & Implementation Defence',
    objective:
      'Teams present their core problem statement, research gap, objectives, proposed architecture, and initial proof-of-implementation or dataset.',
    deliverables: ['Abstract', 'Paper outline', 'Preliminary technical results'],
  },
  {
    tag: 'Phase 02',
    window: 'Day 3',
    title: 'Final Paper Presentation & Jury Evaluation',
    objective:
      'Final manuscript submission and an oral presentation defence in front of an expert panel of academic and IEEE reviewers.',
    deliverables: ['Full paper draft (PDF)', 'Presentation slides', 'Live Q&A defence'],
  },
];

// --- Manuscript standards ------------------------------------
export const STANDARDS = [
  {
    title: 'IEEE Template',
    body: 'All submissions must strictly follow the standard IEEE Two-Column Format — US Letter size, 10 pt Times New Roman.',
  },
  {
    title: 'Originality',
    body: 'Papers must be original and must not be under simultaneous review at another journal or conference.',
  },
  {
    title: 'Similarity Index',
    body: 'Plagiarism / similarity index must remain below 15%, excluding references. Verified before jury evaluation.',
  },
  {
    title: 'AI Disclosure',
    body: 'AI-generated text or assistance must be explicitly disclosed in the Acknowledgements or Methods section, in line with IEEE AI ethics policies.',
  },
];

export const PAPER_STRUCTURE = [
  'Title',
  'Abstract (150–250 words)',
  'Keywords',
  'Introduction',
  'Literature Review / Research Gap',
  'Methodology / System Design',
  'Results & Discussion',
  'Conclusion',
  'IEEE References',
];

// --- Judging rubric ------------------------------------------
export const RUBRIC = [
  {
    criterion: 'Research Gap & Novelty',
    description: 'Clarity of problem definition and distinction from existing work.',
    weight: 25,
  },
  {
    criterion: 'Technical Depth & Execution',
    description: 'Soundness of methodology, hardware/software prototype, or experimental validation.',
    weight: 30,
  },
  {
    criterion: 'Manuscript Quality',
    description: 'Structure, clarity, adherence to IEEE format, figures, and reference quality.',
    weight: 25,
  },
  {
    criterion: 'Presentation & Q&A Defence',
    description: 'Quality of the oral presentation and the response to jury questions.',
    weight: 20,
  },
];

// The two explicitly checked components inside the 25% Manuscript Quality band
export const COMPLIANCE_MARKS = [
  {
    label: 'IEEE Formatting Compliance',
    detail:
      'Two-column IEEE template, US Letter, 10 pt Times New Roman, correct section order, captioned figures and tables, and IEEE-style references.',
    penalty:
      'Papers submitted outside the IEEE template forfeit this component entirely and are returned unscored on format.',
  },
  {
    label: 'Originality & Plagiarism Index',
    detail:
      'A similarity index below 15%, excluding references, clears this component in full. Between 15% and 25%, credit is reduced at the jury\u2019s discretion.',
    penalty:
      'Above 25% similarity, or any fabricated or pre-written manuscript, means immediate disqualification.',
  },
];

// --- Conduct --------------------------------------------------
export const CONDUCT = [
  {
    title: 'Research Ethics',
    body: 'Any form of data fabrication, pre-written or plagiarised manuscripts, or undisclosed submission to third-party events leads to immediate disqualification.',
  },
  {
    title: 'Mandatory Attendance',
    body: 'At least one registered co-author must be physically present at the venue during all progress checks and the final evaluation sprint.',
  },
  {
    title: 'Single Submission',
    body: 'A team may submit exactly one manuscript. Simultaneous submission of the same work elsewhere during the event is not permitted.',
  },
  {
    title: 'Fair Use of AI',
    body: 'AI assistance is permitted but must be disclosed. Undisclosed AI-generated content is treated as a breach of research integrity.',
  },
];

// --- Awards ---------------------------------------------------
export const AWARDS = [
  {
    title: 'Best Research Paper',
    body: 'For the manuscript with the strongest research gap, methodology and scholarly rigour across the full rubric.',
  },
  {
    title: 'Best Technical Execution',
    body: 'For the most convincing prototype, experimental validation or dataset work behind the results section.',
  },
  {
    title: 'Best Presentation & Defence',
    body: 'For the team that presents and defends its work most clearly under jury questioning.',
  },
  {
    title: 'Certificate of Participation',
    body: 'Every registered participant receives an official certificate endorsed by ASET and the IEEE Student Chapter.',
  },
];

// --- Registration --------------------------------------------
export const FEES = [
  {
    label: 'Amity Students',
    amount: '₹200',
    note: 'Amity University Madhya Pradesh students, on valid student ID.',
    featured: true,
  },
  {
    label: 'External Participants',
    amount: '₹300',
    note: 'Students, research scholars and professionals from other institutions.',
    featured: false,
  },
];

export const INCLUSIONS = [
  'Registration kit & IEEE-format starter template',
  'Mentor access through both drafting nights',
  'Prototyping bench & dataset access',
  'Working lunch, breakfast and refreshments',
  'Plagiarism screening on your final draft',
  'Certificate of participation',
  'Eligibility for all awards',
];

// --- Committee (order as per the official organising list) ----
export const COMMITTEE = {
  // Tier 1 sits alone at the top of the crest; tier 2 sits side by side beneath it.
  patrons: [
    {
      tier: 1,
      role: 'Chief Patron',
      name: 'Lt. Gen. V. K. Sharma, AVSM (Retd.)',
      titles: [
        'Pro Chancellor, Amity University Madhya Pradesh',
        'Senior Vice President, RBEF',
      ],
    },
    {
      tier: 2,
      role: 'Patron',
      name: 'Prof. (Dr.) R. S. Tomar',
      titles: ['Vice Chancellor, Amity University Madhya Pradesh'],
    },
    {
      tier: 2,
      role: 'Co-Patron',
      name: 'Prof. (Dr.) M. P. Kaushik',
      titles: ['Pro Vice-Chancellor (Research), Amity University, Madhya Pradesh'],
    },
  ],
  leadership: [
    {
      name: 'Dr. Alok Jain',
      role: 'Organizing Secretary',
      detail: 'Director, ASET',
    },
    {
      name: 'Dr. Dinesh Sharma',
      role: 'Event Organizing Chair',
      detail: 'Associate Professor, Department of CSE & Incubator Coordinator',
    },
    {
      name: 'Dr. C. S. Raghuvanshi',
      role: 'Event Organizing Chair',
      detail: 'HoD, CSE',
    },
  ],
  groups: [
    {
      title: 'Core Committee',
      members: [
        'Dr. Raghvendra Kumar Mishra',
        'Dr. Ganesh Gupta',
        'Dr. Anuj Singh',
        'Dr. Ashok Kumar',
        'Dr. Jhankar Moolchandani',
        'Dr. Vikrant Chole',
        'Mr. Praveen Gupta',
      ],
    },
    {
      title: 'Finance Committee',
      members: [
        'Dr. Ghanshyam',
        'Dr. Devendra Kumar Sharma',
        'Dr. Deepak Motwani',
        'Dr. Ashish Tripathi',
      ],
    },
    {
      title: 'Registration & Stage Committee (Certificate)',
      members: [
        'Dr. Madhvi Dhingra',
        'Dr. Nishtha Parashar',
        'Dr. Ankita',
        'Dr. Harshita Chaurasiya',
        'Dr. Sunidhi Shrivastav',
      ],
    },
    {
      title: 'Publicity Committee',
      members: [
        'Dr. Samta Jain Goyal',
        'Dr. Rajeev Goyal',
        'Dr. Gaurav Sharma',
        'Dr. Shyam Gupta',
        'Dr. Manish Gupta',
        'Dr. Satya Prakash',
        'Dr. Satish Bansal',
      ],
    },
    {
      title: 'Discipline Committee',
      members: ['Dr. Ashok Shrivastava', 'Dr. Kapil Sharma', 'Mr. Rohit Singh Thakur'],
    },
    {
      title: 'Student Organizing Team',
      subtitle: 'Department of CSE — ASET',
      note: 'IEEE Student Chapter Members, ASET, Amity University Madhya Pradesh',
      members: ['Mayank Sahu', 'Jyotima Tomar', 'Vaibhav', 'Anshul Gole'],
    },
  ],
};

// --- Venue ----------------------------------------------------
export const VENUE = {
  campus: 'Amity University Madhya Pradesh',
  school: 'Amity School of Engineering & Technology (ASET)',
  address: 'Maharajpura Dang, Opposite Gwalior Airport, Gwalior – 474005, Madhya Pradesh',
  mapUrl: 'https://maps.google.com/?q=Amity+University+Madhya+Pradesh+Gwalior',
  travel: [
    { mode: 'By Air', detail: 'Gwalior Airport (GWL) — approximately 3 km from campus' },
    { mode: 'By Rail', detail: 'Gwalior Junction — approximately 10 km from campus' },
    { mode: 'By Road', detail: 'Directly connected via NH-44 and state highways' },
  ],
};

// --- FAQ ------------------------------------------------------
export const FAQ = [
  {
    q: 'Who can participate in Research-O-Thon 2026?',
    a: 'Undergraduate, postgraduate and doctoral students, early-career academics, IEEE members and industry R&D participants are all welcome. There is no branch restriction — interdisciplinary teams are actively encouraged.',
  },
  {
    q: 'Do I need a finished paper or even a finished idea before registering?',
    a: 'No. You need a research direction and the willingness to work. The entire point of the sprint is to take you from a rough idea to a structured, submission-ready manuscript with mentor guidance at every stage.',
  },
  {
    q: 'How large can a team be?',
    a: 'Teams may consist of 1 to 4 participants. You may also register individually. Interdisciplinary teams — for example, a CSE student paired with an electronics or biotech student — are encouraged.',
  },
  {
    q: 'What exactly is the registration fee?',
    a: 'Amity University Madhya Pradesh students pay ₹200 only, on presentation of a valid student ID. Participants from other institutions pay ₹300. The fee is all-inclusive of the kit, meals, mentorship and certification.',
  },
  {
    q: 'How is formatting and plagiarism actually scored?',
    a: 'Manuscript Quality carries 25% of the total, and both formatting and originality are checked inside it before the jury scores your paper. Your manuscript must follow the IEEE two-column template, and the similarity index must stay below 15%, excluding references. Above 25% similarity leads to disqualification.',
  },
  {
    q: 'Can I use AI tools while drafting?',
    a: 'Yes, but you must disclose it. Any AI-generated text or assistance has to be stated explicitly in the Acknowledgements or Methods section, in line with IEEE AI ethics policies. Undisclosed use is treated as a breach of integrity.',
  },
  {
    q: 'Is publication in IEEE Xplore guaranteed?',
    a: 'No. The event is organised in association with IEEE MP Section, but submission to any journal or conference remains a separate process with its own peer review. What Research-O-Thon guarantees is a complete, publication-ready draft and the discipline to get it there.',
  },
  {
    q: 'What should I bring?',
    a: 'Your laptop and charger, any hardware or datasets your work depends on, reference material, and a valid institutional ID. Everything else — meals, workspace, mentors and screening — is provided.',
  },
];

// --- Navigation ----------------------------------------------
export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#format', label: 'Format' },
  { href: '#evaluation', label: 'Evaluation' },
  { href: '#awards', label: 'Awards' },
  { href: '#committee', label: 'Committee' },
  { href: '#register', label: 'Register' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];
