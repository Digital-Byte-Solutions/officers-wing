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
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Merchant Navy Knowledge Hub
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Latest Articles &amp; Exam Guidance
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert insights, IMU-CET preparation guides, and career roadmaps written by Master Mariners.
          </p>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
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

