"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-2xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h1>
          <p className="mt-4 text-silver font-light max-w-md mx-auto">
            {t("subtext")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <div className="bg-card/50 border border-white/5 rounded-2xl p-12 text-center">
              <p className="text-xl font-[family-name:var(--font-display)] italic text-gold">
                {t("success")}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card/30 border border-white/5 rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-xs font-[family-name:var(--font-accent)] tracking-[0.1em] uppercase text-star-muted mb-2">
                  {t("name")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-midnight/50 border border-white/8 rounded-xl px-5 py-3 text-sm text-star placeholder:text-star-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-[family-name:var(--font-accent)] tracking-[0.1em] uppercase text-star-muted mb-2">
                  {t("email")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-midnight/50 border border-white/8 rounded-xl px-5 py-3 text-sm text-star placeholder:text-star-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-[family-name:var(--font-accent)] tracking-[0.1em] uppercase text-star-muted mb-2">
                  {t("orderNumber")}
                </label>
                <input
                  type="text"
                  className="w-full bg-midnight/50 border border-white/8 rounded-xl px-5 py-3 text-sm text-star placeholder:text-star-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-[family-name:var(--font-accent)] tracking-[0.1em] uppercase text-star-muted mb-2">
                  {t("message")}
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-midnight/50 border border-white/8 rounded-xl px-5 py-3 text-sm text-star placeholder:text-star-muted/50 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold text-cosmos text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase py-4 rounded-full hover:bg-gold-light transition-colors"
              >
                {t("send")}
                <Send size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-star-muted">
            <div className="flex items-center gap-2">
              <MapPin size={16} strokeWidth={1.5} className="text-gold/60" />
              <span className="font-light">South Florida, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} strokeWidth={1.5} className="text-gold/60" />
              <span className="font-light">hello@velaris.co</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
