import React, { useState } from 'react';
import { GraduationCap, Star, Clock, Award, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';

export const CoursesSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<'all' | '10th' | '12th' | 'graduate'>('all');

  const filteredCourses = coursesData.filter((c) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === '10th') return c.id.includes('10th');
    if (selectedFilter === '12th') return c.id.includes('12th');
    if (selectedFilter === 'graduate') return c.id.includes('graduate');
    return true;
  });

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#EFF4FA] overflow-hidden">
      {/* Background Decorative Blob */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15, 44, 89, 0.05) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(232, 117, 0, 0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Section Heading ── */}
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div>
            <span className="section-label section-label-light">
              <GraduationCap className="w-3.5 h-3.5 text-[#0F2C59]" />
              Structured Maritime Pathways
            </span>
          </div>
          <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl font-black text-[#0A1E3F] tracking-tight">
            Our Preparatory Programs
          </h2>
          <p className="text-[#64748B] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Tailored coaching programs engineered for every educational stage — 10th, 12th PCM, and Engineering Graduates.
          </p>

          {/* ── Interactive Category Tabs ── */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'all',      label: 'All Programs' },
              { key: '10th',     label: 'After 10th (GP Rating)' },
              { key: '12th',     label: 'After 12th (DNS / IMU-CET)' },
              { key: 'graduate', label: 'Graduates (GME & ETO)' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedFilter(tab.key as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.key
                    ? 'bg-[#0A1E3F] text-white shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bento-card-light rounded-3xl flex flex-col justify-between overflow-hidden group relative transition-all duration-300 ${
                course.isHighlighted
                  ? 'border-2 border-[#E87500] shadow-xl ring-4 ring-[#E87500]/10'
                  : 'hover:border-slate-300'
              }`}
            >
              {/* Highlighted Banner */}
              {course.isHighlighted && (
                <div className="bg-gradient-to-r from-[#E87500] to-[#F59E0B] text-white text-[10px] font-extrabold px-3 py-1.5 flex items-center justify-center gap-1.5 uppercase tracking-wider shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  Most Popular Cadet Pathway
                </div>
              )}

              <div className="p-6 sm:p-7 flex flex-col items-start gap-4 flex-1 text-left">
                {/* Pathway Tag & Icon */}
                <div className="w-full flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #0A1E3F 0%, #0F2C59 100%)' }}
                  >
                    <GraduationCap className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0A1E3F] bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-full">
                    {course.title}
                  </span>
                </div>

                {/* Course Name */}
                <div>
                  <h3 className="font-display text-xl font-bold text-[#0A1E3F] leading-snug group-hover:text-[#E87500] transition-colors">
                    {course.category}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {course.subtitle}
                  </p>
                </div>

                {/* Metadata Pills */}
                <div className="w-full space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-[#E87500] shrink-0" />
                    <span className="font-semibold text-slate-700">{course.duration}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Award className="w-3.5 h-3.5 text-[#C8922A] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-tight text-slate-500 line-clamp-2">{course.eligibility}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="w-full space-y-1.5 pt-2">
                  {course.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="text-[11px] font-medium">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 space-y-2">
                <button
                  onClick={() => navigate(`/courses/${course.id}`)}
                  className={`w-full text-xs font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-md ${
                    course.isHighlighted
                      ? 'btn-glow-orange text-white'
                      : 'bg-[#0A1E3F] hover:bg-[#0F2C59] text-white'
                  }`}
                >
                  <span>View Full Syllabus</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <Compass className="w-4 h-4 text-[#E87500]" />
            <span>Unsure which route matches your age and qualification?</span>
            <button
              onClick={() => navigate('/tools')}
              className="text-[#0A1E3F] font-bold underline hover:text-[#E87500] cursor-pointer"
            >
              Use our Eligibility Calculator →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};
