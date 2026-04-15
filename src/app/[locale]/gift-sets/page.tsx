"use client";

import { useLocale, useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useCartStore } from "@/lib/store/cart";
import { Gift, Sparkles } from "lucide-react";

const giftSets = [
  {
    id: "lunar-ritual",
    name: { en: "Lunar Ritual Set", es: "Set Ritual Lunar" },
    description: {
      en: "New Moon + Full Moon — the complete lunar cycle. Packaged in our celestial gift box.",
      es: "Luna Nueva + Luna Llena — el ciclo lunar completo. En nuestra caja celestial de regalo.",
    },
    price: 85,
    originalPrice: 96,
    products: ["new-moon", "full-moon"],
  },
  {
    id: "zodiac-trio",
    name: { en: "Zodiac Trio", es: "Trío Zodiaco" },
    description: {
      en: "Choose any three zodiac candles. Perfect for birthdays, best friends, or your big three.",
      es: "Elige tres velas del zodiaco. Perfecta para cumpleaños, mejores amigas, o tus tres signos principales.",
    },
    price: 130,
    originalPrice: 156,
    products: ["scorpio", "pisces", "leo"],
  },
  {
    id: "nebula-experience",
    name: { en: "Nebula Experience", es: "Experiencia Nebulosa" },
    description: {
      en: "Supernova + Event Horizon — our two prestige candles for the ultimate gift.",
      es: "Supernova + Horizonte de Eventos — nuestras dos velas de prestigio para el regalo definitivo.",
    },
    price: 115,
    originalPrice: 130,
    products: ["supernova", "event-horizon"],
  },
  {
    id: "florida-nights",
    name: { en: "Florida Nights", es: "Noches de Florida" },
    description: {
      en: "Biscayne Night + a surprise seasonal candle. A love letter to our home state.",
      es: "Noche de Biscayne + una vela estacional sorpresa. Una carta de amor a nuestro estado.",
    },
    price: 82,
    originalPrice: 96,
    products: ["biscayne-night"],
  },
];

export default function GiftSetsPage() {
  const locale = useLocale() as "en" | "es";
  const t = useTranslations("giftSets");
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-6">
          <Gift size={32} className="mx-auto text-gold/60 mb-4" strokeWidth={1.2} />
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h1>
          <p className="mt-4 text-silver font-light max-w-lg mx-auto">
            {t("subheadline")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {giftSets.map((set, i) => (
            <AnimatedSection key={set.id} delay={i * 0.1}>
              <div className="bg-card/60 border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-gold/20 transition-all duration-300 gold-glow-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-[family-name:var(--font-display)] font-light">
                      {set.name[locale]}
                    </h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-lg font-[family-name:var(--font-display)]">
                        ${set.price}
                      </span>
                      <span className="text-sm text-star-muted line-through">
                        ${set.originalPrice}
                      </span>
                      <span className="text-[10px] font-[family-name:var(--font-accent)] tracking-wider uppercase text-success bg-success/10 px-2 py-0.5 rounded-full">
                        {locale === "en" ? "Save" : "Ahorra"} ${set.originalPrice - set.price}
                      </span>
                    </div>
                  </div>
                  <Sparkles size={20} className="text-gold/40" strokeWidth={1.2} />
                </div>

                <p className="text-sm text-silver font-light leading-relaxed flex-1">
                  {set.description[locale]}
                </p>

                <button
                  onClick={() =>
                    addItem({
                      id: set.id,
                      name: set.name[locale],
                      price: set.price,
                      image: "/products/gift-set.jpg",
                      size: "Gift Set",
                    })
                  }
                  className="mt-6 w-full bg-gold text-cosmos text-xs font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase py-3.5 rounded-full hover:bg-gold-light transition-colors"
                >
                  {t("cta")}
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
