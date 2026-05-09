import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/hero";
import { DepartmentsSection } from "@/components/sections/departments";
import { ProjectsSection } from "@/components/sections/projects";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { TechStack } from "@/components/animations/TechStack";
import { Footer as ContactSection } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary/30">
      {/* Background Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40 mesh-gradient" />
      
      <Navbar />
      
      <div className="relative z-0">
        <HeroSection />
        
        <div className="space-y-0">
          <DepartmentsSection />
          <ProjectsSection />
          <DashboardPreview />
          <TechStack />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
