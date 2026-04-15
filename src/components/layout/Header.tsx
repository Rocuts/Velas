"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { useCartStore } from "@/lib/store/cart";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const toggleCart = useCartStore((s) => s.toggleCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/shop" as const, label: t("shop") },
    { href: "/collections" as const, label: t("collections") },
    { href: "/gift-sets" as const, label: t("gifts") },
    { href: "/about" as const, label: t("ourStory") },
    { href: "/journal" as const, label: t("journal") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          scrolled
            ? "bg-cosmos/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        {/* Utility bar */}
        <div
          className={cn(
            "hidden md:block transition-all duration-500 overflow-hidden",
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          )}
        >
          <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
            <p className="text-[10px] font-[family-name:var(--font-accent)] tracking-[0.18em] uppercase text-star-muted/50">
              Free shipping on orders over $65
            </p>
            <LocaleSwitcher />
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-star/80 hover:text-gold transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg p-1"
            aria-label={mobileOpen ? t("close") : t("menu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg px-1"
          >
            <span className="text-2xl md:text-[1.7rem] font-[family-name:var(--font-display)] italic font-light tracking-[0.02em] text-star transition-all duration-300 group-hover:text-gold/90">
              Velaris
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" role="navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[10.5px] font-[family-name:var(--font-accent)] tracking-[0.18em] uppercase text-silver/70 hover:text-gold transition-colors duration-300 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded cursor-pointer after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gold/40 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              className="text-silver/60 hover:text-gold transition-colors duration-300 hidden md:block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg p-1"
              aria-label={t("search")}
            >
              <Search size={17} strokeWidth={1.5} />
            </button>

            <button
              onClick={toggleCart}
              className="relative text-silver/60 hover:text-gold transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 rounded-lg p-1"
              aria-label={`${t("cart")}${itemCount > 0 ? ` (${itemCount})` : ""}`}
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full bg-gold text-cosmos text-[9px] font-medium"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <div className={cn("transition-opacity duration-300", scrolled ? "md:opacity-100" : "md:opacity-0 md:pointer-events-none")}>
              <div className="hidden md:block">
                <LocaleSwitcher />
              </div>
            </div>

            <div className="md:hidden">
              <LocaleSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden bg-cosmos/95 backdrop-blur-2xl border-t border-white/[0.04] overflow-hidden"
            >
              <nav className="flex flex-col p-8 gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-[family-name:var(--font-display)] font-light text-star/80 hover:text-gold transition-colors duration-300 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer />
    </>
  );
}
