"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { products } from "@/lib/constants/products";
import { useCartStore } from "@/lib/store/cart";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ProductCard } from "@/components/product/ProductCard";
import { Star, Flame, Clock, Droplets } from "lucide-react";
import { useState } from "react";

export default function ProductPage() {
  const locale = useLocale() as "en" | "es";
  const t = useTranslations("products");
  const params = useParams();
  const addItem = useCartStore((s) => s.addItem);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.slug === params.handle);

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen bg-cosmos">
        <p className="text-star-muted">Product not found</p>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      image: product.image,
      size: product.size,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <AnimatedSection direction="left">
            <div className="aspect-[4/5] bg-card border border-white/5 rounded-2xl overflow-hidden sticky top-32">
              <div className="w-full h-full bg-gradient-to-br from-midnight via-card to-nebula/20 flex items-center justify-center">
                <span className="text-8xl font-[family-name:var(--font-display)] italic text-star/5">
                  {product.name[locale].charAt(0)}
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Product info */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="py-4">
              {/* Collection tag */}
              <p className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase text-gold mb-3">
                {product.collection.replace(/-/g, " ")}
              </p>

              {/* Name */}
              <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-display)] italic font-light leading-tight">
                {product.name[locale]}
              </h1>

              {/* Tagline */}
              <p className="mt-2 text-base text-silver font-light italic">
                {product.tagline[locale]}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
                <span className="text-xs text-star-muted ml-1">4.9 (24)</span>
              </div>

              {/* Price */}
              <p className="mt-6 text-2xl font-[family-name:var(--font-display)] font-light">
                ${product.price}
              </p>

              {/* Scent pills */}
              <div className="mt-6">
                <p className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.12em] uppercase text-star-muted mb-2">
                  {t("scentProfile")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.scent.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-silver"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className={`mt-8 w-full text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase py-4 rounded-full transition-all duration-300 ${
                  addedToCart
                    ? "bg-success text-star"
                    : "bg-gold text-cosmos hover:bg-gold-light gold-glow"
                }`}
              >
                {addedToCart ? "✦ Added" : t("addToCart")}
              </button>

              {/* Trust microcopy */}
              <p className="mt-3 text-xs text-star-muted/60 text-center">
                Ships in 2 business days · Free over $65
              </p>

              {/* Specs grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 py-6 border-y border-white/5">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Clock size={18} strokeWidth={1.2} className="text-gold/60" />
                  <span className="text-xs text-star-muted">{product.burnTime}</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Flame size={18} strokeWidth={1.2} className="text-gold/60" />
                  <span className="text-xs text-star-muted">{product.wick} wick</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Droplets size={18} strokeWidth={1.2} className="text-gold/60" />
                  <span className="text-xs text-star-muted">{product.size}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="text-sm text-silver font-light leading-[1.8]">
                  {product.description[locale]}
                </p>
              </div>

              {/* Ritual */}
              <div className="mt-6 bg-card/50 border border-white/5 rounded-xl p-5">
                <p className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.12em] uppercase text-gold mb-2">
                  {t("ritual")}
                </p>
                <p className="text-sm text-silver font-light leading-relaxed italic">
                  {product.ritual[locale]}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="gradient-divider mb-16" />
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] italic font-light">
                {locale === "en" ? "Complete the ritual" : "Completa el ritual"}
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p, i) => (
                <AnimatedSection key={p.id} delay={i * 0.1}>
                  <ProductCard product={p} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
