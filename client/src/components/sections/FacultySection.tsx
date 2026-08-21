import React, { useEffect, useRef } from 'react';
import { Compass, Award, ShieldCheck, Anchor } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface FacultyMember {
  name: string;
  rank: string;
  specialization: string;
  seaTime: string;
  companies: string;
  credential: string;
  icon: React.ElementType;
  color: string;
}

const FACULTY: FacultyMember[] = [
  {
    name: 'Capt. Anurag Singh',
    rank: 'Master Mariner (FG)',
    specialization: 'DNS & IMU-CET Strategy, Sponsorship Interview Coaching',
    seaTime: '15+ Years at Sea',
    companies: 'Synergy, Fleet Management, Thome',
    credential: 'Founder & MD — Officers Wing',
    icon: Anchor,
    color: '#C8922A',
  },
  {
    name: 'Ch. Eng. S. K. Sharma',
    rank: 'Chief Engineer (Class 1)',
    specialization: 'Marine Engineering, GME & ETO Technical Coaching',
    seaTime: '18+ Years at Sea',
    companies: 'Scorpio, Columbia, OM Ship Mgmt',
    credential: 'Senior Marine Engineering Faculty',
    icon: Award,
    color: '#E87500',
  },
  {
    name: 'Lt. Cdr. R. V. Verma (Retd.)',
    rank: 'Lieutenant Commander — Indian Navy',
    specialization: 'Personality Development, Company Interview & SSB Prep',
    seaTime: '22 Years Naval Service',
    companies: 'Indian Navy — Western Command',
    credential: 'Personality & Interview Specialist',
    icon: ShieldCheck,
    color: '#0F2C59',
  },
  {
    name: 'Ms. Priya Nair',
    rank: 'M.Sc Mathematics (IIT Roorkee)',
    specialization: 'Applied Mathematics for IMU-CET, Physics & Aptitude',
    seaTime: '8 Years Teaching',
    companies: 'IIT Coaching & Maritime Academics',
    credential: 'IMU-CET Maths Specialist',
    icon: Compass,
    color: '#0A1E3F',
  },
];

export const FacultySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

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
          if (gridRef.current) {
            animate(gridRef.current.children, {
              translateY: [40, 0],
              opacity:    [0, 1],
              duration:   800,
              delay:      stagger(150, { start: 250 }),
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
    <section ref={sectionRef} className="w-full bg-[#EFF2F7] py-16 sm:py-24 relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <Anchor className="w-[60vw] text-[#0A1E3F]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">

        {/* Heading */}
        <div ref={headRef} className="text-center mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <div style={{ opacity: 0 }}>
            <span className="section-label">
              <Compass className="w-3.5 h-3.5" /> Expert Faculty
            </span>
          </div>
          <h2 style={{ opacity: 0 }} className="font-display text-3xl sm:text-5xl font-black text-[#0A1E3F]">
            Learn from Active Master Mariners
          </h2>
          <p style={{ opacity: 0 }} className="text-slate-500 text-sm max-w-xl mx-auto">
            Our faculty are not just teachers — they are serving officers and decorated veterans who have navigated the world's oceans. Real experience. Real mentorship.
          </p>
        </div>

        {/* Faculty Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FACULTY.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                style={{ opacity: 0 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
              >
                {/* Color top bar */}
                <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${member.color}, #E87500)` }} />

                {/* Icon Avatar */}
                <div className="px-5 pt-6 pb-4 flex flex-col items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ background: `linear-gradient(135deg, ${member.color}22, ${member.color}44)`, border: `2px solid ${member.color}40` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: member.color }} />
                  </div>

                  <div>
                    <h3 className="font-display text-base font-black text-[#0A1E3F] leading-tight">{member.name}</h3>
                    <p className="text-[11px] font-bold text-[#E87500] mt-0.5">{member.rank}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.specialization}
                  </p>

                  <div className="w-full space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2 text-[10px]">
                      <span className="font-bold text-slate-400 uppercase tracking-wider w-14 shrink-0">Sea Time</span>
                      <span className="font-semibold text-slate-700">{member.seaTime}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[10px]">
                      <span className="font-bold text-slate-400 uppercase tracking-wider w-14 shrink-0">Sailed</span>
                      <span className="font-semibold text-slate-700">{member.companies}</span>
                    </div>
                    <div className="flex items-start gap-2 text-[10px]">
                      <span className="font-bold text-[#C8922A] uppercase tracking-wider w-14 shrink-0">Role</span>
                      <span className="font-bold text-[#0A1E3F]">{member.credential}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Pledge Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A1E3F] via-[#0F2C59] to-[#0A1E3F] border border-[#C8922A]/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <Anchor className="w-40 h-40 text-white" />
            </div>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 text-[#D4A840] font-bold text-[10px] uppercase tracking-widest mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                The Officers Wing Mentorship Pledge
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-snug max-w-2xl">
                We Are Not Just a Coaching Centre —<br />
                <span className="text-[#C8922A]">We Mentor Until You Are Selected.</span>
              </h3>
              <p className="text-slate-400 text-xs mt-2 max-w-lg">
                Every cadet who joins Officers Wing receives 4-pillar mentorship: IMU-CET rank strategy, sponsorship interview preparation, DG medical pre-check guidance, and lifetime career placement support.
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-center gap-2 shrink-0">
              {['IMU-CET Rank Strategy', 'Sponsorship Interview Prep', 'DG Medical Pre-Check', 'Lifetime Placement Support'].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="w-4 h-4 rounded-full bg-[#C8922A]/20 border border-[#C8922A]/50 flex items-center justify-center text-[#D4A840] font-black text-[9px]">{i + 1}</span>
                  <span className="text-white font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
