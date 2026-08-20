import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StatsCounterBar } from '../components/sections/StatsCounterBar';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';
import { CoursesSection } from '../components/sections/CoursesSection';
import { PlacementsSection } from '../components/sections/PlacementsSection';
import { FounderSection } from '../components/sections/FounderSection';
import { Footer } from '../components/layout/Footer';

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
    <div className="w-full">
      {/* 1. Hero Section */}
      <div id="hero-section">
        <HeroSection
          onExploreCourses={scrollToCourses}
          onCheckEligibility={onOpenEnquire}
        />
      </div>

      {/* Animated Rapid Count-Up Stats Bar */}
      <StatsCounterBar />

      {/* 2. Why Choose Officers Wing? */}
      <div id="why-choose-section">
        <WhyChooseSection />
      </div>

      {/* 3. Our Courses Section */}
      <div id="courses-section">
        <CoursesSection />
      </div>

      {/* 4. Alumni Placements Section */}
      <div id="placements-section">
        <PlacementsSection />
      </div>

      {/* 5. About the Founder Section */}
      <div id="founder-section">
        <FounderSection />
      </div>

      {/* 6. Footer Section */}
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
};
