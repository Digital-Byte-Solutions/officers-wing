import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Award, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (imageRef.current) {
              animate(imageRef.current, {
                translateX: [-40, 0],
                opacity: [0, 1],
                duration: 900,
                ease: 'outCubic'
              });
            }

            if (contentRef.current) {
              animate(contentRef.current, {
                translateX: [40, 0],
                opacity: [0, 1],
                duration: 900,
                delay: 200,
                ease: 'outCubic'
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 bg-white flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        
        {/* 2-Column Grid (Text Left, Image Right matching Founder's Message screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder's Message Exact Official Content */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F2C59] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#E87500]" /> Leadership & Vision
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2C59] font-serif-heading leading-tight">
              Founders Message
            </h2>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm sm:text-base flex items-start gap-2.5">
              <HeartHandshake className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
              <span>TRUST is the most expensive thing in the World and we are here to win your trust.</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We will work hard everyday with our team such that any student who trusts us, can proudly say that he was guided well, he was given the right platform to learn and yes he outperformed his potential with us. We are not a Coaching Institute but a mentoring institute where a student's overall growth is very important to us. Attitude is above aptitude. If a right attitude is developed at a young age then there is no looking back, such a student will not only get a good rank and get selected in a good shipping company but such a student will perform well on ship as well.
            </p>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our Academy is doing great and winning the trust of people only because of a great team of a highly trained group of Expert Facilitators and Teachers. For our team it is always <strong>STUDENT COMES FIRST</strong>. All our actions with our team have just one focus and that is inspiring these young minds who have trusted us. All these years later, as I look back on Our journey, I am overwhelmed by the generosity & support of our Seafarers/ Indian Army Officers community. The dedication of our staff, and most of all, I am overwhelmed by the perseverance of our students, by their tenacity, their strength, and the devotion we have claimed such good results.
            </p>

            {/* Key Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <Award className="w-5 h-5 text-[#E87500] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#0F2C59]">Mentorship Institute</div>
                  <div className="text-[11px] text-slate-500">Student overall growth first</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#0F2C59] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#0F2C59]">Expert Facilitators</div>
                  <div className="text-[11px] text-slate-500">Seafarers & Army Officers backing</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Founder Photo */}
          <div ref={imageRef} className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#0F2C59] via-blue-900 to-[#E87500] opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80"
                  alt="Anurag Sir - Founder Officers Wing"
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F2C59]/90 backdrop-blur-md text-white p-3.5 rounded-lg border border-white/20 text-left">
                  <div className="font-bold text-sm font-serif-heading">Capt. Anurag Singh</div>
                  <div className="text-[11px] text-amber-400 font-semibold">Founder & Managing Director</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
