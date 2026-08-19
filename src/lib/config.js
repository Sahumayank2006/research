// Event configuration — Research-O-Thon 2025
// All event data is centralized here for easy updates

export const EVENT_CONFIG = {
  name: 'Research-O-Thon 2025',
  tagline: 'Transform Ideas into Research Publications — in 48 Hours.',
  subtitle: 'A 48-hour structured research-paper drafting sprint where participants leave with a real manuscript draft, guided by mentors, grounded in IEEE-aligned methodology.',
  
  // Dates
  startDate: '2025-09-17T09:00:00+05:30',
  endDate: '2025-09-18T17:00:00+05:30',
  
  // Fee
  fee: 300,
  feeCurrency: '₹',
  
  // UPI Payment
  upiId: 'your-upi-id@bank',  // Replace with actual UPI ID
  
  // Stats
  stats: [
    { value: 48, suffix: '', label: 'Hours' },
    { value: 30, suffix: '+', label: 'Manuscript Drafts' },
    { value: 2, suffix: '', label: 'Keynote Sessions' },
    { value: 300, prefix: '₹', suffix: '', label: 'All-Inclusive Fee' },
  ],
  
  // Tracks
  tracks: [
    {
      id: 'track-01',
      number: '01',
      name: 'Computer Science & Engineering',
      scope: 'Algorithms, systems, networking, cybersecurity, software engineering, and emerging computing paradigms.',
      audience: 'CS/IT students and researchers working on core computing problems.',
      icon: '⟨/⟩',
    },
    {
      id: 'track-02',
      number: '02',
      name: 'Applied Artificial Intelligence',
      scope: 'Machine learning, deep learning, NLP, computer vision, reinforcement learning, and AI applications in real-world domains.',
      audience: 'Researchers exploring AI/ML applications across disciplines.',
      icon: '◆',
    },
    {
      id: 'track-03',
      number: '03',
      name: 'Data Science & Data Processing',
      scope: 'Big data analytics, statistical modelling, data pipelines, visualization, and data-driven decision systems.',
      audience: 'Data analysts, statisticians, and data engineering enthusiasts.',
      icon: '◈',
    },
    {
      id: 'track-04',
      number: '04',
      name: 'Hardware / Software Prototyping',
      scope: 'IoT, embedded systems, FPGA design, robotics, and integrated hardware-software solutions.',
      audience: 'Engineers building physical or integrated systems alongside software.',
      icon: '⊞',
    },
    {
      id: 'track-05',
      number: '05',
      name: 'Academic Research Methodology',
      scope: 'Research design, literature review techniques, citation management, academic writing standards, and publication ethics.',
      audience: 'Early-career researchers wanting to strengthen their research fundamentals.',
      icon: '◉',
    },
  ],

  // Sprint timeline (48 hours)
  sprintTimeline: [
    { hour: '0', title: 'Inauguration & Keynote 1', description: 'Opening ceremony, keynote address, and event orientation.' },
    { hour: '2', title: 'Idea Submission & Track Allocation', description: 'Participants submit research ideas; mentor-track assignment begins.' },
    { hour: '6–36', title: 'Manuscript Drafting Sprint', description: 'Core drafting phase with scheduled mentor rounds at Hours 8, 16, 24, and 32.' },
    { hour: '38', title: 'Keynote 2 / Invited Lecture', description: 'Second keynote session on advanced research methodology.' },
    { hour: '42', title: 'Draft Submission Deadline', description: 'All manuscript drafts must be submitted for review.' },
    { hour: '46', title: 'Pitch Presentations & Judging', description: 'Teams present their research and manuscripts to the judging panel.' },
    { hour: '48', title: 'Awards Ceremony & Valedictory', description: 'Best Paper, Best Pitch awards, certificates, and closing ceremony.' },
  ],

  // Day-wise schedule
  schedule: {
    day1: {
      date: '17 September 2025',
      label: 'Day 1',
      blocks: [
        { time: '08:00 – 09:00', event: 'Registration Desk & Welcome Kit Distribution' },
        { time: '09:00 – 10:30', event: 'Inaugural Session & Keynote Address 1' },
        { time: '10:30 – 11:00', event: 'Tea / Coffee Break' },
        { time: '11:00 – 13:00', event: 'Idea Submission & Track Allocation' },
        { time: '13:00 – 14:00', event: 'Working Lunch' },
        { time: '14:00 – 17:00', event: 'Manuscript Drafting Sprint — Session 1' },
        { time: '17:00 – 17:30', event: 'Tea / Coffee Break' },
        { time: '17:30 – 21:00', event: 'Manuscript Drafting Sprint — Session 2 (Mentor Round 1)' },
      ],
    },
    day2: {
      date: '18 September 2025',
      label: 'Day 2',
      blocks: [
        { time: '08:00 – 09:00', event: 'Breakfast' },
        { time: '09:00 – 12:00', event: 'Manuscript Drafting Sprint — Session 3 (Mentor Round 2)' },
        { time: '12:00 – 13:00', event: 'Keynote Address 2 / Invited Lecture' },
        { time: '13:00 – 14:00', event: 'Working Lunch' },
        { time: '14:00 – 16:00', event: 'Final Revisions & Draft Submission Deadline' },
        { time: '16:00 – 17:00', event: 'Pitch Presentations & Judging' },
        { time: '17:00 – 18:00', event: 'Awards Ceremony & Valedictory Session' },
      ],
    },
  },

  // Why Research-O-Thon — Differentiators
  differentiators: [
    {
      title: 'Structured Mentorship Sprints',
      description: 'Dedicated mentor check-ins at scheduled intervals across the 48 hours — not just a free-for-all. Each team gets guided, focused attention.',
    },
    {
      title: 'From Idea → Draft, Guided',
      description: 'A defined pipeline: ideation → methodology framing → literature alignment → draft writing → peer/mentor review → final pitch. No one is left figuring it out alone.',
    },
    {
      title: 'IEEE-Aligned Rigor',
      description: 'Sessions grounded in academic research methodology, aimed at manuscripts that meet real publication standards — not just "project reports."',
    },
    {
      title: 'Best Paper & Best Pitch Awards',
      description: 'Real recognition from a qualified judging panel — not just participation certificates. Your work is evaluated on substance, originality, and presentation.',
    },
    {
      title: 'IEEE Membership Pathway',
      description: 'A dedicated IEEE membership drive and orientation. Understand the value of IEEE membership and get guided through the enrollment process.',
    },
  ],

  // Speakers (placeholder-ready)
  speakers: [
    {
      name: 'To Be Announced',
      designation: 'Keynote Speaker 1',
      focus: 'Research Methodology & Publication Ethics',
      photo: null,
    },
    {
      name: 'To Be Announced',
      designation: 'Keynote Speaker 2',
      focus: 'Emerging Trends in AI & Data Science',
      photo: null,
    },
  ],

  // Committee
  committee: {
    patron: {
      title: 'Chief Patron',
      name: 'Amity University Madhya Pradesh',
      designation: 'Institutional Authority',
    },
    chair: {
      title: 'Organizing Chair',
      name: 'Dr. Dinesh Sharma',
      designation: 'Associate Professor, Dept. of CSE, ASET',
    },
    ieeeNotice: 'IEEE Madhya Pradesh Section extends Technical & Financial Co-Sponsorship to Research-O-Thon 2025, providing oversight through a dedicated committee for quality assurance and alignment with IEEE standards.',
    members: [
      { role: 'General Chair', name: 'TBA', affiliation: 'ASET, Amity University MP' },
      { role: 'Technical Program Chair', name: 'TBA', affiliation: 'ASET, Amity University MP' },
      { role: 'Finance Chair', name: 'TBA', affiliation: 'ASET, Amity University MP' },
      { role: 'Advisory Committee', name: 'TBA', affiliation: 'IEEE MP Section' },
      { role: 'Organizing Secretary', name: 'TBA', affiliation: 'ASET, Amity University MP' },
      { role: 'Student Coordinator', name: 'TBA', affiliation: 'ASET, Amity University MP' },
    ],
  },

  // Prizes
  prizes: [
    {
      title: 'Best Research Paper Award',
      description: 'Awarded to the manuscript demonstrating the highest quality of research methodology, originality, and scholarly rigor.',
      icon: 'trophy',
    },
    {
      title: 'Best Pitch Award',
      description: 'Recognizes the most compelling and well-structured research presentation to the judging panel.',
      icon: 'mic',
    },
    {
      title: 'Certificate of Participation',
      description: 'All registered participants receive an official certificate of participation endorsed by ASET and IEEE MP Section.',
      icon: 'certificate',
    },
  ],

  // Registration inclusions
  inclusions: [
    'Registration Kit',
    'Working Lunch (2 Days)',
    'Breakfast',
    'Tea / Coffee Breaks',
    'Mentorship Access',
    'Certificate of Participation',
    'Eligibility for Awards',
  ],

  // Venue
  venue: {
    name: 'Block E Seminar Hall',
    institution: 'Amity School of Engineering & Technology (ASET)',
    university: 'Amity University Madhya Pradesh',
    address: 'Maharajpura Dang, Opp. Airport, Gwalior – 474005, Madhya Pradesh, India',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.4!2d78.2!3d26.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEyJzAwLjAiTiA3OMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
    coordinates: { lat: 26.2, lng: 78.2 },
    travelNotes: [
      { mode: 'By Air', detail: 'Gwalior Airport (GWL) — approximately 3 km from campus' },
      { mode: 'By Rail', detail: 'Gwalior Junction Railway Station — approximately 10 km from campus' },
      { mode: 'By Road', detail: 'Well-connected via NH-44 and state highways' },
    ],
  },

  // Partners
  partners: {
    ieee: {
      name: 'IEEE Madhya Pradesh Section',
      address: '135-E, Mayur Nagar, Thatipur, Gwalior – 474011',
      role: 'Technical & Financial Co-Sponsorship',
    },
    aset: {
      name: 'Amity School of Engineering & Technology',
      university: 'Amity University Madhya Pradesh',
      address: 'Maharajpura Dang, Opp. Airport, Gwalior – 474005',
      role: 'Host Institution',
    },
  },

  // FAQ
  faq: [
    {
      question: 'Who can participate in Research-O-Thon?',
      answer: 'The event is open to students (undergraduate, postgraduate, doctoral), early-career academics, IEEE members, non-IEEE professionals, and industry R&D participants. There is no restriction on branch — anyone with a research idea in the listed tracks is welcome.',
    },
    {
      question: 'Do I need a completed research paper or idea to register?',
      answer: 'No. You only need a working research idea or area of interest. The entire point of the 48-hour sprint is to take you from idea to a structured manuscript draft, with mentor guidance at every stage.',
    },
    {
      question: 'Can I participate as a team or individually?',
      answer: 'Both options are available. You can register individually or as a team of up to 4 members. Each team member must register separately but indicate team participation during the form.',
    },
    {
      question: 'What does "manuscript draft" mean — is it a full published paper?',
      answer: 'A manuscript draft is a structured, near-complete research document ready for further refinement and submission to a journal or conference. It is not a guaranteed publication — it is the output of a focused, mentored drafting process.',
    },
    {
      question: 'Is the registration fee refundable?',
      answer: 'The ₹300 registration fee is non-refundable once confirmed. However, in case of event cancellation by the organizers, a full refund will be processed.',
    },
    {
      question: 'What certificate will I receive?',
      answer: 'All participants receive an official Certificate of Participation co-endorsed by ASET, Amity University Madhya Pradesh, and IEEE Madhya Pradesh Section. Award winners receive additional certificates.',
    },
    {
      question: 'Are the manuscripts eligible for IEEE Xplore publication?',
      answer: 'The event is co-sponsored by IEEE MP Section, but submission to IEEE Xplore or any journal/conference is subject to separate submission, peer review, and acceptance processes. Participation in Research-O-Thon does not guarantee publication. Manuscripts produced here are drafts intended for further refinement.',
    },
    {
      question: 'What should I bring to the event?',
      answer: 'Bring your laptop, charger, any reference materials, and a valid ID. All meals, refreshments, and working materials are provided as part of the registration fee.',
    },
  ],

  // Contact
  contact: {
    email: 'researchothon@amity.edu',
    phone: '+91-XXXXXXXXXX',
    whatsappGroup: '#',
  },

  // Participant categories for registration
  participantCategories: [
    'Student',
    'IEEE Student Member',
    'IEEE Professional Member',
    'Non-IEEE Professional',
    'Industry Participant',
  ],

  // Dietary options
  dietaryOptions: ['Vegetarian', 'Vegan'],
};
