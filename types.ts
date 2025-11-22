import { LucideIcon } from 'lucide-react';

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  clients: string[];
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
  hours: string;
}