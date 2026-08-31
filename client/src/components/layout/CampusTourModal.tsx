import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Film, Play, ArrowRight, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TourVideo {
  id: string;
  title: string;
  category: string;
  webmUrl: string;
  mp4Url: string;
  badge: string;
}

const TOUR_VIDEOS: TourVideo[] = [
  {
    id: 'v3',
    title: 'Academy Campus Life & Classroom Coaching (Dehradun)',
    category: 'Campus Life',
    webmUrl: '/videos/v3.webm',
    mp4Url: '/videos/v3.mp4',
    badge: 'Campus Tour',
  },
  {
    id: 'v1',
    title: 'Cadet Maritime Training & Practical Seamanship Drills',
    category: 'Practical Training',
    webmUrl: '/videos/v1.webm',
    mp4Url: '/videos/v1.mp4',
    badge: 'Practical Drills',
  },
  {
    id: 'v2',
    title: 'Life at Sea & International Merchant Ship Voyages',
    category: 'Life at Sea',
    webmUrl: '/videos/v2.webm',
    mp4Url: '/videos/v2.mp4',
    badge: 'Ocean Voyages',
  },
  {
    id: 'v4',
    title: 'Sponsorship Interview & Cadet Mentorship',
    category: 'Selection Strategy',
    webmUrl: '/videos/v4.webm',
    mp4Url: '/videos/v4.mp4',
    badge: '100% Mentorship',
  },
];

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire?: () => void;
  onExploreMore?: () => void;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({
  isOpen,
  onClose,
  onOpenEnquire,
  onExploreMore,
}) => {
  const [activeVideo, setActiveVideo] = useState<TourVideo>(TOUR_VIDEOS[0]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lock scroll and auto-play when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = 'unset';
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, activeVideo]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-4xl bg-[#0A1E3F] border border-amber-400/40 rounded-3xl overflow-hidden shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#060F1E] border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display flex flex-wrap items-center gap-2">
                    <span className="truncate max-w-[220px] sm:max-w-md">{activeVideo.title}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded-full">
                      {activeVideo.badge}
                    </span>
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E87500] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative w-full bg-black aspect-video flex items-center justify-center overflow-hidden">
              <video
                key={activeVideo.id}
                ref={videoRef}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source src={activeVideo.webmUrl} type="video/webm" />
                <source src={activeVideo.mp4Url} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>

            {/* Video Playlist Quick-Switch Selector */}
            <div className="px-3 sm:px-5 py-2.5 bg-[#060E1A] border-t border-white/10 overflow-x-auto flex items-center gap-2 scrollbar-thin">
              <span className="text-[10px] uppercase font-bold text-[#C8922A] shrink-0 mr-1 flex items-center gap-1">
                <Film className="w-3 h-3 text-[#E87500]" /> Select Video:
              </span>
              {TOUR_VIDEOS.map((v) => {
                const isSelected = activeVideo.id === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveVideo(v)}
                    className={`shrink-0 px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#E87500] text-white shadow-md'
                        : 'bg-white/05 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    <Play className={`w-2.5 h-2.5 ${isSelected ? 'fill-current' : 'text-[#D4A840]'}`} />
                    <span>{v.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions Bar */}
            <div className="p-4 sm:p-5 bg-[#060F1E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="space-y-0.5">
                <div className="text-xs sm:text-sm font-bold text-white">
                  Officers Wing Academy — Dehradun Campus
                </div>
                <div className="text-[11px] text-slate-400">
                  DG Shipping Approved Guidance for DNS, GME, GP Rating &amp; IMU-CET.
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                {onExploreMore && (
                  <button
                    onClick={() => {
                      onClose();
                      onExploreMore();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5 text-amber-400" />
                    <span>More Videos</span>
                    <ArrowRight className="w-3 h-3 text-slate-400" />
                  </button>
                )}

                {onOpenEnquire && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquire();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#E87500] hover:bg-[#F09030] text-xs font-extrabold text-white shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                    <span>Enquire Now</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
