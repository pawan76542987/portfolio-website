# Directory & File Structure

## Complete Workspace Layout

```text
/Users/pawanuniyara/Desktop/my web/
├── .eslintrc.json              # ESLint configuration extending next/core-web-vitals
├── .gitignore                  # Git ignore rules for node_modules, .next, etc.
├── next.config.mjs             # Next.js configuration (remote image patterns, strict mode)
├── package.json                # Project dependencies, metadata, and scripts
├── tsconfig.json               # TypeScript compiler options and '@/*' path aliases
├── public/                     # Public static assets served from root
│   ├── icon.svg                # Brand monogram favicon (SVG)
│   └── resume.pdf              # Downloadable engineering resume
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── layout.tsx          # Root HTML shell, fonts, JSON-LD, navbar & footer
│   │   ├── page.tsx            # Main single-page portfolio assembly
│   │   ├── not-found.tsx       # Custom styled 404 error page
│   │   ├── opengraph-image.tsx # Dynamic Open Graph image generation via @vercel/og
│   │   ├── robots.ts           # Dynamic robots.txt route handler
│   │   └── sitemap.ts          # Dynamic sitemap.xml generator
│   ├── components/             # Reusable UI & presentation components
│   │   ├── 3d/                 # WebGL & Three.js canvas graphics
│   │   │   ├── HeroScene.tsx
│   │   │   └── HeroScene.module.css
│   │   ├── layout/             # Application framing elements
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── sections/           # Narrative sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroSection.module.css
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ProjectsSection.module.css
│   │   │   ├── CaseStudyModal.tsx
│   │   │   ├── CaseStudyModal.module.css
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AboutSection.module.css
│   │   │   ├── CapabilitiesSection.tsx
│   │   │   ├── CapabilitiesSection.module.css
│   │   │   ├── CapabilityVisualizer.tsx
│   │   │   ├── CapabilityVisualizer.module.css
│   │   │   ├── PhilosophySection.tsx
│   │   │   ├── PhilosophySection.module.css
│   │   │   ├── JourneySection.tsx
│   │   │   ├── JourneySection.module.css
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ServicesSection.module.css
│   │   │   ├── ContactSection.tsx
│   │   │   └── ContactSection.module.css
│   │   └── ui/                 # Atomic design primitives
│   │       ├── Badge.tsx & Badge.module.css
│   │       ├── Button.tsx & Button.module.css
│   │       ├── CustomCursor.tsx & CustomCursor.module.css
│   │       ├── Icons.tsx (Custom SVG brand icons)
│   │       ├── Monogram.tsx & Monogram.module.css
│   │       ├── SectionHeader.tsx & SectionHeader.module.css
│   │       └── ThemeToggle.tsx & ThemeToggle.module.css
│   ├── data/                   # Data-driven content models
│   │   ├── journey.ts          # Education, experience & timeline records
│   │   ├── philosophy.ts       # 5 core engineering principles
│   │   ├── projects.ts         # Project portfolio & deep-dive case studies
│   │   ├── services.ts         # Freelance client service packages
│   │   ├── skills.ts           # Capability taxonomy & visualization types
│   │   └── socials.ts          # Personal info, contact details & external links
│   ├── hooks/                  # Custom React hooks
│   │   ├── useReducedMotion.ts # A11y motion preference detection & media queries
│   │   └── useTheme.ts         # Dark/light theme state, localStorage & event dispatch
│   ├── styles/                 # Global styles & design system tokens
│   │   └── globals.css         # CSS Custom Properties, typography & utilities
│   └── types/                  # TypeScript interface contracts
│       └── index.ts            # Data model type definitions
└── .planning/                  # Project planning and codebase intelligence
    └── codebase/               # Codebase documentation maps
```

---

## Module Boundaries & Responsibilities

| Module Directory | Layer Type | Boundaries & Rules |
| :--- | :--- | :--- |
| `src/app/` | Routing & Root Shell | Owns metadata, HTML structure, global fonts, and route endpoints. Should not contain inline business logic. |
| `src/components/sections/` | Feature Composition | Assembles data records from `src/data/` with atomic UI components. Each section pairs with its own scoped CSS module. |
| `src/components/ui/` | Design System Primitives | Reusable, accessible UI components (buttons, badges, headers) with strict prop types. No direct section data dependencies. |
| `src/components/3d/` | Graphics & Compute | Encapsulates Three.js WebGL rendering, camera rigs, and canvas animations. Isolated from React state loops. |
| `src/data/` | Content & Models | Single source of truth for all copy, project descriptions, skills, and links. Strictly typed against `src/types/index.ts`. |
| `src/hooks/` | Client Utilities | Pure reusable logic hooks for browser API interaction (`useTheme`, `useReducedMotion`). |
| `src/styles/` | Design Tokens | Global CSS variables for colors, typography, elevations, spacing, and utility classes. |
| `src/types/` | Contracts | Shared TypeScript types, unions, and interfaces. |

---

## Entry Points & Navigation Structure

- **Main Entrypoint**: `src/app/layout.tsx` -> `src/app/page.tsx`
- **Routing Strategy**: Single Page Application (SPA) anchor routing (`#work`, `#capabilities`, `#philosophy`, `#journey`, `#services`, `#contact`) managed by the sticky `Navbar` with dynamic intersection tracking.
- **Dynamic Endpoints**:
  - `/opengraph-image`: Server-rendered Open Graph card for social scrapers.
  - `/sitemap.xml`: XML sitemap for search indexing.
  - `/robots.txt`: Search crawler directives.
