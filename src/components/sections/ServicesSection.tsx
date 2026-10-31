import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export function ServicesSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Our services"
      id="services"
    >
      <div className="container">
        <SectionHeader
          label="What We Do"
          title="Comprehensive Drilling & Groundwater Services"
          subtitle="From water well drilling to complete groundwater management, AQUABOR delivers expert solutions for every project requirement across Dubai and the UAE."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="card group h-full flex flex-col">
                {/* Image */}
                <div className="img-zoom relative h-52 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={`${service.title} – professional drilling service in UAE`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category label */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "rgba(7,91,154,0.85)", backdropFilter: "blur(8px)" }}
                    >
                      {service.featured ? "Core Service" : "Service"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="feature-icon mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white"
                    style={{ width: 44, height: 44 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="2" x2="12" y2="5" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                      <line x1="2" y1="12" x2="5" y2="12" />
                      <line x1="19" y1="12" x2="22" y2="12" />
                      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-5">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold mt-auto transition-all group-hover:gap-3"
                    style={{ color: "var(--primary)" }}
                    id={`service-card-${service.slug}`}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn btn-outline-primary text-sm"
            id="services-view-all"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
