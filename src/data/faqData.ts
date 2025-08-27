import { Lightbulb, Users, FileText, Clock, UserPlus, Trophy, Code, Rocket, Zap, Target } from 'lucide-react';

export interface FAQItem {
  id: number;
  number: string;
  question: string;
  answer: string;
  icon: any;
  color: string;
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    number: '01',
    question: 'What is a Hackathon?',
    answer: 'A high-speed innovation sprint where teams build tech solutions in a short time. Think of it as the Monaco GP of coding—fast, strategic, and thrilling.',
    icon: Lightbulb,
    color: 'bg-f1-red'
  },
  {
    id: 2,
    number: '02',
    question: 'Who Can Participate?',
    answer: 'Open to students, professionals, hobbyists—anyone passionate about tech, creativity, or collaboration.',
    icon: Users,
    color: 'bg-f1-orange'
  },
  {
    id: 3,
    number: '03',
    question: 'What Are the Rules?',
    answer: 'Projects must be started during the hackathon, teams of 2–5 members, and submissions before deadline are mandatory.',
    icon: FileText,
    color: 'bg-f1-teal'
  },
  {
    id: 4,
    number: '04',
    question: 'How Long Does It Last?',
    answer: 'Typically 48 hours, from kickoff to submission. A true endurance race!',
    icon: Clock,
    color: 'bg-f1-green'
  },
  {
    id: 5,
    number: '05',
    question: 'How to Register?',
    answer: 'Visit the hackathon site, fill the team form, and confirm via email to claim your grid position.',
    icon: UserPlus,
    color: 'bg-f1-blue'
  },
  {
    id: 6,
    number: '06',
    question: 'What\'s the Team Size Limit?',
    answer: 'Minimum 2, maximum 5 per team. Team chemistry is your pit crew.',
    icon: Trophy,
    color: 'bg-f1-red'
  },
  {
    id: 7,
    number: '07',
    question: 'Are There Any Themes?',
    answer: 'Yes—each event has specific tracks (e.g., sustainability, AI, automation). Choose your racing lane.',
    icon: Code,
    color: 'bg-f1-orange'
  },
  {
    id: 8,
    number: '08',
    question: 'What Tools Can I Use?',
    answer: 'Any programming language, library, or platform—as long as it\'s legal and open-source-friendly.',
    icon: Rocket,
    color: 'bg-f1-teal'
  },
  {
    id: 9,
    number: '09',
    question: 'What\'s the Judging Criteria?',
    answer: 'Innovation, impact, design, and execution speed. Just like F1, it\'s about precision and performance.',
    icon: Zap,
    color: 'bg-f1-green'
  },
  {
    id: 10,
    number: '10',
    question: 'Is There Any Entry Fee?',
    answer: 'No entry fee. Participation is free—this race is for everyone.',
    icon: Target,
    color: 'bg-f1-blue'
  },
  {
    id: 11,
    number: '11',
    question: 'Are International Participants Allowed?',
    answer: 'Yes! We welcome teams from all over the world. It\'s a global grid.',
    icon: Lightbulb,
    color: 'bg-f1-red'
  },
  {
    id: 12,
    number: '12',
    question: 'Can I Join Solo?',
    answer: 'Yes, but it\'s recommended to form or join a team to collaborate effectively.',
    icon: Users,
    color: 'bg-f1-orange'
  },
  {
    id: 13,
    number: '13',
    question: 'Will Mentors Be Available?',
    answer: 'Absolutely. Industry experts will be available in pit-stop sessions throughout the event.',
    icon: FileText,
    color: 'bg-f1-teal'
  },
  {
    id: 14,
    number: '14',
    question: 'What is the Prize Pool?',
    answer: 'Prizes vary but typically include cash rewards, goodies, internships, and sponsor perks.',
    icon: Clock,
    color: 'bg-f1-green'
  },
  {
    id: 15,
    number: '15',
    question: 'Are Pre-Built Projects Allowed?',
    answer: 'No. All projects must be built during the hackathon window.',
    icon: UserPlus,
    color: 'bg-f1-blue'
  },
  {
    id: 16,
    number: '16',
    question: 'What\'s the Tech Stack Requirement?',
    answer: 'Open. Use anything from Python to Flutter—pick what suits your project\'s racetrack.',
    icon: Trophy,
    color: 'bg-f1-red'
  },
  {
    id: 17,
    number: '17',
    question: 'Can We Pivot Our Idea Midway?',
    answer: 'Yes, strategy adjustments are allowed as long as your final product meets submission guidelines.',
    icon: Code,
    color: 'bg-f1-orange'
  },
  {
    id: 18,
    number: '18',
    question: 'Will There Be Demo Rounds?',
    answer: 'Yes. You\'ll pitch to judges in demo sessions like post-race interviews.',
    icon: Rocket,
    color: 'bg-f1-teal'
  },
  {
    id: 19,
    number: '19',
    question: 'Are Certificates Provided?',
    answer: 'Yes. All participants receive certificates, and winners get spotlight mentions.',
    icon: Zap,
    color: 'bg-f1-green'
  },
  {
    id: 20,
    number: '20',
    question: 'Is There a Code of Conduct?',
    answer: 'Yes. Respect, inclusion, originality, and ethical collaboration are strictly enforced.',
    icon: Target,
    color: 'bg-f1-blue'
  }
];