# External & Browser Integrations

## Overview

The portfolio is primarily an ultra-fast, statically generated (SSG) frontend application with deeply integrated browser APIs, dynamic OpenGraph generation, and clean protocol handoffs.

---

## 1. Browser & Hardware APIs

| API | Implementation File | Purpose |
| :--- | :--- | :--- |
| **WebGL Context (`WebGLRenderer`)** | `src/components/3d/HeroScene.tsx` | High-performance 3D scene rendering with GPU context loss recovery (`webglcontextlost`), geometry/material memory disposal, and adaptive DPR clamping (max 2 on desktop, 1 on mobile). |
| **`IntersectionObserver`** | `src/components/3d/HeroScene.tsx` | Viewport visibility tracking: completely halts the 3D `requestAnimationFrame` loop when scrolled offscreen to conserve CPU/GPU battery. |
| **`matchMedia` (Reduced Motion & Color Scheme)** | `src/hooks/useReducedMotion.ts`, `src/hooks/useTheme.ts`, `HeroScene.tsx` | Detects `prefers-reduced-motion: reduce` to disable 3D canvas and cursor trailing; detects `prefers-color-scheme` for initial theme defaults. |
| **`CustomEvent` System (`themechange`)** | `src/hooks/useTheme.ts`, `HeroScene.tsx` | Dispatches window-level `themechange` events to synchronize Three.js scene lighting and material palettes with the HTML theme toggle in real time. |
| **Async Clipboard API** | `src/components/sections/ContactSection.tsx` | `navigator.clipboard.writeText()` for 1-click email (`pmm60718@gmail.com`) and phone (`+91 8982535643`) copying with canvas-confetti trigger. |
| **Pointer & Mouse Tracking** | `src/components/ui/CustomCursor.tsx` | Hardware-accelerated mouse coordinates (`clientX`, `clientY`) with magnetic hover detection on interactive elements (`button`, `a`, `[data-cursor]`). |
| **Local Storage** | `src/hooks/useTheme.ts`, `src/app/layout.tsx` | Theme persistence key: `pawan-portfolio-theme`. |

---

## 2. SEO, Meta & Schema Integrations

| Integration | File Path | Specifications |
| :--- | :--- | :--- |
| **JSON-LD Structured Data** | `src/app/layout.tsx` | Schema.org `Person` type definition detailing name, alumni, skills, social profiles, and job title for search engine knowledge graphs. |
| **Dynamic Open Graph Generation** | `src/app/opengraph-image.tsx` | Server-rendered 1200x630 social preview card using `@vercel/og` (`next/og`) with edge runtime. |
| **XML Sitemap** | `src/app/sitemap.ts` | Programmatic XML sitemap returning canonical URLs, last modified timestamps, and priority tags. |
| **Robots Exclusion Standard** | `src/app/robots.ts` | Robots.txt route permitting universal crawling with link to XML sitemap. |

---

## 3. External Endpoints & Protocol Dispatches

| Protocol / Target | Context | Implementation |
| :--- | :--- | :--- |
| **`mailto:` URI Scheme** | Contact form submission & email buttons | Direct dispatch: `mailto:pmm60718@gmail.com?subject=...&body=...` with prefilled sender name, email, company, and message payload. |
| **External Deployed Projects** | Work section & Case studies | Outbound links to live Vercel deployments: `train-beyond-limits-gym.vercel.app`, `zero-gaming-using-anti-gravity.vercel.app`, `stream-flix-nu-eight.vercel.app`. |
| **Source Code Repositories** | Project case studies & Navbar | Outbound links to GitHub: `github.com/pawan76542987/*`. |
| **Professional Profiles** | Navbar, Footer & Contact | Links to LinkedIn (`linkedin.com/in/pawan-uniyara-595b1a37b`), Instagram (`instagram.com/pawan_mali002`), and GitHub. |
| **Unsplash Remote Image Pattern** | `next.config.mjs` | Remote image domain pattern matching for `images.unsplash.com` with AVIF/WebP conversion. |

---

## 4. Backend & Data Integration Model

Currently, the application uses an **in-memory data architecture** decoupled into modular TypeScript data models (`src/data/*.ts`).
- **No external database runtime is actively queried in production** for the portfolio itself, giving 0ms latency and 100% static uptime.
- Data structures in `src/types/index.ts` are ready for future headless CMS (e.g. Sanity, Strapi), database (Supabase, MongoDB), or API ingestion if needed.
