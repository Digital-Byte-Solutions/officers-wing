// ============================================================
// BMI reference categories and fitness tips
// ============================================================

export const BMI_CATEGORIES = [
  {
    range: '< 18.5',
    label: 'Underweight',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.1)',
    border: 'rgba(96,165,250,0.3)',
    navyStatus: 'May require medical clearance. Consider gaining healthy weight.',
    tableStatus: 'Medical Clearance Needed',
    icon: '⬇️',
    min: 0,
    max: 18.5,
  },
  {
    range: '18.5 – 24.9',
    label: 'Normal Weight',
    color: '#4ADE80',
    bg: 'rgba(74,222,128,0.1)',
    border: 'rgba(74,222,128,0.3)',
    navyStatus: 'Excellent! You meet the merchant navy BMI standards.',
    tableStatus: '✓ Fully Eligible',
    icon: '✅',
    min: 18.5,
    max: 25,
  },
  {
    range: '25 – 29.9',
    label: 'Overweight',
    color: '#FACC15',
    bg: 'rgba(250,204,21,0.1)',
    border: 'rgba(250,204,21,0.3)',
    navyStatus: 'You may need medical clearance. Fitness improvement recommended.',
    tableStatus: 'Conditional Clearance',
    icon: '⚠️',
    min: 25,
    max: 30,
  },
  {
    range: '≥ 30',
    label: 'Obese',
    color: '#F87171',
    bg: 'rgba(248,113,113,0.1)',
    border: 'rgba(248,113,113,0.3)',
    navyStatus: 'BMI above 30 may disqualify for merchant navy. Consult a doctor.',
    tableStatus: '✗ May Disqualify',
    icon: '❌',
    min: 30,
    max: Infinity,
  },
]

export const FITNESS_TIPS = [
  'Start a daily 30-minute cardio routine (running, swimming)',
  'Follow a balanced diet with adequate protein and fiber',
  'Avoid junk food, sugar, and high-sodium processed foods',
  'Get 7–8 hours of quality sleep every night',
  'Do strength training 3× per week to build muscle mass',
]
