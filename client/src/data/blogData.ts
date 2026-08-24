export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorImage: string;
  excerpt: string;
  coverImage: string;
  content: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
  seoKeywords: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-to-join-merchant-navy-after-12th',
    title: 'How to Join Merchant Navy After 12th — Complete 2026 Guide',
    category: 'IMU-CET & DNS',
    date: '10th August 2026',
    readTime: '6 min read',
    author: 'Capt. Anurag Singh',
    authorRole: 'Master Mariner & Founder',
    authorImage: '/images/founder.jpg',
    excerpt: 'Step-by-step roadmap to clear IMU-CET written examination, secure leading company sponsorships, and pass DG Shipping pre-sea medical tests.',
    coverImage: '/images/officers_wing_banner.jpg',
    seoKeywords: 'how to join merchant navy after 12th, IMUCET 2026 roadmap, DNS course eligibility, merchant navy sponsorship after 12th',
    content: [
      {
        heading: '1. Educational & Age Eligibility Criteria',
        body: 'To join the Merchant Navy as a Navigation Deck Officer after Class 12th, candidates must fulfil strict DG Shipping requirements:',
        bulletPoints: [
          'Minimum 60% aggregate marks in Physics, Chemistry, and Mathematics (PCM) in Class 12th.',
          'Minimum 50% marks in English in 10th or 12th Board examinations.',
          'Age limit: 17.5 to 25 years on the date of course commencement.',
          '6/6 vision in both eyes without visual aids and zero color blindness.'
        ]
      },
      {
        heading: '2. The Two Mandatory Pillars: IMU-CET & Company Sponsorship',
        body: 'Merchant Navy entry after 12th requires clearing two essential hurdles simultaneously:',
        bulletPoints: [
          'IMU-CET Examination: The national entrance test conducted by Indian Maritime University assessing Physics, Chemistry, Maths, English, and Aptitude.',
          'Company Sponsorship: Securing a sponsorship letter from DG Shipping approved shipping companies like Synergy, Fleet Management, ESM, or Great Eastern before joining pre-sea training.'
        ]
      },
      {
        heading: '3. Pre-Sea Course: Diploma in Nautical Science (DNS)',
        body: 'Once sponsored and qualified in IMU-CET, candidates undergo a 1-Year Diploma in Nautical Science (DNS) course at a DG-approved maritime academy, followed by 18 months of structured onboard sea training with tax-free stipend earnings.'
      },
      {
        heading: '4. Why Mentorship Matters at Officers Wing Academy',
        body: 'Officers Wing Academy in Dehradun specializes in dedicated sponsorship interview coaching, psychometric test prep, and physical conditioning under Master Mariners to ensure 100% selection rates.'
      }
    ]
  },
  {
    id: '2',
    slug: 'what-is-imu-cet-eligibility-syllabus-preparation',
    title: 'What is IMU-CET? Eligibility, Syllabus & Preparation Tips',
    category: 'Entrance Exams',
    date: '5th August 2026',
    readTime: '7 min read',
    author: 'Officers Wing Faculty',
    authorRole: 'Senior Pre-Sea Instructors',
    authorImage: '/images/faculty_mentor.jpg',
    excerpt: 'Comprehensive analysis of Physics, Chemistry, Maths, English, and General Aptitude pattern for Indian Maritime University Common Entrance Test.',
    coverImage: '/images/imu_cet_batch_classroom.jpg',
    seoKeywords: 'what is IMUCET exam, IMU CET syllabus 2026, IMU CET preparation tips, Indian Maritime University entrance test',
    content: [
      {
        heading: '1. Overview of IMU-CET Examination',
        body: 'The Indian Maritime University Common Entrance Test (IMU-CET) is a computer-based online test (CBT) conducted twice annually (June & December sessions) for admission into nautical and engineering maritime streams.'
      },
      {
        heading: '2. Detailed Exam Pattern & Marking Scheme',
        body: 'The 3-hour exam comprises 200 multiple-choice questions distributed across 5 core sections:',
        bulletPoints: [
          'Mathematics (50 Questions) — Class 11th & 12th Algebra, Calculus, Trigonometry',
          'Physics (50 Questions) — Mechanics, Optics, Electricity, Magnetism',
          'Chemistry (20 Questions) — Physical & Organic fundamentals',
          'English (25 Questions) — Grammar, Vocabulary, Comprehension',
          'General Aptitude & Reasoning (55 Questions) — Logic, Pattern recognition, Spatial reasoning'
        ]
      },
      {
        heading: '3. Preparation Strategy from Officers Wing Dehradun',
        body: 'To secure a top All India Rank (AIR) in IMU-CET, focus on speed and accuracy. Officers Wing provides daily CBT mock tests, NCERT formula revision, and previous 10-year question solving workshops.'
      }
    ]
  },
  {
    id: '3',
    slug: 'gp-rating-course-after-10th-eligibility-duration-career-path',
    title: 'GP Rating Course After 10th: Eligibility, Duration & Career Path',
    category: 'Career Guidance',
    date: '28th July 2026',
    readTime: '5 min read',
    author: 'Capt. Anurag Singh',
    authorRole: 'Master Mariner & Founder',
    authorImage: '/images/founder.jpg',
    excerpt: 'Detailed overview of 6-month General Purpose rating course for 10th pass students aiming for early marine careers.',
    coverImage: '/images/gp_rating_batch.jpg',
    seoKeywords: 'GP rating course after 10th, GP rating eligibility salary, general purpose rating Dehradun, merchant navy after 10th',
    content: [
      {
        heading: '1. What is GP Rating (General Purpose Rating)?',
        body: 'General Purpose (GP) Rating is a 6-month pre-sea training program approved by DG Shipping for candidates who have completed Class 10th. The course trains candidates in both Deck and Engine room seamanship duties.'
      },
      {
        heading: '2. Eligibility Requirements for 10th Pass Students',
        body: 'Candidate qualifications for GP Rating enrolment:',
        bulletPoints: [
          'Passed 10th Standard with minimum 40% aggregate marks.',
          'Minimum 40% marks in English subject in 10th Board.',
          'Age: 17.5 to 25 years at course commencement.',
          'Physical Fitness: Medical fitness certificate from a DG Shipping approved doctor.'
        ]
      },
      {
        heading: '3. Career Progression & Salary Trajectory',
        body: 'Trainee Rating (Salary: ₹35,000–₹50,000/month) ➔ Able Seaman / Motorman (₹70,000–₹1,20,000/month) ➔ Bosun (₹1,50,000–₹2,20,000/month) ➔ Officer promotion via NCV exams.'
      }
    ]
  },
  {
    id: '4',
    slug: 'merchant-navy-salary-in-india-rank-wise-breakdown',
    title: 'Merchant Navy Salary in India — Rank-wise Breakdown 2026',
    category: 'Salaries & Benefits',
    date: '15th July 2026',
    readTime: '6 min read',
    author: 'Officers Wing Faculty',
    authorRole: 'Senior Pre-Sea Instructors',
    authorImage: '/images/faculty_office.jpg',
    excerpt: 'Explore tax-free income structures from Deck Cadet to Master Captain and Junior Engineer to Chief Engineer on commercial fleets.',
    coverImage: '/images/shipping_partners_grid.jpg',
    seoKeywords: 'merchant navy salary in India, deck officer salary, chief engineer salary, merchant navy tax free income 2026',
    content: [
      {
        heading: '1. Why Merchant Navy Salaries are High & Tax-Free',
        body: 'Under Section 6(1) of the Indian Income Tax Act, seafarers spending 183 days or more outside India on foreign-going vessels qualify for Non-Resident Indian (NRI) status, rendering 100% of their earnings tax-free.'
      },
      {
        heading: '2. Deck Department Rank-wise Salary Structure',
        body: 'Current monthly salary ranges on container, tanker, and bulk carrier fleets:',
        bulletPoints: [
          'Trainee Deck Cadet (DNS): ₹35,000 to ₹70,000 / month (Stipend)',
          '3rd Officer: ₹2,00,000 to ₹3,50,000 / month',
          '2nd Officer: ₹3,20,000 to ₹4,80,000 / month',
          'Chief Officer: ₹5,50,000 to ₹8,00,000 / month',
          'Master Captain: ₹8,50,000 to ₹14,00,000+ / month'
        ]
      },
      {
        heading: '3. Engine Department Rank-wise Salary Structure',
        body: 'Engine Officer salary trajectory:',
        bulletPoints: [
          'Junior Engineer / Trainee ETO: ₹40,000 to ₹75,000 / month',
          '4th Engineer: ₹2,20,000 to ₹3,60,000 / month',
          '3rd Engineer: ₹3,20,000 to ₹5,00,000 / month',
          'Second Engineer: ₹5,50,000 to ₹8,50,000 / month',
          'Chief Engineer: ₹9,00,000 to ₹15,00,000+ / month'
        ]
      }
    ]
  }
];
