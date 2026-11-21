import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { equipmentCategories } from "@/data/equipment";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata({
  path: "/equipment",
  title: "Drilling Rigs & Core Cutting Equipment in Dubai",
  description:
    "See the truck-mounted drilling rigs, augers, earth resistance testers, diamond core drills and dewatering equipment AQUABOR uses across the UAE.",
  image: { url: "/images/core-equipment-stock.webp", alt: "Stand-mounted diamond core drill on a concrete slab" },
});

export default function EquipmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-label="Equipment page hero">
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb items={[{ label: "Drilling Equipment" }]} />
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
                Equipment
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Our Dubai team uses truck-mounted rigs for water wells, excavator augers and testers for earthing, diamond core drills for concrete and pumps for construction dewatering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Equipment by Category */}
      <section className="section-padding bg-white" aria-label="Equipment categories">
        <div className="container">
          <SectionHeader
            label="Our Fleet"
            title="Professional Drilling Equipment"
            subtitle="Every piece of equipment in our fleet is regularly maintained and operated by certified professionals, ensuring safety and performance on every project."
          />

          <div className="space-y-16">
            {equipmentCategories.map((category) => (
              <div key={category.id}>
                <FadeIn>
                  <h2
                    className="text-2xl font-bold mb-7 pb-4"
                    style={{
                      color: "var(--text-primary)",
                      borderBottom: "2px solid var(--border)",
                    }}
                  >
                    <span
                      className="inline-block w-4 h-4 rounded-sm mr-3 align-middle"
                      style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                      aria-hidden="true"
                    />
                    {category.name}
                  </h2>
                </FadeIn>

                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
                  staggerDelay={0.1}
                >
                  {category.items.map((item) => (
                    <StaggerItem key={item.id}>
                      <article className="card group h-full flex flex-col">
                        {/* Image */}
                        <div className="img-zoom relative aspect-[4/3]">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: "linear-gradient(to top, rgba(7,27,45,0.6) 0%, transparent 60%)",
                            }}
                            aria-hidden="true"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <span
                            className="text-xs font-bold tracking-widest uppercase mb-2"
                            style={{ color: "var(--accent)" }}
                          >
                            {item.category}
                          </span>
                          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                            {item.name}
                          </h3>
                          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                            {item.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-1.5" role="list">
                            {item.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2">
                                <CheckCircle2
                                  size={14}
                                  style={{ color: "var(--accent)" }}
                                  aria-hidden="true"
                                />
                                <span className="text-xs text-[var(--text-secondary)]">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment commitment section */}
      <section
        className="section-padding"
        style={{ background: "var(--light-bg)" }}
        aria-label="Equipment commitment"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div className="relative rounded-2xl overflow-hidden img-zoom shadow-xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/borewell-drilling-dubai-rig-truck.webp"
                  alt="AQUABOR drilling rig operating in UAE desert environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <span className="section-label">Equipment Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3 mb-4 leading-tight">
                Maintained to the Highest Standards
              </h2>
              <div className="divider" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Every piece of drilling equipment in AQUABOR&apos;s fleet is subject to rigorous preventive maintenance schedules. We invest in modern equipment and keep it in peak operating condition to ensure reliability, safety and performance on every project site.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Our equipment operators hold the relevant certifications and training required to operate drilling rigs safely and efficiently in UAE&apos;s varied geological and environmental conditions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
