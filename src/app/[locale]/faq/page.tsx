"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export default function FAQPage() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 bg-cosmos min-h-screen">
      <div className="mx-auto max-w-2xl px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] italic font-light">
            {t("headline")}
          </h1>
        </AnimatedSection>

        <div className="space-y-3">
          {faqKeys.map((key, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={key} delay={i * 0.05}>
                <div className="bg-card/40 border border-white/5 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-star pr-4">
                      {t(key)}
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className={cn(
                        "text-star-muted shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-silver font-light leading-relaxed">
                        {t(key.replace("q", "a") as `a${string}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
