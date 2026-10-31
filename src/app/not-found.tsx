import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--dark-bg)" }}
      aria-label="Page not found"
    >
      <div className="container text-center py-24">
        {/* Big 404 */}
        <p
          className="text-8xl md:text-[180px] font-black leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, rgba(7,91,154,0.3), rgba(0,184,217,0.3))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary" id="not-found-home">
            <Home size={17} />
            Go to Homepage
          </Link>
          <Link href="/contact" className="btn btn-outline" id="not-found-contact">
            Contact Us
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
