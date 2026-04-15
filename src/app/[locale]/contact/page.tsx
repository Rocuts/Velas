"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

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
              <Phone size={16} strokeWidth={1.5} className="text-gold/60" />
              <a href="tel:+17865423486" className="font-light hover:text-gold transition-colors">
                +1 (786) 542-3486
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold/60" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <a href="https://wa.me/17865423486" target="_blank" rel="noopener noreferrer" className="font-light hover:text-gold transition-colors">
                WhatsApp
              </a>
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
