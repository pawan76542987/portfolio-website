'use client';

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import { Theme } from '@/types';

const THEME_STORAGE_KEY = 'pawan-portfolio-theme';

let currentTheme: Theme = 'dark';
let isThemeInitialized = false;
const themeListeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'dark';
  if (!isThemeInitialized) {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored === 'dark' || stored === 'light') {
        currentTheme = stored;
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = prefersDark ? 'dark' : 'dark';
      }
      document.documentElement.setAttribute('data-theme', currentTheme);
    } catch {
      currentTheme = 'dark';
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    isThemeInitialized = true;
  }
  return currentTheme;
}

function getThemeServerSnapshot(): Theme {
  return 'dark';
}

function subscribeTheme(listener: () => void): () => void {
  themeListeners.add(listener);

  const handleStorage = (e: StorageEvent) => {
    if (e.key === THEME_STORAGE_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
      currentTheme = e.newValue;
      document.documentElement.setAttribute('data-theme', currentTheme);
      listener();
    }
  };

  window.addEventListener('storage', handleStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
  };
}

export function setGlobalTheme(theme: Theme) {
  currentTheme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }
  } catch {
    // Handle storage error gracefully
  }
  themeListeners.forEach((l) => l());
}

export function toggleThemeGlobal(): Theme {
  const current = getThemeSnapshot();
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setGlobalTheme(next);
  return next;
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Ensure document attribute is synced on mount
    document.documentElement.setAttribute('data-theme', getThemeSnapshot());
  }, []);

  const toggleTheme = useCallback(() => {
    toggleThemeGlobal();
  }, []);

  return { theme, toggleTheme, mounted };
}
