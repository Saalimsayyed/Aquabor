import type { Metadata } from "next";
import { contact } from "@/lib/contact";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aquabor.ae").replace(/\/+$/, "");

const defaultTitle = "Water Well Drilling & Earthing Contractor Dubai";
const defaultDescription =
  "AQUABOR provides water well drilling, borewell drilling, electrical earthing, concrete core cutting and dewatering in Dubai and across the UAE.";
const defaultImage = {
  url: "/images/water-well-drilling-rig-uae.webp",
  width: 1600,
  height: 1613,
  alt: "Truck-mounted water well drilling rig and compressor truck at a drilling site",
};

interface PageMetadata {
  path: string;
  title?: string;
  description?: string;
  image?: { url: string; alt: string };
}

export function createPageMetadata({
  path,
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
}: PageMetadata): Metadata {
  const brandedTitle = title + " | AQUABOR";
  return {
    title: brandedTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: "AQUABOR",
      url: path,
      title: brandedTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle + " | AQUABOR",
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const serviceAreas = [
  { "@type": "City", name: "Dubai" },
  { "@type": "Country", name: "United Arab Emirates" },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteUrl + "/#organization",
  name: "AQUABOR",
  description: defaultDescription,
  url: siteUrl,
  logo: siteUrl + "/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  areaServed: serviceAreas,
  ...(contact.phone && { telephone: contact.phone }),
  ...(contact.email && { email: contact.email }),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AQUABOR",
  url: siteUrl,
  inLanguage: "en-AE",
  publisher: { "@id": organizationSchema["@id"] },
};
