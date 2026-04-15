"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { collections } from "@/lib/constants/products";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function CollectionsPage() {
  const locale = useLocale() as "en" | "es";
  const t = useTranslations("featured");

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] italic font-light">
            {t("label")}
          </h1>
          <p className="mt-4 text-silver font-light max-w-xl mx-auto">
            {t("description")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection, i) => (
            <AnimatedSection key={collection.id} delay={i * 0.1}>
              <Link href="/shop" className="group block">
                <div className="relative aspect-[16/9] md:aspect-[16/10] bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-gold/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-card via-midnight to-nebula/15 group-hover:to-nebula/25 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos/90 via-cosmos/30 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] italic font-light text-star">
                      {collection.name[locale]}
                    </h2>
                    <p className="mt-2 text-sm text-star-muted font-light max-w-md leading-relaxed">
                      {collection.description[locale]}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-xs font-[family-name:var(--font-accent)] tracking-[0.1em] uppercase">
                      <span>{t("viewAll")}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
