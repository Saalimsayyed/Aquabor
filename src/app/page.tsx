import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AQUABOR – Water Well Drilling Dubai | Borehole Drilling UAE",
  description:
    "AQUABOR is Dubai's professional water well drilling and borehole construction company. We deliver reliable groundwater solutions across the UAE and GCC. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <EquipmentSection />
      <ProjectsSection />
      <WorkProcess />
      <CTASection />
    </>
  );
}
