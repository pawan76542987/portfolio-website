'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className={styles.placeholder} aria-hidden="true" />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <span className={styles.iconWrapper}>
        {isDark ? (
          <Sun className={styles.icon} size={18} aria-hidden="true" />
        ) : (
          <Moon className={styles.icon} size={18} aria-hidden="true" />
        )}
      </span>
      <span className={styles.srOnly}>Toggle theme</span>
    </button>
  );
}
