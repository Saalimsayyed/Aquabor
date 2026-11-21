import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const materials = [
  {
    id: "copper-rods",
    name: "Copper Earth Rods",
    description:
      "Strong copper rods that go deep into the ground and give stable earthing. Threaded ends let us join rods to reach the needed depth.",
    image: "/images/copper-bonded-earth-rods-uae.webp",
    alt: "Copper bonded earth rods for earthing systems in UAE",
  },
  {
    id: "brass-couplings",
    name: "Brass Couplings",
    description:
      "Used to join two rods safely, with a strong electrical connection.",
    image: "/images/earth-rod-coupling-brass-uae.webp",
    alt: "Brass earth rod coupling used in earthing installation",
  },
  {
    id: "earth-clamps",
    name: "Earth Clamps",
    description:
      "Hold the cable to the rod firmly. A good clamp keeps the connection safe for years.",
    image: "/images/earthing-clamp-uae.webp",
    alt: "Earthing clamp for earth rod connection",
  },
  {
    id: "bentonite",
    name: "Bentonite Backfill",
    description:
      "Put around the earth rod to hold moisture and help lower earth resistance, especially in dry soil.",
    image: "/images/bentonite-earthing-backfill-uae.webp",
    alt: "Bentonite powder used as earthing backfill compound",
  },
];

export function MaterialsSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Earthing materials we use"
      id="materials"
    >
      <div className="container">
        <SectionHeader
          label="Materials We Use"
          title="Quality Earthing Materials for Safe and Long-Lasting Work"
          subtitle="Good materials give good results. For electrical earthing in the UAE, we use proper copper earth rods, couplings, clamps and backfill compound."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {materials.map((material) => (
            <StaggerItem key={material.id}>
              <div className="card group h-full flex flex-col">
                {/* Image */}
                <div className="img-zoom relative h-48 flex-shrink-0 rounded-t-2xl overflow-hidden">
                  <Image
                    src={material.image}
                    alt={material.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(7,27,45,0.5) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(7,91,154,0.1), rgba(0,184,217,0.1))",
                      border: "1px solid rgba(0,184,217,0.2)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-2">
                    {material.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {material.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
