import React from 'react';
import { SEO } from '../components/common/SEO';
import { CoursesSection } from '../components/sections/CoursesSection';
import { Footer } from '../components/layout/Footer';
import { coursesData } from '../data/coursesData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      <SEO
        title="Merchant Navy Courses & Eligibility | DNS, B.Sc, B.Tech, GME & ETO | Officers Wing"
        description="Explore DG Shipping approved Merchant Navy pre-sea programs: DNS (IMU-CET & Sponsorship), B.Sc Nautical Science, B.Tech Marine Engineering, GME, ETO, and GP Rating in Dehradun."
        keywords="merchant navy courses after 12th, DNS course IMUCET, BSc nautical science dehradun, BTech marine engineering, GME course eligibility, ETO course fees, GP rating after 10th"
      />
      {/* Top Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232, 117, 0, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            DG Shipping Approved Courses
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Pre-Sea Merchant Navy Pathways
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose the right training path tailored to your qualification stage: 10th Standard, 12th PCM, or Engineering Graduation.
          </p>
        </div>
      </div>

      {/* Official Course Roadmap Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-8 relative z-20">
        <div className="rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-[#060F1E]">
          <img
            src="/images/officers_wing_banner.jpg"
            alt="Officers Wing Academy Pre-Sea Course Pathways"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Grid */}
      <CoursesSection />

      {/* Comparison Table */}
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-8">
          <div className="text-center mb-8">
            <span className="section-label section-label-light mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#0A1E3F]" />
              Side-by-Side Comparison
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A1E3F] font-display">
              Course Overview &amp; Eligibility Matrix
            </h3>
          </div>

          <div className="overflow-x-auto no-scrollbar -mx-2 px-2">
            <table className="w-full text-left text-xs border-collapse min-w-[580px]">
              <thead>
                <tr className="bg-[#0A1E3F] text-white">
                  <th className="p-3.5 rounded-tl-xl font-bold">Qualification</th>
                  <th className="p-3.5 font-bold">Course / Stream</th>
                  <th className="p-3.5 font-bold">Age Limit</th>
                  <th className="p-3.5 font-bold">Duration</th>
                  <th className="p-3.5 rounded-tr-xl font-bold text-right">Syllabus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {coursesData.map((course) => (
                  <tr key={course.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-[#0A1E3F]">{course.title}</td>
                    <td className="p-4 font-semibold text-slate-800">{course.category}</td>
                    <td className="p-4 text-slate-600">{course.eligibility.split('(')[1]?.replace(')', '') || '17 - 25 Years'}</td>
                    <td className="p-4 text-slate-600">{course.duration}</td>
                    <td className="p-4 text-right">
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 text-[#E87500] hover:text-[#F59E0B] font-bold py-1 px-3 rounded-lg hover:bg-amber-50 transition-all"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

