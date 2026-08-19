import React, { useEffect, useRef } from 'react';
import { ChevronDown, Shield, Anchor } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onCheckEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCourses, onCheckEligibility }) => {
  const badgeRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      badgeRef.current,
      headlineRef.current,
      subRef.current,
      ctaRef.current,
      statsRef.current,
    ].filter(Boolean);

    animate(targets, {
      translateY: [40, 0],
      opacity:    [0, 1],
      duration:   1000,
      delay:      stagger(140, { start: 150 }),
      ease:       'outCubic',
    });
  }, []);

  return (
    <section className="relative w-full min-h-[620px] sm:h-screen sm:min-h-[680px] flex items-center overflow-hidden bg-[#060F1E]">

      {/* ── Background Video Positioned Perfectly for Mobile & Desktop ── */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-45 scale-105"
        poster="/images/Hero_image.png"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4"  type="video/mp4" />
        <source src="/videos/Hero_video.webm" type="video/webm" />
        <source src="/videos/Hero_video.mp4"  type="video/mp4" />
      </video>

      {/* ── Gradient Mesh Overlay for Mobile & Desktop Legibility ── */}
      <div className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(115deg, #060F1E 0%, rgba(10,30,63,0.92) 50%, rgba(10,30,63,0.65) 75%, rgba(6,15,30,0.30) 100%)'
        }}
      />
      {/* Subtle radial bloom */}
      <div className="absolute top-0 right-0 w-[80vw] sm:w-[60vw] h-[60vh] z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(30,80,140,0.25) 0%, transparent 65%)' }}
      />

      {/* ── Content Container ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-12 w-full pt-28 sm:pt-24 pb-14 sm:pb-16 text-left">
        <div className="max-w-3xl space-y-5 sm:space-y-7">

          {/* Floating DG Approved Badge */}
          <div ref={badgeRef} style={{ opacity: 0 }}>
            <span className="float-badge inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-[#C8922A]/40 bg-[#C8922A]/15 text-[#D4A840] max-w-full">
              <Shield className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
              <span className="truncate">DG Shipping Approved Guidance Academy</span>
            </span>
          </div>

          {/* Display Headline — Responsive sizing for small mobile screens */}
          <h1
            ref={headlineRef}
            style={{ opacity: 0 }}
            className="font-display text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.1] sm:leading-[1.05] tracking-tight"
          >
            <span className="text-gradient-hero">
              Chart Your Course<br className="hidden sm:inline" /> to the Merchant Navy
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            style={{ opacity: 0 }}
            className="text-xs sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl"
          >
            Dehradun's premier coaching institute — trusted by <span className="text-[#D4A840] font-semibold">970+ cadets</span> since 2016.
            Expert guidance for DNS, GME, GP Rating & IMU-CET.
          </p>

          {/* CTA Buttons — Stacked on Mobile, Inline on Desktop */}
          <div ref={ctaRef} style={{ opacity: 0 }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={onExploreCourses}
              className="btn-glow-orange font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg cursor-pointer text-center"
            >
              Explore Courses
            </button>
            <button
              onClick={onCheckEligibility}
              className="font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg border border-white/25 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm text-center"
            >
              Check Eligibility
            </button>
          </div>

          {/* Inline mini stats row */}
          <div
            ref={statsRef}
            style={{ opacity: 0 }}
            className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-6 pt-4 sm:pt-2 border-t border-white/10"
          >
            {[
              { num: '970+', label: 'Cadets Placed' },
              { num: '95%+', label: 'IMU-CET Pass' },
              { num: '10+',  label: 'Fleets' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                <span className="font-display text-lg sm:text-2xl font-black text-[#C8922A]">{s.num}</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Anchor icon & scroll chevron ── */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-white/50">
        <Anchor className="w-4 h-4 text-[#C8922A]" />
        <ChevronDown className="w-5 h-5 scroll-bounce" />
      </div>

    </section>
  );
};
