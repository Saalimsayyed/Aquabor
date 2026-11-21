import { createPageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { AreasSection } from "@/components/sections/AreasSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = createPageMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <MaterialsSection />
      <WhyChooseUs />
      <EquipmentSection />
      <ProjectsSection />
      <WorkProcess />
      <AreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
