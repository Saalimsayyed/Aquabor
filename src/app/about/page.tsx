import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Droplets } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export const metadata = createPageMetadata({
  path: "/about",
  title: "About Our Dubai Drilling Company",
  description:
    "Meet AQUABOR, a Dubai-based contractor for water well drilling, electrical earthing, concrete core cutting and dewatering across the UAE.",
});

const expertise = [
  "Water Well Drilling & Construction",
  "Borehole Drilling & Development",
  "Hydrogeological Site Assessment",
  "Groundwater Exploration",
  "Well Development & Rehabilitation",
  "Pump Testing & Yield Analysis",
  "Environmental Monitoring Wells",
  "Groundwater Resource Management",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="About AQUABOR hero">
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb items={[{ label: "About Us" }]} />
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              About{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00B8D9, #4DD8F0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AQUABOR
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              AQUABOR is a Dubai-based contractor for water well drilling, electrical earthing, core cutting and dewatering across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white" aria-label="Company overview">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden img-zoom shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/water-well-drilling-rig-uae.webp"
                  alt="Truck-mounted water well drilling rig beside a compressor truck"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <span className="section-label">Company Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3 mb-4 leading-tight">
                Professional Groundwater Solutions in the UAE
              </h2>
              <div className="divider" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                We drill water wells and boreholes for residential, commercial, agricultural and industrial sites. We also install and test earthing systems, core-drill concrete openings for building services and help manage groundwater at excavations.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Our team combines extensive drilling expertise with a deep understanding of UAE&apos;s geological and regulatory environment, ensuring every project is executed with precision, compliance and reliability.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
                At AQUABOR, we believe that access to reliable groundwater is a fundamental requirement for sustainable development in the UAE. Our mission is to make that access a reality for every client we serve.
              </p>
              <Button href="/contact" variant="primary" id="about-get-quote">
                Get a Free Quote
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="section-padding"
        style={{ background: "var(--light-bg)" }}
        aria-label="Mission and vision"
      >
        <div className="container">
          <SectionHeader
            label="Our Purpose"
            title="Mission & Vision"
            subtitle="Driven by a commitment to delivering reliable groundwater solutions that support sustainable development across the UAE."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {/* Mission */}
            <FadeIn direction="right">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Target size={24} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  To deliver professional, reliable and technically excellent water well drilling and groundwater solutions that meet the highest standards of quality, safety and regulatory compliance, providing long-term value to every client we serve in Dubai and across the UAE.
                </p>
              </div>
            </FadeIn>

            {/* Vision */}
            <FadeIn direction="left">
              <div
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "linear-gradient(135deg, var(--dark-bg), var(--dark-bg-2))",
                  border: "1px solid rgba(0,184,217,0.2)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,184,217,0.2)" }}
                >
                  <Eye size={24} style={{ color: "var(--accent)" }} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  To be the leading water well drilling and groundwater solutions company in the UAE, recognized for technical excellence, innovative practices and an unwavering commitment to client satisfaction and sustainable water resource management.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding bg-white" aria-label="Our expertise">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <span className="section-label">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mt-3 mb-4 leading-tight">
                Technical Capabilities & Areas of Expertise
              </h2>
              <div className="divider" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
                AQUABOR brings together deep technical expertise across all aspects of water well drilling and groundwater development, backed by modern equipment and experienced professionals.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                {expertise.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden img-zoom shadow-xl aspect-[4/3]">
                <Image
                  src="/images/earthing-drilling-excavator-uae.webp"
                  alt="Excavator-mounted auger beside an excavation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        className="section-padding"
        style={{ background: "var(--dark-bg)" }}
        aria-label="Our approach"
      >
        <div className="container">
          <SectionHeader
            label="Our Approach"
            title="How We Deliver Excellence"
            subtitle="AQUABOR's approach is grounded in technical rigor, transparent communication and an unwavering focus on client outcomes."
            light
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Droplets size={28} className="text-[var(--accent)]" />,
                title: "Technical Excellence",
                description:
                  "We apply the most appropriate drilling methodology for each site's unique geological conditions, ensuring optimal well performance and longevity.",
              },
              {
                icon: <Target size={28} className="text-[var(--accent)]" />,
                title: "Client-Focused",
                description:
                  "Every project starts with understanding your specific requirements. We develop tailored solutions that align with your technical, budget and timeline objectives.",
              },
              {
                icon: <CheckCircle2 size={28} className="text-[var(--accent)]" />,
                title: "Compliance & Safety",
                description:
                  "All AQUABOR projects are executed in full compliance with UAE regulatory requirements, with safety as our highest priority on every site.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div
                  className="rounded-2xl p-7 h-full transition-all hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(0,184,217,0.1)", border: "1px solid rgba(0,184,217,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
