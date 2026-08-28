import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8125rem',
          color: 'var(--accent)',
          backgroundColor: 'var(--surface-elevated)',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          border: '1px solid var(--border)',
        }}
      >
        <Terminal size={14} />
        <span>404: RESOURCE_NOT_FOUND</span>
      </div>

      <h1
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: 'var(--foreground)',
          fontFamily: 'var(--font-display)',
        }}
      >
        Digital Coordinate Not Located
      </h1>

      <p
        style={{
          maxWidth: '480px',
          color: 'var(--foreground-secondary)',
          fontSize: '1rem',
          lineHeight: '1.6',
        }}
      >
        The requested digital path or case study does not exist in Pawan&apos;s workspace. Navigate back to the home laboratory.
      </p>

      <Button href="/" variant="primary" size="md" leftIcon={<ArrowLeft size={16} />}>
        Return to Home Laboratory
      </Button>
    </div>
  );
}
