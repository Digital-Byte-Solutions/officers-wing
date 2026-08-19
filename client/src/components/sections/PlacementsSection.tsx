import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { shippingCompanies, testimonialsData } from '../../data/placementsData';
import { animate } from 'animejs';

export const PlacementsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardsRef.current) {
            animate(cardsRef.current, {
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              ease: 'outCubic'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="snap-section w-full min-h-screen py-20 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] mb-3 font-serif-heading">
          Alumni Placements
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto mb-10">
          Many aspiring cadets placed in world's top shipping fleets.
        </p>

        {/* Part 1: Infinite Marquee of Company Logos */}
        <div className="mb-14 overflow-hidden py-4 border-y border-slate-100 relative bg-slate-50/50 rounded-lg">
          <div ref={marqueeRef} className="animate-marquee flex items-center space-x-12 px-4">
            {[...shippingCompanies, ...shippingCompanies].map((company, index) => (
              <div
                key={index}
                className="flex items-center gap-2 font-black text-slate-800 tracking-wider text-sm sm:text-base whitespace-nowrap bg-white px-5 py-2.5 rounded-lg border border-slate-200 shadow-sm shrink-0"
              >
                <Building2 className="w-4 h-4 text-[#0F2C59]" />
                <span className="text-[#0F2C59]">{company.logoText}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: 3-Column Student Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto px-10">
          
          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-300 text-[#0F2C59] flex items-center justify-center shadow-md hover:bg-[#0F2C59] hover:text-white transition-all z-10 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-300 text-[#0F2C59] flex items-center justify-center shadow-md hover:bg-[#0F2C59] hover:text-white transition-all z-10 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Grid */}
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {testimonialsData.map((t, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <div
                  key={t.id}
                  className={`bg-white p-6 rounded-xl border ${
                    isCurrent ? 'border-[#0F2C59] ring-2 ring-[#0F2C59]/10' : 'border-slate-200'
                  } card-hover-effect flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    {/* Top Quote Icon */}
                    <Quote className="w-8 h-8 text-amber-500/40" />

                    {/* Italic Quote */}
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      {t.quote}
                    </p>
                  </div>

                  {/* Cadet Info & Placement Logo */}
                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-3">
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#0F2C59]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#0F2C59] truncate">{t.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate">{t.course}</p>
                      <span className="inline-block mt-1 text-[10px] font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
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
