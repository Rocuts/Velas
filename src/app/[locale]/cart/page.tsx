"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { useCartStore } from "@/lib/store/cart";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const t = useTranslations("cart");
  const { items, removeItem, updateQuantity, total } = useCartStore();
  const cartTotal = total();

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] italic font-light">
            {t("title")}
          </h1>
        </AnimatedSection>

        {items.length === 0 ? (
          <AnimatedSection className="text-center py-16">
            <ShoppingBag size={64} strokeWidth={0.8} className="mx-auto text-star-muted/20 mb-6" />
            <p className="text-lg text-star-muted font-light">{t("empty")}</p>
            <Link
              href="/shop"
              className="inline-block mt-6 bg-gold text-cosmos text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-gold-light transition-colors"
            >
              {t("continueShopping")}
            </Link>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 bg-card/40 border border-white/5 rounded-xl p-5"
                >
                  <div className="w-24 h-24 rounded-lg bg-midnight flex items-center justify-center text-star-muted/20 shrink-0">
                    {item.size}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-xs text-star-muted mt-0.5">{item.size}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-star-muted/40 hover:text-error transition-colors"
                        aria-label={t("remove")}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-star-muted hover:border-gold/40 hover:text-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-star-muted hover:border-gold/40 hover:text-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-lg font-[family-name:var(--font-display)] font-light">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 bg-card/30 border border-white/5 rounded-xl p-6">
              {cartTotal < 65 && (
                <div className="mb-4">
                  <p className="text-xs text-star-muted mb-2">
                    ${(65 - cartTotal).toFixed(0)} away from free shipping
                  </p>
                  <div className="h-1 bg-midnight rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full transition-all"
                      style={{ width: `${Math.min((cartTotal / 65) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-2">
                <span className="text-star-muted">{t("subtotal")}</span>
                <span className="text-xl font-[family-name:var(--font-display)] font-light">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-star-muted/60 mb-6">{t("shippingNote")}</p>

              <button className="w-full bg-gold text-cosmos text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase py-4 rounded-full hover:bg-gold-light transition-colors gold-glow">
                {t("checkout")}
              </button>

              <Link
                href="/shop"
                className="block text-center mt-4 text-sm text-gold hover:text-gold-light transition-colors"
              >
                {t("continueShopping")}
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
