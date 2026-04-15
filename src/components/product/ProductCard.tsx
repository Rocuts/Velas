"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { useCartStore } from "@/lib/store/cart";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Product } from "@/lib/constants/products";

export function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as "en" | "es";
  const t = useTranslations("products");
  const addItem = useCartStore((s) => s.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name[locale],
      price: product.price,
      image: product.image,
      size: product.size,
    });
  };

  return (
    <Link href={`/products/${product.slug}`} className="group block cursor-pointer">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-card border border-white/[0.04] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-gold/15 group-hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]"
      >
        {/* Image area */}
        <div className="aspect-[3/4] relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-midnight via-card to-nebula/[0.08] transition-all duration-700 group-hover:to-nebula/[0.15]" />

          {/* Decorative initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[6rem] font-[family-name:var(--font-display)] italic text-star/[0.03] select-none transition-all duration-700 group-hover:text-star/[0.06] group-hover:scale-110">
              {product.name[locale].charAt(0)}
            </span>
          </div>

          {/* Candle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_50%_40%_at_50%_55%,rgba(201,168,76,0.1)_0%,transparent_70%)]" />

          {/* Dark vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,11,20,0.4)_100%)]" />

          {/* Quick-add button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gold/90 text-cosmos backdrop-blur-sm opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out hover:bg-gold-light hover:scale-105 focus-visible:opacity-100 focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
            aria-label={`${t("quickAdd")} ${product.name[locale]}`}
          >
            <Plus size={18} strokeWidth={2} />
          </button>

          {/* Collection badge */}
          <div className="absolute top-4 left-4">
            <span className="text-[9px] font-[family-name:var(--font-accent)] tracking-[0.18em] uppercase text-gold/60 bg-cosmos/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-gold/10">
              {product.collection.replace(/-/g, " ")}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-[1.05rem] font-[family-name:var(--font-display)] font-light text-star leading-snug tracking-wide">
            {product.name[locale]}
          </h3>
          <p className="text-[13px] text-silver/60 font-light mt-1.5 line-clamp-1 italic leading-relaxed">
            {product.tagline[locale]}
          </p>

          {/* Scent pills (first 2) */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.scent.slice(0, 2).map((s) => (
              <span
                key={s}
                className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.06] text-star-muted/70 tracking-wide"
              >
                {s}
              </span>
            ))}
            {product.scent.length > 2 && (
              <span className="text-[10px] px-2 py-1 text-star-muted/40">
                +{product.scent.length - 2}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-base font-[family-name:var(--font-display)] text-star font-light tracking-wide">
              ${product.price}
            </p>
            <span className="text-[10px] text-star-muted/40 font-light">
              {product.size}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
