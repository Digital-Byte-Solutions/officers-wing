import React, { useState } from 'react';
import { Anchor, BookOpen, GraduationCap, Wrench, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Stream {
  name: string;
  tag: string;
  salary: string;
  duration: string;
  exam: string;
  badge?: string;
}

interface Pathway {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  eligibility: string;
  streams: Stream[];
}

const PATHWAYS: Pathway[] = [
  {
    id: 'after-10th',
    label: 'After 10th',
    icon: Anchor,
    color: '#C8922A',
    eligibility: 'Pass 10th Std • Age 15–25 • 40% aggregate',
    streams: [
      { name: 'GP Rating (Deck)', tag: 'Most Accessible', salary: '₹35,000–₹60,000/mo', duration: '6 Months', exam: 'DG Shipping Medical', badge: 'DG Approved' },
      { name: 'Saloon / Engine Rating', tag: 'Engine Track', salary: '₹30,000–₹50,000/mo', duration: '6 Months', exam: 'Board Test' },
    ],
  },
  {
    id: 'after-12th',
    label: '12th PCM / Appearing',
    icon: BookOpen,
    color: '#E87500',
    eligibility: '10+2 PCM ≥60% • English ≥50% • Age 17–25',
    streams: [
      { name: 'DNS / B.Sc Nautical Science', tag: '⭐ Most Popular', salary: '₹1,00,000–₹2,50,000/mo', duration: '3 Years (IMU-CET)', exam: 'IMU-CET + Company Sponsorship', badge: 'Highest Demand' },
      { name: 'B.Tech Marine Engineering', tag: 'Engineering Track', salary: '₹85,000–₹2,00,000/mo', duration: '4 Years', exam: 'IMU-CET' },
    ],
  },
  {
    id: 'graduate',
    label: 'Graduate / B.Tech',
    icon: GraduationCap,
    color: '#0F2C59',
    eligibility: 'BE/B.Tech Mechanical / Naval Arch ≥60%',
    streams: [
      { name: 'GME (Graduate Marine Engineering)', tag: 'Fast Track', salary: '₹1,25,000–₹3,00,000/mo', duration: '1 Year', exam: 'DG Shipping Entrance + Marine Interview', badge: 'High Salary' },
      { name: 'ETO (Electro-Technical Officer)', tag: 'Tech Specialist', salary: '₹1,00,000–₹2,30,000/mo', duration: '4 Months + Sea Time', exam: 'ETO Entrance' },
      { name: 'Transport Officer (TO)', tag: 'Management Track', salary: '₹70,000–₹1,60,000/mo', duration: '6 Months', exam: 'IMO STCW Certification' },
    ],
  },
  {
    id: 'diploma',
    label: 'Diploma / Polytechnic',
    icon: Wrench,
    color: '#64748B',
    eligibility: 'Diploma in Mechanical / Electrical / Marine',
    streams: [
      { name: 'Engine Rating / Motorman', tag: 'Engine Room', salary: '₹35,000–₹65,000/mo', duration: '6 Months', exam: 'DG Shipping Certificate' },
      { name: 'Electrical Rating', tag: 'Electrical Track', salary: '₹35,000–₹60,000/mo', duration: '4 Months', exam: 'Basic Safety STCW' },
    ],
  },
];

export const PathwayWizard: React.FC = () => {
  const [selected, setSelected] = useState<string>('after-12th');
  const active = PATHWAYS.find((p) => p.id === selected)!;

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-label mb-3">
            <Anchor className="w-3.5 h-3.5" /> Career Pathways
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A1E3F] mt-2">
            Choose Your Pathway
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-xl mx-auto">
            Select your current qualification below and discover which merchant navy streams are open to you — along with expected sea salary and route to selection.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {PATHWAYS.map((p) => {
            const Icon = p.icon;
            const isActive = p.id === selected;
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A1E3F] text-white border-[#0A1E3F] shadow-lg scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#0A1E3F] hover:text-[#0A1E3F]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Stream Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {/* Eligibility strip */}
            <div className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 w-fit">
              <Star className="w-3.5 h-3.5 text-[#C8922A]" />
              <span className="text-xs font-bold text-amber-800">Eligibility: {active.eligibility}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {active.streams.map((stream, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  {/* Top color accent bar */}
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${active.color}, #E87500)` }} />

                  <div className="p-5 sm:p-6">
                    {/* Tag + badge */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[10px] font-bold text-[#E87500] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {stream.tag}
                      </span>
                      {stream.badge && (
                        <span className="text-[10px] font-bold text-[#0A1E3F] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                          {stream.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-black text-[#0A1E3F] mb-3 leading-snug">
                      {stream.name}
                    </h3>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <span className="w-16 font-bold text-slate-400 uppercase tracking-wider text-[9px]">Salary</span>
                        <span className="font-bold text-emerald-700">{stream.salary}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 font-bold text-slate-400 uppercase tracking-wider text-[9px]">Duration</span>
                        <span className="font-semibold">{stream.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-16 font-bold text-slate-400 uppercase tracking-wider text-[9px]">Exam</span>
                        <span className="font-semibold">{stream.exam}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <a
                        href="/courses"
                        className="flex items-center gap-1 text-xs font-bold text-[#E87500] hover:gap-2 transition-all"
                      >
                        View Course Details <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
