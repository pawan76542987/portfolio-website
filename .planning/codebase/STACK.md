# Technology Stack

## Core Architecture & Frameworks

| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Runtime & Language** | [Node.js](https://nodejs.org/) | `>=18.17.0 / 20+` | JavaScript runtime environment |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `^5.8.2` | 100% strict type safety across components, data, and hooks |
| **Framework** | [Next.js](https://nextjs.org/) | `^15.2.1` | React framework with App Router, SSR, SSG, and Metadata API |
| **UI Library** | [React](https://react.dev/) / [React DOM](https://react.dev/) | `^19.0.0` | Declarative UI rendering, hooks, and component composition |

---

## Graphics, 3D & Animation

| Library | Version | Purpose & Usage |
| :--- | :--- | :--- |
| **[Three.js](https://threejs.org/)** | `^0.174.0` | Custom WebGL interactive 3D scene in hero (`HeroScene.tsx`), computational nodes matrix, dynamic lights, particle field, and geometry disposal |
| **[Framer Motion](https://www.framer.com/motion/)** | `^12.4.7` | Spring physics and animated transitions |
| **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)** | `^1.9.4` | Micro-delight particle explosion on email copy in Contact section |
| **[clsx](https://github.com/lukeed/clsx)** | `^2.1.1` | Utility for conditional CSS class construction |
| **[Lucide React](https://lucide.dev/)** | `^1.16.0` | Accessible vector SVG icon set for UI actions and navigation |

---

## Styling & Design System

- **Approach**: Vanilla CSS Design Tokens with CSS Modules (`*.module.css`) + Global token layer (`src/styles/globals.css`).
- **Typography Engine**:
  - `Inter` (Google Fonts via `next/font/google` -> `--font-sans`)
  - `Space Grotesk` (Google Fonts via `next/font/google` -> `--font-display`)
  - `JetBrains Mono` (Google Fonts via `next/font/google` -> `--font-mono`)
- **Theme Architecture**: Dual-theme system (`[data-theme='dark']` and `[data-theme='light']`) with CSS Custom Properties, SSR flash-prevention script, and localStorage persistence.
- **Responsive Strategy**: CSS `clamp()` fluid sizing, CSS Grid, Flexbox, media query breakpoints at `480px`, `640px`, `768px`, `1024px`, and `1280px`.

---

## Development, Tooling & Compilation

| Tool | Version | Role |
| :--- | :--- | :--- |
| **TypeScript Compiler (`tsc`)** | `^5.8.2` | Type verification (`noEmit: true`, `target: ES2022`, `moduleResolution: bundler`) |
| **ESLint** | `^9.21.0` | Code quality and React/Next linting rules |
| **eslint-config-next** | `^15.2.1` | Next.js recommended ESLint presets |
| **Type Definitions** | `@types/node` (`^22.13.9`), `@types/react` (`^19.0.10`), `@types/react-dom` (`^19.0.4`), `@types/three` (`^0.174.0`), `@types/canvas-confetti` (`^1.9.0`) | TypeScript ambient definitions |

---

## Deployment & Hosting Target

- **Platform**: [Vercel](https://vercel.com/) (Edge routing, static site generation, asset optimization).
- **Images**: Next.js Image Optimization with AVIF and WebP remote patterns configured for `images.unsplash.com`.
- **OpenGraph**: Dynamic social preview generation via `@vercel/og` (`src/app/opengraph-image.tsx`).
