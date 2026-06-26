"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { processSteps, aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "How We Work" is a graphite accent band. A connecting line draws across (a
 * vertical rail on mobile) and numbered nodes pop in sequence. A faint blueprint
 * grid + orange glow add depth.
 */
export default function AboutProcess() {
  const reduceMotion = useReducedMotion();
  const { process } = aboutPage;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
  };
  const step: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* faint blueprint grid + glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(120% 100% at 0% 0%, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 0% 0%, black 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
            <span className="h-px w-8 bg-accent" />
            {process.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            {process.title}
          </h2>
        </div>

        <div className="relative mt-14">
          {/* horizontal connector (desktop) */}
          <motion.div
            aria-hidden
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-accent via-graphite-700 to-transparent lg:block"
          />

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((s, i) => (
              <motion.li key={s.title} variants={step} className="relative pl-16 lg:pl-0">
                {/* vertical rail connector (mobile / tablet) */}
                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[1.4rem] top-12 h-[calc(100%+3rem)] w-px bg-graphite-700 lg:hidden"
                  />
                )}
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-graphite font-mono text-sm font-semibold text-accent shadow-lg shadow-black/30 lg:relative lg:h-12 lg:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-0 font-display text-xl font-bold text-white lg:mt-6">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver/80">{s.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
