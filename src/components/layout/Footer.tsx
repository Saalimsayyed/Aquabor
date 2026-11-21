import { contact } from "@/lib/contact";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { footerLinks, footerServices } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--dark-bg)" }}
      role="contentinfo"
    >
      {/* Decorative top border */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))" }}
      />

      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6" aria-label="AQUABOR Home">
              <Image
                src="/aquabor-logo.webp"
                alt="AQUABOR Water Well Drilling Contracting"
                width={200}
                height={164}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Water well drilling, borewell drilling, electrical earthing, core cutting and dewatering services in Dubai and across the UAE.
            </p>

            {/* WhatsApp CTA */}
            {contact.whatsappUrl && (
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                style={{ background: "#25D366" }}
                id="footer-whatsapp"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
                    id={`footer-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Our Services</h3>
            <ul className="space-y-2" role="list">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-white/60 hover:text-[var(--accent)] text-xs transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">Contact Us</h3>
            <ul className="space-y-4" role="list">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="text-[var(--accent)] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-white/60 text-sm leading-relaxed">
                    {contact.officeAddress ?? "Dubai, United Arab Emirates"}
                  </p>
                </div>
              </li>
              {contact.phone && <li>
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
                  id="footer-phone"
                >
                  <Phone size={17} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>}
              {contact.email && <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
                  id="footer-email"
                >
                  <Mail size={17} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} AQUABOR – Drilling Contractor UAE. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/contact"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
