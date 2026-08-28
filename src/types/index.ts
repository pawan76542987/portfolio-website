export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  shortDescription: string;
  problem: string;
  solution: string;
  contributions: string[];
  technicalHighlights: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor?: string;
  architectureHighlights?: {
    label: string;
    description: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    note?: string;
  }[];
  visualType: 'frontend' | 'backend' | 'dsa' | 'creative' | 'data' | 'ai';
}

export interface Principle {
  number: string;
  title: string;
  summary: string;
  deepDive: string;
  technicalImpact: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: 'education' | 'freelance' | 'building';
  location: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  primary?: boolean;
  type: 'email' | 'github' | 'linkedin' | 'instagram' | 'phone';
}
