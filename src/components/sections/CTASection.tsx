import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--dark-bg) 0%, var(--primary-dark) 50%, var(--dark-bg-2) 100%)" }}
      aria-label="Call to action"
      id="cta"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Big circles */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: "var(--primary-light)" }}
        />

        {/* Wave lines */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-10"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>

        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <FadeIn>
          <span className="section-label mb-6 inline-flex">Get In Touch</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 max-w-3xl mx-auto"
            style={{ letterSpacing: "-0.025em" }}
          >
            Looking for Reliable Water Well Drilling Services?
          </h2>
          <p className="text-white/65 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let AQUABOR help you find the right groundwater solution for your project. Our expert team is ready to assist you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn btn-accent text-base px-9 py-4"
              id="cta-contact-team"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+971000000000"
              className="btn btn-outline text-base px-9 py-4"
              id="cta-phone"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          {/* Trust line */}
          <p className="text-white/40 text-sm mt-8">
            Based in Dubai, UAE · Serving the GCC Region
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
