
import React from 'react';
import { 
  Users, 
  Building2, 
  Truck, 
  CalendarDays, 
  Factory, 
  Award, 
  History, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { Client, Service, Leader, Highlight } from './types';

export const HIGHLIGHTS: Highlight[] = [
  {
    label: "Established",
    value: "2014",
    description: "Formed as a professional organization",
    icon: <Building2 className="w-8 h-8 text-blue-600" />
  },
  {
    label: "Industry Experience",
    value: "Since 1996",
    description: "Three decades of operational mastery",
    icon: <History className="w-8 h-8 text-blue-600" />
  },
  {
    label: "Annual Turnover",
    value: "Above ₹25 Cr",
    description: "Demonstrating financial stability",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />
  },
  {
    label: "Workforce Strength",
    value: "750+ Employees",
    description: "Skilled & dedicated manpower",
    icon: <Users className="w-8 h-8 text-blue-600" />
  }
];

export const SERVICES: Service[] = [
  {
    title: "Skilled & Unskilled Manpower Supply",
    description: "Customized staffing solutions for varied technical and manual roles, ensuring the right fit for every operation.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Contract Staffing & Management",
    description: "End-to-end workforce management that reduces administrative burden while maintaining high performance.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Factory Operations Support",
    description: "Integrated support for production lines, assembly, and core factory functions with a focus on safety.",
    icon: <Factory className="w-6 h-6" />
  },
  {
    title: "Logistics & Material Handling",
    description: "Expert workforce for warehouse operations, material movement, and efficient supply chain support.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "Corporate Events & Programs",
    description: "Comprehensive arrangement and management of corporate functions, events, and large-scale programs.",
    icon: <CalendarDays className="w-6 h-6" />
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: "Srinivasan Kalidass",
    title: "Chief Business Head",
    values: ["Strategic operational planning", "Customer-focused decision-making"]
  },
  {
    name: "Dilli Babu",
    title: "Head – Operations & HR",
    values: ["People-centric workforce management", "Operational excellence"]
  },
  {
    name: "Venkatesan Muthuram",
    title: "Head – Finance",
    values: ["Financial governance & discipline", "Regulatory compliance"]
  }
];

export const CLIENTS: Client[] = [
  { name: "KYB Motorcycle Suspension System India Pvt. Ltd." },
  { name: "Godrej Consumer Products" },
  { name: "Aattral Components Private Limited" },
  { name: "Bray Controls India Pvt. Ltd." },
  { name: "Bontaz Automotive India Pvt. Ltd." },
  { name: "Wonjin Autoparts India Pvt. Ltd." },
  { name: "Daejung Moparts Pvt. Ltd." },
  { name: "Super Good Steels" },
  { name: "Mahle Engine Components" },
  { name: "Woory Automotive India" },
  { name: "Valeo Friction Materials" },
  { name: "Triumph International Private Limited" }
];

export const WHY_CHOOSE_US = [
  "Nearly three decades of manpower management experience",
  "Proven execution capability across manufacturing and logistics industries",
  "Strong leadership with deep operational governance",
  "Transparent, process-driven, and fully compliant workforce systems",
  "Ability to manage large-scale workforce operations efficiently"
];
