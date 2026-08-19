import React from 'react';
import { Footer } from '../components/layout/Footer';
import { Calendar } from 'lucide-react';

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
      desc: 'One-on-one session with Anurag Sir & senior maritime instructors to choose between DNS, GP Rating, GME, or ETO.'
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
    <div className="pt-28 min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#060F1E] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
            <Calendar className="w-4 h-4" /> Admission Process 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Join Officers Wing Academy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Simple 4-step admission workflow from eligibility pre-check to pre-sea batch enrollment.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#0F2C59] mb-12 font-serif-heading text-center">
          Step-by-Step Admission Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative text-left">
              <span className="text-3xl font-extrabold text-[#E87500] font-serif-heading block mb-2">{s.num}</span>
              <h3 className="text-base font-bold text-[#0F2C59] mb-2">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Batch Calendar */}
      <div className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold text-[#0F2C59] font-serif-heading">
            Upcoming Batch Start Dates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="text-xs font-bold text-amber-700 uppercase">IMU-CET & DNS Batch</div>
                <div className="text-sm font-bold text-[#0F2C59] mt-0.5">Starts 15th September 2026</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Open</span>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center">
              <div>
                <div className="text-xs font-bold text-amber-700 uppercase">GP Rating Batch</div>
                <div className="text-sm font-bold text-[#0F2C59] mt-0.5">Starts 1st October 2026</div>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded">Open</span>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenEnquire}
              className="bg-[#E87500] hover:bg-[#F59E0B] text-white font-bold text-xs px-8 py-3 rounded-[6px] transition-colors shadow-md cursor-pointer"
            >
              Book Free Counselling Call
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

