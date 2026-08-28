'use client';

import React, { useState } from 'react';
import { projectsData } from '@/data/projects';
import { Project } from '@/types';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CaseStudyModal } from './CaseStudyModal';
import { GithubIcon } from '@/components/ui/Icons';
import { ExternalLink, ArrowUpRight, BookOpen, Terminal } from 'lucide-react';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardKeyDown = (e: React.KeyboardEvent, project: Project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // Only trigger if target is the card itself, not child links/buttons
      if (e.target === e.currentTarget) {
        e.preventDefault();
        setSelectedProject(project);
      }
    }
  };

  return (
    <section id="work" className="section" aria-label="Selected Engineering Work">
      <div className="container">
        <SectionHeader
          eyebrow="PROVEN EXECUTION • SELECTED WORK"
          title="Engineered Web Experiences & Projects"
          subtitle="A curated selection of responsive platforms and interactive web applications built with modern frontend architectures."
        />

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
              data-cursor="view"
              tabIndex={0}
              role="button"
              aria-haspopup="dialog"
              aria-label={`View ${project.title} Case Study`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => handleCardKeyDown(e, project)}
            >
              {/* Card Top Metadata */}
              <div className={styles.cardHeader}>
                <div className={styles.metaLeft}>
                  <span className={styles.projectNumber}>PROJECT {project.number}</span>
                  <Badge variant="accent" size="sm">
                    {project.category}
                  </Badge>
                </div>
                <span className={styles.timeline}>{project.timeline}</span>
              </div>

              {/* Card Title & Short Narrative */}
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.shortDescription}</p>

                {/* Key Architectural Takeaways */}
                <div className={styles.highlightsContainer}>
                  <span className={styles.highlightsLabel}>ENGINEERING FOCUS:</span>
                  <ul className={styles.highlightList}>
                    {project.technicalHighlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        <span className={styles.dot} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className={styles.techRow}>
                {project.technologies.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" size="sm">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 4 && (
                  <Badge variant="subtle" size="sm">
                    +{project.technologies.length - 4}
                  </Badge>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className={styles.cardFooter} onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={styles.caseStudyBtn}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open Case Study for ${project.title}`}
                >
                  <BookOpen size={16} />
                  <span>Case Study</span>
                </button>

                <div className={styles.actionLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.iconLink}
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* GitHub Lab Discovery Card */}
          <div className={styles.githubCard}>
            <div className={styles.githubCardInner}>
              <div className={styles.githubHeader}>
                <Terminal size={24} className={styles.githubIcon} />
                <Badge variant="default" size="sm">
                  Open Source & Lab
                </Badge>
              </div>

              <h3 className={styles.githubTitle}>Explore More Repositories</h3>
              <p className={styles.githubDescription}>
                Inspect experimental prototypes, algorithmic C++ solutions, utility scripts, and ongoing digital explorations on GitHub.
              </p>

              <div className={styles.githubFooter}>
                <Button
                  href="https://github.com/pawan76542987"
                  external
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowUpRight size={16} />}
                  fullWidth
                >
                  Visit @pawan76542987 on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
