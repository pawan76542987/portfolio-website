'use client';

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';

const SOUND_STORAGE_KEY = 'pawan-portfolio-sound';

// Singleton AudioContext to prevent creating multiple hardware handles
let globalAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!globalAudioCtx) {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        globalAudioCtx = new AudioContextClass();
      }
    } catch {
      globalAudioCtx = null;
    }
  }
  if (globalAudioCtx && globalAudioCtx.state === 'suspended') {
    globalAudioCtx.resume().catch(() => {});
  }
  return globalAudioCtx;
}

function isReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Global Sound State Store (External Store for clean synchronization across all components)
let isSoundEnabled = false;
let isSoundInitialized = false;
const soundListeners = new Set<() => void>();

function getSoundSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  if (!isSoundInitialized) {
    try {
      const stored = localStorage.getItem(SOUND_STORAGE_KEY);
      isSoundEnabled = stored === 'true' && !isReducedMotion();
    } catch {
      isSoundEnabled = false;
    }
    isSoundInitialized = true;
  }
  return isSoundEnabled;
}

function getSoundServerSnapshot(): boolean {
  return false;
}

function subscribeSound(listener: () => void): () => void {
  soundListeners.add(listener);

  // Sync across tabs & media queries
  const handleStorage = (e: StorageEvent) => {
    if (e.key === SOUND_STORAGE_KEY) {
      isSoundEnabled = e.newValue === 'true' && !isReducedMotion();
      listener();
    }
  };

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handleMotion = (e: MediaQueryListEvent) => {
    if (e.matches) {
      isSoundEnabled = false;
      listener();
    }
  };

  window.addEventListener('storage', handleStorage);
  mediaQuery.addEventListener('change', handleMotion);

  return () => {
    soundListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
    mediaQuery.removeEventListener('change', handleMotion);
  };
}

function playActivationTone() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, now); // D5
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.09); // A5
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // Audio failsafe
  }
}

export function toggleSoundGlobal(): boolean {
  const current = getSoundSnapshot();
  const next = !current;
  isSoundEnabled = next;
  try {
    localStorage.setItem(SOUND_STORAGE_KEY, String(next));
  } catch {
    // Handle storage exception
  }
  soundListeners.forEach((l) => l());

  if (next) {
    playActivationTone();
  }
  return next;
}

export function useSound() {
  const soundEnabled = useSyncExternalStore(
    subscribeSound,
    getSoundSnapshot,
    getSoundServerSnapshot
  );
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Tactile Button Click (40ms Micro-Tick)
  const playClick = useCallback(() => {
    if (!soundEnabled || isReducedMotion()) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Audio playback failsafe
    }
  }, [soundEnabled]);

  // 2. Subtle Hover Blip (25ms Soft Touch)
  const playHover = useCallback(() => {
    if (!soundEnabled || isReducedMotion()) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.025);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch {
      // Audio playback failsafe
    }
  }, [soundEnabled]);

  // 3. Mode Switch Slide (80ms Rising Frequency)
  const playSwitch = useCallback(() => {
    if (!soundEnabled || isReducedMotion()) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Audio playback failsafe
    }
  }, [soundEnabled]);

  // 4. Harmonic Success Arpeggio (Triad: C5 -> E5 -> G5)
  const playSuccess = useCallback(() => {
    if (!soundEnabled || isReducedMotion()) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
      const noteDuration = 0.18;
      const noteSpacing = 0.07;
      const startTime = ctx.currentTime;

      notes.forEach((freq, index) => {
        const noteStart = startTime + index * noteSpacing;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.07, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDuration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + noteDuration);
      });
    } catch {
      // Audio playback failsafe
    }
  }, [soundEnabled]);

  const toggleSound = useCallback(() => {
    toggleSoundGlobal();
  }, []);

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playHover,
    playSwitch,
    playSuccess,
    mounted,
  };
}
