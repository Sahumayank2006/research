import { Playfair_Display, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import './sections.css';

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'Research-O-Thon 2025 — Transform Ideas into Research Publications in 48 Hours',
  description: 'A 48-hour IEEE co-sponsored research-paper drafting sprint organized by ASET, Amity University Madhya Pradesh. Register for ₹300 — includes mentorship, meals, and certification.',
  keywords: 'Research-O-Thon, research hackathon, IEEE, Amity University, academic research, manuscript drafting, Gwalior, 2025',
  openGraph: {
    title: 'Research-O-Thon 2025 — 48-Hour Research Sprint',
    description: 'Transform your research idea into a structured manuscript draft in 48 hours. IEEE co-sponsored. ₹300 all-inclusive.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
