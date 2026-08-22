import React from 'react';
import { Globe, Anchor, ShieldCheck } from 'lucide-react';

interface SeaPhoto {
  title: string;
  category: string;
  imageUrl: string;
  badge: string;
  caption: string;
}

const SEA_PHOTOS: SeaPhoto[] = [
  {
    title: 'Container Vessel at Deep-Sea Port',
    category: 'Commercial Fleet',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    badge: 'Worldwide Trade Routes',
    caption: 'Modern ultra-large container ships carrying global trade across international maritime trade routes.'
  },
  {
    title: 'Navigational Watch on Ship Bridge',
    category: 'Bridge Operations',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
    badge: 'ECDIS & ARPA Watch',
    caption: 'Navigation officer cadets maintaining electronic chart (ECDIS) watch and radar plotting at sea.'
  },
  {
    title: 'Marine Engine Room & Propulsion Control',
    category: 'Engine Operations',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    badge: 'Main Diesel Propulsion',
    caption: 'Marine engineers operating 2-stroke main propulsion diesel engines and high-voltage power grids.'
  },
  {
    title: 'Cadet Voyage & Ocean Navigation',
    category: 'Cadet Life',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop&q=80',
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
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Media Image Container */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={sp.imageUrl}
                    alt={sp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/30 to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-[#0A1E3F]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/40 shadow-sm">
                      {sp.category}
                    </span>
                    <span className="text-[9px] font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/20">
                      {sp.badge}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="font-display text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors drop-shadow-md">
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
