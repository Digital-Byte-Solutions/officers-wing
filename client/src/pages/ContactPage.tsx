import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Top Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(232, 117, 0, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Connect With Mentors
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Get in Touch with Officers Wing
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Visit our Dehradun academy center or speak directly with our senior pre-sea counsellors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bento-card-light rounded-3xl p-6 sm:p-8 space-y-6 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1E3F] font-display border-b border-slate-100 pb-4">
              Academy Contact Details
            </h2>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#E87500] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1E3F] text-sm">Officers Wing Academy</div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">Near IT Park, Sahastradhara Road, Dehradun, Uttarakhand – 248001</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#E87500] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1E3F] text-sm">Direct Helpline &amp; WhatsApp</div>
                  <div className="text-slate-600 mt-0.5">+91 95573 81578 / +91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#E87500] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1E3F] text-sm">Admissions Email</div>
                  <div className="text-slate-600 mt-0.5">admissions@officerswing.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#E87500] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#0A1E3F] text-sm">Academy Office Hours</div>
                  <div className="text-slate-600 mt-0.5">Monday – Saturday: 9:00 AM to 7:00 PM IST</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-2">
              <a
                href="https://wa.me/919557381578"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bento-card-light rounded-3xl p-6 sm:p-8 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0A1E3F] font-display mb-1">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below and our admissions team will connect with you within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1E3F] font-display">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A senior maritime mentor from Officers Wing will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0A1E3F] focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0A1E3F] focus:outline-none bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="cadet@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0A1E3F] focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Current City / State</label>
                    <input
                      type="text"
                      placeholder="e.g. Dehradun / Patna"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0A1E3F] focus:outline-none bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Message / Query</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your educational background or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#0A1E3F] focus:outline-none bg-slate-50/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-glow-orange text-white text-xs font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

