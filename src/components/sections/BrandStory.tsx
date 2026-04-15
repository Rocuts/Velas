"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function BrandStory() {
  const t = useTranslations("brandStory");

  return (
    <section className="relative py-28 md:py-36 bg-cosmos overflow-hidden">
      {/* Ambient nebula */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_40%,rgba(107,79,160,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="aspect-[4/5] bg-card rounded-2xl overflow-hidden border border-white/[0.04] relative">
              <div className="w-full h-full bg-gradient-to-br from-midnight via-card to-nebula/10" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_60%,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.15}>
            <p className="text-[10px] font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase text-gold/70 mb-5">
              {t("label")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-[family-name:var(--font-display)] italic font-light leading-[1.15] tracking-[-0.01em]">
              {t("headline")}
            </h2>
            <p className="mt-7 text-silver/70 font-light leading-[1.9] text-[15px]">
              {t("text")}
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-gold/80 text-[10.5px] font-[family-name:var(--font-accent)] tracking-[0.16em] uppercase hover:text-gold transition-colors duration-300 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded px-1 py-0.5"
              >
                <span>{t("cta")}</span>
                <div className="h-px w-6 bg-gold/30 group-hover:w-8 transition-all duration-300" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
