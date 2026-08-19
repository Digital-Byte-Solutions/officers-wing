import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Anchor, Globe, Share2, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F2C59] text-white pt-16 pb-8 border-t border-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60 text-left">
          
          {/* Column 1: Brand & Quick Links 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#E87500] flex items-center justify-center text-white">
                <Anchor className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-serif-heading tracking-tight">
                Officers Wing
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-xs">
              Dehradun's premier Merchant Navy coaching institute. Dedicated to guiding aspirants through IMU-CET, GP Rating, DNS, GME & ETO selections.
            </p>
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/courses" className="hover:text-amber-400 transition-colors">Our Courses</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links 2 & Student Portal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link to="/results" className="hover:text-amber-400 transition-colors">Alumni Placements & Results</Link></li>
              <li><Link to="/admission" className="hover:text-amber-400 transition-colors">Admission Process</Link></li>
              <li><Link to="/tools" className="hover:text-amber-400 transition-colors">Eligibility & Medical Calculators</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors">Merchant Navy Blog</Link></li>
              <li><Link to="/student-dashboard" className="hover:text-amber-400 transition-colors text-amber-300 font-semibold">Student Portal Login →</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">+91 98765 43210</div>
                  <div className="text-[11px] text-slate-400">Mon - Sat: 9:00 AM - 7:00 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">admissions@officerswing.com</div>
                  <div className="text-[11px] text-slate-400">24/7 Counselling Support</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Academy Address</h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-white">Officers Wing Academy</strong><br />
                Near IT Park, Sahastradhara Road,<br />
                Dehradun, Uttarakhand - 248001
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-[4px] transition-colors"
              >
                View Map & Directions
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Officers Wing Academy. All Rights Reserved. Designed by AI-Native Web Designer.
          </div>
          <div className="flex items-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Facebook">
              <Globe className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Twitter">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Instagram">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
