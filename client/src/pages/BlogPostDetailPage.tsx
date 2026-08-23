import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/common/SEO';
import { BookOpen, Calendar, Clock, ArrowLeft, CheckCircle2, ChevronRight, User } from 'lucide-react';

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  // Inject Article / BlogPosting JSON-LD Schema for Search Engines & AI Answer Engines
  useEffect(() => {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `https://officerswing.com/blog/${post.slug}#article`,
      'headline': post.title,
      'description': post.excerpt,
      'image': `https://officerswing.com${post.coverImage}`,
      'datePublished': '2026-08-10',
      'dateModified': '2026-08-23',
      'author': {
        '@type': 'Person',
        'name': post.author,
        'jobTitle': post.authorRole,
        'image': `https://officerswing.com${post.authorImage}`
      },
      'publisher': {
        '@type': 'EducationalOrganization',
        'name': 'Officers Wing Academy',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://officerswing.com/images/logo.png'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': `https://officerswing.com/blog/${post.slug}`
      }
    };

    let script = document.getElementById('article-jsonld-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'article-jsonld-schema';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(articleSchema);

    return () => {
      const existingScript = document.getElementById('article-jsonld-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [post]);

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800 text-left">
      <SEO
        title={`${post.title} | Officers Wing Academy`}
        description={post.excerpt}
        keywords={post.seoKeywords}
        canonicalUrl={`https://officerswing.com/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
      />

      {/* Header Banner */}
      <div className="bg-[#050B14] text-white py-14 sm:py-16 px-4 sm:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#E87500] text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> {post.date}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display text-white leading-tight">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400/50 bg-[#0A1E3F]">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = '/images/founder.jpg'; }}
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-400" /> {post.author}
              </div>
              <div className="text-[11px] text-amber-300">{post.authorRole} — Officers Wing Dehradun</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-8">
        
        {/* Featured Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-black max-h-[420px]">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = '/images/officers_wing_banner.jpg'; }}
          />
        </div>

        {/* Lead Excerpt Summary */}
        <div className="bg-amber-500/10 border-l-4 border-[#E87500] p-5 rounded-r-xl text-slate-800 text-sm font-semibold leading-relaxed">
          {post.excerpt}
        </div>

        {/* Article Body Sections */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          {post.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#0F2C59] border-b pb-2">
                {sec.heading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {sec.body}
              </p>
              {sec.bulletPoints && (
                <div className="space-y-2 pt-2">
                  {sec.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Inline Lead Magnet CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-[#060F1E] via-[#0A1E3F] to-[#060F1E] p-6 sm:p-8 text-white border border-amber-400/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
              Free Pre-Sea Counselling
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Unsure if You Match DG Shipping Eligibility?
            </h3>
            <p className="text-xs text-slate-300">
              Use our interactive Merchant Navy eligibility checker to test your age, PCM %, and eyesight rules in 30 seconds.
            </p>
          </div>
          <Link
            to="/tools"
            className="btn-glow-orange text-xs font-bold px-6 py-3.5 rounded-xl whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-lg"
          >
            <span>Check Eligibility Free</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-lg font-bold font-display text-[#0F2C59] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#E87500]" /> Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#E87500]/50 shadow-sm hover:shadow-md transition-all cursor-pointer space-y-2"
                >
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-sm text-[#0F2C59] hover:text-[#E87500] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
};
