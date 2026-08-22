import React, { useEffect, useRef } from 'react';
import { ChevronDown, ShieldCheck, Anchor } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onCheckEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCourses, onCheckEligibility }) => {
  const badgeRef   = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      badgeRef.current,
      headlineRef.current,
      subRef.current,
      ctaRef.current,
      statsRef.current,
    ].filter(Boolean);

    animate(targets, {
      translateY: [36, 0],
      opacity:    [0, 1],
      duration:   1000,
      delay:      stagger(140, { start: 150 }),
      ease:       'outCubic',
    });
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#060F1E] pt-28 sm:pt-32 pb-16">

      {/* ── Background Poster Image ── */}
      <img
        src="/images/Hero_image.png"
        alt="Merchant Navy Ship"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-right md:object-center opacity-85 scale-105 pointer-events-none"
      />

      {/* ── Background Video for iOS & Android ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-right md:object-center opacity-90 scale-105"
        poster="/images/Hero_image.png"
      >
        {/* Primary WebM for faster modern rendering */}
        <source src="/videos/Hero_video.webm" type="video/webm" />
        <source src="/video/hero.webm" type="video/webm" />
        {/* Fallback MP4 */}
        <source src="/videos/Hero_video.mp4"  type="video/mp4" />
        <source src="/video/hero.mp4"  type="video/mp4" />
      </video>

      {/* ── Smooth Horizontal & Vertical Ocean Gradient ── */}
      {/* On desktop: dark on left fading to reveal ship on right; on mobile: dark on top fading down */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, rgba(6, 15, 30, 0.95) 0%, rgba(6, 15, 30, 0.85) 38%, rgba(6, 15, 30, 0.35) 70%, rgba(6, 15, 30, 0.05) 100%)'
        }}
      />
      <div
        className="sm:hidden absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(6, 15, 30, 0.92) 0%, rgba(6, 15, 30, 0.70) 55%, rgba(6, 15, 30, 0.25) 100%)'
        }}
      />

      {/* ── Content Container ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl text-left space-y-6 sm:space-y-7">

          {/* Floating DG Approved Badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-[#C8922A]/60 bg-[#0A1E3F]/40 text-[#D4A840] backdrop-blur-sm shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A840]" />
              DG Shipping Approved Guidance Academy
            </span>
          </div>

          {/* Display Headline */}
          <h1
            className="font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white"
          >
            Chart Your Course<br />
            to the <span className="text-[#D4A840]">Merchant </span><span className="text-[#E87500]">Navy</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xs sm:text-sm md:text-base text-slate-200 font-normal leading-relaxed max-w-xl"
          >
            Dehradun's premier coaching institute — trusted by <strong className="text-[#D4A840] font-bold">970+ cadets</strong> since 2016. Expert guidance for DNS, GME, GP Rating &amp; IMU-CET.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={onExploreCourses}
              className="bg-[#E87500] hover:bg-[#F09030] text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Explore Courses
            </button>
            <button
              onClick={onCheckEligibility}
              className="bg-[#0A1E3F]/80 hover:bg-[#0A1E3F] border border-white/20 text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-lg backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              Check Eligibility
            </button>
          </div>

          {/* Mini Credibility Highlights Row */}
          <div
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl sm:text-3xl font-black text-[#C8922A]">
                970+
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium border-l border-white/20 pl-2">
                Cadets Placed
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-display text-2xl sm:text-3xl font-black text-[#C8922A]">
                95%+
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium border-l border-white/20 pl-2">
                IMU-CET Success
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-display text-2xl sm:text-3xl font-black text-[#C8922A]">
                10+
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium border-l border-white/20 pl-2">
                Shipping Fleets
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Subtle bottom scroll indicator ── */}
      <div className="hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-white/50">
        <Anchor className="w-3.5 h-3.5 text-[#C8922A]" />
        <ChevronDown className="w-3.5 h-3.5 scroll-bounce" />
      </div>

    </section>
  );
};
