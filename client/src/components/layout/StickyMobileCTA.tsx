import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Sparkles, Navigation, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface StickyMobileCTAProps {
  onOpenEnquire: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenEnquire }) => {
  const [isNavMode, setIsNavMode] = useState(false);
  const location = useLocation();

  // Reset to CTA mode when navigating to a new page
  useEffect(() => {
    setIsNavMode(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Results', path: '/results' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <aside
      aria-label="Mobile Action & Navigation Bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060F1E]/95 backdrop-blur-xl border-t border-[#C8922A]/40 shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)' }}
    >
      <div className="max-w-md mx-auto px-3 pt-2">
        {isNavMode ? (
          /* Mini Quick Navigation Drawer */
          <div className="flex items-center justify-between gap-1 py-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button
              onClick={() => setIsNavMode(false)}
              className="p-1.5 rounded-lg text-amber-400 bg-white/05 border border-white/10 text-[10px] font-bold shrink-0 ml-1"
              title="Switch to Actions"
            >
              <Layers className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          /* High-Converting 3-Button Sticky Conversion Bar */
          <div className="flex items-center justify-between gap-2 py-0.5">
            {/* 1. Direct Call Button */}
            <a
              href="tel:+919557381578"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#0A1E3F] border border-amber-400/30 text-amber-300 hover:bg-[#0F2C59] active:scale-95 transition-all text-xs font-black shadow-md shrink-0"
              aria-label="Call Admissions Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call</span>
            </a>

            {/* 2. Direct WhatsApp Button */}
            <a
              href="https://wa.me/919557381578?text=Hi%20Officers%20Wing,%20I%20want%20to%20know%20more%20about%20Merchant%20Navy%20courses%20and%20admissions"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white transition-all text-xs font-black shadow-md shadow-emerald-950/50 shrink-0"
              aria-label="WhatsApp Chat"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* 3. Enquire Now Modal Trigger */}
            <button
              type="button"
              onClick={onOpenEnquire}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#E87500] to-[#F09030] hover:from-[#F09030] hover:to-[#E87500] active:scale-95 text-white text-xs font-black shadow-lg shadow-orange-600/30 transition-all cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
              <span>Enquire</span>
            </button>

            {/* 4. Quick Nav Switcher Icon */}
            <button
              type="button"
              onClick={() => setIsNavMode(true)}
              className="p-2.5 rounded-xl bg-white/05 border border-white/10 text-slate-300 hover:text-amber-300 active:scale-90 transition-all shrink-0"
              title="Open Navigation"
              aria-label="Open Navigation"
            >
              <Navigation className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
