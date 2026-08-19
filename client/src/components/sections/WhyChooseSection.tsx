import React, { useEffect, useRef } from 'react';
import { UserCheck, Trophy, ClipboardList, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';

export const WhyChooseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (headRef.current) {
            animate(headRef.current.children, {
              translateY: [32, 0],
              opacity:    [0, 1],
              duration:   900,
              delay:      stagger(120),
              ease:       'outCubic',
            });
          }
          if (cardsRef.current) {
            animate(cardsRef.current.children, {
              translateY: [48, 0],
              opacity:    [0, 1],
              scale:      [0.96, 1],
              duration:   800,
              delay:      stagger(180, { start: 300 }),
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

  const features = [
    {
      Icon: UserCheck,
      title: 'Expert Facilitators',
      body:  'Seasoned coaching for Written Tests (online / offline) and interviews for Deck Cadet, TME, GME, and GP Rating placements across top shipping companies.',
    },
    {
      Icon: Trophy,
      title: 'Proven Track Record',
      body:  '970+ cadets successfully placed in global merchant-navy fleets since 2016. Every batch has achieved outstanding selection rates.',
    },
    {
      Icon: ClipboardList,
      title: 'Full-Spectrum Preparation',
      body:  'Seamanship, Ship Construction, Fire Fighting, Basic Marine Engineering, Personal Safety, Ship Organisation, and Merchant Navy interview readiness.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 bg-midnight overflow-hidden"
    >
      {/* Subtle radial bloom — top right */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 90% 5%, rgba(232,117,0,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">

        {/* ── Heading block ── */}
        <div ref={headRef} className="text-center mb-16 space-y-4">
          <div style={{ opacity: 0 }}>
            <span className="section-label section-label-dark">
              <BookOpen className="w-3.5 h-3.5" />
              About Our Academy
            </span>
          </div>

          <h2
            style={{ opacity: 0 }}
            className="font-display text-4xl sm:text-5xl font-black text-white heading-route-line mx-auto inline-block"
          >
            Why Choose Officers Wing?
          </h2>

          <p style={{ opacity: 0 }} className="text-slate-400 text-sm max-w-3xl mx-auto leading-relaxed">
            Officers Wing has established its name in the merchant navy industry for providing career guidance and
            preparatory classes for aspirants across India. Since 2016 we have helped hundreds of students convert
            their dreams into reality — for Deck Cadets, TME, GME, GP Rating and beyond.
          </p>
        </div>

        {/* ── Official About text — serif pull-quote ── */}
        <div className="max-w-4xl mx-auto mb-16">
          <blockquote className="glass-card rounded-2xl p-8 border-l-4 border-[#C8922A] text-left">
            <p className="font-display text-base sm:text-lg italic text-slate-200 leading-relaxed">
              "Officers Wing is a coaching institute who provides coaching for Written Test (on line / off line)
              and interviews for various openings for Deck Cadets / TME / GME / GP Rating etc. Genuine guide for
              those who want to join Merchant Navy after passing 12th class."
            </p>
            <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-[#C8922A]">
              — officerswing.com
            </footer>
          </blockquote>
        </div>

        {/* ── Feature Cards (glassmorphic) ── */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, body }, idx) => (
            <div
              key={idx}
              style={{ opacity: 0 }}
              className="glass-card rounded-2xl p-8 flex flex-col gap-5 card-hover-effect group"
            >
              {/* Icon with gradient circle */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #E87500 0%, #0A1E3F 100%)' }}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
