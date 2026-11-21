import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const previewProjects = projects.slice(0, 4);

export function ProjectsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Our projects"
      id="projects"
    >
      <div className="container">
        <SectionHeader
          label="Our Projects"
          title="Project Examples in Dubai & UAE"
          subtitle="Explore representative examples of the services AQUABOR offers."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProjects.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                href={`/projects/${project.slug}`}
                className="project-card block group"
                id={`project-card-${project.slug}`}
                aria-label={`View project: ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} – ${project.category} project in UAE`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="project-overlay">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{
                        background: "rgba(0,184,217,0.25)",
                        color: "var(--accent)",
                        border: "1px solid rgba(0,184,217,0.3)",
                      }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-base leading-snug mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/60 text-xs mb-3">
                      <MapPin size={12} aria-hidden="true" />
                      {project.location}
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2"
                      style={{ color: "var(--accent)" }}
                    >
                      View Project
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="btn btn-outline-primary text-sm"
            id="projects-view-all"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
