"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Droplets,
  Phone,
} from "lucide-react";
import { navigation } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? "scrolled" : "bg-transparent"}`}
        role="banner"
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="AQUABOR Home"
              id="navbar-logo"
            >
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #075B9A, #00B8D9)" }}
                >
                  <Droplets size={22} className="text-white" />
                </div>
                <div
                  className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[var(--dark-bg)]"
                  style={{ background: "var(--accent)" }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-black text-white tracking-wide"
                  style={{ letterSpacing: "0.08em" }}
                >
                  AQUABOR
                </span>
                <span className="text-[10px] text-white/60 font-medium tracking-widest uppercase">
                  Water Well Drilling
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-[var(--accent)] bg-white/10"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          dropdownOpen === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {dropdownOpen === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="dropdown-menu"
                          role="menu"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all duration-150 ${
                                isActive(child.href)
                                  ? "bg-[var(--light-bg)] text-[var(--primary)]"
                                  : "text-[var(--text-primary)] hover:bg-[var(--light-bg)] hover:text-[var(--primary)]"
                              }`}
                              role="menuitem"
                              id={`dropdown-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                            >
                              <span
                                className="w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: "var(--accent)" }}
                              />
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+971000000000"
                className="hidden xl:flex items-center gap-2 text-white/70 hover:text-[var(--accent)] transition-colors text-sm"
                id="navbar-phone"
                aria-label="Call AQUABOR"
              >
                <Phone size={15} />
                <span>+971 XX XXX XXXX</span>
              </a>

              <Link
                href="/contact"
                className="hidden lg:flex btn btn-accent px-5 py-2.5 text-sm"
                id="navbar-cta"
              >
                Get Free Quote
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                id="mobile-menu-toggle"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[998] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 z-[999] lg:hidden overflow-y-auto"
              style={{ background: "var(--dark-bg)" }}
              role="dialog"
              aria-label="Mobile navigation"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #075B9A, #00B8D9)" }}
                  >
                    <Droplets size={18} className="text-white" />
                  </div>
                  <span className="text-lg font-black text-white tracking-wide">AQUABOR</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="p-4" role="navigation" aria-label="Mobile navigation">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl mb-1 text-sm font-semibold transition-all ${
                        isActive(item.href)
                          ? "bg-[var(--primary)] text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                      onClick={() => setMobileOpen(false)}
                      id={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {item.label}
                    </Link>

                    {item.children && (
                      <div className="ml-4 mb-2">
                        {item.children.slice(1).map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white/60 hover:text-[var(--accent)] transition-colors"
                            onClick={() => setMobileOpen(false)}
                            id={`mobile-dropdown-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: "var(--accent)" }}
                            />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                  id="mobile-cta-quote"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:+971000000000"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
                  id="mobile-phone"
                >
                  <Phone size={16} />
                  +971 XX XXX XXXX
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/971000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        id="whatsapp-float-btn"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
