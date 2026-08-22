import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Anchor, Globe, Share2, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060F1E] text-white pt-20 pb-8 overflow-hidden">

      {/* Compass watermark */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.03] pointer-events-none select-none flex items-start justify-end pr-8 pt-8">
        <Anchor className="w-64 h-64 text-white" />
      </div>

      {/* Thin gold top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #C8922A 30%, #E87500 60%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/08 text-left"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}>

          {/* ── Col 1: Brand ── */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Officers Wing Logo"
                className="w-12 h-12 rounded-full object-cover shadow-lg border border-amber-400/30 shrink-0"
              />
              <div>
                <div className="font-display text-lg font-bold text-white leading-tight">Officers Wing</div>
                <div className="text-[9px] uppercase tracking-widest text-[#C8922A] font-bold">Merchant Navy Coaching</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dehradun's premier Merchant Navy coaching institute. Dedicated to guiding aspirants
              through IMU-CET, GP Rating, DNS, GME &amp; ETO selections since 2016.
            </p>
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-widest text-[#C8922A] font-bold">Quick Links</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                {[
                  { to: '/',       label: 'Home' },
                  { to: '/about',  label: 'About Us' },
                  { to: '/courses', label: 'Our Courses' },
                ].map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-[#C8922A] transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#C8922A] font-bold">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {[
                { to: '/results',          label: 'Alumni Placements & Results' },
                { to: '/admission',        label: 'Admission Process' },
                { to: '/tools',            label: 'Eligibility & Medical Calculators' },
                { to: '/blog',             label: 'Merchant Navy Blog' },
                { to: '/contact',          label: 'Contact Us' },
                { to: '/student-dashboard', label: 'Student Portal Login →', highlight: true },
              ].map(({ to, label, highlight }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`transition-colors duration-200 ${
                      highlight ? 'text-[#C8922A] font-semibold hover:text-[#E87500]' : 'hover:text-[#C8922A]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#C8922A] font-bold">Contact Us</h4>
            <ul className="space-y-4 text-xs text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C8922A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">+91 95573 81578</div>
                  <div className="text-[11px] text-slate-500">Mon - Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C8922A] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">admissions@officerswing.com</div>
                  <div className="text-[11px] text-slate-500">24/7 Counselling Support</div>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Address ── */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-widest text-[#C8922A] font-bold">Academy Address</h4>
            <div className="flex items-start gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#C8922A] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-white">Officers Wing Academy</strong><br />
                Near IT Park, Sahastradhara Road,<br />
                Dehradun, Uttarakhand – 248001
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 btn-glow-orange"
            >
              View Map &amp; Directions
            </Link>
          </div>

        </div>

        {/* ── Bottom Row ── */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Officers Wing Academy, Dehradun. All Rights Reserved.
          </div>
          <div className="flex items-center gap-5">
            {[
              { href: 'https://wa.me/919557381578', Icon: MessageCircle, label: 'WhatsApp' },
              { href: 'https://instagram.com',      Icon: Globe,         label: 'Instagram' },
              { href: 'https://facebook.com',       Icon: Share2,        label: 'Facebook' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                title={label}
                className="text-slate-500 hover:text-[#C8922A] transition-colors duration-200">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
