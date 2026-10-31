"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(100),
  email: z.email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").max(20),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(20, "Message must be at least 20 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      // Simulate network request - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1800));
      // NOTE: No actual form submission is configured. 
      // Integrate with an email provider (Resend, SendGrid, or Formspree) to enable real submissions.
      console.log("Form data (demo only):", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-10 text-center"
        style={{ background: "rgba(16,185,129,0.08)", border: "2px solid rgba(16,185,129,0.25)" }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={52} className="mx-auto mb-4" style={{ color: "#10B981" }} />
        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
          Thank you for reaching out to AQUABOR. Our team will review your inquiry and respond within 1–2 business days.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-primary text-sm"
          id="contact-form-send-another"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label="Contact form"
      id="contact-form"
    >
      {/* Status Error */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-xl p-4 flex items-start gap-3"
            style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">
              Something went wrong. Please try again or contact us directly.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo notice */}
      <div
        className="rounded-xl p-3 flex items-start gap-3"
        style={{ background: "rgba(255,165,0,0.08)", border: "1px solid rgba(255,165,0,0.2)" }}
        role="note"
      >
        <span className="text-base">ℹ️</span>
        <p className="text-xs" style={{ color: "#b45309" }}>
          Form submission is in demo mode. An email integration (e.g. Resend or Formspree) must be configured to receive actual messages.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            className={`input ${errors.fullName ? "error" : ""}`}
            placeholder="Your full name"
            autoComplete="name"
            aria-required="true"
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={`input ${errors.email ? "error" : ""}`}
            placeholder="your@email.com"
            autoComplete="email"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1.5" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
          Phone Number <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          className={`input ${errors.phone ? "error" : ""}`}
          placeholder="+971 XX XXX XXXX"
          autoComplete="tel"
          aria-required="true"
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
          Subject <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          type="text"
          className={`input ${errors.subject ? "error" : ""}`}
          placeholder="e.g. Water Well Drilling Quote – Dubai Villa"
          aria-required="true"
          aria-describedby={errors.subject ? "subject-error" : undefined}
          {...register("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-1.5">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={`input resize-none ${errors.message ? "error" : ""}`}
          placeholder="Please describe your project requirements, location, and any specific needs..."
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-xs mt-1.5" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary w-full justify-center text-sm"
        disabled={status === "loading"}
        id="contact-form-submit"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={17} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
