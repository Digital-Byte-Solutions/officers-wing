import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import { animate, stagger } from 'animejs';

export const CoursesSection: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && gridRef.current) {
            animate(gridRef.current.children, {
              translateY: [40, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 800,
              delay: stagger(150),
              ease: 'outCubic'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="snap-section w-full min-h-screen py-20 bg-[#F8FAFC] flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] mb-4 font-serif-heading">
          Our Courses
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-14">
          Tailored pre-sea preparation programs engineered for every educational background.
        </p>

        {/* 4-Column Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {coursesData.map((course) => {
            const isOrangeHoverDemo = course.isHighlighted; // Demonstrating hover state as requested
            
            return (
              <div
                key={course.id}
                className="bg-white p-7 rounded-xl border border-slate-200 card-hover-effect flex flex-col justify-between items-center h-full group"
              >
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-[#0F2C59] group-hover:bg-[#0F2C59] group-hover:text-white transition-colors duration-300">
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-[#0F2C59]">
                    {course.title}
                  </h3>

                  {/* Category Pill */}
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    {course.category}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Button */}
                <div className="w-full pt-6 mt-4">
                  {isOrangeHoverDemo ? (
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="w-full bg-[#E87500] hover:bg-[#F59E0B] text-white text-xs font-bold py-2.5 rounded-[6px] transition-all shadow-md cursor-pointer"
                    >
                      Learn More
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/courses/${course.id}`)}
                      className="w-full border-2 border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white text-xs font-bold py-2.5 rounded-[6px] transition-all duration-300 cursor-pointer"
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
