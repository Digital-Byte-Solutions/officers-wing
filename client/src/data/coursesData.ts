export interface Course {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  eligibility: string;
  duration: string;
  description: string;
  fullDescription: string;
  targetExam: string;
  highlights: string[];
  imageUrl: string;
  isHighlighted?: boolean;
}

export const coursesData: Course[] = [
  {
    id: 'after-10th-gp-rating',
    title: 'After 10th',
    category: 'GP Rating / Deck Rating',
    subtitle: 'Learn from basic to deck rating',
    eligibility: 'Pass 10th Std with 40% aggregate & 40% in English (Age 15 - 25)',
    duration: '6 Months Pre-Sea Training',
    description: 'Learn from basic to deck rating after 10th. Complete pre-sea rating course approved by DG Shipping.',
    fullDescription: 'General Purpose (GP) Rating course prepares cadets for seamanship, navigation assistance, deck maintenance, and engine machinery operations. Ideal entry route for students completing 10th standard who wish to start earning early at sea.',
    targetExam: 'Board Exam + DG Medical Test',
    highlights: ['DG Shipping Approved', '100% Placement Support', 'Hands-on Workshop Training', 'Fire Safety & STCW Certification'],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'after-12th-imucet-dns',
    title: 'After 12th',
    category: 'DNS / B.Sc Nautical Science (IMU-CET)',
    subtitle: 'Learn from basics and clear IMU-CET exam',
    eligibility: '10+2 with PCM >= 60% & English >= 50% (Age 17 - 25)',
    duration: '1 Year Diploma / 3 Year Degree',
    description: 'Learn from basics and clear IMU-CET exam for DNS & Deck Officer cadet entry in top shipping fleets.',
    fullDescription: 'Diploma in Nautical Science (DNS) leading to B.Sc Nautical Science is the premier cadet route to become a Navigation Officer (3rd Officer) in international merchant ships.',
    targetExam: 'IMU-CET & Company Sponsorship Exams',
    highlights: ['Specialized IMU-CET Coaching', 'Sponsorship Interview Prep', 'Navigational Simulator Training', 'Physical Fitness Regime'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    isHighlighted: true
  },
  {
    id: 'graduate-gme',
    title: 'Graduate/B.Tech',
    category: 'GME (Graduate Marine Engineering)',
    subtitle: 'Specialized marine engineering',
    eligibility: 'B.E / B.Tech in Mechanical or Naval Architecture with >= 60%',
    duration: '1 Year Conversion Course',
    description: 'Specialized training preparing engineering graduates for Merchant Navy Junior Engineer officer positions.',
    fullDescription: 'Graduate Marine Engineering (GME) converts mechanical engineers into qualified Marine Engineers, allowing direct entry into engine room management on cargo & tanker vessels.',
    targetExam: 'DG Shipping Entrance & Marine Interview',
    highlights: ['High Salary Packages', 'Engine Room Simulator', 'Direct Sponsorship Drive', 'Expert Chief Engineer Faculty'],
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'graduate-eto',
    title: 'Graduate/B.Tech',
    category: 'ETO (Electro-Technical Officer)',
    subtitle: 'Electrical & electronics specialist',
    eligibility: 'Degree/Diploma in Electrical, Electronics, or Instrumentation',
    duration: '4 Months Course + Sea Training',
    description: 'Electrical and electronics specialized training for high-tech automated commercial marine vessels.',
    fullDescription: 'Electro-Technical Officer (ETO) course trains electrical engineers to handle complex automated control systems, high-voltage power generation, and satellite communication equipment on modern ships.',
    targetExam: 'ETO Entrance & Technical Oral Interview',
    highlights: ['High Demand Worldwide', 'Automated Control Systems', 'Fast Career Advancement', '100% Placement Guidance'],
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80'
  }
];
