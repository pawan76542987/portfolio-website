'use client';

import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'text' | 'view'>('default');
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Touch / Coarse pointer detection
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
      const viewTarget = target.closest('[data-cursor="view"]');
      const textTarget = target.closest('p, h1, h2, h3, h4, span, code');

      if (viewTarget) {
        setCursorState('view');
      } else if (interactive) {
        setCursorState('pointer');
      } else if (textTarget) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [visible]);

  if (isTouch || !visible) return null;

  return (
    <>
      <div
        className={`${styles.cursorDot} ${styles[cursorState]}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        aria-hidden="true"
      />
      <div
        className={`${styles.cursorRing} ${styles[cursorState]}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        aria-hidden="true"
      >
        {cursorState === 'view' && <span className={styles.viewLabel}>VIEW</span>}
      </div>
    </>
  );
}
