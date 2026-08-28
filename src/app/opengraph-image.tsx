import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Pawan Uniyara — Full-Stack Developer & CSE (AI/ML) Undergraduate';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.8,
          }}
        />

        {/* Top Bar with PU Monogram indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              border: '2px solid #38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              fontWeight: 800,
              fontSize: '22px',
            }}
          >
            PU
          </div>
          <span
            style={{
              color: '#38bdf8',
              fontSize: '18px',
              letterSpacing: '0.1em',
              fontWeight: 700,
            }}
          >
            PAWAN UNIYARA • DIGITAL ENGINEERING LAB
          </span>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '900px',
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Building thoughtful software at the intersection of engineering &amp; interaction.
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Full-Stack Developer • CSE (AI/ML) Undergraduate • C++ &amp; WebGL
          </p>
        </div>

        {/* Footer tags */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: '#161c2c',
              color: '#cbd5e1',
              fontSize: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            React / Next.js
          </span>
          <span
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: '#161c2c',
              color: '#cbd5e1',
              fontSize: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            Three.js WebGL
          </span>
          <span
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: '#161c2c',
              color: '#cbd5e1',
              fontSize: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            C++ DSA
          </span>
          <span
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              backgroundColor: '#161c2c',
              color: '#38bdf8',
              fontSize: '16px',
              border: '1px solid rgba(56,189,248,0.3)',
            }}
          >
            Delhi / Ghaziabad, IN
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
