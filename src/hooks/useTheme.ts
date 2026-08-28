'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from '@/types';

const THEME_STORAGE_KEY = 'pawan-portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') {
        setTheme(stored);
        document.documentElement.setAttribute('data-theme', stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme: Theme = prefersDark ? 'dark' : 'dark'; // default to dark
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
      }
    } catch {
      // Fallback if localStorage is inaccessible
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
        document.documentElement.setAttribute('data-theme', next);
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
      } catch {
        // Handle storage error gracefully
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}
