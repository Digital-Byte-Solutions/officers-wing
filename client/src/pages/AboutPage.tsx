import React from 'react';
import { FounderSection } from '../components/sections/FounderSection';
import { StatsCounterBar } from '../components/sections/StatsCounterBar';
import { Footer } from '../components/layout/Footer';
import { Compass, Target, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-white text-slate-800">
      {/* Header Banner */}
      <div className="bg-[#0F2C59] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
            <Compass className="w-4 h-4" /> About Officers Wing Academy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Dedicated to Maritime Excellence
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Founded in 2016 in Dehradun, Officers Wing Academy is built on integrity, expert mentorship, and a proven track record of cadet selections.
          </p>
        </div>
      </div>

      {/* Animated Rapid Count-Up Stats Bar */}
      <StatsCounterBar />

      {/* Founder Section Embedded */}
      <FounderSection />

      {/* Core Values Section */}
      <div className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#0F2C59] mb-12 font-serif-heading">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0F2C59] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2C59]">Precision Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focused syllabus coverage, daily mock tests, and specialized coaching for IMU-CET and sponsorship company written exams.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0F2C59] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2C59]">Integrity & Transparency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear eligibility pre-checks according to DG Shipping medical standards so cadets waste no time or resources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0F2C59] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F2C59]">Lifetime Mentorship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Personalized support throughout pre-sea training, placement interviews, and subsequent sea time documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
