import React from 'react';
import { Award, ShieldCheck, Compass, HeartHandshake, Anchor, UserCheck } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section className="relative w-full py-0 overflow-hidden">
      {/* ── Split Panel Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">

        {/* LEFT PANEL — dark navy with pull-quote & pillars */}
        <div
          className="lg:col-span-7 relative bg-[#0A1E3F] flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 sm:py-20 text-left"
        >
          {/* Compass watermark */}
          <div className="absolute top-8 right-8 opacity-5 pointer-events-none select-none">
            <Anchor className="w-44 h-44 text-white" />
          </div>

          <span className="section-label section-label-dark mb-4">
            <Compass className="w-3.5 h-3.5 text-amber-400" /> Leadership &amp; Vision
          </span>

          {/* Serif amber pull-quote */}
          <blockquote className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug mb-6">
            <span className="text-[#C8922A]">"TRUST</span> is the most expensive thing
            in the World — and we are here to win yours."
          </blockquote>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            We work hard every day so that any cadet who trusts us can proudly say they were guided well, given the right platform to learn, and outperformed their potential. We are not just a coaching institute but a <strong className="text-white">mentoring sanctuary</strong> where overall career development is our highest priority.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            For our team, it is always <strong className="text-[#C8922A]">STUDENT COMES FIRST</strong>. From written test clearance to sea-time documentation, we stand shoulder-to-shoulder with our cadets.
          </p>

          {/* Credential badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { Icon: Award,          label: 'Mentorship First',    sub: 'Holistic career guidance' },
              { Icon: ShieldCheck,    label: 'DG Shipping Approved', sub: 'Verified medical check' },
              { Icon: HeartHandshake, label: 'Student Comes First', sub: 'Team philosophy' },
              { Icon: Compass,        label: 'Since 2016',           sub: 'Dehradun, Uttarakhand' },
            ].map(({ Icon, label, sub }, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/05 border border-white/10">
                <Icon className="w-4 h-4 text-[#C8922A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">{label}</div>
                  <div className="text-[10px] text-slate-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL — light with founder photo */}
        <div
          className="lg:col-span-5 relative bg-[#EFF2F7] flex flex-col justify-center items-center px-6 sm:px-12 py-16 sm:py-20 text-center"
        >
          {/* Photo with gradient ring */}
          <div className="relative mb-6">
            <div
              className="absolute -inset-1.5 rounded-2xl z-0"
              style={{ background: 'linear-gradient(135deg, #0A1E3F 0%, #C8922A 50%, #E87500 100%)', padding: '2px' }}
            />
            <div className="relative z-10 rounded-2xl overflow-hidden w-64 sm:w-72 shadow-2xl">
              <img
                src="/images/founder.jpg"
                alt="Capt. Anurag Singh — Founder, Officers Wing"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"; }}
                className="w-full h-80 sm:h-96 object-cover object-top"
              />
            </div>
          </div>

          {/* Founder name card */}
          <div>
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E87500] mb-1">
              <UserCheck className="w-4 h-4" />
              <span>Master Mariner</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#0A1E3F]">
              Capt. Anurag Singh
            </h3>
            <p className="text-xs text-[#64748B] font-semibold mt-0.5">
              Founder &amp; Managing Director
            </p>
            <p className="text-[11px] text-[#C8922A] font-bold uppercase tracking-widest mt-1">
              Officers Wing Academy, Dehradun
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
