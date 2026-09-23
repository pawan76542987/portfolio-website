'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'text' | 'view'>('default');
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable entirely on touch devices & reduced motion
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isCoarse || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    setIsTouch(false);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isHovering) {
        isHovering = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Fast direct transform for instant dot response (0ms latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target instanceof Element ? e.target : null;
      if (!target || typeof target.closest !== 'function') {
        setCursorState('default');
        return;
      }

      const viewTarget = target.closest('[data-cursor="view"]');
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
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

    // Smooth lerp loop for the trailing outer ring
    const renderLoop = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationId = requestAnimationFrame(renderLoop);
    };

    const onMouseLeave = () => {
      isHovering = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isHovering = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`${styles.cursorDot} ${styles[cursorState]}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`${styles.cursorRing} ${styles[cursorState]}`}
        aria-hidden="true"
      >
        {cursorState === 'view' && <span className={styles.viewLabel}>VIEW</span>}
      </div>
    </>
  );
}
