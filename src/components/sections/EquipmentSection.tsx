import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

const equipmentTable = [
  {
    name: "Truck-Mounted Drilling Rig",
    use: "Water wells and deep boreholes",
    image: "/images/borewell-drilling-dubai-rig-truck.webp",
    imageAlt: "Truck-mounted borewell drilling equipment on cleared ground",
  },
  {
    name: "Compressor Truck",
    use: "Gives air power for drilling and well cleaning",
    image: "/images/water-well-drilling-rig-uae.webp",
    imageAlt: "Truck-mounted drilling rig and compressor truck",
  },
  {
    name: "Excavator with Auger Drill",
    use: "Fast earthing drilling and deep earth pit holes",
    image: "/images/excavator-auger-drilling-dubai.webp",
    imageAlt: "Excavator with a vertical auger bit above sandy ground",
  },
  {
    name: "Core Cutting Machines",
    use: "Diamond drilling for pipe and cable openings in concrete",
    image: "/images/core-equipment-stock.webp",
    imageAlt: "Stand-mounted diamond core drill on a concrete slab",
  },
  {
    name: "Dewatering Pumps",
    use: "Removing water from sites",
    image: "/images/dewatering-contractor-uae.webp",
    imageAlt: "Dewatering pipe beside a shallow excavation",
  },
  {
    name: "Earth Tester (Hioki 3151)",
    use: "Measuring earth resistance after installation",
    image: "/images/earth-resistance-testing-uae.webp",
    imageAlt: "Earth resistance tester with connected test leads",
  },
];

export function EquipmentSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--dark-bg)" }}
      aria-label="Our drilling and earthing equipment"
      id="equipment"
    >
      <div className="container">
        <SectionHeader
          label="Our Equipment"
          title="Modern Drilling & Cutting Equipment"
          subtitle="The right machine makes work faster, safer and more accurate. Here is some of the equipment we use on our projects."
          light
        />

        {/* Equipment cards grid */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {equipmentTable.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(7,27,45,0.85) 0%, rgba(7,27,45,0.2) 60%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Text */}
                <div
                  className="p-5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <h3 className="font-bold text-white text-base leading-snug mb-1">
                    {item.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.use}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="text-center">
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
