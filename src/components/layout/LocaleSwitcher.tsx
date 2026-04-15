"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "en" | "es") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1.5 text-[11px] font-[family-name:var(--font-accent)] tracking-[0.12em] uppercase">
      <button
        onClick={() => switchLocale("en")}
        className={`transition-colors duration-200 ${
          locale === "en" ? "text-gold" : "text-star-muted hover:text-silver"
        }`}
      >
        EN
      </button>
      <span className="text-star-muted/40">|</span>
      <button
        onClick={() => switchLocale("es")}
        className={`transition-colors duration-200 ${
          locale === "es" ? "text-gold" : "text-star-muted hover:text-silver"
        }`}
      >
        ES
      </button>
    </div>
  );
}
