import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2, Star, Play, X, CheckCircle, ShieldCheck } from 'lucide-react';

import { shippingCompanies, testimonialsData } from '../../data/placementsData';

const VIDEO_TESTIMONIALS = [
  {
    name: 'Pankaj Sajwan',
    course: 'DNS Cadet — Synergy Marine Group',
    thumb: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80',
    ytId: 'L_LUpnjgPso',
    quote: 'Officers Wing changed my life completely. From struggling with PCM to getting AIR 112 in IMU-CET!'
  },
  {
    name: 'Kuldeep Pal',
    course: 'DNS Cadet — Fleet Management Ltd.',
    thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
    ytId: 'd-diB65scQU',
    quote: 'Capt. Anurag Sir\'s mentorship is unparalleled. He personally guided me through every step.'
  },
  {
    name: 'Priyanka Negi',
    course: 'B.Sc Nautical Science — Great Eastern',
    thumb: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
    ytId: 'vS3_728-E3E',
    quote: 'As the first female cadet from Uttarakhand in this batch, I am proud to represent Officers Wing.'
  },
];


export const PlacementsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#050B14] overflow-hidden">

      {/* Radial Glow Atmosphere */}
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200, 146, 42, 0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-10 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15, 44, 89, 0.2) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Section Heading ── */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div>
            <span className="section-label section-label-dark">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              Verified Cadet Success
            </span>
          </div>
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight">
            Alumni Selections & Placements
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Cadets trained at Officers Wing are sailing worldwide with premier international shipping fleets.
          </p>
        </div>

        {/* ── Video Testimonials Grid ── */}
        <div className="mb-14 sm:mb-16">
          <h3 className="text-center font-display text-lg sm:text-xl font-bold text-white mb-6">
            <span className="text-[#C8922A]">🎥</span> Cadets Speak — Watch Their Selection Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {VIDEO_TESTIMONIALS.map((vt, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-[#C8922A]/50 transition-all duration-300 hover:-translate-y-1"
                onClick={() => setPlayingVideo(vt.ytId)}>
                {/* Thumbnail */}
                <div className="relative">
                  <img src={vt.thumb} alt={vt.name} className="w-full h-44 sm:h-48 object-cover" />
                  <div className="absolute inset-0 bg-[#060F1E]/60 group-hover:bg-[#060F1E]/40 transition-all" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#E87500] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                {/* Caption */}
                <div className="p-4 bg-[#0A1E3F]/80">
                  <p className="text-[11px] italic text-slate-300 mb-2 leading-relaxed line-clamp-2">"{vt.quote}"</p>
                  <p className="font-bold text-white text-xs">{vt.name}</p>
                  <p className="text-[10px] text-[#D4A840]">{vt.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Video Modal ── */}
        {playingVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setPlayingVideo(null)}>
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-[#C8922A]/30"
              onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setPlayingVideo(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-[#E87500] transition-colors cursor-pointer">
                <X className="w-4 h-4" />
              </button>
              <div className="relative pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1&rel=0`}
                  title="Cadet Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}



        {/* ── Partner Shipping Companies Marquee ── */}
        <div className="mb-14 sm:mb-16 overflow-hidden py-4 border-y border-white/10 relative">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6">
            {[...shippingCompanies, ...shippingCompanies].map((company, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-amber-300 border border-amber-400/25 bg-white/05 backdrop-blur-md shadow-sm"
              >
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>{company.logoText}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials Carousel Container ── */}
        <div className="relative">

          {/* Cards Grid: Responsive display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {testimonialsData.slice(currentIndex, currentIndex + 3).concat(
              currentIndex + 3 > totalSlides
                ? testimonialsData.slice(0, (currentIndex + 3) % totalSlides)
                : []
            ).slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="bento-card-dark rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-amber-400/50 transition-all duration-300 text-left"
              >
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-amber-400/30" />
                </div>

                {/* Testimonial Quote */}
                <div className="flex-1 mb-6">
                  <p className="font-display text-xs sm:text-sm italic text-slate-200 leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                {/* Cadet Info & Placement Tag */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                  <img
                    src={t.photoUrl}
                    alt={t.name}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-400/50 shadow-md shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white truncate">{t.name}</h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{t.course}</p>
                    <span className="inline-block mt-1 text-[10px] font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                      {t.companyLogo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Controls (Safe bounds, no overflow) */}
          <div className="mt-8 flex items-center justify-between sm:justify-end gap-3 pt-4 border-t border-white/08">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Genuine Student Reviews</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 bg-white/05 text-white hover:bg-[#E87500] hover:border-[#E87500] transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 bg-white/05 text-white hover:bg-[#E87500] hover:border-[#E87500] transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
