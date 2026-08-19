import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
}

const CounterItem: React.FC<StatItemProps> = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const obj = { value: 0 };
          
          // Anime.js v4 rapid count-up animation
          animate(obj, {
            value: target,
            duration: 1800,
            ease: 'outExpo',
            onUpdate: () => {
              setCount(Math.round(obj.value));
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center py-2">
      <div className="text-4xl sm:text-5xl font-black text-[#F59E0B] tracking-tight font-sans">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-slate-200 font-semibold mt-2 tracking-wide">
        {label}
      </div>
    </div>
  );
};

export const StatsCounterBar: React.FC = () => {
  const stats = [
    { target: 970, suffix: '+', label: 'Students+' },
    { target: 10, suffix: '+', label: 'Courses+' },
    { target: 15, suffix: '+', label: 'Events+' },
    { target: 10, suffix: '+', label: 'Trainers+' }
  ];

  return (
    <div className="bg-[#0A1E3F] text-white py-12 px-6 border-y border-blue-900/60 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {stats.map((stat, idx) => (
          <CounterItem
            key={idx}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};
