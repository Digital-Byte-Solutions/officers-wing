import React from 'react';
import { ShieldCheck, Trophy, Compass, BookOpen, CheckCircle2, Award, Users2, Sparkles, Navigation, Anchor } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-20 sm:py-28 bg-[#050B14] overflow-hidden"
    >
      {/* Background Ambience Glow */}
      <div
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15, 44, 89, 0.25) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-10 -right-40 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(232, 117, 0, 0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="text-center mb-14 sm:mb-20 space-y-4">
          <div>
            <span className="section-label section-label-dark">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              The Officers Wing Advantage
            </span>
          </div>

          <h2
            className="font-display text-3xl xs:text-4xl sm:text-5xl font-black text-white heading-route-line tracking-tight"
          >
            Engineered for Cadet Selection
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Since 2016, our Dehradun academy has pioneered systematic coaching that blends strict DG Shipping compliance, simulated interviews, and lifetime career mentorship.
          </p>
        </div>

        {/* ── High-End Bento Grid with Stock Media ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

          {/* Bento Card 1: Featured 7-Column Span */}
          <div
            className="md:col-span-7 bento-card-dark rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Stock background overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80"
                alt="DG Shipping Guidance"
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/90 to-[#060F1E]/70" />
            </div>

            <div className="space-y-4 relative z-10 text-left">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-[#E87500] text-white flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                  Verified Standards
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                DG Shipping Approved Guidance &amp; Medical Pre-Check
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Before cadets spend time or funds, our certified panel conducts thorough DG medical screening (6/6 eye tests, color vision, BMI) ensuring 100% eligibility for IMU-CET &amp; premier shipping sponsorships.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'DG Approved Medical Guidance',
                  'Color Perception & 6/6 Vision Check',
                  'IMU-CET Syllabus Mapping',
                  'Class 12th PCM Mark Verification',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-white/05 p-2.5 rounded-xl border border-white/05">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom highlight bar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 relative z-10">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Zero false promises
              </span>
              <span>100% DG Guideline Compliance</span>
            </div>
          </div>

          {/* Bento Card 2: 5-Column Span (Selection Track Record) */}
          <div
            className="md:col-span-5 bento-card-dark rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group bg-gradient-to-br from-[#0F2C59]/60 to-[#0A1E3F]/80"
          >
            {/* Stock background overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80"
                alt="Seamanship & Placement Record"
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-[#0A1E3F]/85 to-[#0F2C59]/70" />
            </div>

            <div className="space-y-4 text-left relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>

              <div>
                <span className="text-3xl sm:text-4xl font-black font-display text-white block">
                  970+
                </span>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Cadets Placed Since 2016
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Consistent selections in top international fleets including Fleet Management, Synergy Marine, Great Eastern, Thome, and Executive Ship Management.
              </p>

              {/* Progress metric */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Sponsorship Success Rate</span>
                  <span className="text-amber-400">95.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#E87500]" style={{ width: '95.8%' }} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2 relative z-10">
              <Award className="w-4 h-4 text-[#E87500]" />
              <span>Highest DNS &amp; GME Selections in Uttarakhand</span>
            </div>
          </div>

          {/* Bento Card 3: 5-Column Span (Full-Spectrum Prep & Simulators) */}
          <div
            className="md:col-span-5 bento-card-dark rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Stock background overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                alt="Simulator Training"
                className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/90 to-[#060F1E]/75" />
            </div>

            <div className="space-y-4 text-left relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center">
                <Navigation className="w-6 h-6" />
              </div>

              <h3 className="font-display text-xl font-bold text-white">
                Comprehensive Technical &amp; Interview Prep
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Coaching for both online/offline written exams and mock company interviews covering Seamanship, Ship Construction, Marine Engineering, Fire Fighting, and Psychometric Aptitude tests.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {['Bridge Simulator', 'Mock Panels', 'Psychometric Tests', 'Physical Fitness'].map((tag, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-200 bg-white/05 px-3 py-1 rounded-lg border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2 relative z-10">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Updated 2024-2025 Company Syllabus</span>
            </div>
          </div>

          {/* Bento Card 4: 7-Column Span (Mentorship Quote & Cadets-First Philosophy) */}
          <div
            className="md:col-span-7 bento-card-dark rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-l-4 border-l-amber-500 bg-gradient-to-r from-white/05 to-white/02 relative overflow-hidden group"
          >
            {/* Stock background overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=80"
                alt="Mentorship Philosophy"
                className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/90 to-[#060F1E]/80" />
            </div>

            <div className="space-y-4 text-left relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">The Mentoring Philosophy</h4>
                  <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold">Capt. Anurag Singh</span>
                </div>
              </div>

              <blockquote className="font-display text-base sm:text-lg italic text-slate-200 leading-relaxed">
                "We are not merely a coaching institute but a mentoring sanctuary. From written test clearance to sea-time documentation, we stand shoulder-to-shoulder with our cadets until they board their ship."
              </blockquote>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 relative z-10">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 font-medium">Lifetime Cadets Alumni Network</span>
              </div>
              <span className="text-amber-400 font-bold">24/7 Guidance Cell</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
