import { 
  Award, 
  Building2, 
  CalendarClock, 
  CheckCircle2, 
  Users, 
  Wind, 
  Thermometer, 
  Factory,
  Stethoscope,
  Briefcase
} from 'lucide-react';
import { StatItem, ServiceItem, ProjectCategory, ContactInfo } from './types';

export const COMPANY_NAME = "HEVACO Cooling Systems (Pvt.) Ltd";
export const TAGLINE = "Your Trusted HVAC Partner Since 2007";
export const FOUNDED_YEAR = 2007;

export const CONTACT_INFO: ContactInfo = {
  phone: ["0471-2362115", "9447196429"],
  email: "hevaco_india@yahoo.co.in",
  address: "Konark, EVRA No. B-72, Elipodu-Valiyavila Road, Thirumala P.O., Thiruvananthapuram - 695 006",
  hours: "Mon-Sat: 9:00 AM - 6:00 PM"
};

export const STATS: StatItem[] = [
  { id: 1, value: "18+", label: "Years Experience", icon: CalendarClock },
  { id: 2, value: "200+", label: "Completed Projects", icon: CheckCircle2 },
  { id: 3, value: "75+", label: "AMC Contracts", icon: Users },
  { id: 4, value: "50+", label: "Years Leader Exp.", icon: Award },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Healthcare Specialist",
    description: "Premier provider of hospital and cleanroom HVAC solutions meeting NABH/NABL standards.",
    icon: Stethoscope,
    details: ["Operation Theaters", "ICU & Critical Care", "Clean Rooms (ISO Class 1-8)", "HEPA/ULPA Filtration"]
  },
  {
    id: 2,
    title: "Commercial & Institutional",
    description: "Large-scale installations for IT parks, banks, government buildings, and educational campuses.",
    icon: Building2,
    details: ["VRF Systems", "Chilled Water Systems", "Ductable Splits", "Ventilation Solutions"]
  },
  {
    id: 3,
    title: "Expert Consultancy",
    description: "End-to-end design and engineering services for architects and developers.",
    icon: Briefcase,
    details: ["Heat Load Calculation", "System Design", "Energy Audits", "Tender Preparation"]
  },
  {
    id: 4,
    title: "Service & Maintenance",
    description: "Comprehensive Annual Maintenance Contracts (AMC) ensuring system reliability.",
    icon: Wind,
    details: ["24/7 Mobile Service", "Preventive Maintenance", "System Optimization", "Genuine Spares"]
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    clients: [
      "KJK Hospital (Complete HVAC)",
      "Punarjani Hospital",
      "Govt. Hospital Neyyatinkara",
      "Cosmo Hospital",
      "Ramakrishna Hospital"
    ]
  },
  {
    id: 'gov',
    title: 'Govt & Defense',
    clients: [
      "VSSC (Vikram Sarabhai Space Centre)",
      "Military Station Canteen",
      "CPWD / IT@School",
      "NIIST",
      "Govt Engineering College"
    ]
  },
  {
    id: 'corp',
    title: 'Corporate & Banking',
    clients: [
      "Quest Global (Technopark)",
      "State Bank of India (20+ Branches)",
      "Asianet News",
      "TCS / Passport Seva Kendra",
      "H&R Block"
    ]
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Retail',
    clients: [
      "Palmshore Hotel & Resorts",
      "KTDC Muscat Hotel",
      "Lulu Mall (Paragon)",
      "Zudio (Trent)",
      "KFC Vellayambalam"
    ]
  }
];

export const FEATURES = [
  { title: "Technical Excellence", desc: "Led by Mr. Mohankumar N with 5 decades of industry expertise." },
  { title: "Strategic Partnership", desc: "Partnered with DeltaQ for advanced cleanroom technology." },
  { title: "Customer Centric", desc: "Cost-effective solutions with personalized attention." },
  { title: "Reliability", desc: "75+ active AMC clients and 24/7 emergency support." }
];