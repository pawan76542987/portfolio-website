'use client';

import React from 'react';
import { SkillCategory } from '@/types';
import styles from './CapabilityVisualizer.module.css';

interface CapabilityVisualizerProps {
  category: SkillCategory;
}

export function CapabilityVisualizer({ category }: CapabilityVisualizerProps) {
  const { visualType } = category;

  return (
    <div className={styles.visualizerContainer} aria-label={`${category.name} System Visualization`}>
      <div className={styles.visualizerHeader}>
        <div className={styles.statusRow}>
          <span className={styles.terminalDot} />
          <span className={styles.headerLabel}>SYSTEM ARCHITECTURE: {category.id.toUpperCase()}</span>
        </div>
        <span className={styles.activeTag}>SIMULATION ACTIVE</span>
      </div>

      <div className={styles.diagramCanvas}>
        {/* Visual for DSA / Languages (Algorithmic Binary Tree / Graph) */}
        {visualType === 'dsa' && (
          <svg viewBox="0 0 400 240" className={styles.svgDiagram}>
            {/* Tree Edges */}
            <line x1="200" y1="40" x2="110" y2="100" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="200" y1="40" x2="290" y2="100" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="110" y1="100" x2="60" y2="170" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="110" y1="100" x2="150" y2="170" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="290" y1="100" x2="240" y2="170" stroke="var(--border-strong)" strokeWidth="2" />
            <line x1="290" y1="100" x2="330" y2="170" stroke="var(--border-strong)" strokeWidth="2" />

            {/* Traversal Pulse */}
            <circle cx="200" cy="40" r="18" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
            <text x="200" y="45" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">ROOT</text>

            <circle cx="110" cy="100" r="16" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
            <text x="110" y="104" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontFamily="var(--font-mono)">C++</text>

            <circle cx="290" cy="100" r="16" fill="var(--surface-elevated)" stroke="var(--accent-secondary)" strokeWidth="2" />
            <text x="290" y="104" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontFamily="var(--font-mono)">O(log N)</text>

            <circle cx="60" cy="170" r="14" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="60" y="174" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">Trees</text>

            <circle cx="150" cy="170" r="14" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="150" y="174" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">Graphs</text>

            <circle cx="240" cy="170" r="14" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="240" y="174" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">DP</text>

            <circle cx="330" cy="170" r="14" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="330" y="174" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">Memory</text>
          </svg>
        )}

        {/* Visual for Frontend (Component Composition & Virtual DOM) */}
        {visualType === 'frontend' && (
          <svg viewBox="0 0 400 240" className={styles.svgDiagram}>
            {/* Application Shell */}
            <rect x="40" y="30" width="320" height="180" rx="8" fill="var(--surface-elevated)" stroke="var(--border)" strokeWidth="1.5" />
            {/* Header bar */}
            <rect x="55" y="45" width="290" height="24" rx="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="70" y="61" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)">{"<Navbar layout='sticky' />"}</text>

            {/* Main Content Grid */}
            <rect x="55" y="80" width="180" height="115" rx="4" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
            <text x="70" y="100" fill="var(--foreground)" fontSize="10" fontFamily="var(--font-mono)">{"<HeroSection />"}</text>
            <text x="70" y="125" fill="var(--accent-secondary)" fontSize="9" fontFamily="var(--font-mono)">{"  • SSR / SSG Ready"}</text>
            <text x="70" y="145" fill="var(--accent-secondary)" fontSize="9" fontFamily="var(--font-mono)">{"  • Hydration Optimized"}</text>
            <text x="70" y="165" fill="var(--accent-secondary)" fontSize="9" fontFamily="var(--font-mono)">{"  • Sub-ms React 19"}</text>

            {/* Sidebar Cards */}
            <rect x="250" y="80" width="95" height="50" rx="4" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="260" y="105" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">{"<Tokens />"}</text>

            <rect x="250" y="140" width="95" height="55" rx="4" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1" />
            <text x="260" y="165" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">{"<a11y />"}</text>
          </svg>
        )}

        {/* Visual for Backend / APIs (Client -> REST API -> Middleware -> Database Pipeline) */}
        {visualType === 'backend' && (
          <svg viewBox="0 0 400 240" className={styles.svgDiagram}>
            {/* Flow line */}
            <line x1="70" y1="120" x2="330" y2="120" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />

            {/* Client Node */}
            <rect x="30" y="90" width="75" height="60" rx="6" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="67" y="118" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">CLIENT</text>
            <text x="67" y="134" textAnchor="middle" fill="var(--foreground-muted)" fontSize="8" fontFamily="var(--font-mono)">HTTP/JSON</text>

            {/* Express Router Node */}
            <rect x="150" y="80" width="100" height="80" rx="6" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
            <text x="200" y="112" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600">NODE / API</text>
            <text x="200" y="130" textAnchor="middle" fill="var(--foreground-secondary)" fontSize="9" fontFamily="var(--font-mono)">Middleware</text>
            <text x="200" y="145" textAnchor="middle" fill="var(--accent-secondary)" fontSize="8" fontFamily="var(--font-mono)">Auth / Routing</text>

            {/* Storage Node */}
            <rect x="295" y="90" width="75" height="60" rx="6" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            <text x="332" y="118" textAnchor="middle" fill="var(--foreground)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">DATA</text>
            <text x="332" y="134" textAnchor="middle" fill="var(--foreground-muted)" fontSize="8" fontFamily="var(--font-mono)">SQL / Mongo</text>
          </svg>
        )}

        {/* Visual for Creative / 3D (WebGL Viewport & Matrix Geometry) */}
        {visualType === 'creative' && (
          <svg viewBox="0 0 400 240" className={styles.svgDiagram}>
            {/* 3D Wireframe Plane */}
            <polygon points="200,40 330,110 200,190 70,110" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="1.5" opacity="0.8" />
            <polygon points="200,70 290,115 200,165 110,115" fill="none" stroke="var(--accent-secondary)" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Coordinate Axis */}
            <line x1="200" y1="115" x2="200" y2="40" stroke="#f43f5e" strokeWidth="2" />
            <line x1="200" y1="115" x2="330" y2="110" stroke="#10b981" strokeWidth="2" />
            <line x1="200" y1="115" x2="110" y2="150" stroke="#38bdf8" strokeWidth="2" />

            <text x="200" y="32" textAnchor="middle" fill="#f43f5e" fontSize="9" fontFamily="var(--font-mono)">+Y (Camera)</text>
            <text x="340" y="114" fill="#10b981" fontSize="9" fontFamily="var(--font-mono)">+X</text>
            <text x="95" y="160" fill="#38bdf8" fontSize="9" fontFamily="var(--font-mono)">+Z (Depth)</text>
            <text x="200" y="215" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="var(--font-mono)">THREE.JS / WEBGL VIEWPORT</text>
          </svg>
        )}

        {/* Visual for Data & AI/ML */}
        {(visualType === 'data' || visualType === 'ai') && (
          <svg viewBox="0 0 400 240" className={styles.svgDiagram}>
            {/* Layer Nodes */}
            <g transform="translate(60, 40)">
              <circle cx="0" cy="30" r="10" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
              <circle cx="0" cy="80" r="10" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
              <circle cx="0" cy="130" r="10" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1.5" />
            </g>

            <g transform="translate(190, 20)">
              <circle cx="0" cy="25" r="12" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="0" cy="65" r="12" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="0" cy="105" r="12" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="0" cy="145" r="12" fill="var(--surface-elevated)" stroke="var(--accent)" strokeWidth="2" />
            </g>

            <g transform="translate(320, 55)">
              <circle cx="0" cy="35" r="14" fill="var(--surface-elevated)" stroke="var(--accent-secondary)" strokeWidth="2" />
              <circle cx="0" cy="95" r="14" fill="var(--surface-elevated)" stroke="var(--accent-secondary)" strokeWidth="2" />
            </g>

            {/* Connecting Weights */}
            <line x1="60" y1="70" x2="190" y2="45" stroke="var(--border)" strokeWidth="1" />
            <line x1="60" y1="70" x2="190" y2="85" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
            <line x1="60" y1="120" x2="190" y2="125" stroke="var(--border)" strokeWidth="1" />
            <line x1="60" y1="170" x2="190" y2="165" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />

            <line x1="190" y1="45" x2="320" y2="90" stroke="var(--accent)" strokeWidth="1.5" opacity="0.8" />
            <line x1="190" y1="85" x2="320" y2="90" stroke="var(--accent-secondary)" strokeWidth="1.5" opacity="0.8" />
            <line x1="190" y1="125" x2="320" y2="150" stroke="var(--border)" strokeWidth="1" />
            <line x1="190" y1="165" x2="320" y2="150" stroke="var(--accent)" strokeWidth="1.5" opacity="0.8" />

            <text x="60" y="215" textAnchor="middle" fill="var(--foreground-muted)" fontSize="9" fontFamily="var(--font-mono)">INPUT / TENSOR</text>
            <text x="190" y="215" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="var(--font-mono)">HIDDEN / WEIGHTS</text>
            <text x="320" y="215" textAnchor="middle" fill="var(--accent-secondary)" fontSize="9" fontFamily="var(--font-mono)">PREDICTION</text>
          </svg>
        )}
      </div>

      <div className={styles.visualizerFooter}>
        <span className={styles.footerDescription}>{category.tagline}</span>
      </div>
    </div>
  );
}
