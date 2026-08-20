import React from 'react';
import { PlacementsSection } from '../components/sections/PlacementsSection';
import { Footer } from '../components/layout/Footer';
import { Trophy } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-white text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#060F1E] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
            <Trophy className="w-4 h-4" /> Proven Track Record
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Alumni Selections & Placements
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Hundreds of Officers Wing cadets actively serving on international commercial vessels across the globe.
          </p>
        </div>
      </div>

      {/* Embedded Placements Wall */}
      <PlacementsSection />

      {/* Batch Placement Highlights */}
      <div className="py-16 bg-slate-50 border-t border-slate-200 text-left">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0F2C59] mb-8 font-serif-heading text-center">
            Recent Selection Highlights (2023 - 2024)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-3xl font-extrabold text-[#E87500]">45+ Cadets</div>
              <div className="font-bold text-sm text-[#0F2C59]">Selected at Fleet Management Ltd</div>
              <p className="text-xs text-slate-600">Highest selections in Dehradun region for DNS and GME batches.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-3xl font-extrabold text-[#E87500]">38 Cadets</div>
              <div className="font-bold text-sm text-[#0F2C59]">Selected at Synergy Marine Group</div>
              <p className="text-xs text-slate-600">Cleared IMU-CET written exam & oral interviews in first attempt.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="text-3xl font-extrabold text-[#E87500]">29 Cadets</div>
              <div className="font-bold text-sm text-[#0F2C59]">Selected at Thome & ESM</div>
              <p className="text-xs text-slate-600">Specialized GME and ETO cadet sponsorships secured.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

