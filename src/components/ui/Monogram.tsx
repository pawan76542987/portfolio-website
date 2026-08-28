import React from 'react';
import styles from './Monogram.module.css';

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Monogram({ size = 'md', className = '' }: MonogramProps) {
  return (
    <div className={`${styles.monogram} ${styles[size]} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
        {/* Hexagonal/Tech Frame */}
        <path
          d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          className={styles.frame}
        />
        {/* P Letterform */}
        <path
          d="M13 13V27M13 13H21C23.2 13 25 14.8 25 17C25 19.2 23.2 21 21 21H13"
          stroke="var(--accent)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.letterP}
        />
        {/* U Letterform */}
        <path
          d="M20 22V25C20 26.2 21 27 22.5 27C24 27 25 26.2 25 25V21"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.letterU}
        />
        {/* Central Core Pulse Point */}
        <circle cx="20" cy="20" r="1.5" fill="var(--accent)" className={styles.core} />
      </svg>
    </div>
  );
}
