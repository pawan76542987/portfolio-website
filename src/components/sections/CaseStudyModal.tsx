'use client';

import React, { useEffect, useRef } from 'react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { GithubIcon } from '@/components/ui/Icons';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import styles from './CaseStudyModal.module.css';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Save previous active element to restore focus on close
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus close button initially
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Trap focus within modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.headerMeta}>
            <span className={styles.projectNumber}>PROJECT {project.number}</span>
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close case study dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          <h2 id="case-study-title" className={styles.title}>
            {project.title}
          </h2>
          <p className={styles.shortSummary}>{project.shortDescription}</p>

          {/* Quick Action Links */}
          <div className={styles.linkRow}>
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                size="sm"
                rightIcon={<ExternalLink size={15} />}
              >
                Live Project Preview
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="outline"
                size="sm"
                leftIcon={<GithubIcon size={15} />}
              >
                View Repository
              </Button>
            )}
          </div>

          <hr className={styles.divider} />

          {/* Problem & Solution Grid */}
          <div className={styles.gridSection}>
            <div className={styles.block}>
              <div className={styles.blockHeading}>
                <Cpu size={18} className={styles.blockIcon} />
                <h3>The Problem</h3>
              </div>
              <p>{project.problem}</p>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHeading}>
                <Layers size={18} className={styles.blockIcon} />
                <h3>The Solution</h3>
              </div>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className={styles.architectureSection}>
              <h3 className={styles.sectionHeading}>Key Architectural Decisions</h3>
              <div className={styles.archGrid}>
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className={styles.archCard}>
                    <span className={styles.archLabel}>{arch.label}</span>
                    <p className={styles.archDesc}>{arch.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contributions Checklist */}
          <div className={styles.contributionsSection}>
            <h3 className={styles.sectionHeading}>Engineering Contributions</h3>
            <ul className={styles.contribList}>
              {project.contributions.map((contrib, idx) => (
                <li key={idx} className={styles.contribItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className={styles.techSection}>
            <h3 className={styles.sectionHeading}>Technologies & Stack</h3>
            <div className={styles.techList}>
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={styles.modalFooter}>
          <span className={styles.footerNote}>Role: {project.role}</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
