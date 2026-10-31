import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Water Well Drilling", href: "/services/water-well-drilling" },
      { label: "Borehole Drilling", href: "/services/borehole-drilling" },
      { label: "Groundwater Solutions", href: "/services/groundwater-solutions" },
    ],
  },
  { label: "Equipment", href: "/equipment" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const footerServices = [
  { label: "Water Well Drilling", href: "/services/water-well-drilling" },
  { label: "Borehole Drilling", href: "/services/borehole-drilling" },
  { label: "Groundwater Solutions", href: "/services/groundwater-solutions" },
  { label: "Well Development", href: "/services" },
  { label: "Drilling Equipment", href: "/equipment" },
  { label: "Groundwater Management", href: "/services" },
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
