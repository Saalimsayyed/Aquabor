"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Projects page hero">
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb items={[{ label: "Our Projects" }]} />
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00B8D9, #4DD8F0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Explore representative projects demonstrating AQUABOR&apos;s expertise in water well drilling and groundwater solutions across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="section-padding bg-white" aria-label="Project gallery">
        <div className="container">
          <SectionHeader
            label="Portfolio"
            title="Delivering Solutions Across the UAE"
            subtitle="The following are representative demonstration projects showcasing the type of work AQUABOR delivers. Actual project details will be updated with client authorization."
          />

          {/* Demo notice */}
          <div
            className="rounded-xl p-4 mb-8 flex items-start gap-3"
            style={{ background: "rgba(255,165,0,0.08)", border: "1px solid rgba(255,165,0,0.25)" }}
            role="note"
            aria-label="Demo content notice"
          >
            <span className="text-xl" aria-hidden="true">ℹ️</span>
            <p className="text-sm" style={{ color: "#b45309" }}>
              <strong>Note:</strong> These are demonstration projects illustrating AQUABOR&apos;s service capabilities. All projects are clearly marked as demo content. Actual completed project information will be published upon client authorization.
            </p>
          </div>

          {/* Category filters */}
          <div
            className="flex flex-wrap gap-3 mb-9"
            role="group"
            aria-label="Filter projects by category"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeCategory === cat
                    ? {
                        background: "linear-gradient(135deg, var(--primary), var(--accent))",
                        color: "white",
                        boxShadow: "0 4px 15px rgba(7,91,154,0.3)",
                      }
                    : {
                        background: "var(--light-bg)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border)",
                      }
                }
                aria-pressed={activeCategory === cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-card block group"
                    id={`project-${project.slug}`}
                    aria-label={`View project: ${project.title}`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} – ${project.category} in ${project.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                          <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Demo badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                        style={{ background: "rgba(255,165,0,0.85)", color: "white" }}
                      >
                        Demo
                      </span>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-bold"
                        style={{ background: "rgba(7,27,45,0.85)", color: "white/80" }}
                      >
                        {project.year}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[var(--text-muted)]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
