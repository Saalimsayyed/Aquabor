import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

const areas = [
  {
    emirate: "Dubai",
    locations: [
      "Dubai Hills",
      "Business Bay",
      "Jebel Ali",
      "Al Quoz",
      "Dubai South",
      "And more",
    ],
  },
  {
    emirate: "Abu Dhabi & Al Ain",
    locations: [
      "Abu Dhabi City",
      "Al Ain",
      "Mussafah",
      "Khalifa City",
    ],
  },
  {
    emirate: "Sharjah & Ajman",
    locations: [
      "Sharjah City",
      "Ajman",
      "Al Jurf Industrial",
    ],
  },
  {
    emirate: "Northern Emirates",
    locations: [
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
    ],
  },
];

export function AreasSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--light-bg)" }}
      aria-label="Areas we serve in UAE"
      id="areas"
    >
      <div className="container">
        <SectionHeader
          label="Where We Work"
          title="Drilling & Earthing in Dubai and Across the UAE"
          subtitle="Our Dubai team handles water well drilling, electrical earthing, concrete core cutting and construction dewatering. Share your site location to confirm coverage."
        />

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div
                key={area.emirate}
                className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(7,91,154,0.12), rgba(0,184,217,0.12))",
                  }}
                >
                  <MapPin size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
                </div>

                <h3 className="font-bold text-base text-[var(--text-primary)] mb-3">
                  {area.emirate}
                </h3>
                <ul className="space-y-1.5" role="list">
                  {area.locations.map((loc) => (
                    <li
                      key={loc}
                      className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Not sure if we cover your area? <a href="/contact" className="font-semibold" style={{ color: "var(--primary)" }}>Contact us</a> and we will confirm.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
