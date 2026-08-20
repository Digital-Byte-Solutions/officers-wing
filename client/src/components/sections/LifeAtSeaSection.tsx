import React from 'react';
import { Globe, Anchor, Compass, Navigation, ShieldCheck } from 'lucide-react';

interface SeaPhoto {
  title: string;
  category: string;
  categoryIcon: React.ElementType;
  gradient: string;
  badge: string;
  caption: string;
}

const SEA_PHOTOS: SeaPhoto[] = [
  {
    title: 'Container Vessel at Deep-Sea Port',
    category: 'Commercial Fleet',
    categoryIcon: Anchor,
    gradient: 'from-blue-950 via-[#0A1E3F] to-[#060F1E]',
    badge: 'Worldwide Trade Routes',
    caption: 'Modern ultra-large container ships carrying global trade across international maritime trade routes.'
  },
  {
    title: 'Navigational Watch on Ship Bridge',
    category: 'Bridge Operations',
    categoryIcon: Navigation,
    gradient: 'from-indigo-950 via-[#0A1E3F] to-[#060F1E]',
    badge: 'ECDIS & ARPA Watch',
    caption: 'Navigation officer cadets maintaining electronic chart (ECDIS) watch and radar plotting at sea.'
  },
  {
    title: 'Marine Engine Room & Propulsion Control',
    category: 'Engine Operations',
    categoryIcon: Compass,
    gradient: 'from-amber-950 via-[#0A1E3F] to-[#060F1E]',
    badge: 'Main Diesel Propulsion',
    caption: 'Marine engineers operating 2-stroke main propulsion diesel engines and high-voltage power grids.'
  },
  {
    title: 'Cadet Voyage & Ocean Navigation',
    category: 'Cadet Life',
    categoryIcon: Globe,
    gradient: 'from-emerald-950 via-[#0A1E3F] to-[#060F1E]',
    badge: 'Tax-Free Salary',
    caption: 'Experiencing global ocean voyages, multi-national crew teamwork, and tax-free earnings worldwide.'
  }
];

export const LifeAtSeaSection: React.FC = () => {
  return (
    <section id="life-at-sea-section" className="w-full bg-[#EFF4FA] py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">

        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="section-label">
            <Globe className="w-3.5 h-3.5" /> Merchant Navy Career &amp; Voyages
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A1E3F]">
            Life at Sea &amp; Commercial Fleets
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Step onto the bridge of modern commercial cargo ships and oil tankers. Your career with Officers Wing opens the doorway to the world's oceans.
          </p>
        </div>

        {/* 4-Photo Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEA_PHOTOS.map((sp, idx) => {
            const Icon = sp.categoryIcon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Media Graphic Container */}
                <div className={`relative h-56 w-full overflow-hidden bg-gradient-to-br ${sp.gradient} p-5 flex flex-col justify-between text-white border-b border-slate-100`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-[#0A1E3F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                      {sp.category}
                    </span>
                    <span className="text-[9px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded-md">
                      {sp.badge}
                    </span>
                  </div>

                  <div className="flex items-center justify-center my-auto z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-400/30 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:bg-[#E87500] group-hover:text-white transition-all duration-300 shadow-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="z-10">
                    <h3 className="font-display text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {sp.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sp.caption}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#0A1E3F]">
                    <span className="flex items-center gap-1 text-[#E87500]">
                      <Anchor className="w-3.5 h-3.5" /> Commercial Fleets
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <ShieldCheck className="w-3 h-3" /> DG Approved
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
