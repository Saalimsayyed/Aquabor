import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Water Well Drilling UAE", href: "/services/water-well-drilling-uae" },
      { label: "Borewell Drilling Dubai", href: "/services/borewell-drilling-dubai" },
      { label: "Electrical Earthing UAE", href: "/services/electrical-earthing-contractor-uae" },
      { label: "Core Cutting UAE", href: "/services/core-cutting-services-uae" },
      { label: "Dewatering UAE", href: "/services/dewatering-contractor-uae" },
    ],
  },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const footerServices = [
  { label: "Water Well Drilling UAE", href: "/services/water-well-drilling-uae" },
  { label: "Borewell Drilling Dubai", href: "/services/borewell-drilling-dubai" },
  { label: "Water Borehole Drilling Dubai", href: "/services/water-borehole-drilling-dubai" },
  { label: "Electrical Earthing Contractor UAE", href: "/services/electrical-earthing-contractor-uae" },
  { label: "Electrical Earthing Drilling Dubai", href: "/services/electrical-earthing-drilling-dubai" },
  { label: "Earthing Pit Installation Dubai", href: "/services/earthing-pit-installation-dubai" },
  { label: "Substation Earthing Contractor UAE", href: "/services/substation-earthing-contractor-uae" },
  { label: "Manual Earthing Drilling", href: "/services/manual-earthing-drilling" },
  { label: "Core Cutting Services UAE", href: "/services/core-cutting-services-uae" },
  { label: "Slab Core Cutting Dubai", href: "/services/slab-core-cutting-dubai" },
  { label: "Dewatering Contractor UAE", href: "/services/dewatering-contractor-uae" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
