import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} – Water Well Drilling Services Dubai, UAE`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | AQUABOR Dubai`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.title }],
    },
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "AQUABOR",
      url: "https://aquabor.ae",
    },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    serviceType: service.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="service-hero page-hero" aria-label={`${service.title} service hero`}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.image}
            alt={`${service.title} services in Dubai, UAE`}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb
              items={[
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              {service.title}
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            <Link href="/contact" className="btn btn-accent" id={`service-detail-quote-${slug}`}>
              Get a Free Quote
              <ArrowRight size={17} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <FadeIn>
                <div
                  className="rounded-2xl overflow-hidden img-zoom aspect-video shadow-xl mb-8"
                >
                  <div className="relative w-full h-full" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={service.image}
                      alt={`${service.title} by AQUABOR in Dubai`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  About This Service
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </FadeIn>

              {/* Benefits */}
              <FadeIn>
                <div
                  className="rounded-2xl p-7"
                  style={{ background: "var(--light-bg)", border: "1px solid var(--border)" }}
                >
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
                    Key Benefits
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={17}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "var(--accent)" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm text-[var(--text-secondary)]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Applications */}
              <FadeIn>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Applications
                </h2>
                <ul className="space-y-2" role="list">
                  {service.applications.map((app) => (
                    <li key={app} className="flex items-center gap-3">
                      <ChevronRight size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
                      <span className="text-sm text-[var(--text-secondary)]">{app}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Process */}
              <FadeIn>
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-5">
                  Our Process
                </h2>
                <ol className="space-y-3" role="list">
                  {service.process.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-xl transition-all hover:shadow-md"
                      style={{
                        background: "var(--light-bg)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
                        aria-label={`Step ${i + 1}`}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed pt-0.5">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6" aria-label="Related services and contact">
              {/* Quick CTA */}
              <FadeIn>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-light))" }}
                >
                  <h3 className="text-white font-bold text-lg mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-5">
                    Contact AQUABOR today for a free consultation and quote for your drilling project.
                  </p>
                  <Link
                    href="/contact"
                    className="btn w-full justify-center"
                    style={{ background: "white", color: "var(--primary)" }}
                    id={`service-sidebar-quote-${slug}`}
                  >
                    Get Free Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>

              {/* Related Services */}
              <FadeIn>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--light-bg)", border: "1px solid var(--border)" }}
                >
                  <h3 className="font-bold text-[var(--text-primary)] mb-4 text-sm tracking-wide uppercase">
                    Related Services
                  </h3>
                  <ul className="space-y-2" role="list">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all hover:bg-white hover:shadow-md"
                          style={{ color: "var(--text-primary)" }}
                        >
                          <span>{s.title}</span>
                          <ArrowRight size={14} style={{ color: "var(--accent)" }} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn>
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--dark-bg)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <h3 className="text-white font-bold mb-3 text-sm tracking-wide uppercase">
                    Contact AQUABOR
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    Based in Dubai, UAE. Serving the UAE and GCC region.
                  </p>
                  <a
                    href="tel:+971000000000"
                    className="text-[var(--accent)] text-sm font-semibold hover:underline"
                  >
                    +971 XX XXX XXXX
                  </a>
                  <br />
                  <a
                    href="mailto:info@aquabor.ae"
                    className="text-[var(--accent)] text-sm hover:underline"
                  >
                    info@aquabor.ae
                  </a>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
