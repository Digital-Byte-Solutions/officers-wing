import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsCounterBar } from '../components/sections/StatsCounterBar';
import { PathwayWizard } from '../components/sections/PathwayWizard';
import { ProspectusDownloadCard } from '../components/sections/ProspectusDownloadCard';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { FacultySection } from '../components/sections/FacultySection';
import { CoursesSection } from '../components/sections/CoursesSection';
import { CampusLifeSection } from '../components/sections/CampusLifeSection';
import { SelectionWall } from '../components/sections/SelectionWall';
import { LifeAtSeaSection } from '../components/sections/LifeAtSeaSection';
import { PlacementsSection } from '../components/sections/PlacementsSection';
import { BatchCalendar } from '../components/sections/BatchCalendar';
import { FAQSection } from '../components/sections/FAQSection';
import { FounderSection } from '../components/sections/FounderSection';
import { Footer } from '../components/layout/Footer';
import { FloatingWhatsAppPill } from '../components/layout/FloatingWhatsAppPill';

interface HomePageProps {
  onOpenEnquire: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquire }) => {
  const scrollToCourses = () => {
    const coursesElem = document.getElementById('courses-section');
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">

      {/* 1. Hero Section — Video + Campus Tour Modal + CTAs */}
      <div id="hero-section">
        <HeroSection
          onExploreCourses={scrollToCourses}
          onCheckEligibility={onOpenEnquire}
        />
      </div>

      {/* 2. Stats Counter Bar */}
      <StatsCounterBar />

      {/* 3. Choose Your Pathway Wizard */}
      <div id="pathway-section">
        <PathwayWizard />
      </div>

      {/* 4. Prospectus Download Lead Magnet */}
      <ProspectusDownloadCard />

      {/* 5. Why Choose Officers Wing (With Stock Media Bento Cards) */}
      <div id="why-choose-section">
        <WhyChooseSection />
      </div>

      {/* 6. Campus Life & Simulator Facilities Showcase (PROMINENT MEDIA SECTION) */}
      <CampusLifeSection />

      {/* 7. Expert Faculty & Master Mariners */}
      <div id="faculty-section">
        <FacultySection />
      </div>

      {/* 8. Courses Section (With Stock Image Headers) */}
      <div id="courses-section">
        <CoursesSection />
      </div>

      {/* 9. Life at Sea & Commercial Cargo Fleets Showcase (PROMINENT MEDIA SECTION) */}
      <LifeAtSeaSection />

      {/* 10. Cadet Selection Wall (With Cadet Avatars) */}
      <div id="selection-wall-section">
        <SelectionWall />
      </div>

      {/* 11. Alumni Placements & Video Testimonials */}
      <div id="placements-section">
        <PlacementsSection />
      </div>

      {/* 12. Live Batch Calendar */}
      <div id="batch-calendar-section">
        <BatchCalendar />
      </div>

      {/* 13. Frequently Asked Questions (FAQ) */}
      <FAQSection />

      {/* 14. Founder's Message */}
      <div id="founder-section">
        <FounderSection />
      </div>

      {/* 15. Footer */}
      <div id="footer-section">
        <Footer />
      </div>

      {/* Persistent Floating WhatsApp & Admissions Action Button */}
      <FloatingWhatsAppPill />

    </div>
  );
};
