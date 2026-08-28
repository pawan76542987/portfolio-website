import React from 'react';
import { servicesData } from '@/data/services';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import styles from './ServicesSection.module.css';

export function ServicesSection() {
  return (
    <section id="services" className="section" aria-label="Freelance Web Development Services">
      <div className="container">
        <SectionHeader
          eyebrow="CLIENT SOLUTIONS • FREELANCE"
          title="Web Development & Engineering Services"
          subtitle="Transforming ideas into high-performance, responsive websites, landing pages, and interactive digital interfaces for businesses and creators."
        />

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <article key={service.id} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.serviceNumber}>{service.number}</span>
                <span className={styles.idealForBadge}>Best for: {service.idealFor}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <p className={styles.serviceDescription}>{service.description}</p>

                <div className={styles.deliverablesContainer}>
                  <span className={styles.deliverablesTitle}>KEY DELIVERABLES:</span>
                  <ul className={styles.deliverablesList}>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className={styles.deliverableItem}>
                        <Check size={16} className={styles.checkIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <Button
                  href="#contact"
                  variant="outline"
                  size="sm"
                  fullWidth
                  rightIcon={<ArrowRight size={15} />}
                >
                  Discuss Project
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
