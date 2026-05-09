import { Navbar } from "@/components/layout/Navbar";
import { HeroPhilosophy } from "@/components/sections/HeroPhilosophy";
import { IndustryGap } from "@/components/sections/IndustryGap";
import { MitrApproach } from "@/components/sections/MitrApproach";
import { ModularEcosystem } from "@/components/sections/ModularEcosystem";
import { FutureVision } from "@/components/sections/FutureVision";
import { TechStack } from "@/components/animations/TechStack";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-slate-950 selection:bg-primary/30">
      <Navbar />
      
      <div className="relative z-0">
        {/* Section 1: Hero / Brand Philosophy */}
        <HeroPhilosophy />
        
        {/* Section 2: Industry Problem */}
        <IndustryGap />
        
        {/* Section 3: MITR Approach */}
        <MitrApproach />
        
        {/* Section 4: Modular Ecosystem */}
        <ModularEcosystem />

        {/* Bonus: Tech Stack Marquee */}
        <TechStack />
        
        {/* Section 5: Future Vision / CTA */}
        <FutureVision />

        <Footer />
      </div>
    </main>
  );
}
