# Coding Standards & Conventions

## Code Quality & Architecture Rules

### 1. TypeScript & Type Safety
- **Strict Mode Enabled**: `strict: true` in `tsconfig.json`. Zero implicit `any`.
- **Shared Interfaces**: All domain models (Projects, Skills, Principles, Experiences, Services, Socials, Themes) must be declared in `src/types/index.ts`.
- **Component Props**: Every React component must define an explicit TypeScript `interface` or `type` (e.g. `HeroSceneProps`, `ButtonProps`, `CaseStudyModalProps`).
- **Path Aliasing**: Always use the `@/*` alias for imports mapped to `src/*` (e.g., `import { Button } from '@/components/ui/Button'`).

---

## 2. Naming Conventions

| Category | Convention | Examples |
| :--- | :--- | :--- |
| **React Components** | PascalCase | `HeroSection.tsx`, `CaseStudyModal.tsx`, `ThemeToggle.tsx` |
| **CSS Modules** | ComponentName.module.css | `HeroSection.module.css`, `Navbar.module.css` |
| **Custom Hooks** | camelCase with `use` prefix | `useTheme.ts`, `useReducedMotion.ts` |
| **Data Models & Modules** | camelCase | `projects.ts`, `skills.ts`, `philosophy.ts` |
| **CSS Class Names** | camelCase | `.brandText`, `.desktopNav`, `.modalBackdrop`, `.visualizerContainer` |
| **CSS Custom Properties** | kebab-case with descriptive namespace | `--surface-elevated`, `--accent-glow`, `--font-mono`, `--space-4` |
| **TypeScript Types / Interfaces** | PascalCase | `Project`, `SkillCategory`, `Theme`, `ExperienceItem` |

---

## 3. Component & Styling Architecture

### CSS Design Tokens (Mandatory)
Never hardcode raw hex colors, margins, or random border radii directly in `.module.css` files. Always reference the design token system declared in `src/styles/globals.css`:
```css
/* CORRECT */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  color: var(--foreground);
}

/* INCORRECT */
.card {
  background: #0f1420;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
  color: #fff;
}
```

### Data-Driven UI Pattern
Portfolio copy, projects, skills, and links must never be hardcoded into JSX markup.
- Define the data array in `src/data/<category>.ts`.
- Import and map over the array inside the respective section component.
- This ensures simple content updates without risking JSX structural bugs.

---

## 4. Accessibility (a11y) & Motion Standards

1. **Semantic Landmarks**: The page must utilize standard HTML5 landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, and `<footer>`.
2. **Accessible Skip Navigation**: A visible-on-focus `.skip-link` must reside at the top of the root layout allowing screen readers and keyboard users to jump directly to `<main>`.
3. **Interactive Labels**: All icon-only buttons (`ThemeToggle`, mobile menu hamburger, modal close buttons) must have an explicit `aria-label`.
4. **Modal Dialogs**: Modals must carry `role="dialog"`, `aria-modal="true"`, capture initial focus, trap `Tab` navigation, and restore previous document focus upon closing.
5. **Reduced Motion**: All animations and WebGL effects must respect `prefers-reduced-motion: reduce` via `useReducedMotion()` or CSS `@media (prefers-reduced-motion: reduce)`.

---

## 5. WebGL & Graphics Best Practices

1. **Detached Animation Loops**: `requestAnimationFrame` loops must never trigger React state updates or cause React re-renders.
2. **Lifecycle Cleanup**: Always implement comprehensive cleanup on unmount:
   ```typescript
   geometry.dispose();
   material.dispose();
   renderer.dispose();
   renderer.forceContextLoss();
   ```
3. **Viewport Throttling**: Use `IntersectionObserver` to halt canvas rendering when scrolled offscreen.
4. **Adaptive DPR**: Clamp `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))` to protect mobile and high-DPI GPU thermals.
