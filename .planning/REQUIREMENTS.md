# Requirements Specification — Milestone v1.1

## Interactive 3D & Creative Engineering

### 1. Interactive 3D Simulation & HUD Console

- [ ] **HUD-01**: The 3D Hero Scene provides a technical HUD control console that allows visitors to switch between 3 distinct computational modes:
  - `Matrix`: Connected geometric nodes with dynamic distance lines (default).
  - `Nebula`: Dispersed starfield with organic drift and color shifts.
  - `Vortex`: Swirling gravitational particle field with orbital acceleration.
- [ ] **HUD-02**: The HUD includes real-time parameter controls:
  - Speed modifier slider/stepper (0.5x, 1.0x, 2.0x).
  - Density toggle (Standard / Ultra).
  - Wireframe / Grid plane toggle.
  - Camera auto-orbit toggle.
- [ ] **HUD-03**: The HUD minimizes cleanly on mobile viewports to prevent layout obstruction while retaining quick mode switches.

---

### 2. Cursor Physics & Gravitational Interaction

- [ ] **PHYS-01**: Interactive mouse raycasting and 2D/3D projection causing particles/nodes within proximity to attract or repel based on cursor distance.
- [ ] **PHYS-02**: Mouse velocity detection creating an impulse wake behind rapid cursor movements.
- [ ] **PHYS-03**: Elastic spring restoration returning displaced nodes and particles to their orbital baselines with smooth damping.
- [ ] **PHYS-04**: Touch drag fallback on mobile devices allowing users to tilt or rotate the 3D space interactively.

---

### 3. Ambient Background 3D Depth & Section Transitions

- [ ] **BG-01**: A lightweight ambient background canvas layer or subtle shader particles that drift gently across the page background beneath the Projects and Capabilities sections.
- [ ] **BG-02**: Strict performance throttling: ambient canvas uses minimal draw calls, low particle count (15-30 particles), and pauses rendering when not in viewport.
- [ ] **BG-03**: Dynamic theme adaptation matching light and dark modes.

---

### 4. Web Audio Micro-Interaction Synthesizer

- [ ] **AUDIO-01**: A Web Audio API engine (`src/hooks/useSound.ts` / audio context) generating synthesized UI sounds via native oscillators (zero external audio MP3/WAV files to load):
  - Subtle click tick for buttons and toggles.
  - Soft pitch slide for mode switches.
  - Success chime / chime burst for email copy action.
  - Hover blip for primary cards.
- [ ] **AUDIO-02**: Global sound toggle in Navbar and 3D HUD with `localStorage` persistence (`pawan-portfolio-sound`).
- [ ] **AUDIO-03**: Default state is **muted** (`soundEnabled: false`) to ensure compliance with web accessibility standards and user privacy.

---

### 5. Accessibility, Performance & Memory Guardrails

- [ ] **A11Y-01**: Respects `prefers-reduced-motion: reduce` by halting all particle physics, 3D orbits, and sound effects automatically.
- [ ] **A11Y-02**: HUD controls are 100% keyboard navigable with visible focus states and ARIA labels.
- [ ] **PERF-01**: Target solid 60 FPS on mid-tier mobile and desktop devices.
- [ ] **PERF-02**: Complete Three.js resource deallocation (geometries, materials, textures, renderers) upon unmount.
