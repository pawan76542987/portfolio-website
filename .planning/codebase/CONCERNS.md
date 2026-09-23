# Technical Concerns & Future Roadmap

## Known Issues & Diagnostics

### 1. Workspace Root Lockfile Warning
- **Severity**: Low (Warning during `npm run build` / `npm run lint`)
- **Detail**: Next.js detects an extraneous `package-lock.json` in the user's home directory (`/Users/pawanuniyara/package-lock.json`) and outputs a warning:
  ```text
  ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
  We detected multiple lockfiles and selected the directory of /Users/pawanuniyara/package-lock.json as the root directory.
  ```
- **Remediation**:
  - Add `outputFileTracingRoot: path.join(__dirname, './')` or explicit tracing boundaries in `next.config.mjs`, or clean up stray lockfiles in the parent home directory.

---

### 2. Next.js 16 Linter CLI Migration
- **Severity**: Low (Deprecation Warning)
- **Detail**: Next.js 15.2+ deprecated the built-in `next lint` command in favor of direct ESLint CLI execution (`eslint .`).
- **Remediation**:
  - Update `package.json` scripts from `"lint": "next lint"` to `"lint": "eslint ."` once ESLint 9 flat config is formalized.

---

### 3. Contact Form Mailto Fallback
- **Severity**: Medium (UX Consideration)
- **Detail**: The contact form in `src/components/sections/ContactSection.tsx` dispatches inquiries via the `mailto:` URI scheme. On devices where users do not have a default desktop email client configured (e.g., Apple Mail, Outlook), clicking submit opens nothing or prompts an OS dialog.
- **Mitigation Currently in Place**:
  - Direct 1-click clipboard copy for email (`pmm60718@gmail.com`) and phone (`+91 8982535643`) with instant confetti and copied confirmation badges.
- **Future Enhancement**:
  - Integrate an optional serverless email API route (e.g., using [Resend](https://resend.com/) or [Formspree](https://formspree.io/)) to allow direct browser-based form submission without leaving the page.

---

### 4. WebGL Context Recovery Hardening
- **Severity**: Low (Device Edge Case)
- **Detail**: `src/components/3d/HeroScene.tsx` handles `webglcontextlost` by preventing default browser crashes.
- **Future Enhancement**:
  - Add a dedicated `webglcontextrestored` listener to seamlessly rebuild the 3D node matrix if the mobile OS reclaims and restores GPU memory after returning from background sleep.

---

### 5. Dynamic Edge Runtime on OpenGraph Route
- **Severity**: Low / Informational
- **Detail**: `src/app/opengraph-image.tsx` uses `export const runtime = 'edge'` for dynamic `@vercel/og` image rendering. This causes the build output to mark `/opengraph-image` as dynamic `ƒ` rather than static `○`.
- **Impact**: Works automatically on Vercel deployments. If switching to a purely static export (`output: 'export'`), the OG image would need to be pre-generated as a static file (`/og-image.png`).
