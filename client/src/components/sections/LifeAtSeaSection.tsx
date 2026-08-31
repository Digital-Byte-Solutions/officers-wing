import React from 'react';
import { Globe, Anchor, ShieldCheck } from 'lucide-react';

interface SeaPhoto {
  title: string;
  category: string;
  image: string;
  caption: string;
}

const SEA_PHOTOS: SeaPhoto[] = [
  {
    title: 'Container Vessel at Deep-Sea Port',
    category: 'Commercial Fleet',
    image: '/images/shipping_partners_grid.jpg',
    caption: 'Modern ultra-large container ships carrying global trade across international maritime trade routes.'
  },
  {
    title: 'Navigational Watch on Ship Bridge',
    category: 'Bridge Operations',
    image: '/images/Hero_image.png',
    caption: 'Navigation officer cadets maintaining electronic chart (ECDIS) watch and radar plotting at sea.'
  },
  {
    title: 'Marine Engine Room & Propulsion Control',
    category: 'Engine Operations',
    image: '/images/imu_cet_batch_classroom.jpg',
    caption: 'Marine engineers operating 2-stroke main propulsion diesel engines and high-voltage power grids.'
  },
  {
    title: 'Cadet Voyage & Ocean Navigation',
    category: 'Cadet Life',
    image: '/images/foundation_course_poster.jpg',
    caption: 'Experiencing global ocean voyages, multi-national crew teamwork, and tax-free earnings worldwide.'
  }
];

export const LifeAtSeaSection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = '/images/officers_wing_banner.jpg';
  };

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
          {SEA_PHOTOS.map((sp, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#0A1E3F]">
                <img
                  src={sp.image}
                  alt={sp.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-[#0A1E3F]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                    {sp.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-display text-base font-bold text-[#0A1E3F] leading-snug group-hover:text-[#E87500] transition-colors">
                    {sp.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {sp.caption}
                  </p>
                </div>

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
          ))}
        </div>

      </div>
    </section>
  );
};
