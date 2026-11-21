import type { Equipment, ProcessStep, Feature, Stat } from "@/types";

export const equipmentCategories = [
  {
    id: "drilling-rigs",
    name: "Drilling Rigs",
    items: [
      {
        id: "rig-1",
        category: "Drilling Rigs",
        name: "Truck-Mounted Drilling Rig",
        description: "Used for water wells and deep boreholes. High capacity truck-mounted rig for all ground conditions across the UAE.",
        image: "/images/borewell-drilling-dubai-rig-truck.webp",
        imageAlt: "Truck-mounted borewell drilling equipment on cleared ground",
        features: ["Water wells and deep boreholes", "Max depth: varies by site", "Suitable for UAE ground conditions", "Truck-mounted for easy mobilisation"],
      },
      {
        id: "rig-2",
        category: "Drilling Rigs",
        name: "Compressor Truck",
        description: "Gives air power for drilling and well cleaning. Industrial-grade compressor for DTH drilling and well development.",
        image: "/images/water-well-drilling-rig-uae.webp",
        imageAlt: "Truck-mounted drilling rig and compressor truck",
        features: ["Air power for drilling", "Well cleaning and development", "High CFM output", "Diesel powered and mobile"],
      },
    ] as Equipment[],
  },
  {
    id: "earthing-equipment",
    name: "Earthing Equipment",
    items: [
      {
        id: "earthing-1",
        category: "Earthing Equipment",
        name: "Excavator with Auger Drill",
        description: "Fast earthing drilling and deep earth pit holes. Used for hard, rocky and dry ground where standard rods cannot go deep enough.",
        image: "/images/excavator-auger-drilling-dubai.webp",
        imageAlt: "Excavator with a vertical auger bit above sandy ground",
        features: ["Fast earthing drilling", "Deep earth pit holes", "Hard and rocky ground", "Excavator-mounted for precision"],
      },
      {
        id: "earthing-2",
        category: "Earthing Equipment",
        name: "Earth Tester (Hioki 3151)",
        description: "Measuring earth resistance after installation. Industry-standard tester for accurate earthing resistance verification.",
        image: "/images/earth-resistance-testing-uae.webp",
        imageAlt: "Earth resistance tester with connected test leads",
        features: ["Earth resistance measurement", "Hioki 3151 industry standard", "Post-installation verification", "Results included in handover report"],
      },
    ] as Equipment[],
  },
  {
    id: "cutting-equipment",
    name: "Cutting Equipment",
    items: [
      {
        id: "cut-1",
        category: "Cutting Equipment",
        name: "Core Cutting Machines",
        description: "Stand-mounted diamond core drills create round openings in concrete walls and slabs for pipes, conduits and ducts. The barrel diameter is selected to suit the opening specified in the MEP drawings.",
        image: "/images/core-equipment-stock.webp",
        imageAlt: "Stand-mounted diamond core drill on a concrete slab",
        features: ["Holes in concrete walls and slabs", "Diamond-tipped bits", "Water cooling for less dust", "Multiple diameter options"],
      },
      {
        id: "pump-1",
        category: "Dewatering",
        name: "Dewatering Pumps",
        description: "Removing water from foundations, basements, trenches and construction sites. Submersible and surface pumps available.",
        image: "/images/dewatering-contractor-uae.webp",
        imageAlt: "Dewatering pipe beside a shallow excavation",
        features: ["Removes groundwater from site", "Submersible and surface options", "Variable flow rates", "Continuous operation capability"],
      },
    ] as Equipment[],
  },
];

export const workProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Call & Requirement",
    description: "Tell us what you need. We listen and understand your site and your goal.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Site Visit",
    description: "Our team checks the ground, the access and any safety points.",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Plan & Quote",
    description: "We share the method, the time needed and a clear quote. No hidden charges.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Drilling / Installation",
    description: "Our crew completes the drilling, earthing, cutting or dewatering safely and neatly.",
    icon: "Drill",
  },
  {
    step: 5,
    title: "Testing",
    description: "We test the work. For earthing, we measure earth resistance. For water wells, we check the water flow.",
    icon: "Settings",
  },
  {
    step: 6,
    title: "Handover",
    description: "You receive a final report and all required documents.",
    icon: "CheckCircle",
  },
];

export const features: Feature[] = [
  {
    title: "Experienced Team",
    description: "Our crew has real, hands-on experience in drilling, earthing, core cutting and dewatering.",
    icon: "Award",
  },
  {
    title: "Strong Machines",
    description: "Truck-mounted rigs, compressors, excavators with auger drills and testing instruments are all ready for your site.",
    icon: "Drill",
  },
  {
    title: "Safety First",
    description: "We use safe work methods and protective equipment on every site. A safe site is a successful site.",
    icon: "Shield",
  },
  {
    title: "Quality Materials",
    description: "We use good copper rods, clamps, couplings and backfill materials for earthing work.",
    icon: "Star",
  },
  {
    title: "Clear Communication",
    description: "You always know the work progress, the cost and the time needed. No surprises.",
    icon: "CheckSquare",
  },
  {
    title: "Fair Pricing",
    description: "We give a clear quote after understanding your site. No hidden charges.",
    icon: "Heart",
  },
];

export const stats: Stat[] = [
  {
    label: "One Team, Many Services",
    description: "Water borehole drilling, earthing, core cutting and dewatering. You do not need to call many contractors. One call to AQUABOR is enough.",
    icon: "Users",
  },
  {
    label: "Own Drilling Machines",
    description: "We have our own drilling rigs, compressor trucks and excavator-mounted auger drills. This means faster start and better control on the work.",
    icon: "Drill",
  },
  {
    label: "Clear and Honest Advice",
    description: "We explain the method, the time and the cost in simple words. No confusion, no hidden charges.",
    icon: "CheckCircle",
  },
  {
    label: "Safe and Tested Work",
    description: "We follow safety rules on every site. We also test our earthing work and give you proper reports.",
    icon: "Shield",
  },
];
