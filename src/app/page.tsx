import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { JourneySection } from '@/components/sections/JourneySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      {/* 01. Hero & Introduction */}
      <HeroSection />

      {/* 02. Proof — Selected Engineering Work & Case Studies */}
      <ProjectsSection />

      {/* 03. About — Engineering Background & First Principles */}
      <AboutSection />

      {/* 04. Capabilities — Interactive Skills & System Visualizer */}
      <CapabilitiesSection />

      {/* 05. Philosophy — How I Build */}
      <PhilosophySection />

      {/* 06. Journey — Education & Practical Building */}
      <JourneySection />

      {/* 07. Client Services — Freelance Offerings */}
      <ServicesSection />

      {/* 08. Contact — Direct Transmission & Inquiries */}
      <ContactSection />
    </>
  );
}
