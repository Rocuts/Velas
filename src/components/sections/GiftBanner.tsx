"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function GiftBanner() {
  const t = useTranslations("giftSets");

  return (
    <section className="relative py-28 md:py-36 bg-cosmos overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(107,79,160,0.08)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection>
          <div className="relative bg-gradient-to-br from-card/60 via-midnight/40 to-card/60 border border-white/[0.04] rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <div className="relative">
              {/* Star decoration */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                className="mx-auto text-gold/40 mb-8"
                aria-hidden="true"
              >
                <path
                  d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z"
                  fill="currentColor"
                />
              </svg>

              <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] font-[family-name:var(--font-display)] italic font-light tracking-[-0.01em]">
                {t("headline")}
              </h2>
              <p className="mt-5 text-[15px] text-silver/60 font-light max-w-md mx-auto leading-relaxed">
                {t("subheadline")}
              </p>
              <div className="mt-10">
                <Link
                  href="/gift-sets"
                  className="inline-block bg-gold text-cosmos text-[11px] font-[family-name:var(--font-accent)] tracking-[0.18em] uppercase px-10 py-4.5 rounded-full hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,168,76,0.2)] transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmos"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
