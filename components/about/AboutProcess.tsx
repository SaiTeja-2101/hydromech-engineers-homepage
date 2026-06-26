"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { processSteps, aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "How We Work" is a graphite accent band. The connecting line draws across and
 * numbered step nodes pop in sequence. Provides dark rhythm against the light
 * sections without echoing the home page's photo-led dark sections.
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
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
            {process.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
            {process.title}
          </h2>
        </div>

        <div className="relative mt-14">
          {/* connecting line that draws across */}
          <motion.div
            aria-hidden
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="absolute left-0 top-5 hidden h-px w-full origin-left bg-gradient-to-r from-accent via-graphite-700 to-transparent lg:block"
          />

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15%" }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {processSteps.map((s, i) => (
              <motion.li key={s.title} variants={step} className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-ink font-mono text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver/80">{s.desc}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
