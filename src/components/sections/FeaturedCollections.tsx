"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { collections } from "@/lib/constants/products";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

export function FeaturedCollections() {
  const t = useTranslations("featured");
  const locale = useLocale() as "en" | "es";

  return (
    <section className="relative py-28 md:py-36 bg-midnight overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(107,79,160,0.12)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-20">
          <p className="text-[10px] font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase text-gold/70 mb-5">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-[family-name:var(--font-display)] italic font-light tracking-[-0.01em]">
            {t("headline")}
          </h2>
          <p className="mt-5 text-silver/70 font-light max-w-lg mx-auto leading-[1.8] text-[15px]">
            {t("description")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {collections.map((collection, i) => (
            <AnimatedSection key={collection.id} delay={i * 0.08}>
              <Link href="/collections" className="group block cursor-pointer">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[3/4] bg-card border border-white/[0.04] rounded-2xl overflow-hidden group-hover:border-gold/12 transition-all duration-500"
                >
                  {/* Gradient bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-card via-midnight to-nebula/[0.06] group-hover:to-nebula/[0.12] transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos via-cosmos/50 to-transparent" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,rgba(201,168,76,0.06)_0%,transparent_70%)]" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-light text-star tracking-wide">
                      {collection.name[locale]}
                    </h3>
                    <p className="mt-2 text-[13px] text-star-muted/60 font-light line-clamp-2 leading-relaxed">
                      {collection.description[locale]}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold/70 text-[10px] font-[family-name:var(--font-accent)] tracking-[0.14em] uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      <span>{t("viewAll")}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
