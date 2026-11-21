"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

const faqs = [
  {
    id: "faq-1",
    question: "Do I need a permit for water well drilling in Dubai?",
    answer:
      "In most cases, yes. Rules depend on the area and how you will use the water. We guide you and help with the permit steps.",
  },
  {
    id: "faq-2",
    question: "How deep will my borewell be?",
    answer:
      "The depth depends on the area and the groundwater level. After a site check, we suggest the best depth for your need.",
  },
  {
    id: "faq-3",
    question: "What is earthing and why do I need it?",
    answer:
      "Earthing sends extra electric current safely into the ground. It protects people, buildings and machines from shock, damage and fire.",
  },
  {
    id: "faq-4",
    question: "Why is earthing drilling needed?",
    answer:
      "In rocky or dry soil, normal rods may not give low resistance. Drilling deeper holes and using the right backfill gives better results.",
  },
  {
    id: "faq-5",
    question: "What is an earthing pit?",
    answer:
      "An earthing pit is a small chamber with an earth rod and a connection point. It lets you open the cover and test the earthing any time.",
  },
  {
    id: "faq-6",
    question: "Do you test the earthing after installation?",
    answer:
      "Yes. We measure the earth resistance with a proper earth tester and give you the reading in the report.",
  },
  {
    id: "faq-7",
    question: "Is core cutting noisy or dusty?",
    answer:
      "Core cutting is cleaner and quieter than breaking concrete. We also use water cooling to keep dust low.",
  },
  {
    id: "faq-8",
    question: "What is dewatering and when is it needed?",
    answer:
      "Dewatering means removing groundwater from a site. It is needed when water comes into a foundation, basement or trench and stops the work.",
  },
  {
    id: "faq-9",
    question: "Which areas in Dubai and the UAE do you serve?",
    answer:
      "We cover Dubai areas including Al Quoz, Jebel Ali and Dubai South, plus Abu Dhabi, Al Ain, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  },
  {
    id: "faq-10",
    question: "What should I provide for a project quote?",
    answer:
      "Share your site location, the service you need and any drawings or dimensions. For concrete core cutting, include the number and diameter of openings and the slab or wall thickness if known.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="section-padding bg-white"
      aria-label="Frequently asked questions"
      id="faq"
    >
      <div className="container">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about our drilling, earthing and core cutting services."
        />

        <FadeIn>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    border: `1px solid ${isOpen ? "var(--accent)" : "var(--border)"}`,
                    boxShadow: isOpen ? "0 4px 20px rgba(0,184,217,0.08)" : "none",
                  }}
                >
                  <button
                    id={faq.id}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                    style={{
                      background: isOpen ? "rgba(0,184,217,0.04)" : "white",
                    }}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                  >
                    <span
                      className="font-semibold text-sm sm:text-base leading-snug"
                      style={{ color: isOpen ? "var(--primary)" : "var(--text-primary)" }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, var(--primary), var(--accent))"
                          : "rgba(7,91,154,0.08)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown
                        size={15}
                        style={{ color: isOpen ? "white" : "var(--primary)" }}
                      />
                    </span>
                  </button>

                  <div
                    id={`${faq.id}-answer`}
                    role="region"
                    aria-labelledby={faq.id}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: isOpen ? "400px" : "0",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
