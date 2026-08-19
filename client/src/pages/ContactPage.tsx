import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

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
    <div className="pt-28 min-h-screen bg-slate-50 text-slate-800">
      {/* Top Banner */}
      <div className="bg-[#0F2C59] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Get in Touch with Officers Wing
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Visit our Dehradun academy center or speak directly with our senior pre-sea counsellors.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-[#0F2C59] font-serif-heading border-b pb-3">
              Academy Contact Details
            </h2>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F2C59]">Officers Wing Academy</div>
                  <div className="text-slate-600">Near IT Park, Sahastradhara Road, Dehradun, Uttarakhand - 248001</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F2C59]">Phone & WhatsApp</div>
                  <div className="text-slate-600">+91 98765 43210 / +91 98765 43211</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F2C59]">Official Email</div>
                  <div className="text-slate-600">admissions@officerswing.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#0F2C59]">Counseling Hours</div>
                  <div className="text-slate-600">Monday - Saturday: 9:00 AM to 7:00 PM IST</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
            <h2 className="text-2xl font-bold text-[#0F2C59] font-serif-heading mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-600 mb-6">
              Fill out the form below and our admissions team will connect with you within 2 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-[#0F2C59]">Message Received!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A senior maritime mentor from Officers Wing will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="cadet@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Current City / State</label>
                    <input
                      type="text"
                      placeholder="e.g. Dehradun / Patna"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Query</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your educational background or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E87500] hover:bg-[#F59E0B] text-white text-xs font-bold py-3.5 rounded-[6px] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" /> Send Enquiry Message
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
