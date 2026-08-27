export interface Course {
  id: string;
  aliases?: string[];
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
    id: 'after-10th-gp-rating-dehradun',
    aliases: ['after-10th-gp-rating', 'gp-rating'],
    title: 'After 10th',
    category: 'GP Rating (General Purpose)',
    subtitle: 'DG Shipping approved rating pre-sea training in Dehradun',
    eligibility: '10th pass with min 40% in Maths & Science, min 40% in English (10th or 10+2). Age: Min 17.5 to Max 25 yrs (5 yrs relaxation for SC/ST). Eyesight 6/6 with no color blindness.',
    duration: '6 Months Pre-Sea Training',
    description: '10th pass with min 40% in Maths & Science and 40% in English. Complete pre-sea rating course approved by DG Shipping for Deck & Engine careers.',
    fullDescription: 'General Purpose (GP) Rating course prepares cadets for seamanship, navigation assistance, deck maintenance, and engine machinery operations. Candidates must be 10th pass with minimum 40% in Maths and Science, minimum 40% in English at 10th or 10+2 level, age between 17.5 and 25 years (5 years relaxation for SC/ST), and have 6/6 eyesight with no color blindness (medically fit as per Directorate General of Shipping). Ideal entry route for students completing 10th standard who wish to start earning early at sea.',
    targetExam: 'Board Exam + DG Medical Test + Academy Entrance',
    highlights: ['DG Shipping Approved Training', '100% Placement Support', 'Hands-on Workshop & Seamanship Training', 'Fire Fighting & STCW Certification'],
    imageUrl: '/images/gp_rating_course_infographic.jpg'
  },
  {
    id: 'dns-course-dehradun',
    aliases: ['after-12th-imucet-dns-dehradun', 'after-12th-imucet-dns', 'dns', 'dns-course'],
    title: 'After 12th PCM',
    category: 'DNS (Diploma in Nautical Science)',
    subtitle: '1-Year Pre-Sea leading to 3rd Officer & Captain rank in Dehradun',
    eligibility: '10+2 with PCM >= 60% & English >= 50% (10th or 12th). Age: 17 to 25 yrs. 6/6 eyesight (unaided) with no color blindness.',
    duration: '1 Year Pre-Sea + 18 Months On-Board Cadetship',
    description: 'Premier cadet route to become a Navigation Deck Officer. Comprehensive coaching for IMU-CET & Leading Shipping Company Sponsorships (Synergy, Anglo-Eastern, Scorpio, Fleet, Great Eastern).',
    fullDescription: 'Diploma in Nautical Science (DNS) leading to B.Sc Nautical Science is the most popular and direct cadet pathway for 12th PCM students to become Navigation Officers (3rd Officer) and eventually Master Mariners (Captains) on international merchant ships. At Officers Wing Academy, we provide end-to-end coaching covering IMU-CET entrance syllabus, Company Sponsorship Written Tests, Psychometric Evaluation, and Personal Interviews with Master Mariners.',
    targetExam: 'IMU-CET & Company Sponsorship Exams (Anglo-Eastern, Synergy, Scorpio, Fleet, etc.)',
    highlights: ['Specialized IMU-CET & Sponsorship Coaching', 'Guaranteed Company Sponsorship Preparation', 'Navigational Simulator & Chartwork Labs', 'Physical Fitness Regime & Personality Grooming'],
    imageUrl: '/images/dns_course_infographic.jpg',
    isHighlighted: true
  },
  {
    id: 'bsc-nautical-science-dehradun',
    aliases: ['bsc-nautical-science', 'bsc-nautical', 'bsc'],
    title: 'After 12th PCM',
    category: 'B.Sc Nautical Science',
    subtitle: '3-Year DG Shipping approved Degree program for Deck Cadet officers',
    eligibility: '10+2 with PCM >= 60% & English >= 50%. Age: 17 to 25 yrs. 6/6 eyesight with zero color blindness.',
    duration: '3 Years Degree + 12 Months Sea Time Training',
    description: '3-Year undergraduate degree course offering in-depth study of navigational astronomy, marine meteorology, ship stability, and maritime law.',
    fullDescription: 'B.Sc in Nautical Science is an undergraduate 3-year professional degree program approved by the Directorate General of Shipping (DG Shipping) and Indian Maritime University (IMU). Cadets receive rigorous theoretical education and practical maritime simulator training covering terrestrial navigation, celestial navigation, cargo handling, naval architecture, and maritime safety. After graduation and 12 months sea-time training, graduates earn their Second Mate Foreign Going Certificate of Competency.',
    targetExam: 'IMU-CET Rank & Top Maritime College Entrances',
    highlights: ['3-Year Full Degree with IMU Affiliation', 'Reduced Sea-Time Requirement (12 Months)', 'Navigational & Bridge Simulator Labs', 'Global Fleet Campus Placement Opportunities'],
    imageUrl: '/images/bsc_nautical_science_infographic.jpg'
  },
  {
    id: 'btech-marine-engineering-dehradun',
    aliases: ['btech-marine-engineering', 'btech-marine', 'marine-engineering'],
    title: 'After 12th PCM',
    category: 'B.Tech Marine Engineering',
    subtitle: '4-Year Professional Degree for Chief Engineer officer track',
    eligibility: '10+2 with PCM >= 60% & English >= 50%. Age: 17 to 25 yrs. Medical fitness with eyesight up to 6/12 with aids.',
    duration: '4 Years Professional Engineering Degree',
    description: 'Comprehensive 4-year degree course in marine power plants, electrical systems, automation, and engine room management.',
    fullDescription: 'Bachelor of Technology in Marine Engineering (B.Tech Marine Engineering) is a four-year full-time degree program designed to train future Marine Engineers. The curriculum covers marine diesel engines, steam and gas turbines, auxiliary machinery, high-voltage marine electrical systems, ship automation, naval architecture, and refrigeration systems. Cadets graduate ready to step on board as Junior Engineers with direct promotion pathways to Chief Engineer.',
    targetExam: 'IMU-CET & Marine Engineering College Entrances',
    highlights: ['4-Year DG Shipping Approved Degree', 'Full-Mission Engine Room Simulator Training', 'Shipboard Machinery & Fabrication Workshops', 'Direct Campus Placement in Top Tanker & Bulk Fleets'],
    imageUrl: '/images/btech_marine_engineering_course_infographic.jpg'
  },
  {
    id: 'after-graduation-gme-dehradun',
    aliases: ['after-graduation-merchant-navy-dehradun', 'graduate-gme', 'gme', 'gme-course'],
    title: 'Graduate / B.Tech',
    category: 'GME (Graduate Marine Engineering)',
    subtitle: '1-Year conversion marine engineering program for graduates in Dehradun',
    eligibility: 'B.E. / B.Tech in Mechanical Engineering or Naval Architecture with min 60% aggregate & min 50% in English. Age: Up to 28 yrs.',
    duration: '1 Year Conversion Course + 6 Months Sea Time',
    description: 'Specialized 1-year training preparing mechanical and naval architecture graduates for Merchant Navy Junior Engineer officer positions.',
    fullDescription: 'Graduate Marine Engineering (GME) converts mechanical engineers into qualified Marine Engineers, allowing direct entry into engine room management on cargo, tanker, and container vessels. The program provides comprehensive training in marine power plants, propulsion systems, ship stability, and safety operations.',
    targetExam: 'DG Shipping Entrance & Company Sponsorship Interviews (Synergy, Fleet, Anglo, Scorpio, etc.)',
    highlights: ['High Salary Packages ($1,500–$3,500/mo)', 'Engine Room Simulator & Automation Labs', 'Direct Sponsorship Drive Coaching', 'Expert Chief Engineer Mentorship'],
    imageUrl: '/images/gme_course_infographic.jpg'
  },
  {
    id: 'after-btech-eto-dehradun',
    aliases: ['after-btech-marine-engineering-dehradun', 'graduate-eto', 'eto', 'eto-course'],
    title: 'Graduate / Diploma',
    category: 'ETO (Electro-Technical Officer)',
    subtitle: 'Electrical, Electronics & Instrumentation specialist course in Dehradun',
    eligibility: 'Degree or Diploma in Electrical, Electronics, EEE, ECE, or Instrumentation with min 60% & min 50% in English. Age: Up to 28-35 yrs.',
    duration: '4 Months Course + 8 Months Sea Training',
    description: 'Electrical and electronics specialized training for high-tech automated commercial marine vessels and LNG carriers.',
    fullDescription: 'Electro-Technical Officer (ETO) course trains electrical and electronics engineers to handle complex automated control systems, high-voltage power generation, dynamic positioning, and satellite communication equipment on modern merchant ships.',
    targetExam: 'ETO College Entrance & Company Sponsorship Interviews',
    highlights: ['High Global Demand on Automated Vessels', 'High-Voltage Switchboards & PLC Training', 'Rapid Career Advancement to Chief Electro-Technical Officer', '100% Placement Guidance in Dehradun'],
    imageUrl: '/images/eto_course_infographic.jpg'
  }
];
