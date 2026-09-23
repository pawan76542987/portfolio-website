# Phase 1 Plan: Web Audio Synthesizer Engine & Global Audio Control

## Goal
Implement a zero-dependency, ultra-lightweight Web Audio API synthesis engine and global sound toggle system for tactile UI audio feedback across the portfolio.

---

## Proposed Changes

### 1. Audio Engine & Hook
#### [NEW] `src/hooks/useSound.ts`
- Encapsulates `AudioContext` lifecycle with lazy resume on user gesture.
- Implements purely synthesized procedural sound waveforms:
  - `playClick`: 40ms micro-tick (sine wave with fast exponential gain decay).
  - `playHover`: 25ms soft blip (filtered sine at low amplitude).
  - `playSwitch`: 80ms rising frequency slide (mode toggles).
  - `playSuccess`: 3-tone harmonic arpeggio (C5 -> E5 -> G5) for success/copy actions.
- Tracks `soundEnabled` state, backed by `localStorage` (`pawan-portfolio-sound`).
- Defaults to `false` (muted) to respect accessibility and browser autoplay standards.
- Dispatches `window.dispatchEvent(new CustomEvent('soundchange', ...))` for synchronized multi-component updates.
- Respects `prefers-reduced-motion` and automatically mutes if user prefers reduced motion.

---

### 2. UI Component
#### [NEW] `src/components/ui/SoundToggle.tsx` & `src/components/ui/SoundToggle.module.css`
- Accessible toggle button with `Volume2` (sound on) and `VolumeX` (sound off) icons.
- Displays animated acoustic wave indicator when enabled.
- Full keyboard navigability with `aria-label="Toggle sound feedback"` and `aria-pressed`.

---

### 3. Layout & Section Integration
#### [MODIFY] `src/components/layout/Navbar.tsx`
- Import and render `SoundToggle` beside `ThemeToggle` in the desktop actions bar and mobile header.

#### [MODIFY] `src/components/sections/ContactSection.tsx`
- Trigger `playSuccess()` when the visitor copies email or phone number.

#### [MODIFY] `src/components/ui/Button.tsx` & `ThemeToggle.tsx`
- Add subtle `playClick()` audio feedback on user click when sound is active.

---

## Verification Plan

### Automated Verification
- `npm run lint`: Verify 0 lint errors across new hooks and components.
- `npm run build`: Verify TypeScript compilation and SSG static page generation.

### Manual Verification
1. Click the `SoundToggle` in Navbar to enable audio.
2. Verify clicking buttons triggers subtle synthesized micro-ticks.
3. Click "Copy Email" in Contact Section — verify celebratory 3-tone harmonic chime plays with confetti.
4. Refresh page — verify sound toggle preference is preserved in `localStorage`.
5. Toggle sound to muted — verify absolute silence on all interactions.
6. Test in DevTools with `prefers-reduced-motion: reduce` — verify audio is disabled.
