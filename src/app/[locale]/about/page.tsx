"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h1>
        </AnimatedSection>

        {/* Hero image placeholder */}
        <AnimatedSection delay={0.2}>
          <div className="aspect-[16/9] bg-card border border-white/5 rounded-2xl overflow-hidden mb-16">
            <div className="w-full h-full bg-gradient-to-br from-midnight via-card to-nebula/15" />
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          <AnimatedSection delay={0.1}>
            <p className="text-base text-silver font-light leading-[1.9]">
              {t("text1")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-base text-silver font-light leading-[1.9]">
              {t("text2")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-base text-silver font-light leading-[1.9]">
              {t("text3")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-base text-silver font-light leading-[1.9]">
              {t("text4")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-base text-silver font-light leading-[1.9]">
              {t("text5")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <p className="mt-8 text-xl font-[family-name:var(--font-display)] italic font-light text-gold text-center">
              {t("closingLine")}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
