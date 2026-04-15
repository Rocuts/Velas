"use client";

import { useTranslations } from "next-intl";
import { products } from "@/lib/constants/products";
import { ProductCard } from "@/components/product/ProductCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Link } from "@/lib/i18n/navigation";

export function ProductShowcase() {
  const t = useTranslations("products");
  const common = useTranslations("common");
  const featured = products.slice(0, 4);

  return (
    <section className="relative py-28 md:py-36 bg-cosmos">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-[10px] font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase text-gold/70 mb-5">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-[family-name:var(--font-display)] italic font-light tracking-[-0.01em]">
            {t("headline")}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.08}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-block border border-silver/15 text-star/80 text-[10.5px] font-[family-name:var(--font-accent)] tracking-[0.16em] uppercase px-10 py-4 rounded-full hover:border-gold/30 hover:text-gold transition-all duration-400 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            {common("viewCollection")}
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
