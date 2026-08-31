import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/common/SEO';
import { GraduationCap, CheckCircle2, ArrowLeft, ShieldCheck, Clock, Sparkles, Award, ZoomIn, X, Wrench, Cpu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface CourseDetailPageProps {
  onOpenEnquire?: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onOpenEnquire }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  
  const course = coursesData.find((c) => c.id === id || c.aliases?.includes(id || '')) || coursesData[1]; // fallback to DNS

  // Inject Course JSON-LD Schema Marker for Search Engine & AI Indexing
  useEffect(() => {
    const courseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': `https://officerswing.com/courses/${course.id}#course`,
      'name': `${course.category} — ${course.title}`,
      'courseCode': course.id.toUpperCase(),
      'description': course.fullDescription || course.subtitle,
      'provider': {
        '@type': 'EducationalOrganization',
        'name': 'Officers Wing Academy',
        'sameAs': 'https://officerswing.com'
      },
      'educationalCredentialAwarded': `${course.targetExam} Preparation & DG Shipping Clearance`,
      'hasCourseInstance': {
        '@type': 'CourseInstance',
        'courseMode': 'Classroom, Simulator & Practical Labs',
        'instructor': {
          '@type': 'Person',
          'name': 'Capt. Anurag Singh',
          'jobTitle': 'Master Mariner & Managing Director'
        }
      }
    };

    let script = document.getElementById('course-jsonld-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'course-jsonld-schema';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(courseSchema);

    return () => {
      const existingScript = document.getElementById('course-jsonld-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [course]);

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800 text-left">
      <SEO
        title={`${course.category} Coaching Dehradun | ${course.title} — Officers Wing`}
        description={`Prepare for ${course.category} (${course.title}) at Officers Wing Academy in Dehradun. Eligibility: ${course.eligibility}. Duration: ${course.duration}.`}
        keywords={`${course.category} Dehradun, ${course.title} coaching, merchant navy ${course.category.toLowerCase()}, DG shipping ${course.id}`}
        canonicalUrl={`https://officerswing.com/courses/${course.id}`}
      />
      {/* Top Breadcrumb & Banner */}
      <div className="bg-[#050B14] text-white py-14 sm:py-16 px-4 sm:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto space-y-4">
          <button
            onClick={() => navigate('/courses')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Courses Hub
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#E87500] text-white text-xs font-bold px-3 py-1 rounded-full">
              {course.title}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> {course.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            {course.category}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
            {course.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
        
        {/* Left Column: Details & Curriculum */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Explicit Highlight for DNS: IMU-CET + Shipping Company Sponsorship Required */}
          {course.id.includes('dns') && (
            <div className="bg-gradient-to-r from-[#0A1E3F] via-[#0F2C59] to-[#0A1E3F] border-2 border-amber-400/50 p-6 sm:p-7 rounded-2xl text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Mandatory Entry Requirements — DNS Course</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-black text-white">
                IMU-CET Rank + Shipping Company Sponsorship Are Required
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Diploma in Nautical Science (DNS) leading to B.Sc Nautical Science requires candidates to qualify in two mandatory selection hurdles before joining pre-sea training:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>1. IMU-CET Rank is Required</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    National Common Entrance Test conducted by Indian Maritime University. Clearing IMU-CET with a valid All India Rank (AIR) is legally mandatory.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>2. Shipping Company Sponsorship Required</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A selection letter from a DG Shipping approved shipping company (Synergy, Fleet, Anglo-Eastern, Great Eastern, Scorpio, etc.) before college entry.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Explicit Highlight for GME: Targeted at Mechanical Engineers */}
          {course.id.includes('gme') && (
            <div className="bg-gradient-to-r from-[#0A1E3F] via-[#0F2C59] to-[#0A1E3F] border-2 border-amber-400/50 p-6 sm:p-7 rounded-2xl text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span>Targeted Technical Career Track — GME Program</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-black text-white">
                Post-Graduation Course Targeted at Mechanical Engineers
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Graduate Marine Engineering (GME) is a 1-year conversion program designed specifically for B.E. / B.Tech Mechanical Engineering &amp; Naval Architecture graduates to transition directly into Merchant Navy Engine Officer roles:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Eligibility: B.E. / B.Tech Mechanical</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Must hold an AICTE recognized Mechanical Engineering degree with min 60% aggregate in final year and max age 28 years.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Career Track: Trainee to Chief Engineer</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Start as Trainee Engineer ($800–$1,500/mo) ➔ 4th Engineer ($3,500–$5,000/mo) ➔ Chief Engineer ($10,000–$16,000/mo).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Explicit Highlight for ETO: Targeted at Electronics & Communication (ECE) & Electrical (EEE) Engineers */}
          {course.id.includes('eto') && (
            <div className="bg-gradient-to-r from-[#0A1E3F] via-[#0F2C59] to-[#0A1E3F] border-2 border-amber-400/50 p-6 sm:p-7 rounded-2xl text-white shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Targeted Technical Career Track — ETO Program</span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-black text-white">
                Technical Course Targeted at Electronics &amp; Communication (ECE) Graduates
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Electro-Technical Officer (ETO) is a 4-month specialized pre-sea technical program designed for Electronics &amp; Communication (ECE), Electrical (EEE), and Instrumentation graduates to power modern automated commercial ships:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Eligibility: B.E. / B.Tech / Diploma ECE &amp; EEE</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Degree or 3-Year Diploma in ECE, EEE, or Electronics &amp; Instrumentation with min 60% aggregate and max age 28 years.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15 space-y-2">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Career Track: Trainee ETO to Senior ETO</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Start as Trainee ETO ($800–$1,500/mo) ➔ ETO ($4,000–$6,000/mo) ➔ Senior / Chief ETO ($7,000–$11,000/mo).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overview Card */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading border-b pb-3">
              Course Overview
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {course.fullDescription}
            </p>
          </div>

          {/* Eligibility Criteria Card */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading border-b pb-3">
              Eligibility &amp; Medical Requirements
            </h2>

            <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-100 space-y-2">
              <div className="text-xs font-bold text-[#0F2C59]">Educational Requirement:</div>
              <div className="text-xs text-slate-700">{course.eligibility}</div>
            </div>

            {course.id.includes('gp-rating') ? (
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>10th Pass:</strong> 10th pass with minimum 40% aggregate in Mathematics and Science.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>English:</strong> Minimum 40% marks in English at 10th or 10+2 level.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> 17.5 to 25 years at the start of training (5-year relaxation for SC/ST).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Medical Fitness:</strong> 6/6 eyesight (unaided) with zero color blindness and DG Shipping medical clearance.</span>
                </li>
              </ul>
            ) : course.id.includes('dns') || course.id.includes('bsc') ? (
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Academic Qualification:</strong> 10+2 PCM (Physics, Chemistry, Maths) with min 60% aggregate &amp; min 50% in English.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> 17 to 25 years on commencement date (relaxation as per DG Shipping rules).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Deck Eyesight Standard:</strong> Strictly 6/6 unaided in each eye with zero color blindness.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>DG Medical Test:</strong> Certified medically fit by a DG Shipping approved medical examiner.</span>
                </li>
              </ul>
            ) : course.id.includes('gme') ? (
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Degree Qualification:</strong> B.E. / B.Tech in Mechanical Engineering or Naval Architecture with min 60% aggregate in final year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>English Language:</strong> Minimum 50% marks in English at 10th, 12th, or Degree level.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> Maximum 28 years on the date of batch commencement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Engine Medical Standard:</strong> Eyesight up to 6/12 with corrective lenses, zero color blindness.</span>
                </li>
              </ul>
            ) : course.id.includes('eto') ? (
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Engineering / Diploma:</strong> B.E. / B.Tech or 3-Year Diploma in Electronics &amp; Communication (ECE), Electrical (EEE), or Instrumentation with min 60%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>English Requirement:</strong> Minimum 50% marks in English at 10th, 12th, or Diploma/Degree level.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> Maximum 28 years on the date of batch commencement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Medical Standard:</strong> Medically fit as per DG Shipping guidelines with zero color blindness.</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2.5 text-xs text-slate-700 pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Academic Qualification:</strong> 10+2 PCM with min 60% aggregate &amp; min 50% in English.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Age Limit:</strong> 17 to 25 years on date of commencement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Eyesight &amp; Fitness:</strong> Eyesight up to 6/12 with aids, zero color blindness, BMI 17.0–27.0.</span>
                </li>
              </ul>
            )}
          </div>

          {/* Key Program Highlights */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading border-b pb-3">
              Program Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#E87500]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official Course Infographic Poster Section */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading">
                Official Course Roadmap Infographic
              </h2>
              <button
                onClick={() => setIsPosterModalOpen(true)}
                className="text-xs font-bold text-[#E87500] hover:text-[#0F2C59] flex items-center gap-1 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" /> Expand Poster
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Click the official infographic poster below to view full career progression, duration, rank chart, and DG Shipping eligibility requirements for {course.category}:
            </p>

            <div
              onClick={() => setIsPosterModalOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 group cursor-pointer"
            >
              <img
                src={course.imageUrl || '/images/dns_course_infographic.jpg'}
                alt={`${course.category} Official Infographic Poster`}
                className="w-full h-auto object-contain max-h-[700px] mx-auto group-hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#E87500] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4" /> Click to Zoom Full Poster
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar: Admission Box & Official Poster */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg space-y-6 text-center">
            
            <div className="w-14 h-14 rounded-2xl bg-[#0F2C59] text-white flex items-center justify-center mx-auto shadow-md">
              <GraduationCap className="w-7 h-7 text-amber-400" />
            </div>

            <div>
              <h3 className="font-bold text-lg text-[#0F2C59] font-display">New Batch Enrollment Open</h3>
              <p className="text-xs text-slate-500 mt-1">Upcoming batch starting soon at Dehradun Academy</p>
            </div>

            {/* Embed Course-Specific Official Infographic Poster */}
            <div
              onClick={() => setIsPosterModalOpen(true)}
              className="rounded-xl overflow-hidden border border-slate-200 shadow-md cursor-pointer relative group"
            >
              <img
                src={course.imageUrl || '/images/dns_course_infographic.jpg'}
                alt={`${course.category} Official Poster & Career Path`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#0A1E3F] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow flex items-center gap-1">
                  <ZoomIn className="w-3 h-3 text-amber-400" /> View Poster
                </span>
              </div>
            </div>

            <div className="border-t border-b border-slate-100 py-3 space-y-2 text-xs text-slate-600 text-left">
              <div className="flex justify-between">
                <span>Target Exam:</span>
                <span className="font-bold text-[#0F2C59]">{course.targetExam}</span>
              </div>
              <div className="flex justify-between">
                <span>Batch Seats:</span>
                <span className="font-bold text-emerald-700">Limited (30 Seats)</span>
              </div>
              <div className="flex justify-between">
                <span>Helpline:</span>
                <span className="font-bold text-amber-600">9149081578</span>
              </div>
            </div>

            <button
              onClick={onOpenEnquire}
              className="w-full bg-[#E87500] hover:bg-[#F59E0B] text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Enquire For This Batch
            </button>

            <div className="pt-1">
              <a
                href="tel:+919149081578"
                className="text-xs font-semibold text-[#0F2C59] hover:text-[#E87500] flex items-center justify-center gap-1.5"
              >
                <span>Call Admissions: <strong>9149081578</strong></span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── Fullscreen High-Resolution Poster Lightbox Modal ── */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="absolute inset-0" onClick={() => setIsPosterModalOpen(false)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0A1E3F] border border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#E87500] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 bg-[#060F1E] border-b border-white/10 text-left">
                <h3 className="font-display text-lg font-bold text-white">
                  {course.category} — Official Infographic Poster
                </h3>
                <p className="text-xs text-amber-300">
                  Career Progression, Eligibility &amp; Selection Requirements
                </p>
              </div>

              <div className="relative bg-black flex-1 overflow-y-auto p-4">
                <img
                  src={course.imageUrl || '/images/dns_course_infographic.jpg'}
                  alt={`${course.category} Full High-Res Infographic Poster`}
                  className="w-full h-auto object-contain mx-auto rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
