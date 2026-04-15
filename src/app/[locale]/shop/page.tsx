"use client";

import { useLocale, useTranslations } from "next-intl";
import { products } from "@/lib/constants/products";
import { ProductCard } from "@/components/product/ProductCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useState } from "react";

const collectionFilters = [
  { id: "all", en: "All", es: "Todas" },
  { id: "moon-phases", en: "Moon Phases", es: "Fases Lunares" },
  { id: "zodiac", en: "Zodiac", es: "Zodiaco" },
  { id: "nebula", en: "Nebula", es: "Nebulosa" },
  { id: "florida-cosmos", en: "Florida Cosmos", es: "Cosmos Florida" },
];

export default function ShopPage() {
  const locale = useLocale() as "en" | "es";
  const t = useTranslations("nav");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.collection === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] italic font-light">
            {t("shop")}
          </h1>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {collectionFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`text-[11px] font-[family-name:var(--font-accent)] tracking-[0.12em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gold text-cosmos border-gold"
                  : "bg-transparent text-silver border-white/10 hover:border-gold/30 hover:text-gold"
              }`}
            >
              {filter[locale]}
            </button>
          ))}
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.05}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
