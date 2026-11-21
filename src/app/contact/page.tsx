import { createPageMetadata } from "@/lib/metadata";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { ContactForm } from "./ContactForm";
import { contact } from "@/lib/contact";

export const metadata = createPageMetadata({
  path: "/contact",
  title: "Contact Our Dubai Drilling Team for a Quote",
  description:
    "Request a quote for water well drilling, electrical earthing, concrete core cutting or dewatering in Dubai and across the UAE.",
});

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Location",
    value: contact.officeAddress ?? "Dubai, United Arab Emirates",
    note: undefined,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: contact.phone,
    note: undefined,
    href: contact.phone ? `tel:${contact.phone}` : undefined,
  },
  {
    icon: Mail,
    label: "Email Address",
    value: contact.email,
    note: undefined,
    href: contact.email ? `mailto:${contact.email}` : undefined,
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
                  {contactInfo.filter((item) => item.value).map((item) => {
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
                            {item.note && <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.note}</p>}
                          </div>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                {/* WhatsApp CTA */}
                {contact.whatsappUrl && <div className="mt-6">
                  <a
                    href={contact.whatsappUrl}
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
                </div>}
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
                  {contact.formUrl ? (
                    <>
                      <p className="text-sm text-[var(--text-secondary)] mb-7 leading-relaxed">
                        Tell us about your project to request a consultation and quote.
                      </p>
                      <ContactForm endpoint={contact.formUrl} />
                    </>
                  ) : (
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {contact.email
                        ? <a className="underline" href={`mailto:${contact.email}`}>Email us to request a quote.</a>
                        : contact.phone || contact.whatsappUrl
                          ? "Use the contact details on this page to request a quote."
                          : "Online enquiries are currently unavailable."}
                    </p>
                  )}
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
                Serving Dubai & the UAE
              </h2>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                Send your site location, required service and any drawings or dimensions you have. We can confirm UAE coverage and identify what we need for a quote.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((area) => (
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
