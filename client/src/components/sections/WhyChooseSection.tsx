import React, { useEffect, useRef } from 'react';
import { UserCheck, Trophy, ClipboardList, BookOpen } from 'lucide-react';
import { animate, stagger } from 'animejs';

export const WhyChooseSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardsRef.current) {
            animate(cardsRef.current.children, {
              translateY: [40, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 800,
              delay: stagger(200),
              ease: 'outCubic'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <UserCheck className="w-10 h-10 text-[#0F2C59]" />,
      title: "Experienced Faculty: Learn from Industry Veterans",
      description: "Coaching for Written Test (online / offline) and interviews for Deck Cadets / TME / GME / GP Rating openings."
    },
    {
      icon: <Trophy className="w-10 h-10 text-[#0F2C59]" />,
      title: "Proven Track Record: Hundreds of Students Placed",
      description: "Helping students convert their dreams into reality since 2016 with 970+ successful cadets placed across fleets."
    },
    {
      icon: <ClipboardList className="w-10 h-10 text-[#0F2C59]" />,
      title: "Comprehensive Training: Written, Interview & Physical Prep",
      description: "Classes covering Seamanship, Ship Construction, Duties, Fire Fighting, Basic Marine Engineering & Safety."
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full text-center space-y-12">
        
        {/* Section Title & Official About Text */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F2C59] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-[#E87500]" /> About Our Academy
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] font-serif-heading">
            Why Choose Officers Wing?
          </h2>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-slate-50 p-6 rounded-xl border border-slate-200 text-left">
            Officers Wing has established its name in merchant navy industry for providing career guidance and preparatory classes for merchant navy aspirants in all over India. Officers Wing's Journey was started in 2016 with the aim of creating awareness among the students who are seeking their career at sea and it has helped many students convert their dreams into reality. We at Officers Wing equally committed to merchant navy industry by providing trained professional. Officers Wing is a coaching institute who provides coaching for Written Test (on line / off line) and interviews for various opening for Deck Cadets / TME / GME/ GP Rating etc. Genuine guide for those, who wants to join Merchant Navy after passing 12th class. Apart from Written Test / Interview, Officers Wing is also conducting classes for basic knowledge of shipping, which include Seamanship, Ship Constructions, various Duties, Fire Fighting and Fire Prevention, Basic Marine Engineering, Personal Safety and Social Responsibilities, Ship Organization, Basic Terms in Shipping, Types of Ship, Ship Safety and Security, Loyalty towards Ship, Respecting Senior and Do's and Don't, in Merchant Navy etc.
          </p>
        </div>

        {/* 3-Column Feature Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-200 card-hover-effect flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#0F2C59] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0F2C59] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
