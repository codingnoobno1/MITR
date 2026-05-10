import { Navbar } from "@/components/layout/Navbar";
import { HeroPhilosophy } from "@/components/sections/HeroPhilosophy";
import { DivisionsSection } from "@/components/sections/DivisionsSection";
import { ArchitectureDeepDive } from "@/components/sections/ArchitectureDeepDive";
import { IntelligentLayerWorkflow } from "@/components/sections/IntelligentLayerWorkflow";
import { IndustryGap } from "@/components/sections/IndustryGap";
import { IndustrialCaseStudies } from "@/components/sections/IndustrialCaseStudies";
import { MitrApproach } from "@/components/sections/MitrApproach";
import { ModularEcosystem } from "@/components/sections/ModularEcosystem";
import { EcosystemRoadmap } from "@/components/sections/EcosystemRoadmap";
import { TeamSection } from "@/components/sections/team";
import { TechStack } from "@/components/animations/TechStack";
import { FutureVision } from "@/components/sections/FutureVision";
import { BrandIntroduction } from "@/components/sections/BrandIntroduction";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-white selection:bg-blue-100">
      <Navbar />
      
      <div className="relative z-0">
        {/* Section 1: Interactive 3D World (Main Focus) */}
        <HeroPhilosophy />

        {/* Section 2: Brand Identity / Heading (Moved from Hero) */}
        <BrandIntroduction />
        
        {/* Section: Core Divisions */}
        <DivisionsSection />

        {/* Section: Technical Deep Dive (New Depth) */}
        <ArchitectureDeepDive />
        
        {/* Section: Operational Workflow (New Depth) */}
        <IntelligentLayerWorkflow />

        {/* Section 2: Industry Problem */}
        <IndustryGap />

        {/* Section: Impact Proof (New Depth) */}
        <IndustrialCaseStudies />
        
        {/* Section 3: MITR Approach */}
        <MitrApproach />
        
        {/* Section 4: Modular Ecosystem */}
        <ModularEcosystem />

        {/* Section: Future Roadmap (New Depth) */}
        <EcosystemRoadmap />

        {/* Bonus: Tech Stack Marquee */}
        <TechStack />
        
        {/* Section: Leadership Team */}
        <TeamSection />
        
        {/* Section 5: Future Vision / CTA */}
        <FutureVision />

        <Footer />
      </div>
    </main>
  );
}
