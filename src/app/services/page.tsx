import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata({
  path: "/services",
  title: "Drilling, Earthing & Core Cutting Services in Dubai",
  description:
    "Explore water well and borehole drilling, earth pit installation, concrete core cutting and construction dewatering services in Dubai and across the UAE.",
});

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Services page hero">
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb items={[{ label: "Our Services" }]} />
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
                Services
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              AQUABOR handles water well drilling, electrical earthing, concrete core cutting and groundwater dewatering for projects in Dubai and across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white" aria-label="All services">
        <div className="container">
          <SectionHeader
            label="What We Offer"
            title="Drilling, Earthing, Core Cutting & Dewatering"
            subtitle="Every service is delivered by experienced professionals using modern equipment and proven methodologies."
          />

          <StaggerContainer className="space-y-12">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <article
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--light-bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] img-zoom ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="section-label">Service</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-3 mb-3 leading-tight">
                      {service.title}
                    </h2>
                    <div className="divider" />
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-5 text-sm">
                      {service.description}
                    </p>

                    <h3 className="font-bold text-[var(--text-primary)] text-sm mb-3">Key Benefits</h3>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.benefits.slice(0, 4).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: "var(--accent)" }}
                            aria-hidden="true"
                          />
                          <span className="text-sm text-[var(--text-secondary)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="btn btn-primary text-sm"
                      id={`services-page-${service.slug}`}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
