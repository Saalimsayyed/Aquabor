// Core types for AQUABOR website

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
  applications: string[];
  process: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  year: string;
  client?: string;
  tags: string[];
}

export interface Equipment {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  label: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  items: Equipment[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
