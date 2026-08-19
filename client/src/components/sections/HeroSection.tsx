import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onCheckEligibility: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCourses, onCheckEligibility }) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Anime.js v4 staggered entrance animation
    if (headlineRef.current) {
      animate([headlineRef.current, subheadlineRef.current, ctaRef.current?.children], {
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: stagger(200, { start: 300 }),
        ease: 'outCubic'
      });
    }
  }, []);

  return (
    <section className="snap-section relative w-full h-screen min-h-[650px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Video with WebM primary and MP4 fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        poster="/images/Hero_image.png"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
        <source src="/videos/Hero_video.webm" type="video/webm" />
        <source src="/videos/Hero_video.mp4" type="video/mp4" />
      </video>

      {/* Dark navy-to-transparent gradient overlay originating from the left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/75 to-transparent z-10"></div>

      {/* Content (Left-aligned, vertical center) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 w-full pt-16">
        <div className="max-w-2xl text-left space-y-6">
          
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-serif-heading tracking-tight"
          >
            Chart Your Course to the Merchant Navy
          </h1>

          <p
            ref={subheadlineRef}
            className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-xl"
          >
            Dehradun's Premier Coaching Institute. Start Your Journey Today.
          </p>

          {/* CTA Buttons (Inline) */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onExploreCourses}
              className="bg-[#0F2C59] hover:bg-[#1A3D73] text-white font-bold text-base px-8 py-3.5 rounded-[6px] transition-all duration-300 shadow-xl border border-blue-400/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Explore Courses
            </button>
            
            <button
              onClick={onCheckEligibility}
              className="btn-orange-glow bg-[#E87500] hover:bg-[#F59E0B] text-white font-bold text-base px-8 py-3.5 rounded-[6px] transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Check Eligibility
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
