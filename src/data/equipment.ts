import type { Equipment, ProcessStep, Feature, Stat } from "@/types";

export const equipmentCategories = [
  {
    id: "drilling-rigs",
    name: "Water Well Drilling Rigs",
    items: [
      {
        id: "rig-1",
        category: "Water Well Drilling Rigs",
        name: "Rotary Drilling Rig",
        description: "Heavy-duty rotary drilling rig capable of drilling to 500m+ depth for deep production wells.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        features: ["Depth capacity 500m+", "Multiple bit compatibility", "Advanced mud circulation system", "GPS positioning"],
      },
      {
        id: "rig-2",
        category: "Water Well Drilling Rigs",
        name: "DTH Percussion Rig",
        description: "Down-the-hole hammer drilling rig for hard rock formations and high-yield production wells.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        features: ["Ideal for hard rock", "High penetration rate", "Air-based system", "Compact and mobile"],
      },
    ] as Equipment[],
  },
  {
    id: "compressors",
    name: "Air Compressors",
    items: [
      {
        id: "comp-1",
        category: "Air Compressors",
        name: "High-Pressure Air Compressor",
        description: "Industrial-grade high-pressure air compressor for DTH drilling and well development operations.",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
        features: ["High CFM output", "Diesel powered", "Desert-rated cooling", "Low maintenance"],
      },
    ] as Equipment[],
  },
  {
    id: "tools",
    name: "Drilling Tools & Equipment",
    items: [
      {
        id: "tool-1",
        category: "Drilling Tools",
        name: "DTH Hammers & Bits",
        description: "High-performance down-the-hole hammers and drill bits engineered for UAE geological conditions.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
        features: ["Multiple diameter options", "Carbide-tipped bits", "Long service life", "Hard rock rated"],
      },
      {
        id: "tool-2",
        category: "Drilling Tools",
        name: "Drill Pipe & Casing",
        description: "High-grade steel drill pipe and UPVC/steel well casing for all drilling applications.",
        image: "https://images.unsplash.com/photo-1500820983573-4a3b49fde56b?w=800&q=80",
        features: ["API standard threading", "Corrosion resistant", "Multiple diameters", "High-pressure rated"],
      },
    ] as Equipment[],
  },
  {
    id: "support",
    name: "Supporting Equipment",
    items: [
      {
        id: "sup-1",
        category: "Supporting Equipment",
        name: "Water Pump & Testing Equipment",
        description: "Submersible test pumps and pump testing equipment for well development and yield measurement.",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
        features: ["Variable flow control", "Accurate flow measurement", "Data logging capability", "Easy deployment"],
      },
    ] as Equipment[],
  },
];

export const workProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your water requirements, project scope, budget and timeline.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Site Assessment",
    description: "Our hydrogeological experts conduct a comprehensive site survey including geological mapping and groundwater potential evaluation.",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Drilling Planning",
    description: "We develop a detailed drilling program including borehole design, equipment selection, and permit coordination with UAE authorities.",
    icon: "FileText",
  },
  {
    step: 4,
    title: "Drilling Execution",
    description: "Our skilled crew mobilizes and executes the drilling program with precision, applying the most appropriate drilling method for site conditions.",
    icon: "Drill",
  },
  {
    step: 5,
    title: "Well Development",
    description: "The completed well is developed using airlifting and surging techniques to maximize yield and ensure optimal water clarity.",
    icon: "Settings",
  },
  {
    step: 6,
    title: "Project Handover",
    description: "We provide a complete technical report, pump test data, water quality results and all documentation required for regulatory compliance.",
    icon: "CheckCircle",
  },
];

export const features: Feature[] = [
  {
    title: "Professional Approach",
    description: "Every project is executed with rigorous planning, technical precision and strict adherence to UAE regulatory standards.",
    icon: "Award",
  },
  {
    title: "Modern Drilling Equipment",
    description: "We operate a modern fleet of high-capacity rotary and DTH drilling rigs maintained to international standards.",
    icon: "Drill",
  },
  {
    title: "Safety-Focused Operations",
    description: "Health, safety and environment are central to every AQUABOR operation. We maintain a zero-incident target on all projects.",
    icon: "Shield",
  },
  {
    title: "Quality Workmanship",
    description: "From borehole construction to well casing, every element of our work meets or exceeds industry quality standards.",
    icon: "Star",
  },
  {
    title: "Reliable Project Management",
    description: "Experienced project managers ensure on-time delivery, transparent communication and efficient resource management.",
    icon: "CheckSquare",
  },
  {
    title: "Customer Satisfaction",
    description: "Our commitment to client satisfaction drives us to deliver beyond expectations on every project we undertake.",
    icon: "Heart",
  },
];

export const stats: Stat[] = [
  {
    label: "Professional Drilling Solutions",
    description: "Delivering expert water well drilling services tailored to each project's unique geological and technical requirements.",
    icon: "Drill",
  },
  {
    label: "Advanced Equipment",
    description: "Operating modern, high-capacity drilling rigs and equipment capable of tackling diverse drilling challenges across the UAE.",
    icon: "Settings",
  },
  {
    label: "Reliable Project Execution",
    description: "Committed to on-time, on-specification delivery with transparent communication throughout every project phase.",
    icon: "CheckCircle",
  },
  {
    label: "Customer-Focused Services",
    description: "Dedicated to understanding client requirements and delivering solutions that provide long-term value and reliability.",
    icon: "Users",
  },
];
