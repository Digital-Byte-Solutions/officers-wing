import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  isLast?: boolean;
}

const CounterItem: React.FC<StatItemProps> = ({ target, suffix = '', label, isLast }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { value: 0 };
          animate(obj, {
            value: target,
            duration: 1800,
            ease: 'outExpo',
            onUpdate: () => setCount(Math.round(obj.value)),
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex items-stretch relative">
      <div className="flex-1 flex flex-col items-center justify-center py-6 sm:py-10 px-3 sm:px-6 text-center">
        <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A1E3F] leading-none">
          {count}{suffix}
        </span>
        <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#64748B]">
          {label}
        </span>
      </div>
      {/* Gold hairline separator on desktop */}
      {!isLast && (
        <div className="hidden md:block self-stretch w-px my-6 gold-separator" />
      )}
    </div>
  );
};

export const StatsCounterBar: React.FC = () => {
  const stats = [
    { target: 970,  suffix: '+', label: 'Students Placed' },
    { target: 10,   suffix: '+', label: 'Courses Offered' },
    { target: 15,   suffix: '+', label: 'Events Conducted' },
    { target: 10,   suffix: '+', label: 'Expert Trainers' },
  ];

  return (
    <div className="bg-white border-y border-[#DDE3ED] shadow-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100">
        {stats.map((stat, idx) => (
          <CounterItem
            key={idx}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
            isLast={idx === stats.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
