import React, { useEffect, useRef } from 'react';
import { ChevronDown, ShieldCheck, Anchor, Play } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onCheckEligibility: () => void;
  onCampusTour?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onCheckEligibility,
  onCampusTour,
}) => {
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
    <section className="relative w-full min-h-[620px] sm:h-screen sm:min-h-[680px] flex items-center overflow-hidden bg-[#060F1E]">

      {/* ── Background Poster Image ── */}
      <img
        src="/images/Hero_image.png"
        alt="Merchant Navy Ship"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-45 scale-105 pointer-events-none"
      />

      {/* ── Background Video for iOS & Android ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-45 scale-105"
        poster="/images/Hero_image.png"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
        <source src="/videos/Hero_video.webm" type="video/webm" />
        <source src="/videos/Hero_video.mp4" type="video/mp4" />
      </video>

      {/* ── Main Gradient Overlay matching Netlify ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(115deg, #060F1E 0%, rgba(10,30,63,0.92) 50%, rgba(10,30,63,0.65) 75%, rgba(6,15,30,0.30) 100%)'
        }}
      />

      {/* ── Radial Bloom Overlay ── */}
      <div
        className="absolute top-0 right-0 w-[80vw] sm:w-[60vw] h-[60vh] z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 10%, rgba(30,80,140,0.25) 0%, transparent 65%)'
        }}
      />

      {/* ── Content Container ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-12 w-full pt-36 sm:pt-32 pb-14 sm:pb-16 text-left">
        <div className="max-w-3xl space-y-5 sm:space-y-6">

          {/* Floating DG Approved Badge */}
          <div ref={badgeRef} style={{ opacity: 0 }}>
            <span className="float-badge inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase border border-[#C8922A]/40 bg-[#C8922A]/15 text-[#D4A840] max-w-full">
              <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
              <span>DG Shipping Approved Guidance Academy</span>
            </span>
          </div>

          {/* Display Headline with Netlify Gradient Text */}
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
            className="text-xs sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-xl"
          >
            Dehradun's premier <strong className="text-white">mentoring</strong> institute — trusted by{' '}
            <span className="text-[#D4A840] font-semibold">970+ cadets</span> since 2016. Expert guidance for DNS, GME, GP Rating &amp; IMU-CET.
          </p>

          {/* CTA Action Buttons */}
          <div
            ref={ctaRef}
            style={{ opacity: 0 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
          >
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
            <button
              onClick={onCampusTour}
              className="flex items-center justify-center gap-2 font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg border border-[#C8922A]/40 text-[#D4A840] hover:bg-[#C8922A]/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              <div className="w-6 h-6 rounded-full bg-[#C8922A]/20 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5 text-[#D4A840]" />
              </div>
              <span>Campus Tour</span>
            </button>
          </div>

          {/* Mini Credibility Highlights Row */}
          <div
            ref={statsRef}
            style={{ opacity: 0 }}
            className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-6 pt-4 sm:pt-2 border-t border-white/10"
          >
            {[
              { num: '970+', label: 'Cadets Placed' },
              { num: '95%+', label: 'IMU-CET Pass' },
              { num: '10+', label: 'Fleets' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2">
                <span className="font-display text-lg sm:text-2xl font-black text-[#C8922A]">
                  {stat.num}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Subtle bottom scroll indicator ── */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 text-white/50">
        <Anchor className="w-4 h-4 text-[#C8922A]" />
        <ChevronDown className="w-5 h-5 scroll-bounce" />
      </div>

    </section>
  );
};
