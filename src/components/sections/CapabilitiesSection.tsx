'use client';

import React, { useState } from 'react';
import { skillsData } from '@/data/skills';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { CapabilityVisualizer } from './CapabilityVisualizer';
import { Code, Cpu, Database, Palette, Brain, Terminal } from 'lucide-react';
import styles from './CapabilitiesSection.module.css';

export function CapabilitiesSection() {
  const [activeTabId, setActiveTabId] = useState<string>(skillsData[0].id);

  const activeCategory = skillsData.find((cat) => cat.id === activeTabId) || skillsData[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code size={16} />;
      case 'frontend':
        return <Cpu size={16} />;
      case 'backend':
        return <Terminal size={16} />;
      case 'data':
        return <Database size={16} />;
      case 'creative':
        return <Palette size={16} />;
      case 'engineering':
        return <Terminal size={16} />;
      case 'ai-data':
        return <Brain size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="capabilities" className="section" aria-label="Technical Capabilities Matrix">
      <div className="container">
        <SectionHeader
          eyebrow="TECHNICAL ARSENAL & CAPABILITIES"
          title="Engineered Skills & System Competencies"
          subtitle="Organized across language foundations, frontend craftsmanship, backend pipelines, and creative 3D computing."
        />

        <div className={styles.capabilitiesLayout}>
          {/* Category Selection Tabs */}
          <div className={styles.categoryTabs} role="tablist" aria-label="Skill Categories">
            {skillsData.map((category) => {
              const isActive = category.id === activeTabId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.activeTab : ''}`}
                  onClick={() => setActiveTabId(category.id)}
                >
                  <span className={styles.tabIcon}>{getCategoryIcon(category.id)}</span>
                  <span className={styles.tabName}>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Deep Dive */}
          <div className={styles.categoryContent}>
            <div className={styles.categoryHeader}>
              <div className={styles.headerInfo}>
                <h3 className={styles.categoryTitle}>{activeCategory.name}</h3>
                <p className={styles.categoryDescription}>{activeCategory.description}</p>
              </div>
            </div>

            {/* Visual Architecture Simulation */}
            <CapabilityVisualizer category={activeCategory} />

            {/* Skills Grid */}
            <div className={styles.skillsGrid}>
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${styles.skillCard} ${skill.highlight ? styles.highlightCard : ''}`}
                >
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.highlight && (
                      <Badge variant="accent" size="sm">
                        CORE
                      </Badge>
                    )}
                  </div>
                  {skill.note && <p className={styles.skillNote}>{skill.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
