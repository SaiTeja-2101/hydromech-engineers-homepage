"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats, aboutPage } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Static facts row (no count-up). A bordered, hairline-divided editorial block
 * with big Space Grotesk numerals. Numbers are shown as-is, not animated up.
 */
export default function AboutFacts() {
  const reduceMotion = useReducedMotion();
  const { factsIntro } = aboutPage;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {factsIntro.eyebrow}
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {factsIntro.title}
          </h2>
        </div>

        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-line lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className={cn(
                "p-7 sm:p-8",
                // hairline dividers between cells
                i % 2 === 1 && "border-l border-line",
                i >= 2 && "border-t border-line lg:border-t-0",
                i !== 0 && "lg:border-l",
              )}
            >
              <div
                className={cn(
                  "font-display text-4xl font-bold tracking-tight sm:text-5xl",
                  s.accent ? "text-accent" : "text-ink",
                )}
              >
                {s.value}
                {s.suffix}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-steel sm:text-sm">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
