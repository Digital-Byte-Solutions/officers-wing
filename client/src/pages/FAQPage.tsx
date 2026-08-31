import React, { useState, useEffect, useMemo } from 'react';
import { HelpCircle, Search, ChevronDown, MessageSquare, Phone, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { Footer } from '../components/layout/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular?: boolean;
}

const FAQ_DATA: FAQItem[] = [
  // ─── Category: IMU-CET & Entrance Exams ───
  {
    id: 'imucet-1',
    question: 'What is IMU-CET and why is it mandatory for Deck Cadets?',
    answer: 'IMU-CET (Indian Maritime University Common Entrance Test) is the national single-window entrance examination conducted once a year by Indian Maritime University. Clearing IMU-CET with a valid All India Rank (AIR) is legally mandatory under DG Shipping guidelines to gain admission into Diploma in Nautical Science (DNS) leading to B.Sc Nautical Science, as well as B.Tech Marine Engineering across all DG Shipping approved maritime institutes in India.',
    category: 'IMU-CET & Entrance Exams',
    popular: true
  },
  {
    id: 'imucet-2',
    question: 'What is the syllabus, exam pattern, and marking scheme for IMU-CET?',
    answer: 'The IMU-CET for 10+2 candidates is a 3-hour computer-based online test (CBT) consisting of 200 Multiple Choice Questions (MCQs). The breakdown is: Physics (50 Qs), Mathematics (50 Qs), Chemistry (20 Qs), English (40 Qs), and General Knowledge/Aptitude (40 Qs). Each correct answer awards +1 mark, with -0.25 negative marking for incorrect responses. Syllabus closely mirrors Class 11 and 12 CBSE curriculum.',
    category: 'IMU-CET & Entrance Exams'
  },
  {
    id: 'imucet-3',
    question: 'What is the age limit and minimum 12th PCM percentage required for IMU-CET?',
    answer: 'Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics (PCM) with a minimum aggregate of 60%, and at least 50% in English (either in 10th or 12th standard). For SC/ST candidates, a 5% relaxation in aggregate PCM marks applies. The minimum age is 17 years and the maximum age limit is generally 25 years as of the batch commencement date (with 5-year relaxation for SC/ST and 2 years for women candidates).',
    category: 'IMU-CET & Entrance Exams'
  },
  {
    id: 'imucet-4',
    question: 'How does Officers Wing prepare cadets to score top All India Ranks (AIR) in IMU-CET?',
    answer: 'Officers Wing Dehradun provides a specialized curriculum focusing on high-speed problem-solving in Physics & Maths, dedicated maritime English modules, weekly full-length CBT mock tests simulating real IMU-CET software, and 1-on-1 doubt clearing sessions with master mariners and experienced faculty. Over 85% of our cadets secure ranks within the Top 1,000 AIR.',
    category: 'IMU-CET & Entrance Exams',
    popular: true
  },

  // ─── Category: Company Sponsorship & DNS ───
  {
    id: 'sponsorship-1',
    question: 'What is Company Sponsorship in Merchant Navy and why is it essential?',
    answer: 'Company Sponsorship is a legally binding placement agreement where an international DG Shipping approved shipping company (such as Synergy, Fleet Management, Anglo-Eastern, Great Eastern, MSC, or Scorpio) selects you BEFORE your pre-sea training starts. The shipping line guarantees your 18-month onboard sea-time training and cadet stipend, effectively eliminating unemployment risk after college.',
    category: 'Company Sponsorship',
    popular: true
  },
  {
    id: 'sponsorship-2',
    question: 'Which shipping companies recruit cadets from Officers Wing Academy?',
    answer: 'Our cadets are sponsored by leading global shipping lines and ship management giants, including Synergy Marine Group, Fleet Management Limited, Anglo-Eastern Ship Management, Great Eastern Shipping, Seven Islands Shipping, MSC Shipmanagement, TORM, and Executive Ship Management (ESM). Officers Wing conducts specific grooming for each company\'s psychometric tests and technical panel interviews.',
    category: 'Company Sponsorship',
    popular: true
  },
  {
    id: 'sponsorship-3',
    question: 'What are the stages in a Shipping Company Sponsorship selection process?',
    answer: 'A standard sponsorship selection consists of 4 sequential rounds: 1) Online CBT Aptitude & Maritime Knowledge Test, 2) Psychometric & Behavioral Profiling Test, 3) Personal & Technical Interview with Captains / Marine Superintendents, and 4) Comprehensive DG Shipping Approved Medical & Eyesight Examination.',
    category: 'Company Sponsorship'
  },

  // ─── Category: GP Rating & 10th Pass Entry ───
  {
    id: 'gprating-1',
    question: 'Can I join Merchant Navy after 10th standard through GP Rating?',
    answer: 'Yes! The General Purpose (GP) Rating course is a 6-month pre-sea residential training program approved by DG Shipping. Eligibility: 10th pass with minimum 40% in Maths and Science, minimum 40% marks in English at 10+2 or 10th level, age between 17.5 and 25 years (5 years relaxation for SC/ST candidates), and 6/6 eyesight with no color blindness (medically fit as per Directorate General of Shipping). You are trained in both Deck and Engine room maintenance, leading to international CDC issuance.',
    category: 'GP Rating (After 10th)',
    popular: true
  },
  {
    id: 'gprating-2',
    question: 'What is the starting salary and career growth for a GP Rating cadet?',
    answer: 'Fresh GP Rating cadets start on cargo vessels with starting sea wages ranging from ₹35,000 to ₹65,000/month (tax-free in foreign waters). With mandatory sea time and clearing internal examinations (2nd Mate COC / NCV), a GP rating can rise to become an Officer of the Watch (OOW) and eventually a Chief Officer or Captain earning ₹6,00,000 to ₹10,00,000+/month.',
    category: 'GP Rating (After 10th)'
  },
  {
    id: 'gprating-3',
    question: 'What is a CDC (Continuous Discharge Certificate)?',
    answer: 'A Continuous Discharge Certificate (CDC) is an official seafarer passport and identity document issued by the Directorate General of Shipping (Govt of India). It records all sea service, ship details, rank, and voyages, and is mandatory to board and sail on commercial vessels worldwide.',
    category: 'GP Rating (After 10th)'
  },

  // ─── Category: GME & ETO (Engine Cadets) ───
  {
    id: 'gme-1',
    question: 'Who is eligible for Graduate Marine Engineering (GME)?',
    answer: 'Candidates holding a B.E. / B.Tech degree in Mechanical Engineering or Naval Architecture from an AICTE/UGC approved university with minimum 50% marks in final year and 50% in English (10th/12th/Graduation) are eligible for the 1-Year GME Pre-Sea course. Maximum age limit is 28 years.',
    category: 'GME & ETO (Engineers)'
  },
  {
    id: 'gme-2',
    question: 'What is the ETO (Electro Technical Officer) course and who can apply?',
    answer: 'The 4-Month Electro Technical Officer (ETO) pre-sea training prepares engineers to manage complex high-voltage electrical, electronic, automation, and computer navigation systems on modern ships. Eligibility: B.E. / B.Tech / Diploma in Electrical, Electronics, Instrumentation, or Telecommunications Engineering with at least 50% aggregate marks.',
    category: 'GME & ETO (Engineers)'
  },

  // ─── Category: Medical & Eye Standards ───
  {
    id: 'medical-1',
    question: 'What are the exact eyesight and color vision rules for Deck Cadets (DNS)?',
    answer: 'Deck Cadets (Navigation branch) require 6/6 vision in each eye without glasses or contact lenses (unaided). Color vision must be strictly normal — tested using the standard Ishihara 38-plates booklet (zero red-green color blindness permitted). For Engine room cadets (GME/ETO), vision up to 6/12 in each eye or 6/9 in better eye with glasses is permissible.',
    category: 'Medical & Eye Standards',
    popular: true
  },
  {
    id: 'medical-2',
    question: 'Is LASIK or corrective laser eye surgery allowed in Merchant Navy?',
    answer: 'Under DG Shipping Medical Rules (Rule 4), LASIK / PRK is strictly prohibited for entry-level Deck Officer cadets (DNS). For Engine branch candidates (GME/ETO/GP Rating Engine), LASIK is permitted if performed after age 18, provided corneal thickness, fundus examination, and recovery certificates meet DG Shipping medical guidelines.',
    category: 'Medical & Eye Standards'
  },
  {
    id: 'medical-3',
    question: 'What are the Body Mass Index (BMI) and physical fitness requirements?',
    answer: 'Candidates must have a BMI strictly between 17.0 and 27.0. Minimum height is generally 157 cm for males and 152 cm for females. Cadets must have normal hearing (audiometry test), healthy blood pressure, no speech impediments, and zero chronic systemic or neurological conditions.',
    category: 'Medical & Eye Standards'
  },

  // ─── Category: Campus, Hostel & Routine ───
  {
    id: 'campus-1',
    question: 'Where is Officers Wing Academy located and what hostel facilities are available?',
    answer: 'Officers Wing Academy is located on Sahastradhara Road, Near IT Park, Dehradun, Uttarakhand. We offer fully furnished on-campus residential hostels with hygienic nutritious mess food, high-speed Wi-Fi, air-conditioned smart classrooms, maritime simulator orientation lab, seamanship chart room, and dedicated study library.',
    category: 'Campus & Hostel Life'
  },
  {
    id: 'campus-2',
    question: 'What is the daily routine and discipline schedule at Officers Wing Dehradun?',
    answer: 'Cadets follow an authentic maritime academy routine: 06:00 AM Physical Conditioning & PT, 07:30 AM Breakfast & Inspection, 08:30 AM – 01:30 PM Academic Classroom Lectures, 02:30 PM – 05:00 PM CBT Mock Test Software & Soft Skill Workshops, 05:30 PM Sports & Outdoor Drill, followed by evening self-study and mentor reviews.',
    category: 'Campus & Hostel Life'
  },

  // ─── Category: Fees, Loans & Career Pay ───
  {
    id: 'fees-1',
    question: 'What is the fee structure and do nationalized banks provide education loans?',
    answer: 'Officers Wing coaching fees are transparent and affordable. For full pre-sea maritime colleges (DNS/B.Sc/GME), 100% education loans are available from major nationalized and private banks (SBI, PNB, HDFC, Axis, Bank of Baroda) once you obtain an admission and sponsorship letter. Our academy provides full loan assistance documentation and counseling.',
    category: 'Fees & Salaries',
    popular: true
  },
  {
    id: 'fees-2',
    question: 'What is the complete salary trajectory from Trainee Cadet to Ship Captain?',
    answer: 'Starting cadet stipends range from ₹35,000 to ₹70,000/month during onboard sea time. After clearing 2nd Mate COC, a 3rd Officer earns ₹2,00,000 – ₹3,50,000/month. 2nd Officer earns ₹3,50,000 – ₹5,00,000/month. Chief Officer earns ₹6,50,000 – ₹9,00,000/month. Master Mariner (Captain) and Chief Engineers earn ₹9,50,000 to ₹14,00,000+/month. All salary earned during foreign sea service is 100% tax-free under NRI provisions in India.',
    category: 'Fees & Salaries',
    popular: true
  }
];

const CATEGORIES = [
  'All Questions',
  'IMU-CET & Entrance Exams',
  'Company Sponsorship',
  'GP Rating (After 10th)',
  'GME & ETO (Engineers)',
  'Medical & Eye Standards',
  'Campus & Hostel Life',
  'Fees & Salaries'
];

interface FAQPageProps {
  onOpenEnquire?: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenEnquire }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'imucet-1': true,
    'sponsorship-1': true
  });

  // Filter FAQs based on category and search query
  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All Questions' || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExpandAll = () => {
    const allOpen: Record<string, boolean> = {};
    filteredFAQs.forEach((faq) => {
      allOpen[faq.id] = true;
    });
    setOpenIds(allOpen);
  };

  const handleCollapseAll = () => {
    setOpenIds({});
  };

  // Dynamically inject High-Density FAQPage JSON-LD Structured Data
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': 'https://officerswing.com/faq#faqpage',
      'name': 'Officers Wing Academy Merchant Navy Comprehensive FAQs',
      'description': 'Verified questions and answers regarding IMU-CET, Company Sponsorship, GP Rating, DG Shipping Medical Standards, and Merchant Navy careers in Dehradun.',
      'mainEntity': FAQ_DATA.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    let script = document.getElementById('standalone-faq-jsonld') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'standalone-faq-jsonld';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(faqSchema);

    return () => {
      const existing = document.getElementById('standalone-faq-jsonld');
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col">
      <SEO
        title="Merchant Navy FAQs 2026 | IMU-CET, Sponsorship & Medical Rules — Officers Wing"
        description="Comprehensive Merchant Navy FAQ knowledge hub: IMU-CET syllabus, company sponsorship tests, DG Shipping eyesight standards, GP Rating, GME fees, and cadet career salaries."
        keywords="merchant navy faq, imu cet eligibility faq, merchant navy eyesight rules, company sponsorship process, gp rating course details, officers wing dehradun faqs"
        canonicalUrl="https://officerswing.com/faq"
      />

      {/* ── Page Hero Header ── */}
      <section className="relative bg-[#060F1E] text-white pt-36 pb-20 px-4 sm:px-8 overflow-hidden page-banner border-b border-amber-500/20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(232,117,0,0.35) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#E87500]" />
            <span>Aspirant Knowledge &amp; AEO Citation Hub</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient-hero">Questions</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you, your parents, and aspirants need to know about IMU-CET, company sponsorships, medical standards, eligibility, and life at Officers Wing Dehradun.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto pt-6">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any question (e.g. eyesight, sponsorship, salary, 10th pass)..."
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-[#0A1E3F]/90 border border-white/20 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-[#E87500] focus:ring-2 focus:ring-orange-500/30 shadow-2xl transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-xs font-bold text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-2.5 px-2">
              <span>Showing {filteredFAQs.length} questions</span>
              <div className="flex gap-3">
                <button onClick={handleExpandAll} className="hover:text-amber-400 font-semibold cursor-pointer">
                  Expand All
                </button>
                <span>•</span>
                <button onClick={handleCollapseAll} className="hover:text-amber-400 font-semibold cursor-pointer">
                  Collapse All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 w-full flex-1">
        
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#0A1E3F] text-amber-300 shadow-md border border-amber-400/40 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQs Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main FAQ Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-700">No questions found matching your search</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try searching for terms like "eyesight", "synergy", "fees", or "GP rating".
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All Questions'); }}
                  className="px-4 py-2 rounded-xl bg-[#0A1E3F] text-white text-xs font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-[#C8922A]/60 shadow-lg ring-1 ring-[#C8922A]/30'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C8922A] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 shrink-0 mt-0.5">
                          {faq.category}
                        </span>
                        <h2 className="font-display text-sm sm:text-base font-bold text-[#0A1E3F] leading-snug">
                          {faq.question}
                        </h2>
                      </div>
                      <div className={`p-1.5 rounded-lg transition-transform duration-200 shrink-0 ${isOpen ? 'bg-amber-100 text-[#E87500] rotate-180' : 'text-slate-400 bg-slate-100'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Sticky Helpdesk & Quick Action Card */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            
            {/* Direct Counsellor Assistance Card */}
            <div className="bg-[#060F1E] border border-amber-400/30 rounded-3xl p-6 text-white shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E87500] to-[#D96900] flex items-center justify-center text-white shadow-md shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">Have a Specific Query?</h3>
                  <p className="text-[11px] text-amber-300">Free 1-on-1 Profile Evaluation</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Unsure if your 12th PCM score, eyesight, or age qualifies for DNS or GME sponsorship? Speak directly with our Master Mariner counselors in Dehradun.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href="https://wa.me/919557381578?text=Hi%20Officers%20Wing,%20I%20have%20a%20question%20regarding%20my%20Merchant%20Navy%20eligibility"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Senior Counselor</span>
                </a>

                <a
                  href="tel:+919557381578"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A1E3F] hover:bg-[#0F2C59] border border-white/15 text-amber-300 font-bold text-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Admissions Hotline</span>
                </a>

                {onOpenEnquire && (
                  <button
                    onClick={onOpenEnquire}
                    className="w-full btn-glow-orange py-3 px-4 rounded-xl text-white font-extrabold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                  >
                    Book Free Campus Visit
                  </button>
                )}
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 text-left">
              <h3 className="font-display text-sm font-bold text-[#0A1E3F] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E87500]" /> Quick Academy Highlights
              </h3>
              
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>450+</strong> Cadets Sponsored in top tier shipping companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>DG Shipping</strong> Approved Doctors on medical advisory panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>100%</strong> Education loan support documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>On-Campus</strong> Hostel, Mess &amp; Maritime Discipline routine</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
};
