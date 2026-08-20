import React from 'react';
import { Footer } from '../components/layout/Footer';
import { BookOpen, Calendar, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Join Merchant Navy After 12th — Complete 2026 Guide',
      category: 'IMU-CET & DNS',
      date: '10th August 2026',
      author: 'Capt. Anurag Singh',
      excerpt: 'Step-by-step roadmap to clear IMU-CET written examination, secure leading company sponsorships, and pass DG Shipping pre-sea medical tests.'
    },
    {
      id: 2,
      title: 'What is IMU-CET? Eligibility, Syllabus & Preparation Tips',
      category: 'Entrance Exams',
      date: '5th August 2026',
      author: 'Officers Wing Faculty',
      excerpt: 'Comprehensive analysis of Physics, Chemistry, Maths, English, and General Aptitude pattern for Indian Maritime University Common Entrance Test.'
    },
    {
      id: 3,
      title: 'GP Rating Course After 10th: Eligibility, Duration & Career Path',
      category: 'Career Guidance',
      date: '28th July 2026',
      author: 'Capt. Anurag Singh',
      excerpt: 'Detailed overview of 6-month General Purpose rating course for 10th pass students aiming for early marine careers.'
    },
    {
      id: 4,
      title: 'Merchant Navy Salary in India — Rank-wise Breakdown 2026',
      category: 'Salaries & Benefits',
      date: '15th July 2026',
      author: 'Officers Wing Faculty',
      excerpt: 'Explore tax-free income structures from Deck Cadet to Master Captain and Junior Engineer to Chief Engineer on commercial fleets.'
    }
  ];

  return (
    <div className="pt-28 min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#060F1E] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
            <BookOpen className="w-4 h-4" /> Merchant Navy Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Latest Articles & Exam Guidance
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Expert insights, IMU-CET preparation guides, and career roadmaps written by Master Mariners.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white p-7 rounded-xl border border-slate-200 card-hover-effect flex flex-col justify-between space-y-4 text-left">
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  {post.category}
                </span>

                <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading hover:text-[#E87500] cursor-pointer transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0F2C59]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E87500]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

