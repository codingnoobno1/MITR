import { Navbar } from "@/components/navbar/navbar";
import { HeroSection } from "@/components/hero/hero";
import { DepartmentsSection } from "@/components/sections/departments";
import { ProjectsSection } from "@/components/sections/projects";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { ContactSection } from "@/components/sections/contact";

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
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
