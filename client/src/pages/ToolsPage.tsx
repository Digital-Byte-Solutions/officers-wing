import React, { useState } from 'react';
import { Footer } from '../components/layout/Footer';
import { Calculator, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

export const ToolsPage: React.FC = () => {
  // Eligibility Calculator State
  const [eligibilityData, setEligibilityData] = useState({
    age: 18,
    qualification: '12th',
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

  const handleEligibilitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { age, qualification, pcm } = eligibilityData;

    let res = '';
    if (qualification === '10th' && age >= 15 && age <= 25) {
      res = 'Qualified for GP Rating / Deck Rating Course (6 Months)';
    } else if (qualification === '12th' && pcm >= 60 && age <= 25) {
      res = 'Qualified for DNS / B.Sc Nautical Science (IMU-CET)';
    } else if (qualification === 'graduate' && age <= 28) {
      res = 'Qualified for GME (Graduate Marine Engineering)';
    } else if (qualification === 'btech_marine' && age <= 28) {
      res = 'Qualified for ETO (Electro-Technical Officer)';
    } else {
      res = 'Personalized Counselling Required — Contact our admissions team for custom routing.';
    }

    setEligibilityResult(res);

    // Fire canvas-confetti celebration
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#0F2C59', '#E87500', '#F59E0B']
    });
  };

  return (
    <div className="pt-28 min-h-screen bg-slate-50 text-slate-800 text-left">
      {/* Header Banner */}
      <div className="bg-[#0F2C59] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
            <Calculator className="w-4 h-4" /> Pre-Medical & Eligibility Calculators
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif-heading">
            Instant Qualification Tools
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Evaluate your merchant navy eligibility and medical fitness against DG Shipping rules instantly.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14 space-y-16">
        
        {/* Tool 1: Eligibility Wizard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                <option value="10th">Passed 10th Standard</option>
                <option value="12th">Passed / Appearing 12th (PCM)</option>
                <option value="graduate">Graduate (Mechanical Eng / General)</option>
                <option value="btech_marine">B.Tech / Electrical Engineering</option>
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

            <div className="md:col-span-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full sm:w-auto bg-[#0F2C59] hover:bg-[#1A3D73] text-white text-xs font-bold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> Evaluate Eligibility Now
              </motion.button>
            </div>
          </form>

          {eligibilityResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 shadow-sm"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-sm">Evaluation Result:</div>
                <div className="text-xs font-semibold mt-0.5">{eligibilityResult}</div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Tool 2: Medical BMI Gauge Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
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
        </motion.div>

      </div>

      <Footer />
    </div>
  );
};
