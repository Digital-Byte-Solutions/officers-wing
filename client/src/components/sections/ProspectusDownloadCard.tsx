import React, { useState } from 'react';
import { Download, FileText, CheckCircle, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLeadToGoogleSheet } from '../../services/leadService';

export const ProspectusDownloadCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setIsSubmitting(true);

    await submitLeadToGoogleSheet({
      phone: phone,
      email: email,
      formType: 'Prospectus Download',
      course: 'IMU-CET Prep Guide & Prospectus',
      source: 'Prospectus Download Card',
      honeypot: honeypot
    });

    setIsSubmitting(false);
    setDownloaded(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };


  return (
    <section className="w-full bg-white py-16 sm:py-20 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#060F1E] via-[#0A1E3F] to-[#060F1E] p-8 sm:p-12 overflow-hidden border border-[#C8922A]/30 shadow-2xl text-white">
          {/* Background Radial Bloom */}
          <div
            className="absolute top-0 right-0 w-[40vw] h-[40vh] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(232,117,0,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D4A840] bg-[#C8922A]/15 px-3 py-1 rounded-full border border-[#C8922A]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#C8922A]" /> Official 2026–27 Guide
              </span>

              <h2 className="font-display text-2xl sm:text-4xl font-black text-white leading-tight">
                Download Free <span className="text-[#C8922A]">IMU-CET Prep Guide</span> &amp; Academy Prospectus
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Get instant access to Officers Wing's complete course brochure, fee structure, IMU-CET syllabus breakdown, and company sponsorship criteria.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>IMU-CET Exam Pattern</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>DG Medical Guidelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sponsorship Eligibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dehradun Fee Structure</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 bg-white/08 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15">
              {!downloaded ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-bold text-base text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#C8922A]" /> Get Instant PDF Download
                  </h3>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white text-slate-900 placeholder-slate-400 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E87500]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="cadet@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white text-slate-900 placeholder-slate-400 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E87500]"
                    />
                  </div>

                  {/* Honeypot Spam Trap Input */}
                  <input
                    type="text"
                    name="website_url_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden opacity-0 pointer-events-none absolute -z-50 w-0 h-0"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-glow-orange font-bold text-xs sm:text-sm py-3 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isSubmitting ? 'Preparing Prospectus...' : 'Download Prospectus PDF'}</span>
                  </button>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 100% Privacy. Protected by reCAPTCHA v3 &amp; Honeypot Anti-Spam Shield.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-white">Prospectus Ready!</h3>
                  <p className="text-xs text-slate-300">
                    Thank you! Our 2026-27 Prospectus &amp; IMU-CET guide has been sent to your phone.
                  </p>
                  <a
                    href="/admission"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E87500] hover:underline pt-2"
                  >
                    Proceed to Online Admission <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
