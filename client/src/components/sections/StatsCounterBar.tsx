import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, BookOpen, Anchor, CheckCircle } from 'lucide-react';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const StatCard: React.FC<StatItemProps> = ({ target, suffix = '', label, sublabel, icon: Icon }) => {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 40));
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(current);
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400/40 transition-all duration-300 group"
    >
      {/* Accent Icon Top */}
      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0F2C59] mb-3 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>

      {/* Number */}
      <div className="flex items-baseline gap-0.5">
        <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1E3F] leading-none">
          {count}
        </span>
        <span className="font-display text-2xl sm:text-3xl font-bold text-[#E87500]">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <span className="mt-2 text-xs sm:text-sm font-bold text-[#0A1E3F] tracking-wide text-center">
        {label}
      </span>

      {/* Sublabel */}
      <span className="mt-0.5 text-[10px] sm:text-[11px] text-[#64748B] font-medium text-center flex items-center gap-1">
        <CheckCircle className="w-3 h-3 text-emerald-500 inline shrink-0" />
        {sublabel}
      </span>
    </div>
  );
};

export const StatsCounterBar: React.FC = () => {
  const stats = [
    { target: 970, suffix: '+', label: 'Cadets Placed', sublabel: 'In Top Global Fleets', icon: Users },
    { target: 100, suffix: '%', label: 'DG Guidance', sublabel: 'Accredited Curriculum', icon: Award },
    { target: 95,  suffix: '%', label: 'IMU-CET Success', sublabel: 'First Attempt Clearance', icon: BookOpen },
    { target: 8,   suffix: '+', label: 'Years Of Excellence', sublabel: 'Est. 2016 Dehradun', icon: Anchor },
  ];

  return (
    <section className="relative bg-white py-8 sm:py-10 border-y border-[#DDE3ED] shadow-sm">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
