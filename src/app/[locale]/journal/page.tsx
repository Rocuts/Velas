"use client";

import { useTranslations, useLocale } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const journalPosts = [
  {
    slug: "moon-rituals-guide",
    image: "/journal/moon-rituals.jpg",
    category: { en: "Rituals", es: "Rituales" },
    title: {
      en: "A Beginner's Guide to Moon Rituals",
      es: "Guía para Principiantes de Rituales Lunares",
    },
    excerpt: {
      en: "The moon has been guiding rituals for millennia. Here's how to begin your own practice with intention and flame.",
      es: "La luna ha guiado rituales durante milenios. Así puedes comenzar tu propia práctica con intención y llama.",
    },
    date: "2026-03-28",
  },
  {
    slug: "scent-zodiac-guide",
    image: "/journal/zodiac-scents.jpg",
    category: { en: "Scent Guide", es: "Guía de Aromas" },
    title: {
      en: "Which Zodiac Candle Is Yours?",
      es: "¿Cuál Vela del Zodiaco Es la Tuya?",
    },
    excerpt: {
      en: "Beyond your sun sign — how elemental astrology maps to scent profiles, and what your birth chart says about your ideal flame.",
      es: "Más allá de tu signo solar — cómo la astrología elemental se conecta con perfiles aromáticos, y lo que tu carta natal dice sobre tu llama ideal.",
    },
    date: "2026-03-15",
  },
  {
    slug: "candle-care-101",
    image: "/journal/candle-care.jpg",
    category: { en: "Care", es: "Cuidado" },
    title: {
      en: "How to Make Your Candle Last Longer",
      es: "Cómo Hacer que Tu Vela Dure Más",
    },
    excerpt: {
      en: "Trim, burn, rest. The three-step ritual that turns a 50-hour candle into an experience worth every minute.",
      es: "Recorta, enciende, descansa. El ritual de tres pasos que convierte una vela de 50 horas en una experiencia que vale cada minuto.",
    },
    date: "2026-02-20",
  },
];

export default function JournalPage() {
  const t = useTranslations("nav");
  const locale = useLocale() as "en" | "es";

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] italic font-light">
            {t("journal")}
          </h1>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journalPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <article className="group bg-card/40 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-all duration-300">
                <div className="aspect-[16/10] bg-midnight">
                  <div className="w-full h-full bg-gradient-to-br from-midnight to-nebula/10 group-hover:to-nebula/20 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-[family-name:var(--font-accent)] tracking-[0.12em] uppercase text-gold">
                      {post.category[locale]}
                    </span>
                    <span className="text-[10px] text-star-muted">
                      {new Date(post.date).toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-[family-name:var(--font-display)] font-light leading-snug">
                    {post.title[locale]}
                  </h2>
                  <p className="mt-2 text-sm text-star-muted font-light line-clamp-2 leading-relaxed">
                    {post.excerpt[locale]}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
