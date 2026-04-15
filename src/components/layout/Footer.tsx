"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-void border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-[family-name:var(--font-display)] italic font-light text-star">
                Velaris
              </span>
            </Link>
            <p className="mt-3 text-sm text-star-muted font-light leading-relaxed">
              {t("tagline")}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-star-muted hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-star-muted hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-star-muted hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-3.16 19.5c-.07-.59-.13-1.5.03-2.14l1.1-4.66s-.28-.56-.28-1.39c0-1.3.76-2.27 1.7-2.27.8 0 1.18.6 1.18 1.31 0 .8-.51 2-.77 3.1-.22.92.46 1.67 1.37 1.67 1.65 0 2.91-1.74 2.91-4.24 0-2.22-1.59-3.77-3.87-3.77-2.64 0-4.19 1.98-4.19 4.03 0 .8.31 1.65.69 2.12.08.09.09.17.07.26l-.26 1.05c-.04.17-.14.21-.32.13-1.22-.57-1.98-2.35-1.98-3.78 0-3.07 2.23-5.89 6.43-5.89 3.38 0 6 2.4 6 5.62 0 3.35-2.11 6.05-5.05 6.05-.99 0-1.91-.51-2.23-1.12l-.6 2.31c-.22.84-.81 1.89-1.21 2.53A10 10 0 1 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase text-gold mb-5">
              {t("explore")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {nav("shop")}
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {nav("collections")}
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {nav("gifts")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {nav("ourStory")}
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {nav("journal")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase text-gold mb-5">
              {t("support")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <a href="tel:+17865423486" className="text-sm text-star-muted hover:text-star transition-colors font-light">
                  +1 (786) 542-3486
                </a>
              </li>
              <li>
                <span className="text-sm text-star-muted font-light">
                  {t("shippingReturns")}
                </span>
              </li>
              <li>
                <span className="text-sm text-star-muted font-light">
                  {t("privacy")}
                </span>
              </li>
              <li>
                <span className="text-sm text-star-muted font-light">
                  {t("terms")}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gradient-divider mt-12 mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-star-muted/60">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="font-light">{t("madeIn")}</p>
        </div>
      </div>
    </footer>
  );
}
