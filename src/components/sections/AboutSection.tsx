import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Code2, Brain, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section id="about" className="section" aria-label="About Pawan Uniyara">
      <div className="container">
        <SectionHeader
          eyebrow="BACKGROUND & APPROACH"
          title="Combining Algorithmic Rigor with Full-Stack Craft"
          subtitle="A computer science undergraduate focused on building reliable, well-architected web software that performs predictably under real-world conditions."
        />

        <div className={styles.aboutLayout}>
          {/* Main Editorial Narrative */}
          <div className={styles.narrativeColumn}>
            <p className={styles.leadParagraph}>
              I approach software engineering from first principles. Rather than jumping between framework trends, I anchor my development in strong computer science fundamentals: data structures, algorithmic complexity, object-oriented design, and clean separation of concerns.
            </p>

            <p className={styles.bodyParagraph}>
              As a 2nd-year CSE undergraduate specializing in Artificial Intelligence & Machine Learning at Mirai School of Technology, I spend my time writing competitive algorithmic solutions in <strong>C++</strong>, analyzing algorithmic time-space trade-offs, and building modern, responsive applications with <strong>React</strong> and <strong>Next.js</strong>.
            </p>

            <p className={styles.bodyParagraph}>
              Whether I am developing a conversion-focused business website, engineering a modular UI component library, or experimenting with WebGL shaders, my priority is always clarity, responsiveness, and maintainable architecture.
            </p>

            {/* Core Values / Focus Pillars */}
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <Code2 size={22} className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>Algorithmic Foundations</h3>
                <p className={styles.pillarText}>
                  Rigorous practice in C++ with trees, graphs, dynamic programming, and memory-conscious problem solving.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <Cpu size={22} className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>Modern Web Craft</h3>
                <p className={styles.pillarText}>
                  Engineering component-driven web interfaces with Next.js, sub-millisecond feedback, and fluid responsiveness.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <Brain size={22} className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>AI & ML Exploration</h3>
                <p className={styles.pillarText}>
                  Studying machine learning mathematical foundations, exploratory data analysis, and integrating smart inference models into web workflows.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <Compass size={22} className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>Systemic Architecture</h3>
                <p className={styles.pillarText}>
                  Building reusable design token systems and decoupled services rather than isolated, one-off screens.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Technical Profile Snapshot */}
          <aside className={styles.profileColumn}>
            <div className={styles.profileCard}>
              <div className={styles.profileHeader}>
                <span className={styles.profileEyebrow}>DEVELOPER PROFILE</span>
                <Badge variant="accent" size="sm">ACTIVE STUDENT</Badge>
              </div>

              <div className={styles.profileDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>FULL NAME</span>
                  <span className={styles.detailValue}>Pawan Uniyara</span>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>DEGREE</span>
                  <span className={styles.detailValue}>B.Tech CSE (AI & ML)</span>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>INSTITUTION</span>
                  <span className={styles.detailValue}>Mirai School of Technology</span>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>YEAR OF STUDY</span>
                  <span className={styles.detailValue}>2nd Year (Undergraduate)</span>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>PRIMARY TOOLS</span>
                  <span className={styles.detailValue}>C++, React, Next.js, Python</span>
                </div>

                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>LOCATION</span>
                  <span className={styles.detailValue}>Delhi / Ghaziabad, India</span>
                </div>
              </div>

              <div className={styles.focusListContainer}>
                <span className={styles.focusListTitle}>CURRENT LEARNING VECTOR:</span>
                <ul className={styles.focusList}>
                  <li className={styles.focusItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>Advanced Graph Algorithms in C++</span>
                  </li>
                  <li className={styles.focusItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>Full-Stack Next.js 15 App Architecture</span>
                  </li>
                  <li className={styles.focusItem}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>Interactive WebGL Shaders with Three.js</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
