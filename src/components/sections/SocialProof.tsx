"use client";

import { useTranslations, useLocale } from "next-intl";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const reviews = [
  {
    name: "Sofia R.",
    location: "Miami, FL",
    text: {
      en: "Scorpio is my forever candle. The scent is deep, complex, and unapologetically bold. I light it every time I journal.",
      es: "Escorpio es mi vela eterna. El aroma es profundo, complejo, y audaz sin disculpas. La enciendo cada vez que escribo en mi diario.",
    },
    rating: 5,
  },
  {
    name: "Isabella M.",
    location: "Orlando, FL",
    text: {
      en: "I bought the Moon Phases set as a gift for my sister. She called me crying. The packaging, the scents — everything felt intentional.",
      es: "Compré el set de Fases Lunares como regalo para mi hermana. Me llamó llorando. El empaque, los aromas — todo se siente con intención.",
    },
    rating: 5,
  },
  {
    name: "Camila D.",
    location: "Tampa, FL",
    text: {
      en: "Finally a candle brand that speaks to me — in both languages. Biscayne Night smells exactly like my favorite summer evenings.",
      es: "Por fin una marca de velas que me habla — en los dos idiomas. Noche de Biscayne huele exactamente como mis noches favoritas de verano.",
    },
    rating: 5,
  },
];

export function SocialProof() {
  const t = useTranslations("socialProof");
  const locale = useLocale() as "en" | "es";

  return (
    <section className="relative py-28 md:py-36 bg-midnight overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_70%,rgba(196,117,138,0.05)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-5" role="img" aria-label={t("averageRating", { rating: "4.9" })}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} className="text-gold fill-gold" aria-hidden="true" />
            ))}
            <span className="ml-2 text-sm text-star-muted/60 font-light">
              {t("averageRating", { rating: "4.9" })} · {t("reviewCount", { count: "127" })}
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card/30 border border-white/[0.04] rounded-2xl p-7 md:p-8 h-full flex flex-col hover:border-gold/8 transition-all duration-500">
                <div className="flex items-center gap-1 mb-5" aria-hidden="true">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={13} className="text-gold/80 fill-gold/80" />
                  ))}
                </div>
                <p className="text-[15px] text-silver/70 font-light leading-[1.8] italic flex-1">
                  &ldquo;{review.text[locale]}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  <p className="text-sm font-medium text-star/90">{review.name}</p>
                  <p className="text-xs text-star-muted/50 mt-0.5">{review.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
