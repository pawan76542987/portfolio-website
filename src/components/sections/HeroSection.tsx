'use client';

import React from 'react';
import { HeroScene } from '@/components/3d/HeroScene';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { personalInfo } from '@/data/socials';
import { ArrowDown, Sparkles, Code2, Terminal, FileDown, Layers } from 'lucide-react';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.heroSection} aria-label="Introduction">
      {/* 3D WebGL Computational Laboratory Background */}
      <HeroScene />

      {/* Hero Ambient Glow Layer */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={`container ${styles.contentContainer}`}>
        {/* Availability & Positioning Eyebrow */}
        <div className={styles.metaRow}>
          <Badge variant="status" size="md">
            {personalInfo.statusText}
          </Badge>
          <span className={styles.techTag}>
            <Terminal size={14} />
            <span>CSE (AI/ML) Undergraduate</span>
          </span>
        </div>

        {/* Primary Typography Heading */}
        <div className={styles.headingGroup}>
          <div className="eyebrow">{personalInfo.role}</div>
          <h1 className={styles.mainHeading}>
            Building <span className={styles.highlightText}>thoughtful software</span> at the intersection of engineering, interaction, and the web.
          </h1>
        </div>

        {/* Supporting Narrative */}
        <p className={styles.supportingCopy}>
          I combine algorithmic problem-solving in <strong className={styles.strongText}>C++</strong> with modern <strong className={styles.strongText}>Full-Stack Web Development</strong> in React and Next.js. Passionate about clean architecture, sub-millisecond interaction feedback, and applying artificial intelligence to real-world software.
        </p>

        {/* Call to Actions */}
        <div className={styles.ctaGroup}>
          <Button
            href="#work"
            variant="primary"
            size="lg"
            rightIcon={<ArrowDown size={18} />}
          >
            View Selected Work
          </Button>

          <Button
            href="#contact"
            variant="glass"
            size="lg"
          >
            Let&apos;s Work Together
          </Button>

          <Button
            href={personalInfo.resumeUrl}
            download="Pawan_Uniyara_Resume.pdf"
            variant="outline"
            size="lg"
            leftIcon={<FileDown size={18} />}
          >
            Download Resume
          </Button>
        </div>

        {/* Quick System Telemetry / Metrics Bar */}
        <div className={styles.telemetryBar}>
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>PRIMARY FOCUS</span>
            <span className={styles.telemetryValue}>Full-Stack & Algorithms</span>
          </div>
          <div className={styles.telemetryDivider} />
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>CORE LANGUAGES</span>
            <span className={styles.telemetryValue}>C++, JavaScript, Python</span>
          </div>
          <div className={styles.telemetryDivider} />
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>SPECIALIZATION</span>
            <span className={styles.telemetryValue}>B.Tech CSE (AI & ML)</span>
          </div>
          <div className={styles.telemetryDivider} />
          <div className={styles.telemetryItem}>
            <span className={styles.telemetryLabel}>LOCATION</span>
            <span className={styles.telemetryValue}>Delhi / Ghaziabad, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
