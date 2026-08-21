import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { User, LogIn, FileText, Download, CheckSquare, Bell, Lock } from 'lucide-react';

export const StudentDashboardPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) setIsLoggedIn(true);
  };

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Top Banner */}
      <div className="bg-[#050B14] text-white py-14 sm:py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Enrolled Cadets Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-white">
            Student Login &amp; Study Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Access your course materials, IMU-CET mock test series, batch announcements, and placement updates.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-14">
        {!isLoggedIn ? (
          /* Login Card */
          <div className="max-w-md mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-lg space-y-6">
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0F2C59] flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#0F2C59]">Cadet Account Login</h2>
              <p className="text-xs text-slate-500">Enter your registered mobile number and password</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Password *</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-[6px] border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F2C59] hover:bg-[#1A3D73] text-white text-xs font-bold py-3 rounded-[6px] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <LogIn className="w-4 h-4" /> Login to Portal
              </button>
            </form>

            <div className="text-center text-[11px] text-slate-400">
              New student? Contact academy office to activate your cadet credentials.
            </div>
          </div>
        ) : (
          /* Dashboard Main Content */
          <div className="space-y-8">
            {/* Cadet Header */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0F2C59] text-amber-400 font-bold flex items-center justify-center text-lg">
                  RS
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0F2C59]">Welcome, Cadet Rohan Sharma</h3>
                  <div className="text-xs text-slate-500">Course: DNS / IMU-CET Batch 2026 | ID: OW-2026-104</div>
                </div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs font-bold text-slate-600 hover:text-red-600 px-3.5 py-1.5 rounded border border-slate-300"
              >
                Logout
              </button>
            </div>

            {/* Dashboard Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Study Materials */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#0F2C59]">
                  <FileText className="w-5 h-5 text-[#E87500]" />
                  <h4 className="font-bold text-sm">Study Materials & Notes</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex justify-between items-center p-2 rounded bg-slate-50">
                    <span>IMU-CET Physics Formula Sheet.pdf</span>
                    <Download className="w-4 h-4 text-slate-400 hover:text-[#0F2C59] cursor-pointer" />
                  </li>
                  <li className="flex justify-between items-center p-2 rounded bg-slate-50">
                    <span>Nautical Science Basics Vol 1.pdf</span>
                    <Download className="w-4 h-4 text-slate-400 hover:text-[#0F2C59] cursor-pointer" />
                  </li>
                </ul>
              </div>

              {/* Mock Tests */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#0F2C59]">
                  <CheckSquare className="w-5 h-5 text-[#E87500]" />
                  <h4 className="font-bold text-sm">Online Mock Tests</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="p-2 rounded bg-slate-50 flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Mock Test #04 (Physics & Maths)</div>
                      <div className="text-[10px] text-slate-500">Duration: 120 Mins</div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Active</span>
                  </li>
                </ul>
              </div>

              {/* Notices */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#0F2C59]">
                  <Bell className="w-5 h-5 text-[#E87500]" />
                  <h4 className="font-bold text-sm">Batch Notices</h4>
                </div>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-900">
                    <strong>Synergy Sponsorship Test:</strong> Registrations close this Friday at 5 PM.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};
