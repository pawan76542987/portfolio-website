import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { personalInfo } from '@/data/socials';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: '#080a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pawanuniyara.dev'),
  title: 'Pawan Uniyara — Full-Stack Developer & CSE (AI/ML) Undergraduate',
  description:
    'Personal engineering portfolio of Pawan Uniyara. Combining algorithmic problem solving in C++ with modern full-stack web development (React, Next.js, WebGL) and clean architecture.',
  keywords: [
    'Pawan Uniyara',
    'Full-Stack Developer',
    'CSE AI/ML Undergraduate',
    'React Developer',
    'Next.js',
    'Three.js WebGL',
    'C++ Algorithms',
    'Software Engineer Portfolio',
    'Delhi NCR Developer',
  ],
  authors: [{ name: 'Pawan Uniyara' }],
  creator: 'Pawan Uniyara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pawanuniyara.dev',
    title: 'Pawan Uniyara — Full-Stack Developer & CSE (AI/ML) Undergraduate',
    description:
      'Personal engineering portfolio of Pawan Uniyara. Building thoughtful software at the intersection of engineering, interaction, and the web.',
    siteName: 'Pawan Uniyara Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pawan Uniyara — Full-Stack Developer & CSE (AI/ML) Undergraduate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pawan Uniyara — Full-Stack Developer & CSE (AI/ML) Undergraduate',
    description:
      'Personal engineering portfolio of Pawan Uniyara. Building thoughtful software at the intersection of engineering, interaction, and the web.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Person JSON-LD
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.fullName,
    alternateName: personalInfo.displayName,
    jobTitle: personalInfo.role,
    url: 'https://pawanuniyara.dev',
    email: personalInfo.email,
    sameAs: [
      personalInfo.githubUrl,
      personalInfo.linkedinUrl,
      personalInfo.instagramUrl,
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: personalInfo.institution,
    },
    knowsAbout: [
      'Full-Stack Web Development',
      'React',
      'Next.js',
      'C++',
      'Data Structures & Algorithms',
      'Three.js WebGL',
      'Artificial Intelligence & Machine Learning',
    ],
  };

  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        {/* Accessible Skip Link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Desktop-only Context Cursor */}
        <CustomCursor />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
