import { ExperienceItem } from '@/types';

export const journeyData: ExperienceItem[] = [
  {
    id: 'undergrad-education',
    period: '2023 — Present (2nd Year)',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Mirai School of Technology',
    type: 'education',
    location: 'Ghaziabad, India',
    description:
      'Pursuing foundational and advanced undergraduate coursework in Computer Science with a specialization in Artificial Intelligence and Machine Learning. Actively engaged in algorithmic problem solving, software engineering principles, and systems programming.',
    highlights: [
      'Core focus on Data Structures & Algorithms (C++)',
      'Object-Oriented Programming and Software Engineering fundamentals',
      'Exploration of Machine Learning concepts, linear algebra, and data science tooling',
      'Hands-on laboratory coursework and practical application development',
    ],
    skillsUsed: ['C++', 'Python', 'DSA', 'OOP', 'Mathematics', 'Computer Science Fundamentals'],
  },
  {
    id: 'freelance-web-dev',
    period: '2023 — Present',
    role: 'Freelance Web Developer & Frontend Builder',
    organization: 'Independent / Client Projects',
    type: 'freelance',
    location: 'Remote / Delhi NCR',
    description:
      'Designing and developing modern, responsive websites and web applications for businesses and individual clients. Focusing on clean UI architecture, conversion clarity, and fast turnaround times.',
    highlights: [
      'Delivered responsive web interfaces customized to client branding and business objectives',
      'Engineered structured pricing sections, lead capture mechanisms, and interactive product showcases',
      'Ensured cross-browser compatibility and optimized mobile viewport responsiveness',
      'Managed end-to-end frontend deployment pipelines on Vercel',
    ],
    skillsUsed: ['Next.js', 'React', 'JavaScript', 'CSS Modules', 'UI/UX Design', 'Vercel'],
  },
  {
    id: 'creative-engineering-lab',
    period: 'Continuous Exploration',
    role: 'Digital Engineering Lab & Open Source',
    organization: 'Self-Directed Exploration',
    type: 'building',
    location: 'Open Source / GitHub',
    description:
      'Building experimental interactive projects, testing modern web standards, exploring WebGL/3D graphics with Three.js, and continuously refining algorithmic problem solving.',
    highlights: [
      'Implemented real-time 3D scenes and particle shaders on the web',
      'Explored modern frontend design patterns and micro-interaction architectures',
      'Consistent practice on core algorithmic data structures and competitive programming patterns',
    ],
    skillsUsed: ['Three.js', 'WebGL', 'Modern CSS', 'TypeScript', 'Git'],
  },
];
