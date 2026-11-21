import { createPageMetadata } from "@/lib/metadata";
import { CTASection } from "@/components/sections/CTASection";
import ProjectsClient from "./ProjectsClient";

export const metadata = createPageMetadata({
  path: "/projects",
  title: "Drilling & Earthing Project Examples in the UAE",
  description:
    "Explore representative examples of water well drilling, earth pit installation, substation earthing and construction dewatering in Dubai and across the UAE.",
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectsClient />
      <CTASection />
    </>
  );
}
