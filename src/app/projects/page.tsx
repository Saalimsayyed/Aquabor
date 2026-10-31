import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects – Water Well Drilling Portfolio Dubai, UAE | AQUABOR",
  description:
    "View AQUABOR's water well drilling and borehole construction projects across Dubai and the UAE. Representative portfolio demonstrating our expertise in groundwater solutions.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsClient />
      <CTASection />
    </>
  );
}
