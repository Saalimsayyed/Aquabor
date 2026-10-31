import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const highlights = [
  "Expert hydrogeological assessment",
  "Modern drilling rigs and equipment",
  "Safety-focused project execution",
  "Full regulatory compliance (UAE)",
  "Transparent communication throughout",
  "Reliable on-time delivery",
];

export function AboutSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--light-bg)" }}
      aria-label="About AQUABOR"
      id="about"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <FadeIn direction="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl img-zoom aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
                alt="AQUABOR professional drilling team with drilling equipment in UAE"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Badge */}
              <div
                className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4 border border-white/20"
                style={{ backdropFilter: "blur(16px)" }}
              >
                <p className="text-white font-bold text-lg leading-none">Dubai, UAE</p>
                <p className="text-white/70 text-sm mt-1">Based & Operating GCC-Wide</p>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -top-6 -right-6 rounded-2xl px-6 py-4 shadow-xl hidden lg:block"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            >
              <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Expertise</p>
              <p className="text-white font-bold text-base mt-0.5">
                Groundwater Solutions
              </p>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="left">
            <span className="section-label">About AQUABOR</span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mt-3 mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Professional Water Well Drilling in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dubai & UAE
              </span>
            </h2>
            <div className="divider" />
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              AQUABOR is a premier water well drilling and borehole construction company operating in Dubai and across the UAE. We combine advanced drilling technology with deep hydrogeological expertise to deliver groundwater solutions that meet the highest standards of quality, safety and reliability.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
              From initial site assessment to final project handover, our experienced team manages every aspect of your drilling project with professionalism and precision, ensuring you receive a reliable, long-term water supply solution tailored to your specific needs.
            </p>

            {/* Highlights grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" role="list">
              {highlights.map((item) => (
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

            <Button href="/about" variant="primary" size="md" id="about-learn-more">
              Learn More About Us
              <ArrowRight size={17} />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
