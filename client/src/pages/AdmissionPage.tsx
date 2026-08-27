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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {/* Batch Poster 1: DNS & IMU-CET */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/dns_course_infographic.jpg"
                  alt="DNS Diploma in Nautical Science Official Poster & Admission"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#E87500] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow">
                  DNS / IMU-CET
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">DNS (Diploma in Nautical Science)</div>
                  <div className="text-xs text-amber-600 font-semibold">1 Year Pre-Sea + Company Sponsorship</div>
                </div>
                <a
                  href="/courses/dns-course-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Batch Poster 2: B.Sc Nautical Science */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/bsc_nautical_science_infographic.jpg"
                  alt="B.Sc Nautical Science Official Poster & Syllabus"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  B.Sc Nautical
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">B.Sc Nautical Science</div>
                  <div className="text-xs text-amber-600 font-semibold">3-Year DG Shipping Degree Program</div>
                </div>
                <a
                  href="/courses/bsc-nautical-science-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Batch Poster 3: GME Marine Engineering */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/gme_course_infographic.jpg"
                  alt="GME Graduate Marine Engineering Poster"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  GME
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">GME (Graduate Marine Engineering)</div>
                  <div className="text-xs text-amber-600 font-semibold">1-Year Mechanical Conversion</div>
                </div>
                <a
                  href="/courses/after-graduation-gme-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Batch Poster 4: ETO Electro-Technical Officer */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/eto_course_infographic.jpg"
                  alt="ETO Electro-Technical Officer Official Poster"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  ETO
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">ETO (Electro-Technical Officer)</div>
                  <div className="text-xs text-amber-600 font-semibold">4 Months Specialized Electrical Track</div>
                </div>
                <a
                  href="/courses/after-btech-eto-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Batch Poster 5: B.Tech Marine Engineering */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/btech_marine_engineering_course_infographic.jpg"
                  alt="B.Tech Marine Engineering Official Poster"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  B.Tech Marine
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">B.Tech Marine Engineering</div>
                  <div className="text-xs text-amber-600 font-semibold">4-Year Degree Chief Engineer Track</div>
                </div>
                <a
                  href="/courses/btech-marine-engineering-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
                </a>
              </div>
            </div>

            {/* Batch Poster 6: GP Rating Batch */}
            <div className="rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-50 flex flex-col justify-between group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/gp_rating_course_infographic.jpg"
                  alt="GP Rating Official Course Infographic Poster"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0A1E3F] text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow border border-amber-400/40">
                  GP Rating
                </span>
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[#0A1E3F]">GP Rating Preparation Batch</div>
                  <div className="text-xs text-amber-600 font-semibold">6 Months Pre-Sea Deck & Engine Rating</div>
                </div>
                <a
                  href="/courses/after-10th-gp-rating-dehradun"
                  className="bg-[#0A1E3F] hover:bg-[#E87500] text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow cursor-pointer transition-colors"
                >
                  View Details
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

