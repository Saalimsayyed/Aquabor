import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "residential-water-well-dubai-hills",
    title: "Residential Water Well – Dubai Hills Area",
    category: "Water Well Drilling",
    location: "Dubai Hills, Dubai, UAE",
    description: "Deep water well installation for a large residential compound providing reliable groundwater supply.",
    fullDescription:
      "This demonstration project showcases the type of residential water well drilling services AQUABOR provides across Dubai. The project involved site assessment, hydrogeological survey, drilling to the target aquifer, well casing and screen installation, pump testing, and water quality analysis. This project type is typical of our residential drilling services in the Dubai Hills area. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    ],
    year: "2024",
    tags: ["Water Well", "Residential", "Dubai"],
  },
  {
    id: "2",
    slug: "commercial-borehole-business-bay",
    title: "Commercial Borehole Project – Business Bay",
    category: "Borehole Drilling",
    location: "Business Bay, Dubai, UAE",
    description: "Multi-borehole dewatering system for a large-scale commercial development in Business Bay.",
    fullDescription:
      "This demonstration project represents the commercial borehole drilling and dewatering services AQUABOR delivers for Dubai's construction sector. Work included geotechnical assessment, borehole design, drilling, installation of dewatering systems and monitoring wells. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
    year: "2024",
    tags: ["Borehole", "Commercial", "Dewatering"],
  },
  {
    id: "3",
    slug: "agricultural-irrigation-well-al-ain",
    title: "Agricultural Irrigation Well – Al Ain Region",
    category: "Water Well Drilling",
    location: "Al Ain, Abu Dhabi, UAE",
    description: "Agricultural water supply well providing irrigation water for a farming project in the Al Ain region.",
    fullDescription:
      "This demonstration project represents agricultural water well drilling services for the UAE farming sector. AQUABOR drilled and developed a high-yield irrigation well to support sustainable agriculture. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1500820983573-4a3b49fde56b?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1500820983573-4a3b49fde56b?w=1200&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
    ],
    year: "2023",
    tags: ["Water Well", "Agricultural", "Al Ain"],
  },
  {
    id: "4",
    slug: "groundwater-monitoring-sharjah",
    title: "Groundwater Monitoring Network – Sharjah",
    category: "Groundwater Solutions",
    location: "Sharjah, UAE",
    description: "Installation of a comprehensive groundwater monitoring network for environmental compliance.",
    fullDescription:
      "This demonstration project represents AQUABOR's groundwater monitoring and management services. The project involved design and installation of a monitoring well network, instrumentation, data logging, and ongoing hydrogeological reporting. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80",
    ],
    year: "2023",
    tags: ["Groundwater", "Monitoring", "Sharjah"],
  },
  {
    id: "5",
    slug: "industrial-water-supply-jebel-ali",
    title: "Industrial Water Supply – Jebel Ali Free Zone",
    category: "Water Well Drilling",
    location: "Jebel Ali, Dubai, UAE",
    description: "High-yield water well system serving an industrial facility in the Jebel Ali Free Zone.",
    fullDescription:
      "This demonstration project represents industrial water supply well projects AQUABOR delivers in Dubai's industrial zones. The project involved drilling a high-capacity production well, pump selection, pipeline installation and water quality compliance. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    ],
    year: "2024",
    tags: ["Water Well", "Industrial", "Jebel Ali"],
  },
  {
    id: "6",
    slug: "well-rehabilitation-dubai-south",
    title: "Well Rehabilitation – Dubai South",
    category: "Well Development",
    location: "Dubai South, Dubai, UAE",
    description: "Comprehensive rehabilitation of aging water wells to restore performance and extend operational life.",
    fullDescription:
      "This demonstration project represents AQUABOR's well rehabilitation and development services. Aging wells were redeveloped using airlifting, surging and pump testing to restore optimal yield and water quality. Note: This is a representative demo project. Actual project details will be updated upon client authorization.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80",
    ],
    year: "2023",
    tags: ["Well Rehabilitation", "Dubai South"],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const projectCategories = [
  "All",
  "Water Well Drilling",
  "Borehole Drilling",
  "Groundwater Solutions",
  "Well Development",
];
