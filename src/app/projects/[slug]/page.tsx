import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} – ${project.category} Project | AQUABOR Dubai`,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-10 pt-32 overflow-hidden" aria-label="Project hero">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={`${project.title} – ${project.category} project by AQUABOR in ${project.location}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(7,27,45,0.95) 0%, rgba(7,27,45,0.5) 60%, rgba(7,27,45,0.3) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb
              items={[
                { label: "Projects", href: "/projects" },
                { label: project.title },
              ]}
            />
            <div className="mt-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{
                  background: "rgba(0,184,217,0.2)",
                  color: "var(--accent)",
                  border: "1px solid rgba(0,184,217,0.3)",
                }}
              >
                {project.category}
              </span>

              {/* Demo badge */}
              <span
                className="inline-block ml-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: "rgba(255,165,0,0.85)", color: "white" }}
              >
                Demo Project
              </span>

              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4"
                style={{ letterSpacing: "-0.025em" }}
              >
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} aria-hidden="true" />
                  {project.year}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Project Content */}
      <section className="section-padding bg-white" aria-label="Project details">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2">
              <FadeIn>
                {/* Demo notice */}
                <div
                  className="rounded-xl p-4 mb-8 flex items-start gap-3"
                  style={{ background: "rgba(255,165,0,0.08)", border: "1px solid rgba(255,165,0,0.25)" }}
                  role="note"
                >
                  <span className="text-xl">ℹ️</span>
                  <p className="text-sm" style={{ color: "#b45309" }}>
                    <strong>Demo Project:</strong> This is a representative project demonstrating AQUABOR's service capabilities. Actual project details will be published upon client authorization.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Project Overview
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Tags */}
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-8">
                    <Tag size={14} style={{ color: "var(--text-muted)" }} aria-hidden="true" />
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--light-bg)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </FadeIn>

              {/* Image gallery */}
              {project.images.length > 1 && (
                <FadeIn>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Project Images</h2>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((img, i) => (
                      <StaggerItem key={i}>
                        <div className="relative rounded-xl overflow-hidden img-zoom" style={{ aspectRatio: "4/3" }}>
                          <Image
                            src={img}
                            alt={`${project.title} project image ${i + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeIn>
              )}
            </div>

            {/* Sidebar */}
            <aside aria-label="Project info sidebar">
              <FadeIn>
                {/* Project Details Card */}
                <div
                  className="rounded-2xl p-6 mb-6"
                  style={{ background: "var(--light-bg)", border: "1px solid var(--border)" }}
                >
                  <h3 className="font-bold text-[var(--text-primary)] mb-4 text-sm tracking-wide uppercase">
                    Project Details
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Category</dt>
                      <dd className="text-sm font-medium text-[var(--text-primary)] mt-0.5">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Location</dt>
                      <dd className="text-sm font-medium text-[var(--text-primary)] mt-0.5">{project.location}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-[var(--text-muted)] uppercase tracking-wide">Year</dt>
                      <dd className="text-sm font-medium text-[var(--text-primary)] mt-0.5">{project.year}</dd>
                    </div>
                  </dl>
                </div>

                {/* CTA */}
                <div
                  className="rounded-2xl p-6 mb-6"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-light))" }}
                >
                  <h3 className="text-white font-bold mb-2">Start Your Project</h3>
                  <p className="text-white/75 text-sm mb-4">Contact AQUABOR for a free consultation on your drilling project.</p>
                  <Link
                    href="/contact"
                    className="btn w-full justify-center text-sm"
                    style={{ background: "white", color: "var(--primary)" }}
                    id={`project-detail-cta-${slug}`}
                  >
                    Get Free Quote
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Back to projects */}
                <Link
                  href="/projects"
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ArrowLeft size={15} />
                  Back to Projects
                </Link>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--light-bg)" }}
          aria-label="Other projects"
        >
          <div className="container">
            <FadeIn>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-7">
                Other Projects
              </h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((p) => (
                <StaggerItem key={p.id}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="project-card block group"
                    aria-label={`View project: ${p.title}`}
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} – ${p.category}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="project-overlay">
                      <div>
                        <span
                          className="text-xs font-bold mb-2 block"
                          style={{ color: "var(--accent)" }}
                        >
                          {p.category}
                        </span>
                        <h3 className="text-white font-bold text-sm">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
