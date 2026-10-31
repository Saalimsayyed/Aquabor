import Link from "next/link";
import { Droplets, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="AQUABOR Home">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #075B9A, #00B8D9)" }}
              >
                <Droplets size={22} className="text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-white tracking-widest">AQUABOR</span>
                <span className="text-[10px] text-white/50 tracking-widest uppercase">Water Well Drilling</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional water well drilling, borehole construction and groundwater solutions in Dubai, UAE. Serving the GCC region with precision and reliability.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "#25D366" }}
              id="footer-whatsapp"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
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
            <ul className="space-y-2.5" role="list">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
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
                    Dubai, United Arab Emirates<br />
                    <span className="text-white/40 text-xs">[Address to be updated]</span>
                  </p>
                </div>
              </li>
              <li>
                <a
                  href="tel:+971000000000"
                  className="flex items-center gap-3 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
                  id="footer-phone"
                >
                  <Phone size={17} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  +971 XX XXX XXXX
                  <span className="text-white/40 text-xs">[Placeholder]</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aquabor.ae"
                  className="flex items-center gap-3 text-white/60 hover:text-[var(--accent)] text-sm transition-colors"
                  id="footer-email"
                >
                  <Mail size={17} className="text-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  info@aquabor.ae
                  <span className="text-white/40 text-xs">[Placeholder]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} AQUABOR Water Well Drilling. All rights reserved.
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
