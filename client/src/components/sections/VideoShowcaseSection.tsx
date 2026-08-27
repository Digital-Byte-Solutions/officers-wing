import React, { useState } from 'react';
import { Play, Video, Sparkles, Film } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  webmUrl?: string;
  mp4Url: string;
  description: string;
  badge: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'vid1',
    title: 'Cadet Maritime Training & Seamanship Drills',
    category: 'Practical Training',
    mp4Url: '/videos/vid1.mp4',
    description: 'Watch Officers Wing cadets undergoing hands-on seamanship drills, chart work, and navigation orientation in Dehradun.',
    badge: 'Practical Drills',
  },
  {
    id: 'vid2',
    title: 'Life at Sea: Commercial Cargo Ship Navigation',
    category: 'Life at Sea',
    mp4Url: '/videos/vid2.mp4',
    description: 'Real glimpses of life aboard modern international commercial container and tanker vessels navigated by alumni.',
    badge: 'Ocean Voyages',
  },
  {
    id: 'vid3',
    title: 'Academy Campus Life & Academic Mentorship (Dehradun)',
    category: 'Campus Life',
    mp4Url: '/videos/vid3.mp4',
    description: 'Insight into classroom mentoring, CBT mock test preparation, smart digital classes, and structured routine in Dehradun.',
    badge: 'Campus Tour',
  },
  {
    id: 'vid4',
    title: 'Sponsorship Interview & Cadet Mentorship Strategy',
    category: 'Selection Strategy',
    mp4Url: '/videos/vid4.mp4',
    description: 'Interview coaching and personal guidance that helps cadets secure sponsorship from top global shipping lines.',
    badge: '100% Mentorship',
  },
  {
    id: 'vid5',
    title: 'Classroom Lecture & Problem Solving Session',
    category: 'Classroom Coaching',
    mp4Url: '/videos/vid5.mp4',
    description: 'In-depth interactive classroom session covering high-speed IMU-CET Physics, Maths, and Navigation concepts.',
    badge: 'Smart Lecture',
  },
  {
    id: 'vid6',
    title: 'Cadet Discipline, Morning PT & Fitness Conditioning',
    category: 'Physical Training',
    mp4Url: '/videos/vid6.mp4',
    description: 'Daily physical training, parade drills, stamina conditioning, and maritime discipline routine at Officers Wing Dehradun.',
    badge: 'Fitness & Routine',
  },
  {
    id: 'vid7',
    title: 'Student Success Stories: Classroom to Ship Placements',
    category: 'Alumni Testimonial',
    mp4Url: '/videos/vid7.mp4',
    description: 'Officers Wing cadets sharing their journey of clearing IMU-CET and getting sponsored in world-class shipping companies.',
    badge: 'Placement Story',
  },
  {
    id: 'vid8',
    title: 'Maritime Seamanship Lab & Practical Workshop',
    category: 'Practical Training',
    mp4Url: '/videos/vid8.mp4',
    description: 'Hands-on practical equipment handling, safety apparatus inspection, marine knots, and survival drills.',
    badge: 'Hands-On Lab',
  },
  {
    id: 'vid9',
    title: 'Psychometric Test Drills & Personal Interview Mentoring',
    category: 'Interview Coaching',
    mp4Url: '/videos/vid9.mp4',
    description: 'Detailed guidance for Synergy, Anglo-Eastern, Fleet Management, and Great Eastern sponsorship selection rounds.',
    badge: 'Panel Coaching',
  },
  {
    id: 'vid10',
    title: 'Dehradun Campus Tour: Hostels, Mess & Facilities',
    category: 'Campus Tour',
    mp4Url: '/videos/vid10.mp4',
    description: 'Comprehensive tour of on-campus student accommodation, hygienic mess food, study library, and cadet environment.',
    badge: 'Campus Facilities',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);

  return (
    <section id="videos-section" className="w-full bg-[#060F1E] py-16 sm:py-24 text-white relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,117,0,0.25) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="section-label section-label-dark">
            <Video className="w-3.5 h-3.5 text-[#E87500]" /> Campus Tour &amp; Maritime Training
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
            Campus Tour &amp; Academy Showcase
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Take a virtual tour of Officers Wing Dehradun — experience hands-on maritime seamanship training, smart classrooms, cadet lifestyle, and real ship operations.
          </p>
        </div>

        {/* Featured Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Featured Video Player */}
          <div className="lg:col-span-7 bg-[#0A1E3F]/80 rounded-3xl overflow-hidden border border-white/15 shadow-2xl p-4 sm:p-5 flex flex-col gap-4">
            <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video shadow-inner">
              <video
                key={activeVideo.id}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                {activeVideo.webmUrl && <source src={activeVideo.webmUrl} type="video/webm" />}
                <source src={activeVideo.mp4Url} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            <div className="space-y-2 text-left pt-2 px-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2.5 py-0.5 rounded-full">
                  {activeVideo.category}
                </span>
                <span className="text-[10px] font-semibold text-slate-400">
                  {activeVideo.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {activeVideo.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Playlist / Video Selector Grid with Smooth Scroll */}
          <div className="lg:col-span-5 space-y-3 text-left">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8922A] flex items-center gap-1.5">
                <Film className="w-4 h-4 text-[#E87500]" /> Academy Video Playlist
              </span>
              <span className="text-[11px] text-slate-400 font-medium">{VIDEOS.length} Videos</span>
            </div>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1">
              {VIDEOS.map((item, idx) => {
                const isActive = activeVideo.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0A1E3F] to-[#0F2C59] border-[#E87500] shadow-lg scale-[1.01]'
                        : 'bg-white/05 border-white/10 hover:bg-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    {/* Video mini thumbnail preview */}
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-white/20 flex items-center justify-center group">
                      <video
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-70 pointer-events-none"
                      >
                        <source src={item.mp4Url} type="video/mp4" />
                      </video>
                      <div className={`absolute inset-0 flex items-center justify-center transition-transform ${isActive ? 'scale-110' : ''}`}>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${isActive ? 'bg-[#E87500] text-white' : 'bg-white/40 text-white backdrop-blur-sm'}`}>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 text-[8px] font-bold text-white bg-black/75 px-1.5 py-0.5 rounded">
                        #{idx + 1}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isActive ? 'bg-amber-400 text-slate-950' : 'bg-white/10 text-amber-300'
                        }`}>
                          {item.badge}
                        </span>
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold truncate leading-snug ${
                        isActive ? 'text-white font-extrabold' : 'text-slate-200'
                      }`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Assurance Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white/05 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Visit Our Dehradun Campus for a Live Demo</div>
              <div className="text-xs text-slate-400">Attend a free mock class and maritime simulator orientation session.</div>
            </div>
          </div>
          <a
            href="tel:+919149081578"
            className="bg-[#E87500] hover:bg-[#F09030] text-white text-xs font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            Call Helpline: 9149081578
          </a>
        </div>

      </div>
    </section>
  );
};
