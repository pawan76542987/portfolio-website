# Testing & Verification Strategy

## Current Testing Posture

The codebase currently relies on **multi-layered static verification and build validation**:

| Verification Layer | Command | Status | Coverage |
| :--- | :--- | :--- | :--- |
| **Type Checking** | `npm run build` (via `tsc`) | Active | 100% strict TypeScript type coverage across all components, hooks, and data definitions. |
| **Static Linting** | `npm run lint` (via ESLint) | Active | Next.js Core Web Vitals rules, React Hooks dependency validation, no unescaped entities. |
| **Static Site Generation (SSG)** | `npm run build` (via `next build`) | Active | Renders and compiles all 6 routes (`/`, `/_not-found`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`). |
| **Automated Unit / E2E Tests** | `npm test` | Not Configured | Test runner (Vitest / Playwright) not yet initialized. |

---

## Manual Verification Matrix

When making updates to the portfolio, run through this structured checklist:

### 1. Theming & Visual Continuity
- [ ] Toggle dark and light modes via `ThemeToggle.tsx`.
- [ ] Confirm background, surface, border, and text contrasts remain readable in both themes.
- [ ] Verify Three.js WebGL scene nodes and lights change color seamlessly on theme toggle.
- [ ] Refresh page in light mode to confirm zero Flash of Unstyled Theme (FOUT).

### 2. 3D WebGL & Graphics Performance
- [ ] Check console for WebGL warnings or memory leaks.
- [ ] Verify node matrix animates smoothly at 60fps on desktop and mobile.
- [ ] Scroll down past the hero and verify animation loop pauses via `IntersectionObserver`.
- [ ] Test with `prefers-reduced-motion: reduce` simulated in DevTools — canvas animation should freeze gracefully.

### 3. Case Study Modals & Navigation
- [ ] Click "Explore Architecture & Case Study" on each project card.
- [ ] Verify modal opens, locks background scrolling, and focuses the close button.
- [ ] Test pressing `Escape` to close modal.
- [ ] Test `Tab` and `Shift+Tab` cycling — focus must stay trapped inside the modal.
- [ ] On mobile, open hamburger drawer, click a navigation link, verify drawer closes and jumps to anchor.

### 4. Interactive Tools & Data Copy
- [ ] Click "Copy Email" in the Contact section — verify confetti explosion and checkmark feedback.
- [ ] Click "Copy Direct Line" — verify phone number copied to clipboard.
- [ ] Click tab categories in the Capabilities section — verify architectural SVG diagrams switch instantly.

---

## Recommended Automated Testing Additions

To establish automated regression testing for future growth, the following additions are recommended:

1. **Vitest + React Testing Library**:
   - Test `useTheme` hook state and `localStorage` synchronization.
   - Test `useReducedMotion` media query listeners.
   - Test `data/*.ts` schema validity (ensure required URLs, titles, and IDs are non-empty).
2. **Playwright E2E**:
   - Automated visual regression testing across mobile and desktop viewports.
   - Automated modal open/close flow and keyboard focus trap assertion.
   - Verify all external links (GitHub, live demo URLs) return HTTP 200.
3. **Axe Core Accessibility Auditing**:
   - Automated automated a11y scans checking color contrast, aria labels, and heading hierarchies.
