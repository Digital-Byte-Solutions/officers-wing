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

      {/* ── Official Academy Announcement Banner & Batches Showcase ── */}
      <section className="py-14 sm:py-20 bg-[#0A1E3F] text-white border-y border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          
          {/* Main Wide Banner */}
          <div className="rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-[#060F1E] group">
            <img
              src="/images/officers_wing_banner.jpg"
              alt="Officers Wing Academy Dehradun - India's Trusted Coaching Institute for Merchant Navy & Maritime Careers"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
              loading="lazy"
            />
          </div>

          {/* New Batch Starting Announcements Grid */}
          <div>
            <div className="text-center mb-8 space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-amber-400/30 bg-amber-400/10 text-amber-300">
                ⭐ Admission Notices &amp; New Batches
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-display text-white">
                Upcoming Preparation Batches in Dehradun
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                Seats filling fast for IMU-CET, DNS Foundation &amp; GP Rating Entrance. Call our helpline at <strong className="text-amber-300">9149081578</strong> or <strong className="text-amber-300">9557381578</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Poster 1 */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/05 shadow-xl hover:border-amber-400/60 transition-all flex flex-col justify-between">
                <img
                  src="/images/foundation_course_poster.jpg"
                  alt="Join Foundation After 10th for Merchant Navy IMU-CET"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-[#060F1E] flex items-center justify-between gap-2 border-t border-white/10">
                  <div>
                    <div className="text-xs font-bold text-white">Foundation After 10th</div>
                    <div className="text-[10px] text-amber-300 font-semibold">DNS | BSc | BTech</div>
                  </div>
                  <button
                    onClick={onOpenEnquire}
                    className="bg-[#E87500] hover:bg-[#F09030] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow cursor-pointer shrink-0"
                  >
                    Enquire
                  </button>
                </div>
              </div>

              {/* Poster 2 */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/05 shadow-xl hover:border-amber-400/60 transition-all flex flex-col justify-between">
                <img
                  src="/images/gp_rating_batch.jpg"
                  alt="New Preparation Batch Starting For GP Rating Course"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-[#060F1E] flex items-center justify-between gap-2 border-t border-white/10">
                  <div>
                    <div className="text-xs font-bold text-white">GP Rating New Batch</div>
                    <div className="text-[10px] text-amber-300 font-semibold">NUSI | TS Rahman | SCI</div>
                  </div>
                  <button
                    onClick={onOpenEnquire}
                    className="bg-[#E87500] hover:bg-[#F09030] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow cursor-pointer shrink-0"
                  >
                    Enquire
                  </button>
                </div>
              </div>

              {/* Poster 3 */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/05 shadow-xl hover:border-amber-400/60 transition-all flex flex-col justify-between">
                <img
                  src="/images/foundation_imu_cet.jpg"
                  alt="Merchant Navy IMU-CET Sponsorship Preparation"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-[#060F1E] flex items-center justify-between gap-2 border-t border-white/10">
                  <div>
                    <div className="text-xs font-bold text-white">IMU-CET Sponsorship</div>
                    <div className="text-[10px] text-amber-300 font-semibold">100% Focus on Selection</div>
                  </div>
                  <button
                    onClick={onOpenEnquire}
                    className="bg-[#E87500] hover:bg-[#F09030] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-lg shadow cursor-pointer shrink-0"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

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
