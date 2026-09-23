'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Monogram } from '@/components/ui/Monogram';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SoundToggle } from '@/components/ui/SoundToggle';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/socials';
import { useSound } from '@/hooks/useSound';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Journey', href: '#journey' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const { playClick } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ['work', 'capabilities', 'philosophy', 'journey', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand / Monogram */}
        <Link href="/" className={styles.brand} aria-label="Pawan Uniyara — Home">
          <Monogram size="md" />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Pawan Uniyara</span>
            <span className={styles.brandRole}>Digital Engineering Lab</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Controls */}
        <div className={styles.actions}>
          <Button
            href={personalInfo.resumeUrl}
            download="Pawan_Uniyara_Resume.pdf"
            variant="outline"
            size="sm"
            leftIcon={<FileDown size={15} />}
            className={styles.resumeBtn}
            onClick={playClick}
          >
            Resume
          </Button>
          <SoundToggle />
          <ThemeToggle />

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => {
              playClick();
              setMobileOpen(!mobileOpen);
            }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div className={styles.mobileOverlay} onClick={() => setMobileOpen(false)}>
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className={styles.mobileHeader}>
              <span className={styles.mobileTitle}>Navigation</span>
              <div className={styles.mobileControls}>
                <SoundToggle />
                <ThemeToggle />
                <button
                  type="button"
                  className={styles.closeDrawerBtn}
                  onClick={() => {
                    playClick();
                    setMobileOpen(false);
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} className={styles.mobileArrow} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.mobileFooter}>
              <Button
                href={personalInfo.resumeUrl}
                download="Pawan_Uniyara_Resume.pdf"
                variant="primary"
                size="md"
                fullWidth
                leftIcon={<FileDown size={18} />}
              >
                Download Resume
              </Button>
              <div className={styles.mobileStatus}>
                <span className={styles.statusDot} />
                <span>{personalInfo.statusText}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
