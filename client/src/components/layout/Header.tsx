import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Anchor, Menu, X, Phone, Globe, Share2, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenEnquire?: () => void;
}

// Rotating urgency messages for ticker strip
const TICKER_MESSAGES = [
  '🚨 ADMISSIONS OPEN: August 2026 Batch — Only 6 Seats Remaining for DNS. Reserve Now!',
  '⚓ IMU-CET 2027 Early Batch Starting Sep 5 — Limited Seats | Call: +91 95573 81578',
  '🎖️ 970+ Cadets Selected. 95%+ IMU-CET Success Rate. Join Officers Wing Today!',
  '📋 GP Rating & GME Batch Open — 40% Seats Filled. Enrol Before Aug 30!',
];

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire }) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastHero(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate urgency ticker every 4 seconds
  useEffect(() => {
    const t = setInterval(() => setTickerIdx((i) => (i + 1) % TICKER_MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Results', path: '/results' },
    { name: 'Admission', path: '/admission' },
    { name: 'Tools', path: '/tools' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];


  return (
    <motion.header
      initial={{ y: -60, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      {/* ── Urgency Ticker Strip (always visible, never scrolled away) ── */}
      {!isMobileMenuOpen && (
        <div className="bg-[#E87500] text-white text-[10px] sm:text-xs py-1.5 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            {/* Rotating ticker message */}
            <div className="flex-1 overflow-hidden">
              <motion.div
                key={tickerIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-bold truncate"
              >
                {TICKER_MESSAGES[tickerIdx]}
              </motion.div>
            </div>
            <button
              onClick={onOpenEnquire}
              className="shrink-0 flex items-center gap-1 bg-white text-[#E87500] font-black text-[10px] px-2.5 py-0.5 rounded-full cursor-pointer hover:bg-amber-50 transition-colors whitespace-nowrap"
            >
              Reserve Seat <ChevronRight className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}

      {/* ── Top Contact Bar (only when over hero) ── */}
      {!isScrolledPastHero && !isMobileMenuOpen && (
        <div className="bg-[#0F2C59] text-white text-xs py-1.5 px-3 sm:px-8 border-b border-blue-900/60">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden sm:flex items-center space-x-5">
              <span className="flex items-center gap-1.5 opacity-90">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" /> +91 95573 81578
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-amber-300 mx-auto sm:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>DG Shipping Approved Guidance Academy</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4 ml-auto">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors"><Globe className="w-3.5 h-3.5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors"><Share2 className="w-3.5 h-3.5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors"><MessageCircle className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Navbar ── */}
      <div className={`transition-all duration-500 ${isScrolledPastHero ? 'px-3 sm:px-4 pt-2' : 'w-full'}`}>
        <nav
          className={`transition-all duration-300 ${
            isScrolledPastHero
              ? `${
                  isMobileMenuOpen
                    ? 'rounded-2xl bg-[#060F1E] border border-[#E87500]/50 shadow-2xl py-3 px-4 sm:px-6'
                    : 'rounded-full bg-[#0F2C59]/95 backdrop-blur-xl border border-[#E87500]/40 shadow-2xl py-2 px-4 sm:px-6'
                } text-white max-w-5xl mx-auto`
              : `${
                  isMobileMenuOpen
                    ? 'bg-[#060F1E] text-white shadow-2xl py-3 sm:py-3.5 px-4 sm:px-8 border-b border-blue-900/60'
                    : 'bg-white text-slate-800 py-3 sm:py-3.5 border-b border-slate-100'
                }`
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-1 sm:px-0">
            {/* Logo */}
            <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
              <div className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 shadow-md border border-amber-400/30 ${isScrolledPastHero || isMobileMenuOpen ? 'bg-[#E87500] text-white group-hover:scale-105' : 'bg-[#0F2C59] text-white group-hover:bg-[#E87500]'}`}>
                <img src="/logo.png" alt="Officers Wing Logo" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <Anchor className="w-4 h-4 text-white hidden" />
              </div>
              <div className="flex flex-col text-left">
                <span className={`text-base sm:text-lg font-extrabold tracking-tight font-serif-heading leading-tight transition-colors ${isScrolledPastHero || isMobileMenuOpen ? 'text-white group-hover:text-amber-300' : 'text-[#0F2C59] group-hover:text-[#E87500]'}`}>
                  Officers Wing
                </span>
                <span className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-bold ${isScrolledPastHero || isMobileMenuOpen ? 'text-slate-300' : 'text-slate-500'}`}>
                  Merchant Navy Coaching
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center p-1 rounded-full border transition-all duration-300 ${isScrolledPastHero ? 'bg-blue-950/60 border-blue-800/60' : 'bg-slate-50 border-slate-200/80 shadow-inner'}`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => { if (link.path === '/') handleHomeClick(e); }}
                    className={`relative px-3.5 py-1.5 text-xs font-bold transition-colors duration-200 z-10 ${
                      isActive ? 'text-[#0F2C59]' : isScrolledPastHero ? 'text-slate-200 hover:text-amber-300' : 'text-slate-600 hover:text-[#0F2C59]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={`absolute inset-0 rounded-full shadow-sm -z-10 ${isScrolledPastHero ? 'bg-amber-400' : 'bg-white border border-slate-200/60'}`}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onOpenEnquire}
                className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer ${isScrolledPastHero || isMobileMenuOpen ? 'bg-[#E87500] hover:bg-amber-400 text-white' : 'bg-[#0F2C59] hover:bg-[#E87500] text-white'}`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                Enquire Now
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolledPastHero || isMobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-[#0F2C59] hover:bg-slate-100'}`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden mt-3 pt-3 border-t border-slate-700/40 space-y-2 max-h-[70vh] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => { setIsMobileMenuOpen(false); if (link.path === '/') handleHomeClick(e); }}
                  className="block text-xs sm:text-sm font-bold py-2 px-2 rounded-lg hover:bg-white/10 text-slate-100 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => { setIsMobileMenuOpen(false); if (onOpenEnquire) onOpenEnquire(); }}
                  className="w-full bg-[#E87500] hover:bg-amber-500 text-white text-xs font-bold py-3 rounded-xl shadow-lg cursor-pointer transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </nav>
      </div>
    </motion.header>
  );
};
