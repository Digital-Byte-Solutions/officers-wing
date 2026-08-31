import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/common/SEO';
import { BookOpen, User, ChevronRight, Clock } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      <SEO
        title="Merchant Navy Blog & IMU-CET Exam Guidance | Officers Wing Dehradun"
        description="Read expert guides, IMU-CET preparation strategies, career roadmaps, and salary insights written by Master Mariners at Officers Wing Academy."
        keywords="how to join merchant navy after 12th, IMUCET preparation guide, GP rating salary, merchant navy exam tips"
      />
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
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E87500]/50 transition-all duration-300 flex flex-col justify-between space-y-4 text-left cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-500" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading group-hover:text-[#E87500] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#0F2C59]" />
                  <span className="font-semibold text-slate-700">{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[#E87500] font-bold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4" />
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
