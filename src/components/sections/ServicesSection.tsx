import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

// Service icons mapping by slug (unused, icons rendered inline)

function ServiceIcon({ slug }: { slug: string }) {
  // Drilling icon (default)
  const drillingIcon = (
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
  );

  const earthingIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );

  const cuttingIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );

  const dewateringIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );

  if (slug.includes("earthing") || slug.includes("substation")) return earthingIcon;
  if (slug.includes("core") || slug.includes("slab")) return cuttingIcon;
  if (slug.includes("dewatering")) return dewateringIcon;
  return drillingIcon;
}

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
          title="Our Drilling, Earthing & Core Cutting Services in UAE"
          subtitle="AQUABOR offers complete drilling and site solutions in Dubai and across the UAE. Whether you need a water well, an earthing system, a hole in a concrete slab or a dry excavation, our team will guide you from the first call to the final handover."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <article className="card group h-full flex flex-col">
                {/* Image */}
                <div className="img-zoom relative h-52 flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
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
                    <ServiceIcon slug={service.slug} />
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
