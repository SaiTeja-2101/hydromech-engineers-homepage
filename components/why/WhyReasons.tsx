"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { features, whyPage } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

// Bento template across the 6 reasons (desktop). photo | orange | graphite.
const tiles = [
  { kind: "photo", span: "lg:col-span-2 lg:row-span-2", showDesc: true },
  { kind: "orange", span: "" },
  { kind: "photo", span: "lg:row-span-2", showDesc: true },
  { kind: "graphite", span: "" },
  { kind: "photo", span: "lg:col-span-2", showDesc: false },
  { kind: "graphite", span: "lg:col-span-2" },
] as const;

export default function WhyReasons() {
  const reduceMotion = useReducedMotion();
  const { reasons } = whyPage;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const tile: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
            <span className="h-px w-8 bg-accent" />
            {reasons.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {reasons.title}
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:auto-rows-[13rem]"
        >
          {features.map((f, i) => {
            const t = tiles[i];
            const num = String(i + 1).padStart(2, "0");

            if (t.kind === "photo") {
              return (
                <motion.article
                  key={f.title}
                  variants={tile}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl bg-ink shadow-lg shadow-ink/10",
                    "aspect-[16/10] lg:aspect-auto lg:h-full",
                    t.span,
                  )}
                >
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute left-5 top-5 font-mono text-sm font-semibold text-white/80 drop-shadow">
                    {num}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="block h-1 w-10 rounded-full bg-accent" />
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                      {f.title}
                    </h3>
                    {t.showDesc && (
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                        {f.desc}
                      </p>
                    )}
                  </div>
                </motion.article>
              );
            }

            const orange = t.kind === "orange";
            return (
              <motion.article
                key={f.title}
                variants={tile}
                className={cn(
                  "group flex min-h-[12rem] flex-col justify-between overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 lg:h-full lg:min-h-0",
                  t.span,
                  orange
                    ? "bg-accent-600"
                    : "border border-graphite-700 bg-graphite",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-sm font-semibold",
                    orange ? "text-white/80" : "text-accent",
                  )}
                >
                  {num}
                </span>
                <div>
                  <span
                    className={cn(
                      "block h-1 w-10 rounded-full",
                      orange ? "bg-white/70" : "bg-accent",
                    )}
                  />
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight text-white sm:text-2xl">
                    {f.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-sm leading-relaxed",
                      orange ? "text-white/85" : "text-silver/80",
                    )}
                  >
                    {f.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
