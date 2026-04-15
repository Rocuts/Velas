"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarField } from "@/components/shared/StarField";
import { useRef } from "react";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 80]);
  const nebulaScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Deep background */}
      <div className="absolute inset-0 bg-cosmos" />

      {/* Nebula gradient layers with parallax */}
      <motion.div
        style={{ scale: nebulaScale }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(107,79,160,0.18)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_30%,rgba(107,79,160,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(196,117,138,0.06)_0%,transparent_50%)]" />
      </motion.div>

      {/* Star field (canvas) */}
      <StarField />

      {/* Central warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      {/* Content with scroll-driven fade */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto will-change-transform"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-gold/50"
            aria-hidden="true"
          >
            <path
              d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5Z"
              fill="currentColor"
            />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-[family-name:var(--font-display)] italic font-light tracking-[-0.02em] leading-[1.05]"
        >
          {t("headline")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 md:mt-8 text-base md:text-lg text-silver/90 font-light max-w-lg mx-auto leading-relaxed tracking-wide"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12"
        >
          <Link
            href="/shop"
            className="group relative inline-flex items-center gap-2 bg-gold text-cosmos text-[11px] font-[family-name:var(--font-accent)] tracking-[0.18em] uppercase px-10 py-4.5 rounded-full transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,168,76,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cosmos cursor-pointer"
          >
            <span>{t("cta")}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 motion-reduce:hidden"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-silver/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scaleY: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-2 rounded-full bg-gold/50"
          />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />
    </section>
  );
}
