import {
  Award,
  Drill,
  Shield,
  Star,
  CheckSquare,
  Heart,
} from "lucide-react";
import { features } from "@/data/equipment";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Drill,
  Shield,
  Star,
  CheckSquare,
  Heart,
};

export function WhyChooseUs() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--light-bg)" }}
      aria-label="Why choose AQUABOR"
      id="why-choose-us"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              label="Why Choose Us"
              title="Why Choose AQUABOR as Your Drilling Contractor in UAE?"
              subtitle="Our work is simple: do it safe, do it right and finish on time. Here is what you get when you work with us."
              align="left"
            />

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.08}>
              {features.map((feature) => {
                const Icon = iconMap[feature.icon] || Award;
                return (
                  <StaggerItem key={feature.title}>
                    <div
                      className="feature-card p-5 rounded-2xl transition-all duration-300 hover:shadow-lg group cursor-default"
                      style={{
                        background: "white",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div className="feature-icon">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-sm text-[var(--text-primary)] mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right: Image Stack */}
          <div className="relative hidden lg:block">
            <div className="relative h-[520px]">
              {/* Main image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden img-zoom shadow-2xl">
                <Image
                  src="/images/electrical-earthing-drilling-dubai-auger.webp"
                  alt="Excavator-mounted auger set up for earthing drilling"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(7,27,45,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>

              {/* Floating stats card */}
              <div
                className="absolute -left-10 bottom-12 rounded-2xl p-5 shadow-2xl"
                style={{ background: "white", minWidth: 220 }}
              >
                <p
                  className="text-2xl font-black mb-0.5"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--accent))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  UAE-Based
                </p>
                <p className="text-xs text-[var(--text-muted)] font-medium">
                  Serving Dubai &amp; Other Emirates
                </p>
              </div>

              {/* Top accent block */}
              <div
                className="absolute -right-6 top-10 rounded-2xl px-5 py-4 shadow-xl"
                style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
              >
                <Shield size={28} className="text-white mb-1" />
                <p className="text-white font-bold text-sm">Safety First</p>
                <p className="text-white/70 text-xs">On Every Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
