import React from 'react';
import { CoursesSection } from '../components/sections/CoursesSection';
import { Footer } from '../components/layout/Footer';
import { coursesData } from '../data/coursesData';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CoursesPage: React.FC = () => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#060F1E] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Pre-Sea Merchant Navy Courses
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Choose the right training path tailored to your qualification stage: 10th, 12th, or Engineering Graduation.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <CoursesSection />

      {/* Comparison Table */}
      <div className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <h3 className="text-2xl font-bold text-[#0F2C59] mb-6 font-serif-heading text-center">
            Course Overview & Eligibility Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F2C59] text-white">
                  <th className="p-3.5 rounded-tl-lg">Qualification</th>
                  <th className="p-3.5">Course Name</th>
                  <th className="p-3.5">Age Limit</th>
                  <th className="p-3.5">Duration</th>
                  <th className="p-3.5 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {coursesData.map((course) => (
                  <tr key={course.id} className="hover:bg-slate-50">
                    <td className="p-4 font-bold text-[#0F2C59]">{course.title}</td>
                    <td className="p-4 font-semibold">{course.category}</td>
                    <td className="p-4">{course.eligibility.split('(')[1]?.replace(')', '') || '17 - 25 Years'}</td>
                    <td className="p-4">{course.duration}</td>
                    <td className="p-4">
                      <Link
                        to={`/courses/${course.id}`}
                        className="inline-flex items-center gap-1 text-[#E87500] hover:text-[#F59E0B] font-bold"
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

