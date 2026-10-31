import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { equipmentCategories } from "@/data/equipment";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

// Show only first 4 items across categories for homepage preview
const previewItems = equipmentCategories
  .flatMap((cat) => cat.items)
  .slice(0, 4);

export function EquipmentSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--dark-bg)" }}
      aria-label="Our drilling equipment"
      id="equipment"
    >
      <div className="container">
        <SectionHeader
          label="Our Equipment"
          title="Modern Drilling Rigs & Equipment"
          subtitle="AQUABOR operates a modern fleet of high-capacity drilling rigs, compressors and ancillary equipment for every drilling challenge."
          light
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {previewItems.map((item) => (
            <StaggerItem key={item.id}>
              <div className="equipment-card group">
                <Image
                  src={item.image}
                  alt={`${item.name} – water well drilling equipment`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="overlay">
                  <span
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center mt-10">
          <Link
            href="/equipment"
            className="btn btn-outline text-sm"
            id="equipment-view-all"
          >
            View All Equipment
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
