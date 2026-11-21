import type { Project } from "@/types";

export const projectImageAlt: Record<string, string> = {
  "/images/earth-pit-lv-inspection-chamber-dubai.webp": "Open earth pit inspection chamber beside its concrete lid",
  "/images/earth-pit-chamber-cover-uae.webp": "Round black access cover for an earth pit chamber",
  "/images/earthing-pit-installation-dubai.webp": "Flush earth pit inspection cover surrounded by paving blocks",
  "/images/dewatering-contractor-uae.webp": "Dewatering pipe beside a shallow excavation",
  "/images/water-well-drilling-rig-uae.webp": "Truck-mounted water well drilling rig and compressor truck",
  "/images/borewell-drilling-dubai-rig-truck.webp": "Truck-mounted borewell drilling equipment on cleared ground",
  "/images/substation-earthing-pit-uae.webp": "Earth connection inside a deep inspection chamber",
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "earth-pit-installation-dubai",
    title: "Earth Pit Installation",
    category: "Electrical Earthing",
    location: "Dubai, UAE",
    description: "Installed earth pits with copper clamps and marked inspection covers. Resistance tested after installation.",
    fullDescription:
      "Complete earth pit installation project in Dubai. Work included drilling, copper earth rod installation, bentonite backfill, rod-to-tape clamp connections and fitted inspection chambers with marked covers. Resistance testing was carried out after installation and results were provided in the handover report.",
    image: "/images/earth-pit-lv-inspection-chamber-dubai.webp",
    images: [
      "/images/earth-pit-lv-inspection-chamber-dubai.webp",
      "/images/earth-pit-chamber-cover-uae.webp",
    ],
    year: "2026",
    tags: ["Earthing", "Earth Pit", "Dubai"],
  },
  {
    id: "2",
    slug: "earthing-pit-with-paving-uae",
    title: "Earthing Pit with Paving",
    category: "Earthing Pit Installation",
    location: "UAE",
    description: "Installed earth rod pit with inspection cover, finished neatly with paving.",
    fullDescription:
      "Earthing pit installation project completed with neat paving finish. The scope included drilling, earth rod installation, backfill, inspection cover installation and reinstatement of the paving surface. The finished pit is easy to locate, open and test at any time.",
    image: "/images/earthing-pit-installation-dubai.webp",
    images: [
      "/images/earthing-pit-installation-dubai.webp",
    ],
    year: "2026",
    tags: ["Earthing", "Pit Installation", "UAE"],
  },
  {
    id: "3",
    slug: "dewatering-work-uae",
    title: "Dewatering Work",
    category: "Dewatering",
    location: "UAE",
    description: "Removed groundwater from the excavation area so that site work could continue.",
    fullDescription:
      "Dewatering project carried out at a construction site in the UAE. We supplied, installed and operated dewatering pumps to remove groundwater from the excavation. The site was kept dry throughout the works, allowing the construction team to continue on schedule.",
    image: "/images/dewatering-contractor-uae.webp",
    images: [
      "/images/dewatering-contractor-uae.webp",
    ],
    year: "2026",
    tags: ["Dewatering", "Construction", "UAE"],
  },
  {
    id: "4",
    slug: "water-well-drilling-uae-project",
    title: "Water Well Drilling",
    category: "Water Well Drilling",
    location: "UAE",
    description: "Drilled a deep water well with steady water flow for a residential or farm property in the UAE.",
    fullDescription:
      "Water well drilling project completed for a property in the UAE. Our team visited the site, assessed the ground conditions and selected the right drilling method. The well was drilled to the required depth, cased and cleaned. A pump test confirmed good water flow. The client received a full handover report on completion.",
    image: "/images/water-well-drilling-rig-uae.webp",
    images: [
      "/images/water-well-drilling-rig-uae.webp",
      "/images/borewell-drilling-dubai-rig-truck.webp",
    ],
    year: "2026",
    tags: ["Water Well", "Drilling", "UAE"],
  },
  {
    id: "5",
    slug: "substation-earthing-uae",
    title: "Substation Earthing",
    category: "Electrical Earthing",
    location: "Dubai, UAE",
    description: "Full earthing system for a substation including earth grid, drilling, electrodes and resistance testing.",
    fullDescription:
      "Substation earthing project completed as per consultant drawings. Work included earth grid layout, deep drilling for electrodes, copper rod installation, bonding conductors and clamps. Resistance testing was done on completion and results were within the required specification. Full documentation submitted with handover.",
    image: "/images/substation-earthing-pit-uae.webp",
    images: [
      "/images/substation-earthing-pit-uae.webp",
    ],
    year: "2025",
    tags: ["Substation", "Earthing", "Dubai"],
  },
  {
    id: "6",
    slug: "borewell-drilling-dubai-project",
    title: "Borewell Drilling",
    category: "Borewell Drilling",
    location: "Dubai, UAE",
    description: "Borewell drilled at the correct depth for a residential property in Dubai with good water flow.",
    fullDescription:
      "Borewell drilling project for a residential client in Dubai. We assessed the site, selected the correct depth, mobilised our truck-mounted rig and completed the drilling. The well was cased and cleaned, and the client received clean water with a good flow rate. Full handover report included.",
    image: "/images/borewell-drilling-dubai-rig-truck.webp",
    images: [
      "/images/borewell-drilling-dubai-rig-truck.webp",
    ],
    year: "2025",
    tags: ["Borewell", "Residential", "Dubai"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectCategories = [
  "All",
  "Water Well Drilling",
  "Borewell Drilling",
  "Electrical Earthing",
  "Earthing Pit Installation",
  "Dewatering",
];
