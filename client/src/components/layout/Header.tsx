import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Anchor, Menu, X, Phone, Mail, Globe, Share2, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onOpenEnquire?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire }) => {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Detect when scrolled past Hero section (approx window height - 100px)
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      {/* Top Bar (Only visible when over Hero and mobile menu is closed) */}
      {!isScrolledPastHero && !isMobileMenuOpen && (
        <div className="bg-[#0F2C59] text-white text-xs py-1.5 px-3 sm:px-8 border-b border-navy-dark transition-all duration-300">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden sm:flex items-center space-x-6">
              <span className="flex items-center gap-1.5 opacity-90">
                <Phone className="w-3.5 h-3.5 text-[#F59E0B]" /> +91 98765 43210
              </span>
              <span className="flex items-center gap-1.5 opacity-90">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B]" /> admissions@officerswing.com
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-amber-300 mx-auto sm:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>DG Shipping Approved Guidance Academy</span>
            </div>

            <div className="hidden sm:flex items-center space-x-4 ml-auto">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors" title="Facebook">
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors" title="Twitter">
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors" title="Instagram">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar: Dynamic Morphing when scrolled past Hero */}
      <div className={`transition-all duration-500 ${isScrolledPastHero ? 'px-3 sm:px-4 pt-2' : 'w-full'}`}>
        <nav
          className={`transition-all duration-300 ${
            isScrolledPastHero
              ? `${
                  isMobileMenuOpen ? 'rounded-2xl bg-[#060F1E] border border-[#E87500]/50 shadow-2xl py-3 px-4 sm:px-6' : 'rounded-full bg-[#0F2C59]/95 backdrop-blur-xl border border-[#E87500]/40 shadow-2xl py-2 px-4 sm:px-6'
                } text-white max-w-5xl mx-auto`
              : `${
                  isMobileMenuOpen ? 'bg-[#060F1E] text-white shadow-2xl py-3 sm:py-3.5 px-4 sm:px-8 border-b border-blue-900/60' : 'bg-white text-slate-800 py-3 sm:py-3.5 border-b border-slate-100'
                }`
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-1 sm:px-0">
            {/* Logo Left */}
            <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
              <div
                className={`w-8 sm:w-9 h-8 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md ${
                  isScrolledPastHero || isMobileMenuOpen
                    ? 'bg-[#E87500] text-white group-hover:scale-105'
                    : 'bg-[#0F2C59] text-white group-hover:bg-[#E87500]'
                }`}
              >
                <Anchor className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className={`text-base sm:text-lg font-extrabold tracking-tight font-serif-heading leading-tight transition-colors ${
                    isScrolledPastHero || isMobileMenuOpen ? 'text-white group-hover:text-amber-300' : 'text-[#0F2C59] group-hover:text-[#E87500]'
                  }`}
                >
                  Officers Wing
                </span>
                <span
                  className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-bold ${
                    isScrolledPastHero || isMobileMenuOpen ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  Merchant Navy Coaching
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links with Sliding Active Indicator */}
            <div
              className={`hidden md:flex items-center p-1 rounded-full border transition-all duration-300 ${
                isScrolledPastHero
                  ? 'bg-blue-950/60 border-blue-800/60'
                  : 'bg-slate-50 border-slate-200/80 shadow-inner'
              }`}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      if (link.path === '/') handleHomeClick(e);
                    }}
                    className={`relative px-3.5 py-1.5 text-xs font-bold transition-colors duration-200 z-10 ${
                      isActive
                        ? isScrolledPastHero
                          ? 'text-[#0F2C59]'
                          : 'text-[#0F2C59]'
                        : isScrolledPastHero
                        ? 'text-slate-200 hover:text-amber-300'
                        : 'text-slate-600 hover:text-[#0F2C59]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={`absolute inset-0 rounded-full shadow-sm -z-10 ${
                          isScrolledPastHero ? 'bg-amber-400' : 'bg-white border border-slate-200/60'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button Right */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onOpenEnquire}
                className={`text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer ${
                  isScrolledPastHero || isMobileMenuOpen
                    ? 'bg-[#E87500] hover:bg-amber-400 hover:text-slate-950 text-white'
                    : 'bg-[#0F2C59] hover:bg-[#E87500] text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolledPastHero || isMobileMenuOpen
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#0F2C59] hover:bg-slate-100'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Seamless Mobile Drawer — Enclosed within unified card container when open */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden mt-3 pt-3 border-t border-slate-700/40 space-y-2 max-h-[70vh] overflow-y-auto"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link.path === '/') handleHomeClick(e);
                  }}
                  className="block text-xs sm:text-sm font-bold py-2 px-2 rounded-lg hover:bg-white/10 text-slate-100 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenEnquire) onOpenEnquire();
                  }}
                  className="w-full bg-[#E87500] hover:bg-amber-500 text-white text-center text-xs font-bold py-3 rounded-xl shadow-lg cursor-pointer transition-colors"
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
