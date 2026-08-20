export interface ShippingCompany {
  name: string;
  logoText: string;
  badgeBg: string;
  badgeTextColor: string;
}

export const shippingCompanies: ShippingCompany[] = [
  { name: 'Fleet Management Ltd', logoText: 'FLEET MANAGEMENT', badgeBg: 'bg-emerald-100', badgeTextColor: 'text-emerald-900' },
  { name: 'Synergy Marine Group', logoText: 'SYNERGY', badgeBg: 'bg-blue-100', badgeTextColor: 'text-blue-900' },
  { name: 'Thome Group', logoText: 'THOME (ARI)', badgeBg: 'bg-amber-100', badgeTextColor: 'text-amber-900' },
  { name: 'Executive Ship Management', logoText: 'ESM (SAMUNDRA)', badgeBg: 'bg-indigo-100', badgeTextColor: 'text-indigo-900' },
  { name: 'TS RAHMAN', logoText: 'TS RAHMAN', badgeBg: 'bg-cyan-100', badgeTextColor: 'text-cyan-900' },
  { name: 'Great Eastern Shipping', logoText: 'GREAT EASTERN', badgeBg: 'bg-red-100', badgeTextColor: 'text-red-900' },
  { name: 'MOL Shipping', logoText: 'MOL FLEET', badgeBg: 'bg-slate-100', badgeTextColor: 'text-slate-900' }
];

export interface Testimonial {
  id: number;
  name: string;
  photoUrl: string;
  course: string;
  companyName: string;
  companyLogo: string;
  quote: string;
  year: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Kuldeep Pal',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    course: 'Pre-Sea Student',
    companyName: 'Officers Wing Academy',
    companyLogo: 'OFFICERS WING',
    quote: '"I have been a part of this academy. It\'s a great academy which helps you develop more and more in your learning, communication as well as in discipline. I travelled for 2 long days to get there!..they are very supportive just like a family."',
    year: '2023'
  },
  {
    id: 2,
    name: 'Pankaj Sajwan',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    course: 'First Batch Officer Cadet',
    companyName: 'Placed Officer',
    companyLogo: 'OFFICERS WING ALUMNI',
    quote: '"One of best institute for merchant Navy preparation in dehradun, I have been with anurag sir from 2018, our batch was the first and everyone got placed in big companies. Thank you anurag sir for clearing students doubts."',
    year: '2023'
  },
  {
    id: 3,
    name: 'Madan Kala',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    course: 'Parent of Selected Cadet',
    companyName: 'Synergy Marine Group',
    companyLogo: 'SYNERGY',
    quote: '"Thankyou Officers Wing Academy. I am very much thankful with your efforts. You have guided my son very nicely. Now he is in Synergy. I must say your academy interview training is very impressive. Thanks mr. Anurag."',
    year: '2024'
  },
  {
    id: 4,
    name: 'Swathi Sankar',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    course: 'Kerala Aspirant',
    companyName: 'Pre-Sea Cadet',
    companyLogo: 'COUNSELLING',
    quote: '"I am from Kerala, I met sir and underwent a councilling session..i was comfortable talking to him and it was really nice, he guided me for various interviews and abt how to develop my personality. To the students looking forward to a career in merchant Navy sir will provide with good career guidance."',
    year: '2023'
  },
  {
    id: 5,
    name: 'Gaurav Sharma',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    course: 'DNS Sponsorship Cadet',
    companyName: '3 Sponsorship Offers',
    companyLogo: 'DNS SPONSORSHIP',
    quote: '"Thank you Officers Wing for guidance. All your knowledge and experience helped me a lot to get more than three companies sponsorship. Best institute for Dns sponsorship and imucet. Thank you Anurag sir."',
    year: '2024'
  },
  {
    id: 6,
    name: 'Siddhant Goyal',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    course: 'Rishikesh Cadet',
    companyName: 'Fleet Management Limited',
    companyLogo: 'FLEET MANAGEMENT',
    quote: '"I am from rishikesh, my uncle suggested me about the OFFICERS WINGS academy, and now I am selected in Fleet management Limited within a month. Highly recommended to new student who want to pursue Merchant Navy."',
    year: '2024'
  }
];
