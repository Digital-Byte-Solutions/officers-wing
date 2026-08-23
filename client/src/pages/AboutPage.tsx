import React from 'react';
import { SEO } from '../components/common/SEO';
import { FounderSection } from '../components/sections/FounderSection';
import { CampusLifeGallery } from '../components/sections/CampusLifeGallery';
import { FacultySection } from '../components/sections/FacultySection';
import { StatsCounterBar } from '../components/sections/StatsCounterBar';
import { Footer } from '../components/layout/Footer';
import { Compass, Target, Award, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white text-slate-800">
      <SEO
        title="About Capt. Anurag Sir & Officers Wing Academy | Merchant Navy Coaching Dehradun"
        description="Learn about Officers Wing Academy, founded in 2016 in Dehradun. Guided by Capt. Anurag Singh with hundreds of cadets placed at top global shipping companies."
        keywords="Capt Anurag Singh Merchant Navy, Officers Wing Dehradun founder, best merchant navy mentorship, merchant navy academy Sahastradhara Road Dehradun"
      />
      {/* Header Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            About Officers Wing Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Dedicated to Maritime Excellence
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded in 2016 in Dehradun, Officers Wing Academy is built on integrity, expert mentorship, and a proven track record of cadet selections.
          </p>
        </div>
      </div>

      {/* Animated Rapid Count-Up Stats Bar */}
      <StatsCounterBar />

      {/* Founder Section Embedded */}
      <FounderSection />

      {/* Core Values Section */}
      <div className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <span className="section-label section-label-light mb-3">
            <Award className="w-3.5 h-3.5 text-[#0A1E3F]" />
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0A1E3F] mb-12 font-display">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="bento-card-light rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A1E3F] flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1E3F] font-display">Precision Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focused syllabus coverage, daily mock tests, and specialized coaching for IMU-CET and sponsorship company written exams.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Daily Practice Question Sets</span>
              </div>
            </div>

            <div className="bento-card-light rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#E87500] flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1E3F] font-display">Integrity &amp; Transparency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear eligibility pre-checks according to DG Shipping medical standards so cadets waste no time or resources.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Certified Medical Screenings</span>
              </div>
            </div>

            <div className="bento-card-light rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0A1E3F] flex items-center justify-center shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0A1E3F] font-display">Lifetime Mentorship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Personalized support throughout pre-sea training, placement interviews, and subsequent sea time documentation.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Continuous Alumni Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classroom Culture & Training Gallery */}
      <CampusLifeGallery />

      {/* Faculty Section */}
      <FacultySection />

      <Footer />
    </div>
  );
};

