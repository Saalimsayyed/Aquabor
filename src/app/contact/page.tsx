import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact AQUABOR – Water Well Drilling Dubai | Free Quote UAE",
  description:
    "Contact AQUABOR for professional water well drilling and borehole services in Dubai, UAE. Request a free quote for your groundwater project. Get in touch with our expert team.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Location",
    value: "Dubai, United Arab Emirates",
    note: "[Address to be updated]",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: "+971 XX XXX XXXX",
    note: "[Placeholder – update with real number]",
    href: "tel:+971000000000",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "info@aquabor.ae",
    note: "[Placeholder – update with real email]",
    href: "mailto:info@aquabor.ae",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday – Thursday: 8:00 AM – 6:00 PM",
    note: "UAE time (GST)",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="Contact page hero">
        <div className="container relative z-10">
          <FadeIn>
            <Breadcrumb items={[{ label: "Contact Us" }]} />
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mt-6 mb-4 leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Contact{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00B8D9, #4DD8F0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Team
              </span>
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Ready to start your water well drilling project? Contact AQUABOR for a free consultation and quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white" aria-label="Contact information and form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <aside aria-label="Contact details">
              <FadeIn direction="right">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                  Get In Touch
                </h2>

                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <StaggerItem key={item.label}>
                        <div
                          className="rounded-2xl p-5 flex items-start gap-4 transition-all hover:shadow-md"
                          style={{ background: "var(--light-bg)", border: "1px solid var(--border)" }}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: "linear-gradient(135deg, rgba(7,91,154,0.1), rgba(0,184,217,0.1))",
                              color: "var(--primary)",
                            }}
                          >
                            <Icon size={18} aria-hidden="true" />
                          </div>
                          <div>
                            <p
                              className="text-xs font-bold uppercase tracking-wide mb-0.5"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm font-semibold text-[var(--text-primary)]">
                                {item.value}
                              </p>
                            )}
                            <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.note}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                {/* WhatsApp CTA */}
                <div className="mt-6">
                  <a
                    href="https://wa.me/971000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl font-semibold text-white transition-all hover:scale-105"
                    style={{ background: "#25D366" }}
                    id="contact-whatsapp"
                    aria-label="Chat with AQUABOR on WhatsApp"
                  >
                    <MessageCircle size={20} aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ background: "var(--light-bg)" }}
                    aria-label="Map placeholder – Google Maps embed to be configured"
                    role="img"
                  >
                    <div className="text-center">
                      <MapPin size={36} className="mx-auto mb-2" style={{ color: "var(--text-muted)" }} aria-hidden="true" />
                      <p className="text-sm text-[var(--text-muted)]">Dubai, UAE</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">[Google Maps embed to be configured]</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn direction="left">
                <div
                  className="rounded-2xl p-7 md:p-10"
                  style={{ border: "1px solid var(--border)", background: "white" }}
                >
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-7 leading-relaxed">
                    Fill in the form below and our team will respond within 1–2 business days with a tailored consultation.
                  </p>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section
        className="py-16"
        style={{ background: "var(--light-bg)" }}
        aria-label="Service areas"
      >
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                Serving Dubai & the GCC Region
              </h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                AQUABOR operates across Dubai, Abu Dhabi, Sharjah, and the wider UAE and GCC region. Contact us with your project location and we will confirm coverage.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE", "Saudi Arabia", "Qatar", "Kuwait"].map((area) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "white",
                      color: "var(--primary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
