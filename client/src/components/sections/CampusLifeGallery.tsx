import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Bridge Navigational Simulator Lab',
    category: 'Simulator Training',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    description: 'Cadets practicing radar navigation and vessel maneuvering on state-of-the-art marine bridge simulators.'
  },
  {
    title: 'Seamanship & Ropework Practical Workshop',
    category: 'Practical Drills',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80',
    description: 'Hands-on training in nautical knotting, rigging, wire splicing, and deck safety operations.'
  },
  {
    title: 'Dehradun Campus Hostel & Mess Facilities',
    category: 'Campus Life',
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&auto=format&fit=crop&q=80',
    description: 'Disciplined residential environment with hygienic dining hall, study lounges, and 24/7 security.'
  },
  {
    title: 'Physical Endurance & Parade Grounds',
    category: 'Fitness & Discipline',
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?w=800&auto=format&fit=crop&q=80',
    description: 'Daily morning physical conditioning, march drills, and obstacle courses guided by ex-Naval physical instructors.'
  },
  {
    title: 'IMU-CET Classroom & Computer Labs',
    category: 'Academics',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    description: 'Modern air-conditioned smart classrooms equipped for online CBT mock tests and company aptitude prep.'
  },
  {
    title: 'Fire Safety & STCW Water Survival Drills',
    category: 'Safety Certification',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80',
    description: 'STCW safety orientation including life raft deployment, marine firefighting, and personal survival techniques.'
  }
];

export const CampusLifeGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section className="w-full bg-[#060F1E] py-16 sm:py-24 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(200,146,42,0.25) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">

        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="section-label section-label-dark">
            <Camera className="w-3.5 h-3.5" /> Life at Officers Wing
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white">
            Campus Infrastructure &amp; Training Gallery
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Take a look inside Dehradun's premier merchant navy institute — where disciplined academics meet real maritime seamanship training.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A1E3F]/60 cursor-pointer hover:border-[#C8922A]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-transparent to-transparent opacity-80" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4A840] bg-[#060F1E]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#C8922A]/40">
                    {item.category}
                  </span>
                </div>

                {/* View Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#E87500] flex items-center justify-center shadow-xl">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#0A1E3F] border border-[#C8922A]/40 rounded-2xl overflow-hidden shadow-2xl"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#E87500] transition-colors cursor-pointer"
                >
                  ✕
                </button>
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full max-h-[60vh] object-cover"
                />
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A840]">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
