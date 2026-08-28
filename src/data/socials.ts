import { SocialLink } from '@/types';

export const personalInfo = {
  fullName: 'Pawan Uniyara',
  displayName: 'Pawan',
  role: 'Full-Stack Developer • CSE (AI/ML) Undergraduate',
  shortRole: 'Full-Stack Developer & AI/ML Enthusiast',
  institution: 'Mirai School of Technology',
  degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
  year: '2nd Year',
  location: 'Delhi / Ghaziabad, India',
  email: 'pmm60718@gmail.com',
  phone: '+91 8982535643',
  resumeUrl: '/resume.pdf',
  githubUrl: 'https://github.com/pawan76542987',
  linkedinUrl: 'https://www.linkedin.com/in/pawan-uniyara-595b1a37b/',
  instagramUrl: 'https://www.instagram.com/pawan_mali002/',
  availableForWork: true,
  statusText: 'Available for selected projects & internships',
  tagline: 'Building thoughtful software at the intersection of engineering, interaction, and the web.',
};

export const socialLinks: SocialLink[] = [
  {
    platform: 'Email',
    handle: 'pmm60718@gmail.com',
    url: 'mailto:pmm60718@gmail.com',
    primary: true,
    type: 'email',
  },
  {
    platform: 'GitHub',
    handle: 'pawan76542987',
    url: 'https://github.com/pawan76542987',
    primary: true,
    type: 'github',
  },
  {
    platform: 'LinkedIn',
    handle: 'pawan-uniyara',
    url: 'https://www.linkedin.com/in/pawan-uniyara-595b1a37b/',
    primary: true,
    type: 'linkedin',
  },
  {
    platform: 'Instagram',
    handle: '@pawan_mali002',
    url: 'https://www.instagram.com/pawan_mali002/',
    primary: false,
    type: 'instagram',
  },
];
