import { SkillCategory } from '@/types';

export const skillsData: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages & Core',
    tagline: 'Computational foundations and programming languages',
    description:
      'Strong foundation in compiled and interpreted languages, with a particular focus on algorithmic problem solving in C++ and scalable scripting in Python and modern JavaScript.',
    visualType: 'dsa',
    skills: [
      { name: 'C++', highlight: true, note: 'Primary language for DSA & problem solving' },
      { name: 'Python', highlight: true, note: 'AI/ML workflows, data manipulation, automation' },
      { name: 'JavaScript (ES6+)', highlight: true, note: 'Modern asynchronous web logic' },
      { name: 'SQL', note: 'Relational querying & database schemas' },
      { name: 'HTML5', note: 'Semantic web hierarchy & accessibility' },
      { name: 'CSS3', note: 'Modern layouts, flex/grid, variables & animations' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    tagline: 'Building resilient, accessible, and fast user interfaces',
    description:
      'Crafting component-driven web architectures with React and Next.js. Obsessed with responsive rhythm, sub-millisecond interaction feedback, and clean state separation.',
    visualType: 'frontend',
    skills: [
      { name: 'React', highlight: true, note: 'Component composition, hooks & virtual DOM' },
      { name: 'Next.js', highlight: true, note: 'App router, SSR, SSG, routing & optimization' },
      { name: 'Responsive Design', highlight: true, note: 'Fluid layouts from 360px to 4K' },
      { name: 'Component Architecture', note: 'Decoupled, reusable design system primitives' },
      { name: 'DOM Performance', note: 'Minimizing layout thrashing & CLS' },
      { name: 'Accessibility (a11y)', note: 'Keyboard navigability & semantic ARIA' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    tagline: 'Server-side logic, routing, and database integrations',
    description:
      'Developing RESTful APIs and lightweight backend services to bridge frontend clients with persistent data stores and external third-party services.',
    visualType: 'backend',
    skills: [
      { name: 'Node.js', highlight: true, note: 'Event-driven asynchronous runtime' },
      { name: 'Express.js', highlight: true, note: 'RESTful API routing and middleware pipelines' },
      { name: 'RESTful Architecture', note: 'Clean HTTP methods, status codes & payload design' },
      { name: 'Authentication Flows', note: 'Token & session-based security patterns' },
      { name: 'API Integration', note: 'Third-party webhook & service orchestration' },
    ],
  },
  {
    id: 'data',
    name: 'Databases & Storage',
    tagline: 'Structured and document-based persistence systems',
    description:
      'Designing relational and NoSQL schemas to store, index, and retrieve application state reliably.',
    visualType: 'data',
    skills: [
      { name: 'MongoDB', highlight: true, note: 'Document databases & aggregation pipelines' },
      { name: 'PostgreSQL', note: 'Relational modeling & ACID compliance' },
      { name: 'MySQL', note: 'Relational table design & indexing' },
      { name: 'Supabase', note: 'Modern PostgreSQL backend-as-a-service' },
    ],
  },
  {
    id: 'creative',
    name: 'Creative Development & 3D',
    tagline: 'Spatial computing, WebGL, and choreographing motion',
    description:
      'Exploring 3D graphics on the web with Three.js, Spline, and hardware-accelerated CSS/Motion animations to build memorable digital environments without sacrificing performance.',
    visualType: 'creative',
    skills: [
      { name: 'Three.js', highlight: true, note: 'WebGL scenes, camera rigs, lighting & shaders' },
      { name: 'Spline', note: 'Interactive 3D model integration' },
      { name: 'Framer Motion', note: 'Spring physics & layout animations' },
      { name: 'GSAP', note: 'Timeline-based complex motion sequencing' },
      { name: 'CSS Animation', note: 'GPU-accelerated transforms & keyframes' },
    ],
  },
  {
    id: 'engineering',
    name: 'Computer Science & Discipline',
    tagline: 'Algorithmic thinking, object-oriented design, and craftsmanship',
    description:
      'Rigorous foundation in computer science core subjects, applying time and space complexity analysis to practical engineering challenges.',
    visualType: 'dsa',
    skills: [
      { name: 'Data Structures & Algorithms', highlight: true, note: 'Trees, graphs, dynamic programming & sorting' },
      { name: 'Object-Oriented Programming', note: 'Encapsulation, inheritance & modular design' },
      { name: 'Git & Version Control', note: 'Branching, PR reviews & collaborative workflows' },
      { name: 'Performance Optimization', note: 'Bundle splitting, asset caching & Core Web Vitals' },
    ],
  },
  {
    id: 'ai-data',
    name: 'AI & Machine Learning',
    tagline: 'Undergraduate specialization in intelligent computational systems',
    description:
      'Exploring machine learning fundamentals, matrix mathematics, exploratory data analysis, and integrating intelligent model capabilities into web interfaces.',
    visualType: 'ai',
    skills: [
      { name: 'ML Fundamentals', highlight: true, note: 'Supervised/unsupervised learning concepts' },
      { name: 'NumPy', note: 'Vectorized mathematical operations & n-dim arrays' },
      { name: 'Pandas', note: 'Data wrangling, cleaning & tabular analysis' },
      { name: 'AI API Integration', note: 'Connecting frontend clients to LLMs and inference endpoints' },
    ],
  },
];
