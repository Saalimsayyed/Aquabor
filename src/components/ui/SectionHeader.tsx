interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-[var(--text-primary)]";
  const subtitleColor = light ? "text-white/70" : "text-[var(--text-secondary)]";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 ${className}`}>
      {label && (
        <span className="section-label">
          <span className="w-5 h-0.5 bg-[var(--accent)] rounded-full" />
          {label}
          <span className="w-5 h-0.5 bg-[var(--accent)] rounded-full" />
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${titleColor}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      <div className={`divider ${align === "center" ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
