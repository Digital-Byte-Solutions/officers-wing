import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, Users, ChevronRight, AlertCircle } from 'lucide-react';
import { animate, stagger } from 'animejs';

interface Batch {
  course: string;
  startDate: string;
  seatsTotal: number;
  seatsLeft: number;
  duration: string;
  mode: string;
  urgency: 'critical' | 'high' | 'medium' | 'open';
}

const BATCHES: Batch[] = [
  {
    course: 'DNS / IMU-CET 2027 — Full Course',
    startDate: 'Sep 5, 2026',
    seatsTotal: 20,
    seatsLeft: 3,
    duration: '12 Months',
    mode: 'Classroom + Online',
    urgency: 'critical',
  },
  {
    course: 'GP Rating (After 10th)',
    startDate: 'Aug 28, 2026',
    seatsTotal: 15,
    seatsLeft: 6,
    duration: '6 Months',
    mode: 'Classroom',
    urgency: 'high',
  },
  {
    course: 'GME — Graduate Marine Engineering',
    startDate: 'Sep 25, 2026',
    seatsTotal: 10,
    seatsLeft: 7,
    duration: '1 Year',
    mode: 'Classroom',
    urgency: 'medium',
  },
  {
    course: 'ETO — Electro-Technical Officer',
    startDate: 'Oct 10, 2026',
    seatsTotal: 12,
    seatsLeft: 10,
    duration: '4 Months',
    mode: 'Classroom + Simulator',
    urgency: 'open',
  },
  {
    course: 'IMU-CET Fast Track (Crash Course)',
    startDate: 'Sep 1, 2026',
    seatsTotal: 15,
    seatsLeft: 4,
    duration: '3 Months',
    mode: 'Intensive Classroom',
    urgency: 'critical',
  },
];

const URGENCY_CONFIG = {
  critical: { label: 'Almost Full',     bar: 'bg-red-500',     text: 'text-red-400',   badge: 'bg-red-500/15 text-red-400 border-red-500/30' },
  high:     { label: 'Filling Fast',    bar: 'bg-[#E87500]',   text: 'text-[#E87500]', badge: 'bg-orange-500/15 text-orange-400 border-orange-500/30' },
  medium:   { label: 'Seats Available', bar: 'bg-amber-500',   text: 'text-amber-400', badge: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  open:     { label: 'Open Enrolment',  bar: 'bg-emerald-500', text: 'text-emerald-400', badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
};

export const BatchCalendar: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const listRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (headRef.current) {
            animate(headRef.current.children, {
              translateY: [28, 0],
              opacity:    [0, 1],
              duration:   800,
              delay:      stagger(120),
              ease:       'outCubic',
            });
          }
          if (listRef.current) {
            animate(listRef.current.children, {
              translateX: [-30, 0],
              opacity:    [0, 1],
              duration:   700,
              delay:      stagger(120, { start: 200 }),
              ease:       'outCubic',
            });
          }
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">

        {/* Heading */}
        <div ref={headRef} className="text-center mb-10 sm:mb-14 space-y-2.5">
          <div style={{ opacity: 0 }}>
            <span className="section-label">
              <Calendar className="w-3.5 h-3.5" /> Batch Schedule
            </span>
          </div>
          <h2 style={{ opacity: 0 }} className="font-display text-3xl sm:text-5xl font-black text-[#0A1E3F]">
            Live Batch Availability
          </h2>
          <p style={{ opacity: 0 }} className="text-slate-500 text-sm max-w-xl mx-auto">
            Upcoming batches and live seat counts. Seats are strictly limited to maintain individual mentorship quality. Reserve yours before the batch closes.
          </p>
        </div>

        {/* Urgency Alert */}
        <div className="mb-6 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 w-fit mx-auto">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <span className="text-xs font-bold text-red-700">
            2 batches are critically close to full capacity — secure your seat today
          </span>
        </div>

        {/* Batch List */}
        <div ref={listRef} className="space-y-4">
          {BATCHES.map((batch, idx) => {
            const config = URGENCY_CONFIG[batch.urgency];
            const fillPercent = Math.round(((batch.seatsTotal - batch.seatsLeft) / batch.seatsTotal) * 100);
            return (
              <div
                key={idx}
                style={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#0A1E3F]/20"
              >
                {/* Course info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${config.badge}`}>
                      {config.label}
                    </span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-black text-[#0A1E3F] leading-snug">{batch.course}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-[10px] sm:text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {batch.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {batch.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> {batch.mode}
                    </span>
                  </div>
                </div>

                {/* Seat availability */}
                <div className="w-full sm:w-48 shrink-0">
                  <div className="flex justify-between text-[10px] font-bold mb-1.5">
                    <span className="text-slate-500">{batch.seatsTotal - batch.seatsLeft} / {batch.seatsTotal} seats</span>
                    <span className={config.text}>{batch.seatsLeft} left</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${config.bar}`}
                      style={{ width: `${fillPercent}%` }}
                    />
                  </div>
                </div>

                {/* CTA */}
                <div className="shrink-0">
                  <a
                    href="/admission"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-300 whitespace-nowrap ${
                      batch.urgency === 'critical' || batch.urgency === 'high'
                        ? 'bg-[#E87500] hover:bg-amber-500 text-white shadow-md hover:shadow-lg'
                        : 'bg-[#0A1E3F] hover:bg-[#0F2C59] text-white'
                    }`}
                  >
                    Apply Now <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          📞 Have questions? Call us directly at <strong className="text-[#0A1E3F]">+91 95573 81578</strong> — our mentors answer personally.
        </p>
      </div>
    </section>
  );
};
