
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const trustBadges = [
  "Licensed & Insured",
  "UAE Compliant",
  "Fast Response",
  "Experienced Crew",
];

type FloatingDot = {
  top: string;
  left?: string;
  right?: string;
  size: number;
  delay: number;
};

const floatingDots: FloatingDot[] = [
  { top: "20%", left: "10%", size: 6, delay: 0 },
  { top: "60%", left: "5%", size: 4, delay: 1 },
  { top: "30%", right: "12%", size: 8, delay: 0.5 },
  { top: "70%", right: "8%", size: 5, delay: 1.5 },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      aria-label="Aquabor Drilling Contractor UAE"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#071B2D]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/water-well-drilling-rig-uae.webp"
          alt="Truck-mounted water well drilling rig with a compressor truck"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Ripple Animation */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
          aria-hidden="true"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute -bottom-24 -right-24 rounded-full border border-white/10"
              style={{
                width: 300 + i * 160,
                height: 300 + i * 160,
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.05, 0.2],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Floating Dots */}
      {!shouldReduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
          aria-hidden="true"
        >
          {floatingDots.map((dot, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: dot.top,
                left: dot.left,
                right: dot.right,
                width: dot.size,
                height: dot.size,
                background: "var(--accent)",
                opacity: 0.6,
              }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="container relative z-10 mx-auto w-full px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex max-w-full"
          >
            <span
              className="rounded-full border px-3 py-2 text-[10px] font-bold uppercase tracking-wider sm:px-4 sm:text-xs"
              style={{
                background: "rgba(0,184,217,0.15)",
                color: "var(--accent)",
                borderColor: "rgba(0,184,217,0.3)",
              }}
            >
              Dubai&apos;s Trusted Drilling Contractor
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mb-5 text-[clamp(2rem,6vw,4rem)] font-black leading-[1.08] tracking-tight text-white sm:mb-6"
          >
            Drilling Contractor in Dubai &amp; UAE{" "}
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #00B8D9, #4DD8F0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for Water Wells, Earthing and Core Cutting
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-lg sm:leading-8 lg:text-xl"
          >
            AQUABOR is a drilling contractor in the UAE. We provide water well drilling, borewell drilling, electrical earthing, core cutting and dewatering services for villas, farms, factories, substations and construction sites.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7 }}
            className="mb-8 max-w-2xl text-sm leading-7 text-white/60 sm:mb-10 sm:text-base sm:leading-7"
          >
            Our team is experienced, our machines are ready, and our work is safe, clean and on time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/contact"
              id="hero-cta-quote"
              className="btn btn-accent flex w-full items-center justify-center gap-3 px-6 py-4 text-sm sm:w-auto sm:px-8 sm:text-base"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              id="hero-cta-services"
              className="btn btn-outline flex w-full items-center justify-center gap-3 px-6 py-4 text-sm sm:w-auto sm:px-8 sm:text-base"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-3 sm:mt-12 sm:gap-x-7"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-xs text-white/70 sm:text-sm"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                  style={{
                    background: "rgba(0,184,217,0.2)",
                    borderColor: "rgba(0,184,217,0.4)",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 5L4 7L8 3"
                      stroke="#00B8D9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop only */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} className="text-white/50" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
