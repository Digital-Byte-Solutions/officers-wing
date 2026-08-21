import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2, Star, ShieldCheck, CheckCircle } from 'lucide-react';
import { shippingCompanies, testimonialsData } from '../../data/placementsData';

export const PlacementsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

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
            Alumni Selections &amp; Placements
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Cadets trained at Officers Wing are sailing worldwide with premier international shipping fleets.
          </p>
        </div>

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

        {/* ── Official 16 Shipping Companies Grid Showcase ── */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A1E3F]/90 to-[#0F2C59]/80 border-2 border-amber-400/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-amber-400/30 bg-amber-400/10 text-amber-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Verified Shipping Recruitment Partners
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
                Top Global Fleets Sailing with Officers Wing Cadets
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our cadets have consistently secured sponsorships and direct selections in the world's most prestigious maritime conglomerates — including Maersk, Wallem, Anglo-Eastern, Scorpio, Synergy, MSC, BSM, SCI, and Fleet Management.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="tel:+919149081578"
                  className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Call Placement Desk: 9149081578</span>
                </a>
                <span className="text-xs text-amber-300 font-semibold">
                  Also available at 95573-81578
                </span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white p-2 hover:scale-[1.01] transition-transform">
                <img
                  src="/images/shipping_partners_grid.jpg"
                  alt="Officers Wing Official 16 Shipping Companies Placement Network"
                  className="w-full h-auto rounded-xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
