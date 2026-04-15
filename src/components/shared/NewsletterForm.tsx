"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div>
      <h4 className="text-[11px] font-[family-name:var(--font-accent)] tracking-[0.15em] uppercase text-gold mb-3">
        {t("headline")}
      </h4>
      <p className="text-sm text-star-muted font-light mb-4 leading-relaxed">
        {t("subtext")}
      </p>
      {submitted ? (
        <p className="text-sm font-[family-name:var(--font-accent)] tracking-wider text-gold">
          {t("success")} ✦
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("placeholder")}
            required
            className="flex-1 bg-midnight/50 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-star placeholder:text-star-muted/50 focus:border-gold/40 focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-gold text-cosmos rounded-xl px-4 py-2.5 hover:bg-gold-light transition-colors"
            aria-label={t("cta")}
          >
            <Send size={16} strokeWidth={1.5} />
          </button>
        </form>
      )}
    </div>
  );
}
