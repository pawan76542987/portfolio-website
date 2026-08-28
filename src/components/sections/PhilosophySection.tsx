import React from 'react';
import { principlesData } from '@/data/philosophy';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Zap, Layers, Cpu, Eye } from 'lucide-react';
import styles from './PhilosophySection.module.css';

export function PhilosophySection() {
  const getPrincipleIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Cpu size={20} />;
      case 1:
        return <ShieldCheck size={20} />;
      case 2:
        return <Zap size={20} />;
      case 3:
        return <Layers size={20} />;
      case 4:
        return <Eye size={20} />;
      default:
        return <Cpu size={20} />;
    }
  };

  return (
    <section id="philosophy" className="section" aria-label="Engineering Philosophy">
      <div className="container">
        <SectionHeader
          eyebrow="ENGINEERING PHILOSOPHY • HOW I BUILD"
          title="Core Principles Behind My Code"
          subtitle="Intentional engineering decisions that prioritize long-term maintainability, real user experience, and computational efficiency."
        />

        <div className={styles.principlesGrid}>
          {principlesData.map((principle, idx) => (
            <article key={principle.number} className={styles.principleCard}>
              <div className={styles.cardHeader}>
                <span className={styles.principleNumber}>{principle.number}</span>
                <span className={styles.principleIcon}>{getPrincipleIcon(idx)}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleSummary}>{principle.summary}</p>
                <p className={styles.principleDeepDive}>{principle.deepDive}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.impactLabel}>PRACTICAL IMPACT:</span>
                <span className={styles.impactText}>{principle.technicalImpact}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
