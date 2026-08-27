import React, { useState, useEffect, useRef } from 'react';
import { Camera, Film, Eye, Play, Sparkles, ChevronLeft, ChevronRight, X, Phone, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { Footer } from '../components/layout/Footer';

interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Classrooms' | 'Labs & Simulators' | 'Hostel & Mess' | 'Physical Training' | 'Cadet Batches';
  imageUrl: string;
  description: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'p0',
    title: 'IMU-CET & Merchant Navy Preparation Classroom Batch',
    category: 'Classrooms',
    imageUrl: '/images/officers_wing_classroom_batch.jpg',
    description: 'Cadets attending interactive morning lectures, theory discussions, and sponsorship preparation in our modern Dehradun classroom.'
  },
  {
    id: 'p0_narcotics',
    title: 'Narcotics Dept Drug-Free Awareness Session at Officers Wing',
    category: 'Cadet Batches',
    imageUrl: '/images/narcotics_awareness_session.jpg',
    description: 'Special youth orientation and leadership seminar conducted by the Narcotics Department for our maritime cadet batches in Dehradun.'
  },
  {
    id: 'p1',
    title: 'IMU-CET 2027 & Sponsorship Induction Batch',
    category: 'Cadet Batches',
    imageUrl: '/images/imu_cet_batch_classroom.jpg',
    description: 'Cadets assembled in uniform for the morning induction lecture and comprehensive syllabus orientation at Officers Wing Dehradun.'
  },
  {
    id: 'p_dns_info',
    title: 'DNS Course & Career Progression (Cadet to Captain)',
    category: 'Labs & Simulators',
    imageUrl: '/images/dns_course_infographic.jpg',
    description: 'Complete eligibility, syllabus, physical standards, and sea promotion roadmap for Diploma in Nautical Science.'
  },
  {
    id: 'p_bsc_info',
    title: 'B.Sc Nautical Science Degree Career Progression Chart',
    category: 'Labs & Simulators',
    imageUrl: '/images/bsc_nautical_science_infographic.jpg',
    description: '3-Year DG Shipping approved degree roadmap from Deck Cadet to 3rd Officer and Master Mariner.'
  },
  {
    id: 'p2',
    title: 'Interactive Smart Board & CBT Test Preparation',
    category: 'Classrooms',
    imageUrl: '/images/smart_classroom_lecture.jpg',
    description: 'Digital smart board lectures covering high-weightage Physics, Mathematics, and Aptitude problem-solving.'
  },
  {
    id: 'p3',
    title: 'Mindfulness, Focus & Meditation Routine',
    category: 'Physical Training',
    imageUrl: '/images/meditation_before_class.jpg',
    description: 'Mental conditioning and focus enhancement exercises conducted daily to develop calm decision-making for maritime operations.'
  },
  {
    id: 'p4',
    title: 'Maritime Navigation & Technical Mentorship',
    category: 'Classrooms',
    imageUrl: '/images/interactive_classroom_session.jpg',
    description: 'Faculty-led interactive lectures covering merchant vessel navigation, collision regulations, and shipping company interview strategies.'
  },
  {
    id: 'p5',
    title: 'Specialized English & Soft Skills Cubicle',
    category: 'Labs & Simulators',
    imageUrl: '/images/english_cubicle_smart_class.jpg',
    description: '1-on-1 English fluency grooming, accent training, and mock interview drills conducted in modern multimedia cubicles.'
  },
  {
    id: 'p6',
    title: 'GP Rating Career Progression: Trainee Seaman to Captain',
    category: 'Labs & Simulators',
    imageUrl: '/images/gp_rating_course_infographic.jpg',
    description: 'Complete 8-step merchant navy career roadmap from Trainee Seaman to Master Captain after 10th standard.'
  },
  {
    id: 'p_gme_info',
    title: 'GME (Graduate Marine Engineering) Career Roadmap',
    category: 'Labs & Simulators',
    imageUrl: '/images/gme_course_infographic.jpg',
    description: 'B.E/B.Tech Mechanical Engineering conversion program to Marine Engineer officer with rank & salary chart.'
  },
  {
    id: 'p_eto_info',
    title: 'ETO (Electro-Technical Officer) Career & Salary Growth',
    category: 'Labs & Simulators',
    imageUrl: '/images/eto_course_infographic.jpg',
    description: 'Electrical & electronics specialist training for high-tech automated commercial marine vessels.'
  },
  {
    id: 'p_psych_info',
    title: 'Psychology Classes with Mr. Yogesh Dobhal',
    category: 'Classrooms',
    imageUrl: '/images/psychology_classes_infographic.jpg',
    description: 'Mental conditioning, emotional balance, stress management, and psychometric interview preparation.'
  },
  {
    id: 'p7',
    title: 'Faculty Mentorship & Career Guidance Cell',
    category: 'Labs & Simulators',
    imageUrl: '/images/faculty_mentor.jpg',
    description: 'Master Mariners and senior engineers guiding cadets through company psychometric tests and medical pre-checks.'
  },
  {
    id: 'p8',
    title: 'Academic Administration & Admissions Office',
    category: 'Hostel & Mess',
    imageUrl: '/images/faculty_office.jpg',
    description: 'Dedicated admissions counseling desk and student support facilities at Sahastradhara Road campus.'
  },
  {
    id: 'p9',
    title: 'Early Foundation Grooming Program (Class 10+)',
    category: 'Cadet Batches',
    imageUrl: '/images/foundation_course_poster.jpg',
    description: 'Long-term preparatory batch targeting top 100 All India Ranks in IMU-CET and guaranteed sponsorship.'
  }
];

interface VideoStory {
  id: string;
  title: string;
  category: string;
  webmUrl?: string;
  mp4Url: string;
  duration: string;
  badge: string;
  description: string;
  cadetName?: string;
  company?: string;
}

const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'vid1',
    title: 'Cadet Maritime Training & Seamanship Drills',
    category: 'Practical Training',
    mp4Url: '/videos/vid1.mp4',
    duration: '2:10',
    badge: 'Seamanship Drills',
    description: 'Watch Officers Wing cadets undergoing hands-on chart work, rope knots, navigation orientation, and bridge team simulation in Dehradun.',
    cadetName: 'Deck & Engine Cadets',
    company: 'Practical Seamanship'
  },
  {
    id: 'vid2',
    title: 'Life at Sea: Commercial Cargo Ship Operations',
    category: 'Life at Sea',
    mp4Url: '/videos/vid2.mp4',
    duration: '3:15',
    badge: 'Ocean Voyages',
    description: 'Real onboard footage of life on international container ships and crude oil tankers navigated by Officers Wing alumni seafarers.',
    cadetName: 'Alumni Cadets',
    company: 'International Cargo Fleet'
  },
  {
    id: 'vid3',
    title: 'Academy Campus Life & Academic Mentorship (Dehradun)',
    category: 'Campus Life',
    mp4Url: '/videos/vid3.mp4',
    duration: '2:40',
    badge: 'Campus Tour',
    description: 'Insight into classroom mentoring, CBT mock test preparation, smart digital classes, and structured routine in Dehradun.',
    cadetName: 'Officers Wing Dehradun',
    company: 'Full Campus Tour'
  },
  {
    id: 'vid4',
    title: 'Sponsorship Interview Mastery & Panel Preparation',
    category: 'Selection Strategy',
    mp4Url: '/videos/vid4.mp4',
    duration: '2:30',
    badge: '100% Mentorship',
    description: 'Master Mariner led mock interviews, psychometric test drills, and grooming sessions that secure top shipping line sponsorships.',
    cadetName: 'Sponsored Cadets',
    company: 'Synergy / Fleet / Anglo'
  },
  {
    id: 'vid5',
    title: 'Classroom Lecture & Problem Solving Session',
    category: 'Classroom Coaching',
    mp4Url: '/videos/vid5.mp4',
    duration: '2:50',
    badge: 'Smart Lecture',
    description: 'In-depth interactive classroom session covering high-speed IMU-CET Physics, Maths, and Navigation concepts.',
    cadetName: 'Academy Faculty & Cadets',
    company: 'IMU-CET Batch'
  },
  {
    id: 'vid6',
    title: 'Cadet Discipline, Morning PT & Fitness Conditioning',
    category: 'Physical Training',
    mp4Url: '/videos/vid6.mp4',
    duration: '1:55',
    badge: 'Fitness & Routine',
    description: 'Daily physical training, parade drills, stamina conditioning, and maritime discipline routine at Officers Wing Dehradun.',
    cadetName: 'All Cadet Batches',
    company: 'Physical Fitness'
  },
  {
    id: 'vid7',
    title: 'Student Success Stories: Classroom to Ship Placements',
    category: 'Alumni Testimonial',
    mp4Url: '/videos/vid7.mp4',
    duration: '2:20',
    badge: 'Placement Story',
    description: 'Officers Wing cadets sharing their journey of clearing IMU-CET and getting sponsored in world-class shipping companies.',
    cadetName: 'Placed Seafarers',
    company: 'Top Shipping Lines'
  },
  {
    id: 'vid8',
    title: 'Maritime Seamanship Lab & Practical Workshop',
    category: 'Practical Training',
    mp4Url: '/videos/vid8.mp4',
    duration: '2:35',
    badge: 'Hands-On Lab',
    description: 'Hands-on practical equipment handling, safety apparatus inspection, marine knots, and survival drills.',
    cadetName: 'Seamanship Instructors',
    company: 'Workshop Drills'
  },
  {
    id: 'vid9',
    title: 'Psychometric Test Drills & Personal Interview Mentoring',
    category: 'Interview Coaching',
    mp4Url: '/videos/vid9.mp4',
    duration: '3:05',
    badge: 'Panel Coaching',
    description: 'Detailed guidance for Synergy, Anglo-Eastern, Fleet Management, and Great Eastern sponsorship selection rounds.',
    cadetName: 'Interview Panel Faculty',
    company: 'Sponsorship Prep'
  },
  {
    id: 'vid10',
    title: 'Dehradun Campus Tour: Hostels, Mess & Facilities',
    category: 'Campus Tour',
    mp4Url: '/videos/vid10.mp4',
    duration: '3:45',
    badge: 'Campus Facilities',
    description: 'Comprehensive tour of on-campus student accommodation, hygienic mess food, study library, and cadet environment.',
    cadetName: 'Residential Wardens & Staff',
    company: 'Campus Life'
  },
];

const PHOTO_CATEGORIES = [
  'All Photos',
  'Classrooms',
  'Labs & Simulators',
  'Physical Training',
  'Cadet Batches',
  'Hostel & Mess'
];

interface GalleryPageProps {
  onOpenEnquire?: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenEnquire }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedCategory, setSelectedCategory] = useState('All Photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoStory>(VIDEO_STORIES[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);

  // Pause video and stop audio when switching away from video tab or unmounting component
  useEffect(() => {
    if (activeTab !== 'videos') {
      if (mainVideoRef.current) {
        mainVideoRef.current.pause();
      }
      setIsVideoPlaying(false);
    }
    return () => {
      if (mainVideoRef.current) {
        mainVideoRef.current.pause();
      }
    };
  }, [activeTab]);

  const handleSelectPlaylistVideo = (video: VideoStory) => {
    setActiveVideo(video);
    setIsVideoPlaying(true);
  };

  const handleManualPlay = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  };

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    if (selectedCategory === 'All Photos') return true;
    return photo.category === selectedCategory;
  });

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#060F1E] text-slate-100 flex flex-col">
      <SEO
        title="Campus Life & Video Tour | Officers Wing Academy Dehradun"
        description="Explore photos and video tours of Officers Wing Academy Dehradun: smart classrooms, maritime simulator training, cadet hostels, physical conditioning, and student testimonials."
        keywords="officers wing campus gallery, merchant navy coaching campus tour dehradun, imu cet classroom photos, cadet life dehradun, maritime training photos"
        canonicalUrl="https://officerswing.com/gallery"
      />

      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#060F1E] text-white pt-36 pb-20 px-4 sm:px-8 overflow-hidden border-b border-amber-500/20">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 20%, rgba(200,146,42,0.3) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-[#E87500]" />
            <span>Campus Infrastructure &amp; Life at Sea</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Academy Gallery &amp; <span className="text-gradient-hero">Video Stories</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Step inside Dehradun's premier Merchant Navy academy. Experience real campus life, smart classrooms, maritime drills, and cadet journeys from classroom to cargo ship.
          </p>

          {/* Main Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0A1E3F] border border-white/15 shadow-xl mt-6">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-[#E87500] to-[#F09030] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Campus Photo Gallery ({GALLERY_PHOTOS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-[#E87500] to-[#F09030] text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Video Tours &amp; Stories ({VIDEO_STORIES.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Content Section ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        
        {activeTab === 'photos' ? (
          /* ═══════════ PHOTO GALLERY TAB ═══════════ */
          <div className="space-y-8">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
              {PHOTO_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-black shadow-lg shadow-amber-400/20 scale-105'
                        : 'bg-white/05 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  layout
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-3xl overflow-hidden border border-white/15 bg-[#0A1E3F]/80 cursor-pointer hover:border-amber-400/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-black/50">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-transparent to-transparent opacity-75" />

                    {/* Category Pill */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-[#060F1E]/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30">
                        {photo.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/45 backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-[#E87500] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* ═══════════ VIDEO STORIES TAB ═══════════ */
          <div className="space-y-12">
            {/* Featured Video Player */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Active Player */}
              <div className="lg:col-span-8 bg-[#0A1E3F] rounded-3xl overflow-hidden border border-amber-500/30 p-4 sm:p-6 shadow-2xl space-y-4">
                <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video shadow-2xl group">
                  <video
                    ref={mainVideoRef}
                    key={activeVideo.id}
                    controls
                    autoPlay={isVideoPlaying}
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    className="w-full h-full object-cover"
                  >
                    {activeVideo.webmUrl && <source src={activeVideo.webmUrl} type="video/webm" />}
                    <source src={activeVideo.mp4Url} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Play Button Overlay (when video is not playing) */}
                  {!isVideoPlaying && (
                    <div
                      onClick={handleManualPlay}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group/overlay transition-all"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E87500] hover:bg-[#F09030] text-white flex items-center justify-center shadow-2xl group-hover/overlay:scale-110 transition-transform">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                      </div>
                      <span className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-black/60 px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                        Click to Play Video
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-left pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/20 border border-amber-400/40 px-3 py-0.5 rounded-full">
                      {activeVideo.category}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {activeVideo.badge} • {activeVideo.duration}
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-black text-white">
                    {activeVideo.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeVideo.description}
                  </p>
                </div>
              </div>

              {/* Playlist Grid */}
              <div className="lg:col-span-4 space-y-3 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-[#E87500]" /> Video Playlist
                  </span>
                  <span className="text-xs text-slate-400">{VIDEO_STORIES.length} Videos</span>
                </div>

                <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
                  {VIDEO_STORIES.map((v, idx) => {
                    const isSelected = activeVideo.id === v.id;
                    return (
                      <div
                        key={v.id}
                        onClick={() => handleSelectPlaylistVideo(v)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#0F2C59] to-[#0A1E3F] border-[#E87500] shadow-lg ring-1 ring-orange-500/40 scale-[1.02]'
                            : 'bg-white/05 border-white/10 hover:bg-white/10 hover:border-amber-400/40'
                        }`}
                      >
                        {/* Mini video thumb */}
                        <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-white/15 flex items-center justify-center">
                          <video
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-60 pointer-events-none"
                          >
                            <source src={v.webmUrl} type="video/webm" />
                            <source src={v.mp4Url} type="video/mp4" />
                          </video>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${isSelected && isVideoPlaying ? 'bg-[#E87500] text-white' : 'bg-white/50 text-white'}`}>
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="text-[9px] font-bold text-amber-300 block uppercase tracking-wider">
                            #{idx + 1} {v.badge}
                          </span>
                          <h4 className="text-xs font-bold text-white truncate mt-0.5">
                            {v.title}
                          </h4>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {v.duration} duration
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── Schedule Campus Tour Banner ── */}
        <div className="mt-16 bg-gradient-to-r from-[#0A1E3F] via-[#0F2C59] to-[#0A1E3F] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
              <Compass className="w-3.5 h-3.5" />
              <span>Dehradun Campus Tour</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              Experience the Officers Wing Discipline in Person
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Parents and students are welcome to visit our Dehradun academy, attend a demo class, meet Master Mariner mentors, and inspect hostel facilities before taking admission.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+919557381578"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline</span>
            </a>

            {onOpenEnquire && (
              <button
                onClick={onOpenEnquire}
                className="btn-glow-orange flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Book Free Campus Visit</span>
              </button>
            )}
          </div>
        </div>

      </section>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            {/* Backdrop click dismiss */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0A1E3F] border border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-[#E87500] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Nav Buttons */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Display */}
              <div className="relative bg-black flex items-center justify-center min-h-[320px] max-h-[65vh]">
                <img
                  src={filteredPhotos[lightboxIndex].imageUrl}
                  alt={filteredPhotos[lightboxIndex].title}
                  className="w-full max-h-[65vh] object-contain mx-auto"
                />
              </div>

              {/* Info Bar */}
              <div className="p-6 text-left space-y-2 border-t border-white/10 bg-[#060F1E]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
                    {filteredPhotos[lightboxIndex].category}
                  </span>
                  <span className="text-xs text-slate-400">
                    Image {lightboxIndex + 1} of {filteredPhotos.length}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  {filteredPhotos[lightboxIndex].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {filteredPhotos[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};
