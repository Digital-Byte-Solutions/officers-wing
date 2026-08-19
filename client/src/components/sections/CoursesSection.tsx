import React, { useEffect, useRef } from 'react';
import { GraduationCap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import { animate, stagger } from 'animejs';

export const CoursesSection: React.FC = () => {
  const navigate   = useNavigate();
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
              delay:      stagger(100),
              ease:       'outCubic',
            });
          }
          if (gridRef.current) {
            animate(gridRef.current.children, {
              translateY: [50, 0],
              opacity:    [0, 1],
              scale:      [0.95, 1],
              duration:   800,
              delay:      stagger(140, { start: 250 }),
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
    <section ref={sectionRef} className="relative w-full py-28 bg-[#EFF2F7] overflow-hidden">
      {/* Subtle navy blob — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vh] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(10,30,63,0.06) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">

        {/* ── Heading ── */}
        <div ref={headRef} className="text-center mb-16 space-y-3">
          <div style={{ opacity: 0 }}>
            <span className="section-label section-label-light">
              <GraduationCap className="w-3.5 h-3.5" />
              Pre-Sea Programmes
            </span>
          </div>
          <h2 style={{ opacity: 0 }} className="font-display text-4xl sm:text-5xl font-black text-[#0A1E3F]">
            Our Courses
          </h2>
          <p style={{ opacity: 0 }} className="text-[#64748B] text-sm max-w-xl mx-auto">
            Tailored preparation programs engineered for every educational background — 10th, 12th, Graduate, and B.Tech.
          </p>
        </div>

        {/* ── 4-Column Card Grid ── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              style={{ opacity: 0 }}
              className="card-gradient-bar card-hover-effect bg-white rounded-2xl flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Most Popular badge */}
              {course.isHighlighted && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#E87500] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md z-10">
                  <Star className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}

              <div className="p-7 flex flex-col items-start gap-4 flex-1">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #0A1E3F 0%, #0F2C59 100%)' }}
                >
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                {/* Category chip */}
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8922A] bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                  {course.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[#0A1E3F] leading-snug">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#64748B] leading-relaxed flex-1">
                  {course.description}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="px-7 pb-7">
                <button
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className={`w-full text-xs font-bold py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    course.isHighlighted
                      ? 'btn-glow-orange text-white'
                      : 'border-2 border-[#0A1E3F] text-[#0A1E3F] hover:bg-[#0A1E3F] hover:text-white'
                  }`}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
