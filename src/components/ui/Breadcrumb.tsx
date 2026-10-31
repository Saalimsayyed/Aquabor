import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export function Breadcrumb({ items, light = true }: BreadcrumbProps) {
  const textColor = light ? "text-white/60" : "text-[var(--text-muted)]";
  const linkColor = light ? "text-white/80 hover:text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--accent)]";
  const activeColor = light ? "text-[var(--accent)]" : "text-[var(--primary)]";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: item.href || "#",
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className={`breadcrumb ${textColor}`}>
        <Link href="/" className={`flex items-center gap-1 ${linkColor} transition-colors`}>
          <Home size={14} />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <ChevronRight size={14} className={textColor} />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className={`${linkColor} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={activeColor}>{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
