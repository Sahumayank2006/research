import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './sections.css';
import { EVENT } from '@/lib/config';

const display = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
});

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const title = `${EVENT.name} ${EVENT.year} — ${EVENT.tagline}`;
const description = `${EVENT.dateLabel} · ${EVENT.location}. A three-day research sprint by ASET, Amity University Madhya Pradesh, in association with IEEE MP Section. Draft a submission-ready IEEE manuscript in 48 hours. Amity students ₹200.`;

export const metadata = {
  title: {
    default: title,
    template: `%s · ${EVENT.name} ${EVENT.year}`,
  },
  description,
  keywords: [
    'Research-O-Thon 2026',
    'research hackathon',
    'IEEE MP Section',
    'Amity University Madhya Pradesh',
    'ASET Gwalior',
    'IEEE paper writing',
    'manuscript sprint',
    'Gwalior research event',
  ],
  authors: [{ name: 'Amity School of Engineering and Technology, AUMP' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_IN',
    siteName: `${EVENT.name} ${EVENT.year}`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#08172b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
