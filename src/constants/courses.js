// ============================================================
// Course data — single source of truth for all 4 courses
// ============================================================

export const COURSE_NAMES = ['GPS Rating', 'DNS Program', 'ETO Course', 'Engine Rating']

export const COURSES = [
  {
    id: 1,
    iconName: 'Anchor',
    badge: 'Most Popular',
    badgeColor: '#C9A84C',
    title: 'General Purpose Rating (GPS)',
    shortTitle: 'GPS Rating',
    description:
      'The perfect entry point into merchant navy. Learn ship operations, safety procedures, deck operations, and maritime fundamentals from industry veterans.',
    duration: '6 Months',
    eligibility: '10th Pass (45%+)',
    ageLimit: '17–25 years',
    salary: '₹25,000–₹50,000/mo',
    features: [
      'STCW Basic Safety Training',
      'Firefighting & Life Saving',
      'Deck Watch Rating',
      'Personal Survival Techniques',
      'Medical First Aid',
      'Security Awareness',
    ],
    color: '#C9A84C',
    colorLight: 'rgba(201,168,76,0.1)',
  },
  {
    id: 2,
    iconName: 'GraduationCap',
    badge: 'High Salary',
    badgeColor: '#4ADE80',
    title: 'Diploma in Nautical Science (DNS)',
    shortTitle: 'DNS Program',
    description:
      "Become a Deck Officer and navigate the world's oceans. This comprehensive program trains you to become a Third Officer and progress to Captain.",
    duration: '1 Year + 18 Months Sea',
    eligibility: '12th Pass (PCM, 50%+)',
    ageLimit: '17–25 years',
    salary: '₹80,000–₹3,00,000/mo',
    features: [
      'Navigation & Meteorology',
      'Ship Management',
      'Maritime Law & COLREG',
      'GMDSS Communication',
      'Cargo Operations',
      'Bridge Watchkeeping',
    ],
    color: '#60A5FA',
    colorLight: 'rgba(96,165,250,0.1)',
  },
  {
    id: 3,
    iconName: 'Zap',
    badge: 'Tech Track',
    badgeColor: '#A78BFA',
    title: 'Electro-Technical Officer (ETO)',
    shortTitle: 'ETO Course',
    description:
      'Master the electrical and electronic systems of modern vessels. ETO is the most in-demand maritime position with exceptional global demand.',
    duration: '6 Months Pre-Sea',
    eligibility: 'Diploma/B.E. Electrical',
    ageLimit: '18–28 years',
    salary: '₹1,50,000–₹5,00,000/mo',
    features: [
      'Ship Electrical Systems',
      'ECDIS & Navigation Electronics',
      'Automation & Control',
      'High Voltage Safety',
      'STCW ETO Certification',
      'Practical Workshops',
    ],
    color: '#A78BFA',
    colorLight: 'rgba(167,139,250,0.1)',
  },
  {
    id: 4,
    iconName: 'Ship',
    badge: 'Quick Start',
    badgeColor: '#F472B6',
    title: 'Engine Rating (ERG)',
    shortTitle: 'Engine Rating',
    description:
      'Join the engine room team and support the mechanical operations of merchant vessels. A solid foundation for becoming a Marine Engineer.',
    duration: '6 Months',
    eligibility: '10th Pass + ITI',
    ageLimit: '17–25 years',
    salary: '₹25,000–₹60,000/mo',
    features: [
      'Engine Room Operations',
      'Pump & Machinery',
      'Oil Handling Safety',
      'Tank Cleaning Ops',
      'Oily Water Separator',
      'MARPOL Compliance',
    ],
    color: '#F472B6',
    colorLight: 'rgba(244,114,182,0.1)',
  },
]
