import React, { useState } from 'react';
import { Camera, ShieldCheck, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

interface FacilityPhoto {
  title: string;
  tag: string;
  imageUrl: string;
  description: string;
  features: string[];
  stats: string;
}

const FACILITIES: FacilityPhoto[] = [
  {
    title: 'Full-Mission Bridge Navigation Simulator',
    tag: 'Navigation Lab',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    description: 'Real-time ship maneuvering simulator equipped with ARPA radar, ECDIS electronic charts, and 240-degree visual sea display.',
    features: ['Radar & ECDIS Training', 'Vessel Collision Avoidance', 'International Sea Routes'],
    stats: '240° Visual Display'
  },
  {
    title: 'Seamanship & Deck Practical Workshop',
    tag: 'Practical Training',
    imageUrl: '/images/gp_rating_batch.jpg',
    description: 'Hands-on seamanship laboratory for learning heavy rope rigging, wire splicing, anchor handling, and deck safety operations.',
    features: ['Splicing & Knotting', 'Anchor Handling Drills', 'Deck Safety Gear'],
    stats: '100% Hands-On'
  },
  {
    title: 'Marine Engine Room & Workshop Lab',
    tag: 'Engineering Lab',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    description: 'Operational auxiliary marine engine models, centrifugal pumps, diesel generators, and lathe machining tools for GME & ETO cadets.',
    features: ['Auxiliary Engine Models', 'Lathe Machining', 'Pumps & Compressors'],
    stats: 'Working Engine Models'
  },
  {
    title: 'STCW Water Survival & Firefighting Facility',
    tag: 'Safety Certification',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80',
    description: 'Practical STCW safety drills covering inflatable life raft deployment, personal survival techniques (PST), and SCBA firefighting gear.',
    features: ['Life Raft Deployment', 'SCBA Fire Drills', 'First Aid & Survival'],
    stats: 'STCW 2010 Certified'
  },
  {
    title: 'Dehradun Campus Hostel & Mess Facilities',
    tag: 'Residential Life',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
    description: 'Clean, secure residential hostel blocks with 4-time nutritious meals, indoor recreation, study halls, and 24/7 warden supervision.',
    features: ['Nutritious Meals', 'Study Lounges', '24/7 Security'],
    stats: '4-Time Meals'
  },
  {
    title: 'Parade Grounds & Physical Conditioning',
    tag: 'Fitness & Discipline',
    imageUrl: '/images/meditation_before_class.jpg',
    description: 'Daily morning physical conditioning, march drills, obstacle courses, and sports activities conducted by ex-Naval instructors.',
    features: ['Morning Drill Routine', 'Obstacle Course', 'Sports & Swimming'],
    stats: 'Ex-Naval Instructors'
  }
];

export const CampusLifeSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<FacilityPhoto | null>(null);

  return (
    <section id="campus-life-section" className="w-full bg-[#060F1E] py-20 sm:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vh] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(200,146,42,0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="section-label section-label-dark">
            <Camera className="w-3.5 h-3.5 text-[#D4A840]" /> Academy Facilities Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Campus Life &amp; Simulator Showcase
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Take a visual tour through our state-of-the-art simulators, practical seamanship workshops, smart classrooms, and cadet hostel facilities in Dehradun.
          </p>
        </div>

        {/* Media Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((fac, idx) => {
            return (
              <div
                key={idx}
                onClick={() => setActivePhoto(fac)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A1E3F]/90 shadow-2xl cursor-pointer hover:border-[#C8922A]/70 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Visual Media Image Container */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#0A1E3F]">
                  <img
                    src={fac.imageUrl}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-[#0A1E3F]/35 to-black/40" />

                  {/* Top Header Bar */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-10 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A840] bg-[#060F1E]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C8922A]/50 shadow-md">
                      {fac.tag}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-amber-400/30">
                      {fac.stats}
                    </span>
                  </div>

                  {/* Title Overlay inside Graphic */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10">
                    <h3 className="font-display text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors drop-shadow-md">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                {/* Body details */}
                <div className="p-5 sm:p-6 space-y-3 bg-[#0A1E3F]/90">
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {fac.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {fac.features.map((feat, i) => (
                      <span key={i} className="text-[10px] font-semibold text-slate-300 bg-white/08 px-2.5 py-1 rounded-lg border border-white/10">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#0A1E3F] border border-[#C8922A]/50 rounded-3xl overflow-hidden shadow-2xl text-white"
              >
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#E87500] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                  <img
                    src={activePhoto.imageUrl}
                    alt={activePhoto.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F] via-transparent to-black/50" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A840] bg-[#060F1E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C8922A]/40">
                      {activePhoto.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display text-2xl font-black text-white drop-shadow-md">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs text-amber-300 font-bold mt-1">Officers Wing Academy — Dehradun Campus</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activePhoto.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {activePhoto.features.map((f, i) => (
                      <span key={i} className="text-xs font-bold text-[#D4A840] bg-white/05 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C8922A]" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
