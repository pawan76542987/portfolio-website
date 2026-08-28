import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'train-beyond-limits',
    number: '01',
    title: 'Train Beyond Limits',
    category: 'Business Web Experience',
    role: 'Frontend Engineering & UI Design',
    timeline: 'Recent Project',
    shortDescription:
      'A modern, responsive web experience designed for fitness centers to present membership tiers, workout programs, trainer profiles, and conversion pathways.',
    problem:
      'Traditional local fitness businesses often have weak, fragmented digital experiences, making it difficult for prospective members to understand service offerings, compare program pricing on mobile devices, and initiate inquiries.',
    solution:
      'Engineered a high-impact, responsive fitness platform with structured pricing tables, clear call-to-action hierarchies, reusable UI component architecture, and asset optimization for swift mobile load times.',
    contributions: [
      'Designed and developed the component-driven frontend architecture with React/Next.js',
      'Built fluid, responsive layouts optimized for mobile, tablet, and desktop viewports',
      'Structured program tiers, pricing models, and lead-generation contact pathways',
      'Optimized visual media delivery to minimize layout shifts (CLS) and improve load speed',
      'Configured continuous deployment and edge routing via Vercel',
    ],
    technicalHighlights: [
      'Component-driven modular layout architecture',
      'Fluid mobile-first responsive grid system',
      'Optimized asset delivery pipeline',
      'Production deployment on Vercel',
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS Modules', 'HTML5', 'Vercel'],
    liveUrl: 'https://train-beyond-limits-gym.vercel.app/',
    githubUrl: 'https://github.com/pawan76542987/TRAIN-BEYOND-LIMITS-gym',
    featured: true,
    accentColor: '#38bdf8',
    architectureHighlights: [
      {
        label: 'Modular UI Architecture',
        description: 'Decoupled presentation blocks for pricing tiers, hero banners, and program cards for easy content updates.',
      },
      {
        label: 'Responsive Rhythm',
        description: 'Elastic layout scaling across mobile touchscreens to wide desktop monitors without horizontal scroll.',
      },
    ],
  },
  {
    id: 'zero-gaming',
    number: '02',
    title: 'Zero Gaming Platform',
    category: 'Interactive Web Experience',
    role: 'Frontend Architecture & Interaction Design',
    timeline: 'Recent Project',
    shortDescription:
      'A responsive gaming-focused web platform centered on browser game discovery, category filtering, and an immersive dark-mode aesthetic.',
    problem:
      'Gaming content directories frequently suffer from cluttered visual layouts, confusing navigation hierarchies, and poor responsiveness on handheld screens.',
    solution:
      'Created a streamlined gaming directory interface with structured game-card cards, category navigation, CSS micro-interactions, and a cohesive dark UI aesthetic.',
    contributions: [
      'Engineered the frontend application with reusable game-card components',
      'Implemented clean category and display organization systems',
      'Created responsive grid layouts tailored for browsing media-rich gaming catalogs',
      'Crafted interactive CSS hover states and focus feedback indicators',
      'Deployed production build on Vercel with optimized asset handling',
    ],
    technicalHighlights: [
      'Dynamic game-card component system',
      'Immersive dark visual interface architecture',
      'CSS micro-interactions with hardware-accelerated transforms',
      'Fast client-side rendering pipeline',
    ],
    technologies: ['Next.js', 'React', 'JavaScript', 'CSS3', 'HTML5', 'Vercel'],
    liveUrl: 'https://zero-gaming-using-anti-gravity.vercel.app/',
    githubUrl: 'https://github.com/pawan76542987/Zero-gaming-using-AntiGravity',
    featured: true,
    accentColor: '#818cf8',
    architectureHighlights: [
      {
        label: 'Catalog Component Engine',
        description: 'Reusable game showcase cards with interactive media previews and responsive grid constraints.',
      },
      {
        label: 'Dark Mode Immersion',
        description: 'High-contrast typography and subtle elevation surfaces designed for low-light browsing sessions.',
      },
    ],
  },
  {
    id: 'streamflix',
    number: '03',
    title: 'StreamFlix Discovery',
    category: 'Media & Entertainment Interface',
    role: 'Frontend Development & Content Layout',
    timeline: 'Project Showcase',
    shortDescription:
      'A modern movie and television discovery interface focused on responsive presentation, content browsing, and cinema-grade visual hierarchy.',
    problem:
      'Discovering trending entertainment media requires clean categorization, intuitive card hierarchies, and frictionless browsing across varied device form factors.',
    solution:
      'Built a sleek media discovery frontend providing structured content shelves, responsive visual hero headers, and fluid card interactions for cinematic content browsing.',
    contributions: [
      'Developed responsive UI layouts for browsing film and series catalogs',
      'Created modular media showcase cards with image optimization and fallback states',
      'Implemented smooth CSS transitions for interactive discovery states',
      'Deployed on Vercel with edge caching',
    ],
    technicalHighlights: [
      'Responsive media shelf layout system',
      'Visual hierarchy prioritizing title discovery and genre tags',
      'Fluid transition states and interactive card elevations',
      'Clean modular frontend architecture',
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'CSS3', 'HTML5', 'Vercel'],
    liveUrl: 'https://stream-flix-nu-eight.vercel.app/',
    githubUrl: 'https://github.com/pawan76542987',
    featured: true,
    accentColor: '#f43f5e',
    architectureHighlights: [
      {
        label: 'Responsive Media Shelves',
        description: 'Horizontal and multi-column grid layouts that maintain optimal aspect ratios across all screen sizes.',
      },
      {
        label: 'Cinematic Hierarchy',
        description: 'Deep surface contrasts and curated typography emphasizing content discovery and readability.',
      },
    ],
  },
];
