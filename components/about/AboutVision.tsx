"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Vision band: a solid orange brand panel (no photo). The quote fades up and an
 * underline rule draws across. Pure brand colour for punch and differentiation.
 */
export default function AboutVision() {
  const reduceMotion = useReducedMotion();
  const { vision } = aboutPage;

  return (
    <section className="relative overflow-hidden bg-accent-600 py-24 sm:py-32">
      {/* diagonal line texture for richness */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 14px)",
        }}
      />
      {/* faint quotation mark watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-2 select-none font-display text-[16rem] leading-none text-white/10 sm:text-[20rem]"
      >
        &ldquo;
      </span>

      <Container className="relative">
        <motion.span
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-base"
        >
          {vision.eyebrow}
        </motion.span>

        <motion.div
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-5 h-1 w-20 origin-left rounded-full bg-white/70"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {vision.quote}
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85"
        >
          <span className="h-px w-8 bg-white/70" />
          Ethics Metal Forming Machineries
        </motion.p>
      </Container>
    </section>
  );
}
