import Navbar from '@/components/Navbar';
import Ticker from '@/components/Ticker';
import Reveal from '@/components/Reveal';
import BackToTop from '@/components/BackToTop';
import SupportButton from '@/components/SupportButton';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

import HeroSection from '@/components/sections/HeroSection';
import PrizesSection from '@/components/sections/PrizesSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import ChiefGuestSection from '@/components/sections/ChiefGuestSection';
import AboutSection from '@/components/sections/AboutSection';
import WhySection from '@/components/sections/WhySection';
import TracksSection from '@/components/sections/TracksSection';
import FormatSection from '@/components/sections/FormatSection';
import EvaluationSection from '@/components/sections/EvaluationSection';
import AwardsSection from '@/components/sections/AwardsSection';
import CommitteeSection from '@/components/sections/CommitteeSection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import VenueSection from '@/components/sections/VenueSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>

      <div className="nav-wrap">
        <Navbar />
        <Ticker />
      </div>

      <main>
        <HeroSection />
        <PrizesSection />
        <SponsorsSection />
        <ChiefGuestSection />
        <AboutSection />
        <WhySection />
        <TracksSection />
        <FormatSection />
        <EvaluationSection />
        <AwardsSection />
        <CommitteeSection />
        <RegistrationSection />
        <VenueSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <SupportButton />
      <BackToTop />
      <Reveal />
    </>
  );
}
