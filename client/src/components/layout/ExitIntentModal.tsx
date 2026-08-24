import React, { useState, useEffect } from 'react';
import { Download, Sparkles, X, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitLeadToGoogleSheet } from '../../services/leadService';

const STORAGE_KEY = 'ofw_exit_intent_dismissed_at';
const COOLDOWN_DAYS = 3; // Do not show again for 3 days once dismissed

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('IMU-CET & DNS Sponsorship (After 12th PCM)');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if cooldown is active
  const isCooldownActive = () => {
    try {
      const dismissedTime = localStorage.getItem(STORAGE_KEY);
      if (!dismissedTime) return false;
      const daysPassed = (Date.now() - parseInt(dismissedTime, 10)) / (1000 * 60 * 60 * 24);
      return daysPassed < COOLDOWN_DAYS;
    } catch {
      return false;
    }
  };

  const markDismissed = () => {
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // Ignore
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    markDismissed();
  };

  useEffect(() => {
    if (isCooldownActive()) return;

    // 1. Desktop Exit Intent: Mouse leaves near top bar
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 15 && !hasTriggered && !isCooldownActive()) {
        setHasTriggered(true);
        setIsOpen(true);
      }
    };

    // 2. Mobile Inactivity / Scroll engagement trigger (after 40s)
    const mobileTimer = setTimeout(() => {
      if (!hasTriggered && !isCooldownActive()) {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          setHasTriggered(true);
          setIsOpen(true);
        }
      }
    }, 40000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [hasTriggered]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot spam trap
    if (honeypot.trim() !== '') {
      setIsSuccess(true);
      return;
    }

    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLeadToGoogleSheet({
        name: name.trim() || 'Prospective Cadet (Exit Magnet)',
        phone: cleanPhone,
        course,
        formType: 'Prospectus Download',
        source: 'Exit-Intent Lead Magnet Popup',
        message: 'Downloaded 2026-2027 IMU-CET & Merchant Navy Free Prep Guide PDF'
      });

      setIsSuccess(true);
      markDismissed();

      // Trigger automatic PDF guide download
      const downloadLink = document.createElement('a');
      downloadLink.href = '/docs/Officers_Wing_IMUCET_Prep_Guide.pdf';
      downloadLink.download = 'Officers_Wing_IMUCET_Prep_Guide.pdf';
      downloadLink.target = '_blank';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

    } catch (err) {
      console.error('Exit intent submission error:', err);
      // Still show success to allow user to get WhatsApp link
      setIsSuccess(true);
      markDismissed();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#060F1E] border border-amber-500/40 rounded-3xl shadow-[0_25px_60px_-15px_rgba(232,117,0,0.3)] overflow-hidden text-white my-auto z-10"
          >
            {/* Top Accent Strip */}
            <div className="h-2 bg-gradient-to-r from-[#C8922A] via-[#E87500] to-[#F09030]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/40">
                      <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
                      Free 2026-2027 Aspirant Guide
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">100% Free Instant PDF</span>
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-xl sm:text-2xl font-black text-white leading-tight">
                    Wait! Before You Leave — Claim Your <span className="text-amber-400">IMU-CET &amp; Sponsorship Prep Kit</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Get the exact handbook used by 450+ successful cadets at Officers Wing Dehradun.
                  </p>

                  {/* Bullet Highlights */}
                  <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-white/05 p-3.5 rounded-2xl border border-white/10 text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>50+ CBT Mock Questions</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Company Sponsorship Rules</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>DG Shipping Medical Standards</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Rank &amp; Salary Growth Map</span>
                    </div>
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Lead Capture Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    {/* Honeypot field (hidden from real users) */}
                    <input
                      type="text"
                      name="website_url_trap"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/05 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        WhatsApp Number (For Instant Guide Link) <span className="text-amber-400">*</span>
                      </label>
                      <div className="flex items-center">
                        <span className="px-3 py-2.5 bg-white/10 border border-r-0 border-white/15 rounded-l-xl text-xs font-semibold text-slate-300">
                          +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={10}
                          className="w-full px-4 py-2.5 rounded-r-xl bg-white/05 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">
                        Target Course / Qualification
                      </label>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0A1E3F] border border-white/15 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                      >
                        <option value="IMU-CET & DNS Sponsorship (After 12th PCM)">IMU-CET &amp; DNS Sponsorship (12th PCM)</option>
                        <option value="GP Rating Course (After 10th / 12th)">GP Rating Course (10th / 12th)</option>
                        <option value="GME Graduate Marine Engineering (B.Tech Mech)">GME Course (B.Tech Mechanical)</option>
                        <option value="ETO Electro Technical Officer (B.Tech/Dip EE/ECE)">ETO Course (Electrical/ECE)</option>
                        <option value="Foundation Batch (Class 10/11 Students)">Foundation Batch (10th/11th Students)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#E87500] via-[#F09030] to-[#E87500] hover:from-[#F09030] hover:to-[#E87500] text-white font-extrabold text-xs tracking-wider uppercase shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Preparing Your Download...</span>
                      ) : (
                        <>
                          <Download className="w-4 h-4 text-amber-200 animate-bounce" />
                          <span>Download Free PDF Guide Now</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust Footer */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Privacy Assured • No Spam • Direct DG Shipping Guidance</span>
                  </div>
                </>
              ) : (
                /* Success Screen */
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-black text-white">
                    Guide Ready for Download!
                  </h3>

                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name || 'Cadet'}</strong>! Your official 2026-2027 IMU-CET &amp; Sponsorship Guide has been initiated. Our senior academic counselor is also available to answer your personal eligibility queries.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://wa.me/919557381578?text=Hi%20Officers%20Wing,%20I%20just%20downloaded%20the%202026%20Prep%20Guide.%20Please%20guide%20me%20for%20admissions."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Connect with Counselor on WhatsApp</span>
                    </a>

                    <button
                      onClick={handleClose}
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold transition-colors"
                    >
                      Close &amp; Explore Website
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
