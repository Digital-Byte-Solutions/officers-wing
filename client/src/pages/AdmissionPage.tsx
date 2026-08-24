import React from 'react';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/common/SEO';
import { Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface AdmissionPageProps {
  onOpenEnquire?: () => void;
}

export const AdmissionPage: React.FC<AdmissionPageProps> = ({ onOpenEnquire }) => {
  const steps = [
    {
      num: '01',
      title: 'Free Eligibility & Medical Check',
      desc: 'Verify age, educational qualifications, aggregate PCM %, and eyesight according to DG Shipping rules.'
    },
    {
      num: '02',
      title: 'Counselling & Course Selection',
      desc: 'One-on-one session with Capt. Anurag Singh & senior maritime instructors to choose between DNS, GP Rating, GME, or ETO.'
    },
    {
      num: '03',
      title: 'Entrance Prep & IMU-CET Registration',
      desc: 'Comprehensive classroom coaching, mock test series, and sponsorship exam interview training.'
    },
    {
      num: '04',
      title: 'DG Medical Clearance & Pre-Sea Joining',
      desc: 'Final medical verification by DG-approved doctors followed by joining DG Shipping approved marine academy.'
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      <SEO
        title="Admission Process & Batch Dates 2026-2027 | Officers Wing Academy Dehradun"
        description="Step-by-step admission process, document checklist, medical requirements, and upcoming batch schedule for Merchant Navy coaching in Dehradun."
        keywords="merchant navy admission Dehradun, IMUCET batch registration, DG Shipping medical test eligibility"
      />
      {/* Top Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232, 117, 0, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            Admissions 2026-2027 Open
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Join Officers Wing Academy
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Simple 4-step admission workflow from eligibility pre-check to pre-sea batch enrollment in Dehradun.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <span className="section-label section-label-light mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0A1E3F]" />
            Your Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E3F] font-display">
            Step-by-Step Admission Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bento-card-light rounded-3xl p-6 sm:p-7 relative text-left flex flex-col justify-between group">
              <div>
                <span className="text-4xl font-black text-amber-500/30 group-hover:text-amber-500 font-display block mb-3 transition-colors">
                  {s.num}
                </span>
                <h3 className="text-base font-bold text-[#0A1E3F] font-display mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> Stage {idx + 1} Guidance
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Posters & Upcoming Batch Notices */}
      <div className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center space-y-10">
          <div className="space-y-2">
            <span className="section-label section-label-light mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#0A1E3F]" />
              Official Admission Notices
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1E3F] font-display">
              Upcoming Batch Start Dates &amp; Posters
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Direct registration open for Foundation After 10th and GP Rating preparation batches at our Dehradun academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Batch Poster 1: IMU-CET 2027 */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/imu_cet_batch_classroom.jpg"
                  alt="Join IMU-CET 2027 & Sponsorship Exam New Batch - Officers Wing Academy Dehradun"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#E87500] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  Batch 2027
                </span>
              </div>
              <div className="p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">IMU-CET 2027 &amp; Sponsorship</div>
                  <div className="text-xs text-amber-600 font-semibold">DNS | B.Sc Nautical | B.Tech</div>
                </div>
                <a
                  href="tel:+919149081578"
                  className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-4 py-2 rounded-xl shadow cursor-pointer"
                >
                  Call: 9149081578
                </a>
              </div>
            </div>

            {/* Batch Poster 2: Foundation Batch */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/foundation_course_poster.jpg"
                  alt="Foundation After 10th for Merchant Navy IMU-CET"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  After 10th
                </span>
              </div>
              <div className="p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">Foundation Batch (After 10th)</div>
                  <div className="text-xs text-amber-600 font-semibold">DNS | BSc Nautical | BTech Marine</div>
                </div>
                <a
                  href="tel:+919149081578"
                  className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-4 py-2 rounded-xl shadow cursor-pointer"
                >
                  Call: 9149081578
                </a>
              </div>
            </div>

            {/* Batch Poster 3: GP Rating Batch */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/gp_rating_batch.jpg"
                  alt="New Preparation Batch Starting for GP Rating Course"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  GP Rating
                </span>
              </div>
              <div className="p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">GP Rating Preparation Batch</div>
                  <div className="text-xs text-amber-600 font-semibold">Target: NUSI Goa, TS Rahman, SCI</div>
                </div>
                <a
                  href="tel:+919149081578"
                  className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-4 py-2 rounded-xl shadow cursor-pointer"
                >
                  Call: 9149081578
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenEnquire}
              className="btn-glow-orange font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>Book Free Counselling Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

