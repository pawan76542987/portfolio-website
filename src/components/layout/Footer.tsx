'use client';

import React from 'react';
import { Monogram } from '@/components/ui/Monogram';
import { personalInfo, socialLinks } from '@/data/socials';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { ArrowUp, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubIcon size={16} />;
      case 'linkedin':
        return <LinkedinIcon size={16} />;
      case 'instagram':
        return <InstagramIcon size={16} />;
      case 'email':
        return <Mail size={16} />;
      default:
        return null;
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brandGroup}>
            <div className={styles.brandHeader}>
              <Monogram size="sm" />
              <span className={styles.brandTitle}>Pawan Uniyara</span>
            </div>
            <p className={styles.tagline}>{personalInfo.tagline}</p>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.navColumn}>
              <span className={styles.navHeading}>NAVIGATION</span>
              <ul className={styles.linksList}>
                <li><a href="#work" className={styles.link}>Selected Work</a></li>
                <li><a href="#capabilities" className={styles.link}>Capabilities Matrix</a></li>
                <li><a href="#philosophy" className={styles.link}>Engineering Philosophy</a></li>
                <li><a href="#journey" className={styles.link}>Education & Journey</a></li>
                <li><a href="#services" className={styles.link}>Client Services</a></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <span className={styles.navHeading}>CONNECT</span>
              <ul className={styles.linksList}>
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <span className={styles.linkIcon}>{getSocialIcon(link.type)}</span>
                      <span>{link.platform}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.footerBottom}>
          <div className={styles.copyrightBlock}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Pawan Uniyara. Designed & engineered with intention.
            </p>
            <span className={styles.locationTag}>Built in {personalInfo.location}</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
