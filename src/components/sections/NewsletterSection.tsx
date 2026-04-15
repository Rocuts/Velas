"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function NewsletterSection() {
  const t = useTranslations("newsletter");

  return (
    <section className="relative py-28 md:py-36 bg-cosmos overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(107,79,160,0.1)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h2>
          <p className="mt-5 text-silver/60 font-light leading-relaxed text-[15px]">
            {t("subtext")}
          </p>
          <div className="mt-10 max-w-sm mx-auto">
            <NewsletterForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
