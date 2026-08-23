import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: 'What is IMU-CET and why is it mandatory for Deck Cadets?',
    answer: 'IMU-CET (Indian Maritime University Common Entrance Test) is the national-level entrance exam required for admission into Diploma in Nautical Science (DNS) and B.Sc Nautical Science courses across India. Clearing IMU-CET along with company sponsorship guarantees your entry into merchant navy as a Navigation Officer cadet.',
    category: 'IMU-CET & Admissions'
  },
  {
    question: 'What is Company Sponsorship and why is Officers Wing specialized in it?',
    answer: 'Company Sponsorship means a DG Shipping approved shipping line (such as Synergy, Fleet Management, or Great Eastern) hires you before your sea training begins. Officers Wing provides dedicated interview preparation, mock aptitude tests, and psychometric exam training to ensure 100% sponsorship placement for our cadets.',
    category: 'Sponsorship'
  },
  {
    question: 'What are the physical and eye-sight medical requirements for Merchant Navy?',
    answer: 'For Deck Cadets (DNS/GP Rating), 6/6 vision in both eyes without visual aids is mandatory, with zero color blindness (Ishihara test). For Engine Cadets (GME/ETO), vision up to 6/12 is allowed. BMI must be between 17.0 and 27.0 according to DG Shipping medical standards.',
    category: 'Medical Standards'
  },
  {
    question: 'Can I join the Merchant Navy right after passing 10th Standard?',
    answer: 'Yes! After 10th standard, you can enrol in the 6-Month General Purpose (GP) Rating pre-sea course. Upon completion, you join cargo ships as a Trainee Rating/Motorman with initial sea salaries ranging from ₹35,000 to ₹60,000/month.',
    category: 'Eligibility'
  },
  {
    question: 'Is hostel facility and physical fitness training available at Officers Wing Dehradun?',
    answer: 'Yes. Officers Wing Dehradun provides fully equipped hostel accommodation, mess facilities, physical endurance training, seamanship lab workshops, and daily maritime discipline sessions under the guidance of ex-naval officers.',
    category: 'Campus Facilities'
  },
  {
    question: 'What is the starting salary after completing merchant navy training?',
    answer: 'Trainee Deck Cadets (DNS) earn ₹35,000 to ₹70,000/month. Upon passing the 2nd Mate COC examination to become a 3rd Officer, monthly salaries range from ₹2,00,000 to ₹3,80,000/month (tax-free in international waters). Chief Engineers and Captains earn ₹8,50,000 to ₹12,50,000+/month.',
    category: 'Career & Pay'
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Inject FAQPage JSON-LD Schema for AI Answer Engine Citations (ChatGPT, Gemini, Perplexity)
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    let script = document.getElementById('faq-jsonld-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'faq-jsonld-schema';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(faqSchema);

    return () => {
      const existingScript = document.getElementById('faq-jsonld-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#EFF2F7] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="section-label">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0A1E3F]">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
            Everything you and your parents need to know about IMU-CET, DG Shipping medical standards, sponsorship interviews, and life at Officers Wing.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C8922A]/50 shadow-md'
                    : 'bg-white/80 border-slate-200 hover:border-[#0A1E3F]/30 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8922A] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#0A1E3F]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0A1E3F] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E87500]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Helpline Card */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0A1E3F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E87500] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Have more specific questions about your eligibility?</h4>
              <p className="text-xs text-slate-300">Speak directly with our senior maritime career counselor in Dehradun.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919557381578?text=Hi%20Officers%20Wing,%20I%20have%20a%20question%20about%20Merchant%20Navy%20coaching"
            target="_blank"
            rel="noreferrer"
            className="btn-glow-orange text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer whitespace-nowrap"
          >
            Ask Counselor on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
