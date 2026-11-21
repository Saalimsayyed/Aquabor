import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const highlights = [
  "Honest advice in simple language",
  "Skilled and trained crew",
  "Own rigs, excavators and equipment",
  "Safety-first work on every site",
  "Work as per UAE rules and consultant requirements",
  "Quick response and on-time completion",
  "Proper reports and documents at handover",
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
                src="/images/earthing-drilling-excavator-uae.webp"
                alt="Excavator-mounted auger beside an excavation"
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
                <p className="text-white/70 text-sm mt-1">Based &amp; Operating UAE-Wide</p>
              </div>
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -top-6 -right-6 rounded-2xl px-6 py-4 shadow-xl hidden lg:block"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            >
              <p className="text-white/80 text-xs font-medium uppercase tracking-widest">Expertise</p>
              <p className="text-white font-bold text-base mt-0.5">
                Drilling &amp; Earthing
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
              Professional Drilling &amp; Earthing Contractor in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dubai, UAE
              </span>
            </h2>
            <div className="divider" />
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              AQUABOR is a drilling and earthing contractor based in Dubai. We work with homeowners, farm owners, builders, consultants and industrial companies across the UAE.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Our main work is water well drilling in the UAE, borewell drilling in Dubai and electrical earthing. We also provide core cutting and dewatering services for construction projects.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
              We understand UAE ground conditions very well. Sand, rock, hard layers and high water table all need different methods. Before we start, we visit the site, check the ground and suggest the best way to do the job. After the work, we give you test results and documents.
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
