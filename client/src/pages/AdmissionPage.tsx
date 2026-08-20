import React from 'react';
import { Footer } from '../components/layout/Footer';
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

      {/* Batch Calendar */}
      <div className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1E3F] font-display">
            Upcoming Batch Start Dates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">IMU-CET &amp; DNS Batch</div>
                <div className="text-sm font-bold text-[#0A1E3F] mt-0.5">Starts 15th September 2026</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Open</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">GP Rating Batch</div>
                <div className="text-sm font-bold text-[#0A1E3F] mt-0.5">Starts 1st October 2026</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Open</span>
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

