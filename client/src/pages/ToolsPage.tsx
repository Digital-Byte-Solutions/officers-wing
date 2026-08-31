import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { SEO } from '../components/common/SEO';
import { Calculator, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitLeadToGoogleSheet } from '../services/leadService';

export const ToolsPage: React.FC = () => {
  // Eligibility Calculator State
  const [honeypot, setHoneypot] = useState('');
  const [eligibilityData, setEligibilityData] = useState({
    age: 18,
    qualification: '12th_pcm',
    pcm: 65,
    name: '',
    phone: ''
  });
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);

  // BMI Calculator State
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(68);

  const calculateBMI = () => {
    if (!heightCm || !weightKg) return 0;
    const heightM = heightCm / 100;
    return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
  };

  const bmi = calculateBMI();
  const isBmiPass = bmi >= 17.0 && bmi <= 27.0;

  const handleEligibilitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Honeypot check
    const { age, qualification, pcm, name, phone } = eligibilityData;

    let res = '';
    if (qualification === '10th' && age >= 17 && age <= 25) {
      res = 'Eligible for GP Rating (General Purpose Deck & Engine Rating — 6 Months Pre-Sea). 10th pass min 40% Maths/Sci & 40% English, 6/6 Eyesight.';
    } else if (qualification === '12th_pcm' && pcm >= 60 && age <= 25) {
      res = 'Eligible for DNS (Diploma in Nautical Science — 1 Year + Sponsorship), B.Sc Nautical Science (3-Year Degree), & B.Tech Marine Engineering (4-Year Degree).';
    } else if (qualification === 'graduate_mech' && age <= 28) {
      res = 'Eligible for GME (Graduate Marine Engineering — 1 Year Conversion Course for Mechanical / Naval Architecture Engineers).';
    } else if (qualification === 'graduate_ee' && age <= 35) {
      res = 'Eligible for ETO (Electro-Technical Officer — 4 Months Course for Electrical, Electronics, EEE, ECE & Instrumentation Engineers).';
    } else {
      res = 'Personalized Counselling Required — Contact our senior Master Mariner admissions team for specialized entry routing.';
    }

    setEligibilityResult(res);

    // If phone is entered, submit lead to Google Sheet
    if (phone) {
      await submitLeadToGoogleSheet({
        name: name || 'Prospective Cadet',
        phone: phone,
        qualification: qualification,
        age: age,
        pcm: pcm,
        message: `Eligibility Tool Result: ${res}`,
        formType: 'Eligibility Checker',
        source: 'Calculators & Tools Page',
        honeypot: honeypot
      });
    }

    // Fire canvas-confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0F2C59', '#E87500', '#F59E0B']
    });
  };

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-[#F8FAFC] text-slate-800 text-left">
      <SEO
        title="Merchant Navy Eligibility & DG Shipping BMI Calculator | Officers Wing"
        description="Free online Merchant Navy eligibility checker and DG Shipping BMI calculator. Check age, PCM marks, and eyesight requirements instantly."
        keywords="merchant navy eligibility checker, DG Shipping BMI calculator, IMUCET eligibility tool, eyesight requirements merchant navy"
        canonicalUrl="https://officerswing.com/tools"
      />
      {/* Header Banner */}
      <div className="page-banner bg-[#050B14] text-white py-16 sm:py-20 px-4 sm:px-8 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(200, 146, 42, 0.3) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            Pre-Medical &amp; Eligibility Calculators
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
            Instant Qualification Tools
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Evaluate your merchant navy eligibility and medical fitness against DG Shipping rules instantly.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* Tool 1: Eligibility Wizard */}
        <div
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0F2C59] flex items-center justify-center font-bold">1</div>
            <h2 className="text-2xl font-bold text-[#0F2C59] font-serif-heading">
              Merchant Navy Eligibility Checker
            </h2>
          </div>
          <p className="text-xs text-slate-600 mb-6">
            Enter your age and educational background to discover which pre-sea course fits you best.
          </p>

          <form onSubmit={handleEligibilitySubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Age (Years)</label>
              <input
                type="number"
                min={15}
                max={30}
                value={eligibilityData.age}
                onChange={(e) => setEligibilityData({ ...eligibilityData, age: parseInt(e.target.value) || 18 })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Educational Level</label>
              <select
                value={eligibilityData.qualification}
                onChange={(e) => setEligibilityData({ ...eligibilityData, qualification: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2C59] bg-white"
              >
                <option value="10th">Passed 10th Standard (GP Rating)</option>
                <option value="12th_pcm">Passed / Appearing 12th PCM (DNS, B.Sc, B.Tech)</option>
                <option value="graduate_mech">B.E. / B.Tech Mechanical / Naval Arch (GME)</option>
                <option value="graduate_ee">Degree / Diploma Electrical, EEE, ECE, Instrumentation (ETO)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">PCM % / Aggregate %</label>
              <input
                type="number"
                min={40}
                max={100}
                value={eligibilityData.pcm}
                onChange={(e) => setEligibilityData({ ...eligibilityData, pcm: parseInt(e.target.value) || 60 })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Name (Optional)</label>
              <input
                type="text"
                placeholder="Candidate name"
                value={eligibilityData.name}
                onChange={(e) => setEligibilityData({ ...eligibilityData, name: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone / WhatsApp (Optional)</label>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={eligibilityData.phone}
                onChange={(e) => setEligibilityData({ ...eligibilityData, phone: e.target.value })}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0F2C59]"
              />
            </div>

            {/* Honeypot Spam Trap Input */}
            <input
              type="text"
              name="website_url_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden opacity-0 pointer-events-none absolute -z-50 w-0 h-0"
            />

            <div className="md:col-span-3 pt-2 space-y-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#0F2C59] hover:bg-[#1A3D73] text-white text-xs font-bold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Evaluate Eligibility Now
              </button>
              <div className="text-[10px] text-slate-400 flex items-center gap-1">
                <span>🔒 Protected by reCAPTCHA v3 &amp; Honeypot Anti-Spam Shield</span>
              </div>
            </div>
          </form>

          {eligibilityResult && (
            <div
              className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm">Evaluation Result:</div>
                <div className="text-xs font-semibold mt-0.5">{eligibilityResult}</div>
              </div>
            </div>
          )}
        </div>

        {/* Tool 2: Medical BMI Gauge Calculator */}
        <div
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0F2C59] flex items-center justify-center font-bold">2</div>
            <h2 className="text-2xl font-bold text-[#0F2C59] font-serif-heading">
              DG Shipping Standard BMI Calculator
            </h2>
          </div>
          <p className="text-xs text-slate-600 mb-6">
            DG Shipping medical guidelines require cadet BMI to remain strictly between <strong>17.0 and 27.0</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Height (cm): {heightCm} cm</label>
                <input
                  type="range"
                  min={140}
                  max={210}
                  value={heightCm}
                  onChange={(e) => setHeightCm(parseInt(e.target.value))}
                  className="w-full accent-[#0F2C59]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Weight (kg): {weightKg} kg</label>
                <input
                  type="range"
                  min={40}
                  max={120}
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseInt(e.target.value))}
                  className="w-full accent-[#0F2C59]"
                />
              </div>
            </div>

            {/* Gauge Display */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center space-y-3 shadow-inner">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Calculated BMI Score</div>
              <div className="text-4xl font-extrabold text-[#0F2C59]">{bmi}</div>

              {isBmiPass ? (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                  <CheckCircle2 className="w-4 h-4" /> Medical Pass Zone (17.0 - 27.0)
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <AlertTriangle className="w-4 h-4" /> Requires Adjustment for DG Medical
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

