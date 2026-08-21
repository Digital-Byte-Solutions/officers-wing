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
                Seats filling fast for IMU-CET Foundation &amp; GP Rating Entrance. Call our admissions team or connect on Instagram.
              </p>

              {/* Quick Contact & Instagram Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href="tel:+919149081578"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-colors"
                >
                  <span>📞 Call: +91 91490 81578</span>
                </a>
                <a
                  href="tel:+919557381578"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold hover:bg-amber-500/30 transition-colors"
                >
                  <span>📞 Call: +91 95573 81578</span>
                </a>
                <a
                  href="https://instagram.com/officerswing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pink-500/20 border border-pink-400/40 text-pink-300 text-xs font-bold hover:bg-pink-500/30 transition-colors"
                >
                  <span>📸 Instagram: @officerswing</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Poster 1: Foundation After 10th for Merchant Navy IMU-CET */}
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 bg-[#060F1E] shadow-2xl hover:border-amber-400/60 transition-all flex flex-col justify-between">
                <img
                  src="/images/foundation_course_poster.jpg"
                  alt="Join Foundation After 10th for Merchant Navy IMU-CET"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-5 bg-[#040810] flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                  <div>
                    <div className="text-sm font-bold text-white">Foundation After 10th</div>
                    <div className="text-xs text-amber-300 font-semibold">DNS | BSc Nautical | BTech Marine</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919149081578"
                      className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/20 transition-colors"
                    >
                      Call
                    </a>
                    <button
                      onClick={onOpenEnquire}
                      className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-4 py-2 rounded-xl shadow cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              {/* Poster 2: GP Rating New Batch Starting */}
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 bg-[#060F1E] shadow-2xl hover:border-amber-400/60 transition-all flex flex-col justify-between">
                <img
                  src="/images/gp_rating_batch.jpg"
                  alt="New Preparation Batch Starting For GP Rating Course"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-5 bg-[#040810] flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                  <div>
                    <div className="text-sm font-bold text-white">GP Rating New Batch</div>
                    <div className="text-xs text-amber-300 font-semibold">Target: NUSI Goa | TS Rahman | SCI</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919149081578"
                      className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/20 transition-colors"
                    >
                      Call
                    </a>
                    <button
                      onClick={onOpenEnquire}
                      className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-4 py-2 rounded-xl shadow cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
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
