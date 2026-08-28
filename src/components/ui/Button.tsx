import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  download?: boolean | string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  leftIcon,
  rightIcon,
  fullWidth = false,
  download,
  className = '',
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classNames}
          target="_blank"
          rel="noopener noreferrer"
          download={download}
        >
          {content}
        </a>
      );
    }

    if (download) {
      return (
        <a href={href} className={classNames} download={download}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {content}
    </button>
  );
}
