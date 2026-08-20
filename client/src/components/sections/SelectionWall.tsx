import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Building2, Star } from 'lucide-react';

import { animate, stagger } from 'animejs';

interface Cadet {
  name: string;
  course: string;
  rank: string;
  company: string;
  filter: string;
  year: string;
  highlight?: string;
}

const CADETS: Cadet[] = [
  { name: 'Kuldeep Pal',      course: 'DNS / B.Sc Nautical Science', rank: 'AIR 47 — IMU-CET', company: 'Fleet Management Ltd.', filter: 'Fleet Management', year: '2024', highlight: 'Top 50 AIR' },
  { name: 'Pankaj Sajwan',    course: 'DNS / IMU-CET',               rank: 'AIR 112 — IMU-CET', company: 'Synergy Marine Group',  filter: 'Synergy',          year: '2024' },
  { name: 'Madan Kala',       course: 'GP Rating',                   rank: 'Direct Sponsorship', company: 'Thome Ship Mgmt',     filter: 'Thome',            year: '2023' },
  { name: 'Ankit Rawat',      course: 'DNS (IMU-CET)',               rank: 'AIR 89',             company: 'Synergy Marine Group', filter: 'Synergy',          year: '2024', highlight: 'Batch Topper' },
  { name: 'Vikram Negi',      course: 'GME',                         rank: 'Direct Entry',       company: 'Columbia Shipman.',   filter: 'Columbia',         year: '2023' },
  { name: 'Rahul Bisht',      course: 'DNS (IMU-CET)',               rank: 'AIR 203',            company: 'Fleet Management Ltd.', filter: 'Fleet Management', year: '2024' },
  { name: 'Priyanka Negi',    course: 'B.Sc Nautical Science',       rank: 'AIR 61 — IMU-CET',  company: 'Great Eastern Shipping', filter: 'Great Eastern',  year: '2024', highlight: 'First Lady Cadet' },
  { name: 'Deepak Koranga',   course: 'GP Rating',                   rank: 'DG Sponsor',         company: 'ESM (India) Pvt Ltd', filter: 'ESM',              year: '2023' },
  { name: 'Saurabh Panwar',   course: 'DNS',                         rank: 'AIR 145',            company: 'Synergy Marine Group', filter: 'Synergy',          year: '2025' },
  { name: 'Tarun Singh',      course: 'GME',                         rank: 'Direct Sponsor',     company: 'Thome Ship Mgmt',     filter: 'Thome',            year: '2025' },
  { name: 'Harsh Chamoli',    course: 'ETO',                         rank: 'Technical Interview', company: 'OM Ship Mgmt',       filter: 'Columbia',         year: '2025' },
  { name: 'Nitin Lohani',     course: 'DNS (IMU-CET)',               rank: 'AIR 78',             company: 'Graig Ship Mgmt',     filter: 'All',              year: '2025', highlight: 'Scholarship' },
];

const FILTERS = ['All Selections', 'Synergy', 'Fleet Management', 'Thome', 'Columbia', 'Great Eastern', 'ESM'];

export const SelectionWall: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Selections');
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);

  const displayed = CADETS.filter((c) =>
    activeFilter === 'All Selections' ? true : c.filter === activeFilter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && headRef.current) {
          animate(headRef.current.children, {
            translateY: [28, 0],
            opacity:    [0, 1],
            duration:   800,
            delay:      stagger(120),
            ease:       'outCubic',
          });
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-midnight py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle bloom */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(200,146,42,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">

        {/* Heading */}
        <div ref={headRef} className="text-center mb-8 sm:mb-10 space-y-2 sm:space-y-3">
          <div style={{ opacity: 0 }}>
            <span className="section-label section-label-dark">
              <Trophy className="w-3.5 h-3.5" /> Selection Wall
            </span>
          </div>
          <h2 style={{ opacity: 0 }} className="font-display text-3xl sm:text-5xl font-black text-white">
            Our Cadets — Now Sailing the World
          </h2>
          <p style={{ opacity: 0 }} className="text-slate-400 text-sm max-w-xl mx-auto">
            From Dehradun classrooms to the bridge of international ships. These are Officers Wing cadets — selected by the world's top shipping companies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border transition-all duration-300 cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#C8922A] text-white border-[#C8922A] shadow-lg'
                  : 'bg-white/05 text-slate-300 border-white/10 hover:border-[#C8922A]/50 hover:text-[#D4A840]'
              }`}
              style={{ background: activeFilter === f ? undefined : 'rgba(255,255,255,0.05)' }}
            >
              <Building2 className="w-3 h-3" />
              {f}
            </button>
          ))}
        </div>

        {/* Cadet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayed.map((cadet, idx) => (
            <div
              key={`${cadet.name}-${idx}`}
              className="glass-card rounded-xl p-4 sm:p-5 border border-white/10 hover:border-[#C8922A]/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {cadet.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="text-[9px] font-black text-[#D4A840] bg-[#C8922A]/15 px-2 py-0.5 rounded-full border border-[#C8922A]/30">
                    {cadet.highlight}
                  </span>
                </div>
              )}

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#C8922A] text-[#C8922A]" />
                ))}
              </div>

              <h4 className="font-bold text-white text-sm sm:text-base mb-0.5">{cadet.name}</h4>
              <p className="text-[10px] text-slate-400 mb-3">{cadet.course} · {cadet.year}</p>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3 h-3 text-[#C8922A] shrink-0" />
                  <span className="text-[10px] font-semibold text-[#D4A840]">{cadet.rank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-slate-300">{cadet.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-slate-400 text-xs mb-4">
            Want to see your name on the Selection Wall? Start your journey with Officers Wing.
          </p>
          <a
            href="/results"
            className="inline-flex items-center gap-2 btn-glow-orange font-bold text-sm px-8 py-3.5 rounded-lg cursor-pointer"
          >
            <Trophy className="w-4 h-4" /> View All Results
          </a>
        </div>

      </div>
    </section>
  );
};
