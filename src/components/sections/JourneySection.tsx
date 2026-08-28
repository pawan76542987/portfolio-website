import React from 'react';
import { journeyData } from '@/data/journey';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { GraduationCap, Briefcase, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import styles from './JourneySection.module.css';

export function JourneySection() {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap size={18} />;
      case 'freelance':
        return <Briefcase size={18} />;
      case 'building':
        return <Sparkles size={18} />;
      default:
        return <GraduationCap size={18} />;
    }
  };

  return (
    <section id="journey" className="section" aria-label="Education and Experience Journey">
      <div className="container">
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND & EXPERIENCE"
          title="Education, Freelance & Building Journey"
          subtitle="An honest timeline of academic coursework, practical client web projects, and continuous technical exploration."
        />

        <div className={styles.timelineContainer}>
          {journeyData.map((item, index) => (
            <article key={item.id} className={styles.timelineItem}>
              {/* Timeline Track & Node */}
              <div className={styles.timelineTrack}>
                <div className={styles.timelineNode}>{getTimelineIcon(item.type)}</div>
                {index < journeyData.length - 1 && <div className={styles.timelineLine} />}
              </div>

              {/* Timeline Content Card */}
              <div className={styles.timelineContent}>
                <div className={styles.itemHeader}>
                  <div className={styles.headerTitles}>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.orgRow}>
                      <span className={styles.orgName}>{item.organization}</span>
                      <span className={styles.divider}>•</span>
                      <span className={styles.location}>
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                  <span className={styles.periodBadge}>{item.period}</span>
                </div>

                <p className={styles.itemDescription}>{item.description}</p>

                {/* Highlights */}
                <div className={styles.highlightsBlock}>
                  <span className={styles.highlightsTitle}>KEY HIGHLIGHTS:</span>
                  <ul className={styles.highlightsList}>
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        <CheckCircle2 size={16} className={styles.checkIcon} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills used */}
                <div className={styles.skillsRow}>
                  {item.skillsUsed.map((skill) => (
                    <Badge key={skill} variant="subtle" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
