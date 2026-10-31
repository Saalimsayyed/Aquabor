import { Drill, Settings, CheckCircle, Users } from "lucide-react";
import { stats } from "@/data/equipment";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  Drill,
  Settings,
  CheckCircle,
  Users,
};

export function StatsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-bg-2) 100%)" }}
      aria-label="Company highlights"
      id="stats"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(0,184,217,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-label">Why AQUABOR</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              What Sets Us Apart
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon] || Drill;
            return (
              <StaggerItem key={stat.label}>
                <div className="stat-card group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(7,91,154,0.4), rgba(0,184,217,0.4))",
                      border: "1px solid rgba(0,184,217,0.2)",
                    }}
                  >
                    <Icon size={26} className="text-[var(--accent)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-3 leading-snug">
                    {stat.label}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
