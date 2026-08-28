# Pawan Uniyara — Premium Engineering Portfolio

A production-grade, highly responsive, interactive portfolio website for **Pawan Uniyara** (Full-Stack Developer • CSE AI/ML Undergraduate).

Designed around the **"Digital Engineering Laboratory"** aesthetic — minimalist, technical, cinematic, and editorial. Demonstrates solid computer science fundamentals, full-stack React/Next.js craftsmanship, C++ algorithmic rigor, and creative 3D WebGL computation without fabricated claims.

---

## 🚀 Live Showcase & Information Architecture

- **Narrative Flow**:
  1. **Hero & Digital Lab**: Abstract 3D WebGL computational node matrix, availability status, and primary CTAs.
  2. **Selected Work**: Interactive showcase of real, deployed projects (*Train Beyond Limits*, *Zero Gaming*, *StreamFlix*, and GitHub Lab) with deep-dive technical Case Study drawers.
  3. **About & Background**: First-principles approach, algorithmic foundations in C++, and undergraduate studies in AI & ML.
  4. **Capabilities Matrix**: Tabbed system taxonomy with dynamic architectural diagram simulations (DSA, Frontend, Backend, 3D, and Machine Learning).
  5. **Engineering Philosophy**: 5 foundational principles governing code quality, maintainability, and performance.
  6. **Education & Journey**: Academic coursework at Mirai School of Technology and practical freelance web development.
  7. **Client Services**: Transparent offerings for business websites, conversion landing pages, interactive apps, and website modernization.
  8. **Contact Terminal**: Direct email (`pmm60718@gmail.com`), verified social links, and pre-filled mail dispatch.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15+](https://nextjs.org/) (App Router, Server Components & Static Site Generation) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (100% strict type coverage) |
| **Styling** | Vanilla CSS Design Tokens (`globals.css` + CSS Modules), fluid `clamp()` typography, 8px/4px spatial grid |
| **3D & Graphics** | [Three.js](https://threejs.org/) (Custom WebGL canvas with node network, particle shaders, adaptive DPR, memory disposal & CSS fallback) |
| **Icons** | [Lucide React](https://lucide.dev/) (Accessible vector SVG icons) |
| **SEO & Social** | Next.js Metadata API, dynamic Open Graph images (`@vercel/og`), JSON-LD Person schema, `robots.txt`, `sitemap.xml` |
| **Deployment** | Optimized for [Vercel](https://vercel.com/) |

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone repository
git clone https://github.com/pawan76542987/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build
```bash
# Verify type safety and generate optimized production bundle
npm run build

# Start production server locally
npm run start
```

---

## 🏛️ Architecture & Directory Structure

```text
src/
├── app/                        # Next.js App Router root
│   ├── layout.tsx              # Root HTML shell, fonts, JSON-LD, navbar & footer
│   ├── page.tsx                # Page narrative assembly
│   ├── icon.svg                # PU brand favicon
│   ├── opengraph-image.tsx     # Dynamic OpenGraph social preview
│   ├── robots.ts               # Web spider indexing rules
│   └── sitemap.ts              # XML sitemap generator
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx       # Custom Three.js canvas controller
│   │   └── HeroScene.module.css
│   ├── layout/
│   │   ├── Navbar.tsx          # Floating header, section tracking & mobile drawer
│   │   └── Footer.tsx          # Editorial footer with back-to-top
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CaseStudyModal.tsx  # Deep-dive case study modal dialog
│   │   ├── AboutSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── CapabilityVisualizer.tsx # Architectural simulation diagrams
│   │   ├── PhilosophySection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx          # Accessible polymorphic button / link primitive
│       ├── Badge.tsx           # Technical status & tech tag badges
│       ├── Monogram.tsx        # PU brand monogram geometry
│       ├── CustomCursor.tsx    # Desktop-only, context-aware magnetic cursor
│       ├── SectionHeader.tsx   # Consistent section headings
│       └── ThemeToggle.tsx     # Dark / Light theme switch
├── data/
│   ├── projects.ts             # Deployed project data & case studies
│   ├── skills.ts               # Structured capability matrix
│   ├── philosophy.ts           # Engineering principles
│   ├── journey.ts              # Academic and freelance milestones
│   ├── services.ts             # Client service deliverables
│   └── socials.ts              # Personal info, resume link, contact details
├── hooks/
│   ├── useTheme.ts             # Theme persistence & custom event dispatcher
│   └── useReducedMotion.ts     # A11y motion preference detection
├── styles/
│   └── globals.css             # Design tokens for Dark and Light themes
└── types/
    └── index.ts                # TypeScript interface definitions
```

---

## 🎨 3D WebGL Architecture & Performance

The 3D Hero scene (`HeroScene.tsx`) is designed with strict performance budgets:
1. **Lazy & Isolated**: Canvas rendering runs independently from React state updates using native `requestAnimationFrame`.
2. **Adaptive DPR**: Device pixel ratio is clamped on high-DPI displays (1 on mobile, max 2 on desktop) to prevent GPU strain.
3. **Viewport Awareness (`IntersectionObserver`)**: The animation loop automatically pauses when scrolled offscreen, dropping CPU/GPU usage to 0%.
4. **Memory Hygiene**: Disposes geometries, materials, textures, and WebGL contexts upon component unmount to prevent leaks.
5. **Accessible Fallback**: Gracefully falls back to a lightweight CSS/SVG grid if WebGL is unsupported or `prefers-reduced-motion: reduce` is enabled.
6. **Theme Synchronization**: WebGL lights, particles, and node colors react dynamically when toggling between Dark and Light modes.

---

## 📝 Content Editing Guide

All text and portfolio records are data-driven and located in `src/data/`:
- **Personal Details & Social Links**: `src/data/socials.ts`
- **Projects & Case Studies**: `src/data/projects.ts`
- **Technical Skills**: `src/data/skills.ts`
- **Education & Journey**: `src/data/journey.ts`
- **Engineering Principles**: `src/data/philosophy.ts`
- **Client Services**: `src/data/services.ts`
- **Resume File**: Place your updated PDF at `public/resume.pdf`.

---

## 🚢 Deployment on Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel Dashboard](https://vercel.com/).
3. Framework preset will automatically be detected as **Next.js**.
4. Click **Deploy**.

---

## 📄 License
MIT © Pawan Uniyara
