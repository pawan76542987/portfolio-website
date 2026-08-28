import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    number: '01',
    title: 'Business Websites',
    subtitle: 'Modern, responsive web presence tailored for brands',
    description:
      'High-impact, professional websites engineered for businesses and services to present their offerings clearly, establish credibility, and convert visitors into inquiries.',
    deliverables: [
      'Responsive design across all devices',
      'Clear service & pricing tier structures',
      'Contact & lead-generation integration',
      'Optimized performance and fast load times',
    ],
    idealFor: 'Local businesses, studios, fitness centers, and professional service firms.',
  },
  {
    id: 'landing-pages',
    number: '02',
    title: 'High-Converting Landing Pages',
    subtitle: 'Focused, conversion-driven product & campaign pages',
    description:
      'Laser-focused single-page experiences built to showcase digital products, event registrations, or specific value propositions with clear visual hierarchy.',
    deliverables: [
      'Strategic visual hierarchy and narrative pacing',
      'Compelling hero sections and feature breakdowns',
      'Frictionless call-to-action pathways',
      'Clean micro-interactions that reinforce value',
    ],
    idealFor: 'Product launches, marketing campaigns, and startup announcements.',
  },
  {
    id: 'fullstack-web-apps',
    number: '03',
    title: 'Interactive Web Applications',
    subtitle: 'Frontend interfaces connected to APIs and data stores',
    description:
      'Interactive web applications combining component-driven React/Next.js frontends with structured API routing and database persistence.',
    deliverables: [
      'Dynamic client-side routing & state management',
      'REST API and third-party service integration',
      'Structured database schemas (MongoDB, PostgreSQL, Supabase)',
      'Secure authentication workflows',
    ],
    idealFor: 'Web utilities, content portals, dashboards, and custom client tools.',
  },
  {
    id: 'interactive-3d-experiences',
    number: '04',
    title: 'Interactive & 3D Web Experiences',
    subtitle: 'WebGL and motion-driven creative coding',
    description:
      'Memorable digital experiences utilizing Three.js, WebGL canvas environments, and choreographed motion to create spatial depth without compromising loading speed.',
    deliverables: [
      'Custom Three.js scenes and camera rigs',
      'Hardware-accelerated animations',
      'Adaptive quality and mobile fallbacks',
      'Accessible interactions and graceful degradation',
    ],
    idealFor: 'Creative agencies, tech showcases, and memorable brand statements.',
  },
  {
    id: 'website-modernization',
    number: '05',
    title: 'Website Modernization & Performance',
    subtitle: 'Revitalizing legacy interfaces with modern standards',
    description:
      'Upgrading outdated websites with modern responsive layouts, sub-millisecond interaction feedback, accessible markup, and optimized Core Web Vitals.',
    deliverables: [
      'Mobile-first responsive overhaul',
      'Performance profiling & bundle reduction',
      'Accessibility and semantic HTML updates',
      'Migration to modern React/Next.js stack',
    ],
    idealFor: 'Outdated business sites needing modern speed, polish, and mobile UX.',
  },
];
