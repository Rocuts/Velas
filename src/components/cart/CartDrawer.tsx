"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { Link } from "@/lib/i18n/navigation";

export function CartDrawer() {
  const t = useTranslations("cart");
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCartStore();

  const FREE_SHIPPING_THRESHOLD = 65;
  const cartTotal = total();
  const remaining = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-cosmos/70"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md glass border-l border-white/6"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <h2 className="text-lg font-[family-name:var(--font-display)] font-light">
                  {t("title")}
                </h2>
                <button
                  onClick={closeCart}
                  className="text-star-muted hover:text-star transition-colors"
                  aria-label="Close"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Free shipping progress */}
              {items.length > 0 && remaining > 0 && (
                <div className="px-6 py-3 border-b border-white/5">
                  <p className="text-xs text-star-muted mb-2">
                    ${remaining.toFixed(0)} {t("freeShippingProgress").replace("${amount}", "")}
                  </p>
                  <div className="h-1 bg-midnight rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag
                      size={48}
                      strokeWidth={1}
                      className="text-star-muted/30 mb-4"
                    />
                    <p className="text-star-muted font-light">{t("empty")}</p>
                    <button
                      onClick={closeCart}
                      className="mt-4 text-sm text-gold hover:text-gold-light transition-colors"
                    >
                      {t("continueShopping")}
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-4 bg-card/50 rounded-xl p-3"
                      >
                        <div className="w-20 h-20 rounded-lg bg-midnight flex items-center justify-center text-star-muted/20 text-xs">
                          {item.size}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-star-muted mt-0.5">
                            {item.size}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-star-muted hover:border-gold/40 hover:text-gold transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-sm w-4 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 text-star-muted hover:border-gold/40 hover:text-gold transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <p className="text-sm font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-star-muted/40 hover:text-error transition-colors self-start"
                          aria-label={t("remove")}
                        >
                          <X size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-white/5 px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-star-muted">
                      {t("subtotal")}
                    </span>
                    <span className="text-lg font-[family-name:var(--font-display)] font-light">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-star-muted/60">
                    {t("shippingNote")}
                  </p>
                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="block w-full bg-gold text-cosmos text-center text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase py-4 rounded-full hover:bg-gold-light transition-colors"
                  >
                    {t("checkout")}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
