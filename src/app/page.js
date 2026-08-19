import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhySection from '@/components/sections/WhySection';
import TracksSection from '@/components/sections/TracksSection';
import FormatSection from '@/components/sections/FormatSection';
import TimelineSection from '@/components/sections/TimelineSection';
import SpeakersSection from '@/components/sections/SpeakersSection';
import CommitteeSection from '@/components/sections/CommitteeSection';
import PrizesSection from '@/components/sections/PrizesSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import VenueSection from '@/components/sections/VenueSection';
import PartnersSection from '@/components/sections/PartnersSection';
import FaqSection from '@/components/sections/FaqSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhySection />
        <TracksSection />
        <FormatSection />
        <TimelineSection />
        <SpeakersSection />
        <CommitteeSection />
        <PrizesSection />
        <RegistrationSection />
        <VenueSection />
        <PartnersSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
