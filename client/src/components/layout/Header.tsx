import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Sparkles, ChevronRight, Globe, Share2, MessageSquare } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenEnquire?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* ── Topmost Orange Admission Alert Ticker ── */}
        {!isScrolled && (
          <div className="bg-[#E87500] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
              <div className="flex items-center gap-2 font-bold tracking-wide text-xs">
                <span>🎉</span>
                <span>ADMISSIONS OPEN: August 2026 Batch — Only 6 Seats Remaining for DNS. Reserve Now!</span>
              </div>
              <button
                onClick={onOpenEnquire}
                className="hidden sm:inline-flex items-center gap-1 px-3.5 py-0.5 rounded-full bg-white text-[#E87500] hover:text-[#C86000] text-[11px] font-extrabold hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
              >
                <span>Reserve Seat</span>
                <ChevronRight className="w-3 h-3 text-[#E87500]" />
              </button>
            </div>
          </div>
        )}

        {/* ── Sub-header Navy Info Bar (Desktop) ── */}
        {!isScrolled && (
          <div className="hidden lg:block bg-[#0A1E3F] text-white text-xs py-1.5 px-8 border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <a href="tel:+919557381578" className="flex items-center gap-1.5 text-white/90 hover:text-amber-400 transition-colors font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#E87500]" /> +91 95573 81578
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span className="text-amber-300 font-semibold text-xs">
                  DG Shipping Approved Guidance Academy
                </span>
              </div>

              <div className="flex items-center space-x-4 text-white/80">
                <a
                  href="/admission"
                  className="hover:text-amber-300 transition-colors p-1"
                  title="Official Portal"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Officers Wing Academy',
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="hover:text-amber-300 transition-colors p-1 cursor-pointer"
                  title="Share Website"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/919149081578"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors p-1"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── Main Navbar: Dynamic Morphing when scrolled ── */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'px-3 sm:px-6 pt-2 pb-1' : 'w-full'}`}>
          <nav
            className={`transition-all duration-300 ${
              isScrolled
                ? 'bg-[#0F2C59]/95 text-white backdrop-blur-xl border border-[#E87500]/40 shadow-2xl rounded-2xl max-w-7xl mx-auto py-2.5 px-4 sm:px-6'
                : 'bg-white text-slate-800 py-3 px-4 sm:px-8 border-b border-slate-100 shadow-xs'
            }`}
          >
            <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
              {/* Brand Logo */}
              <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-400/60 shadow-md group-hover:scale-105 transition-transform bg-[#0A1E3F] shrink-0 flex items-center justify-center p-0.5">
                  <img
                    src="/images/logo.jpg"
                    alt="Officers Wing Official Academy Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className={`text-base sm:text-lg font-black tracking-tight font-display leading-tight transition-colors ${
                      isScrolled ? 'text-white group-hover:text-amber-300' : 'text-[#0F2C59] group-hover:text-[#E87500]'
                    }`}
                  >
                    Officers Wing
                  </span>
                  <span
                    className={`text-[8px] sm:text-[9px] uppercase tracking-widest font-bold ${
                      isScrolled ? 'text-amber-300' : 'text-[#C8922A]'
                    }`}
                  >
                    MERCHANT NAVY COACHING
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <div
                className={`hidden lg:flex items-center p-1 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-950/60 border-blue-800/60'
                    : 'bg-[#F1F5F9] border-slate-200/90 shadow-inner'
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
                      className={`relative px-4 py-1.5 text-xs font-bold transition-colors duration-200 z-10 ${
                        isActive
                          ? isScrolled
                            ? 'text-[#0F2C59]'
                            : 'text-[#0F2C59]'
                          : isScrolled
                          ? 'text-slate-200 hover:text-amber-300'
                          : 'text-slate-600 hover:text-[#0F2C59]'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          className={`absolute inset-0 rounded-full shadow-sm -z-10 ${
                            isScrolled ? 'bg-amber-400' : 'bg-white border border-slate-200/60'
                          }`}
                          transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Direct Call Button (Mobile quick tap) */}
                <a
                  href="tel:+919557381578"
                  className={`sm:hidden flex items-center justify-center w-9 h-9 rounded-xl border transition-colors ${
                    isScrolled
                      ? 'bg-white/10 text-amber-400 border-white/10'
                      : 'bg-slate-100 text-[#0F2C59] border-slate-200'
                  }`}
                  aria-label="Call Academy"
                >
                  <Phone className="w-4 h-4" />
                </a>

                {/* Enquire Button */}
                <button
                  onClick={onOpenEnquire}
                  className={`text-xs font-bold px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isScrolled
                      ? 'bg-[#E87500] hover:bg-amber-400 hover:text-slate-950 text-white'
                      : 'bg-[#0A1E3F] hover:bg-[#E87500] text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Enquire Now</span>
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`lg:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                    isScrolled
                      ? 'text-white hover:bg-white/10 border-white/10'
                      : 'text-[#0F2C59] hover:bg-slate-100 border-slate-200'
                  }`}
                  aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer / Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/70 backdrop-blur-md flex flex-col justify-start pt-20 px-4 pb-6 overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md mx-auto bg-[#0A1E3F] border border-white/15 rounded-3xl p-6 shadow-2xl text-left space-y-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/50 bg-black shrink-0">
                    <img src="/images/logo.jpg" alt="Officers Wing Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block font-display">Officers Wing Dehradun</span>
                    <span className="text-[10px] text-amber-300 font-semibold">Sailing towards a bright future</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links list */}
              <div className="space-y-1 py-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        if (link.path === '/') handleHomeClick(e);
                      }}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-[#E87500] to-[#F09030] text-white shadow-md'
                          : 'text-slate-200 hover:bg-white/05 hover:text-amber-300'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Actions in Drawer */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenEnquire) onOpenEnquire();
                  }}
                  className="w-full btn-glow-orange text-white text-xs font-extrabold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Book Free Counselling Session</span>
                </button>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="tel:+919149081578"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/05 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E87500]" />
                    <span>9149081578</span>
                  </a>
                  <a
                    href="tel:+919557381578"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white/05 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E87500]" />
                    <span>9557381578</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://instagram.com/officerswing"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 font-semibold hover:bg-pink-900/40 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>@officerswing</span>
                  </a>
                  <a
                    href="https://wa.me/919149081578"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-900/40 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
