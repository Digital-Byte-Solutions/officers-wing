import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2, Star } from 'lucide-react';
import { shippingCompanies, testimonialsData } from '../../data/placementsData';
import { animate, stagger } from 'animejs';

export const PlacementsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (headRef.current) {
            animate(headRef.current.children, {
              translateY: [28, 0],
              opacity:    [0, 1],
              duration:   800,
              delay:      stagger(120),
              ease:       'outCubic',
            });
          }
          if (cardsRef.current) {
            animate(cardsRef.current.children, {
              translateY: [40, 0],
              opacity:    [0, 1],
              duration:   800,
              delay:      stagger(140, { start: 300 }),
              ease:       'outCubic',
            });
          }
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? testimonialsData.length - 1 : p - 1));
  const handleNext = () =>
    setCurrentIndex((p) => (p === testimonialsData.length - 1 ? 0 : p + 1));

  return (
    <section ref={sectionRef} className="relative w-full py-28 bg-midnight overflow-hidden">
      {/* Radial bloom — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[55vw] h-[55vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(200,146,42,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">

        {/* ── Heading ── */}
        <div ref={headRef} className="text-center mb-12 space-y-3">
          <div style={{ opacity: 0 }}>
            <span className="section-label section-label-dark">
              <Building2 className="w-3.5 h-3.5" /> Alumni Placements
            </span>
          </div>
          <h2 style={{ opacity: 0 }} className="font-display text-4xl sm:text-5xl font-black text-white">
            Top Selections
          </h2>
          <p style={{ opacity: 0 }} className="text-slate-400 text-sm max-w-xl mx-auto">
            Our cadets are now sailing with the world's most reputed shipping companies.
          </p>
        </div>

        {/* ── Marquee — gold pills on dark ── */}
        <div className="mb-16 overflow-hidden py-5 border-y border-white/10">
          <div className="animate-marquee flex items-center gap-6">
            {[...shippingCompanies, ...shippingCompanies].map((company, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide text-[#D4A840] border border-[#C8922A]/30 bg-[#C8922A]/08 whitespace-nowrap"
                style={{ background: 'rgba(200,146,42,0.07)' }}
              >
                <Building2 className="w-4 h-4 text-[#C8922A]" />
                {company.logoText}
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonial Carousel ── */}
        <div className="relative">
          {/* Arrows */}
          {['prev', 'next'].map((dir) => (
            <button
              key={dir}
              onClick={dir === 'prev' ? handlePrev : handleNext}
              aria-label={dir === 'prev' ? 'Previous' : 'Next'}
              className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/08 text-white hover:bg-[#E87500] hover:border-[#E87500] transition-all duration-300 cursor-pointer ${dir === 'prev' ? '-left-5' : '-right-5'}`}
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              {dir === 'prev' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          ))}

          {/* Cards */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
            {testimonialsData.map((t, idx) => {
              const isFeatured = idx === currentIndex;
              return (
                <div
                  key={t.id}
                  style={{ opacity: 0 }}
                  className={`glass-card card-hover-effect rounded-2xl p-6 flex flex-col justify-between transition-all duration-400 ${
                    isFeatured
                      ? 'ring-2 ring-[#E87500]/60 shadow-[0_0_32px_rgba(232,117,0,0.18)]'
                      : ''
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8922A] text-[#C8922A]" />
                    ))}
                  </div>

                  {/* Quote icon + text */}
                  <div className="flex-1 space-y-3">
                    <Quote className="w-7 h-7 text-[#C8922A]/40" />
                    <p className="font-display text-sm italic text-slate-300 leading-relaxed">
                      {t.quote}
                    </p>
                  </div>

                  {/* Cadet info */}
                  <div className="pt-5 mt-4 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#C8922A]/60"
                    />
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{t.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{t.course}</p>
                      <span className="inline-block mt-1 text-[10px] font-extrabold text-[#D4A840] bg-[#C8922A]/12 px-2 py-0.5 rounded border border-[#C8922A]/25"
                        style={{ background: 'rgba(200,146,42,0.10)' }}>
                        {t.companyLogo}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
