import React, { useEffect, useRef } from 'react';
import { Award, ShieldCheck, Compass, HeartHandshake, Anchor } from 'lucide-react';
import { animate } from 'animejs';

export const FounderSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (leftRef.current) {
            animate(leftRef.current, {
              translateX: [-40, 0],
              opacity:    [0, 1],
              duration:   1000,
              ease:       'outCubic',
            });
          }
          if (rightRef.current) {
            animate(rightRef.current, {
              translateX: [40, 0],
              opacity:    [0, 1],
              duration:   1000,
              delay:      180,
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

  return (
    <section ref={sectionRef} className="relative w-full py-0 overflow-hidden">

      {/* ── Split Panel Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] sm:min-h-[680px]">

        {/* LEFT PANEL — dark navy with pull-quote */}
        <div
          ref={leftRef}
          style={{ opacity: 0 }}
          className="relative bg-[#0A1E3F] flex flex-col justify-center px-5 sm:px-16 py-12 sm:py-20 text-left"
        >
          {/* Compass watermark */}
          <div className="absolute top-8 right-8 opacity-5 pointer-events-none">
            <Anchor className="w-28 sm:w-40 h-28 sm:h-40 text-white" />
          </div>

          <span className="section-label section-label-dark mb-4 sm:mb-6 self-start">
            <Compass className="w-3.5 h-3.5" /> Leadership & Vision
          </span>

          {/* Serif amber pull-quote */}
          <blockquote className="font-display text-xl sm:text-3xl font-bold text-white leading-snug mb-6 sm:mb-8">
            <span className="text-[#C8922A]">"TRUST</span> is the most expensive thing
            in the World — and we are here to win yours."
          </blockquote>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
            We will work hard every day so that any student who trusts us can proudly say they were guided well,
            given the right platform to learn, and that they outperformed their potential. We are not a coaching
            institute but a <strong className="text-white">mentoring institute</strong> — where a student's
            overall growth is the top priority.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 sm:mb-8">
            For our team it is always <strong className="text-[#C8922A]">STUDENT COMES FIRST</strong>. I am
            overwhelmed by the perseverance of our students — by their tenacity, their strength, and the devotion
            with which they claimed such outstanding results.
          </p>

          {/* Credential badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { Icon: Award,          label: 'Mentorship First',    sub: 'Not just coaching'     },
              { Icon: ShieldCheck,    label: 'DG Shipping Approved', sub: 'Verified guidance'    },
              { Icon: HeartHandshake, label: 'Student Comes First', sub: 'Team philosophy'     },
              { Icon: Compass,        label: 'Since 2016',           sub: 'Dehradun, Uttarakhand' },
            ].map(({ Icon, label, sub }, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/05 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.05)' }}>
                <Icon className="w-4 h-4 text-[#C8922A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-bold text-white">{label}</div>
                  <div className="text-[10px] text-slate-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT PANEL — light with founder photo */}
        <div
          ref={rightRef}
          style={{ opacity: 0 }}
          className="relative bg-[#EFF2F7] flex flex-col justify-center items-center px-5 sm:px-16 py-12 sm:py-20"
        >
          {/* Photo with gradient ring */}
          <div className="relative mb-6 sm:mb-8">
            {/* Gradient ring */}
            <div
              className="absolute -inset-1.5 rounded-2xl z-0"
              style={{ background: 'linear-gradient(135deg, #0A1E3F 0%, #C8922A 50%, #E87500 100%)', padding: '2px' }}
            />
            <div className="relative z-10 rounded-2xl overflow-hidden w-60 sm:w-80 h-72 sm:h-96 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
                alt="Capt. Anurag Singh — Founder, Officers Wing"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Founder name card */}
          <div className="text-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A1E3F]">
              Capt. Anurag Singh
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1">
              Founder & Managing Director
            </p>
            <p className="text-[10px] sm:text-xs text-[#C8922A] font-bold uppercase tracking-widest mt-2">
              Officers Wing Academy, Dehradun
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
