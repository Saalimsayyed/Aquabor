import {
  MessageSquare,
  MapPin,
  FileText,
  Settings,
  CheckCircle,
} from "lucide-react";
import { workProcess } from "@/data/equipment";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  MapPin,
  FileText,
  Drill: Settings,
  Settings,
  CheckCircle,
};

export function WorkProcess() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--light-bg)" }}
      aria-label="Our work process"
      id="process"
    >
      <div className="container">
        <SectionHeader
          label="How We Work"
          title="Our Proven Drilling Process"
          subtitle="Every AQUABOR project follows a structured, transparent process designed to deliver exceptional results on time and within specification."
        />

        <StaggerContainer className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div
            className="absolute left-7 top-8 bottom-8 w-0.5 hidden md:block"
            style={{
              background: "linear-gradient(to bottom, var(--primary), var(--accent))",
            }}
            aria-hidden="true"
          />

          {workProcess.map((step) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <StaggerItem key={step.step}>
                <div className="process-step mb-8 last:mb-0 group">
                  {/* Step number circle */}
                  <div
                    className="process-number flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: "white",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white"
                        style={{
                          background: "rgba(7,91,154,0.08)",
                          color: "var(--primary)",
                        }}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-base mb-1.5"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
