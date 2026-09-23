'use client';

import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import styles from './SoundToggle.module.css';

interface SoundToggleProps {
  className?: string;
}

export function SoundToggle({ className = '' }: SoundToggleProps) {
  const { soundEnabled, toggleSound, mounted } = useSound();

  if (!mounted) {
    return <div className={styles.placeholder} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggleSound}
      className={`${styles.toggleBtn} ${soundEnabled ? styles.active : ''} ${className}`}
      aria-label={soundEnabled ? 'Disable UI sound effects' : 'Enable UI sound effects'}
      aria-pressed={soundEnabled}
      title={soundEnabled ? 'Sound: On' : 'Sound: Off (Muted)'}
    >
      <span className={styles.iconWrapper}>
        {soundEnabled ? (
          <Volume2 size={16} aria-hidden="true" />
        ) : (
          <VolumeX size={16} aria-hidden="true" />
        )}
      </span>

      {soundEnabled && (
        <span className={styles.soundWaves} aria-hidden="true">
          <span className={styles.waveBar} />
          <span className={styles.waveBar} />
          <span className={styles.waveBar} />
        </span>
      )}

      <span className={styles.srOnly}>
        {soundEnabled ? 'Audio effects active' : 'Audio effects muted'}
      </span>
    </button>
  );
}
