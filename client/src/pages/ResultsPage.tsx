import React from 'react';
import { SEO } from '../components/common/SEO';
import { PlacementsSection } from '../components/sections/PlacementsSection';
import { Footer } from '../components/layout/Footer';
import { Trophy, Award, Building2, CheckCircle2 } from 'lucide-react';

export const ResultsPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-white text-slate-800">
      <SEO
        title="Selection Wall & Placements | Officers Wing Academy Alumni Results"
        description="See Officers Wing Academy cadet selections at Fleet Management, Synergy, Thome, ESM & leading international shipping lines."
        keywords="merchant navy placements, Officers Wing selection wall, Fleet Management sponsorship, Synergy cadet selection"
      />
      {/* Top Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Proven Selection Record
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Alumni Selections &amp; Placements
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Hundreds of Officers Wing cadets actively serving on international commercial vessels across the globe.
          </p>
        </div>
      </div>

      {/* Embedded Placements Wall */}
      <PlacementsSection />

      {/* Batch Placement Highlights */}
      <div className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="section-label section-label-light mb-2">
              <Award className="w-3.5 h-3.5 text-[#0A1E3F]" />
              Verified Company Drives
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E3F] font-display">
              Recent Selection Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bento-card-light rounded-3xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-display text-[#E87500]">45+ Cadets</span>
                <Building2 className="w-6 h-6 text-[#0A1E3F]" />
              </div>
              <div className="font-bold text-sm text-[#0A1E3F]">Selected at Fleet Management Ltd</div>
              <p className="text-xs text-slate-600 leading-relaxed">Highest selections in Dehradun region for DNS and GME batches.</p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Joining Clearance
              </div>
            </div>

            <div className="bento-card-light rounded-3xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-display text-[#E87500]">38 Cadets</span>
                <Building2 className="w-6 h-6 text-[#0A1E3F]" />
              </div>
              <div className="font-bold text-sm text-[#0A1E3F]">Selected at Synergy Marine Group</div>
              <p className="text-xs text-slate-600 leading-relaxed">Cleared IMU-CET written exam &amp; oral interviews in first attempt.</p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Deck Cadet Sponsorship
              </div>
            </div>

            <div className="bento-card-light rounded-3xl p-6 sm:p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-display text-[#E87500]">29 Cadets</span>
                <Building2 className="w-6 h-6 text-[#0A1E3F]" />
              </div>
              <div className="font-bold text-sm text-[#0A1E3F]">Selected at Thome &amp; ESM</div>
              <p className="text-xs text-slate-600 leading-relaxed">Specialized GME and ETO cadet sponsorships secured.</p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Junior Engineer Placement
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

