import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aquabor.ae";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AQUABOR – Water Well Drilling Dubai | Borehole Drilling UAE",
    template: "%s | AQUABOR Water Well Drilling",
  },
  description:
    "AQUABOR is a professional water well drilling and borehole construction company based in Dubai, UAE. We provide reliable groundwater solutions, well development and drilling services across the GCC region.",
  keywords: [
    "water well drilling Dubai",
    "borehole drilling UAE",
    "water well drilling company Dubai",
    "groundwater solutions UAE",
    "borehole contractors Dubai",
    "water well drilling services UAE",
    "well drilling contractor Dubai",
    "groundwater exploration UAE",
  ],
  authors: [{ name: "AQUABOR" }],
  creator: "AQUABOR",
  publisher: "AQUABOR",
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
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "AQUABOR – Water Well Drilling Dubai",
    title: "AQUABOR – Water Well Drilling Dubai | Borehole Drilling UAE",
    description:
      "Professional water well drilling, borehole construction and groundwater solutions in Dubai, UAE. Serving the GCC region with precision drilling services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUABOR Water Well Drilling Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUABOR – Water Well Drilling Dubai",
    description:
      "Professional water well drilling and borehole construction services in Dubai, UAE.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AQUABOR",
  description:
    "Professional water well drilling, borehole construction and groundwater solutions company based in Dubai, UAE.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
    addressRegion: "Dubai",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: ["AE", "SA", "QA", "KW", "BH", "OM"],
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AQUABOR",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
