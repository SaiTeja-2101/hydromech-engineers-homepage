"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products, aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "What We Make" shows the six machine families as LIGHT cards (machine on a clean
 * stage), distinct from the home dark product section. Each links to its page.
 */
export default function AboutCapabilities() {
  const reduceMotion = useReducedMotion();
  const { capabilities } = aboutPage;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
  };
  const card: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
            <span className="h-px w-8 bg-accent" />
            {capabilities.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {capabilities.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel sm:text-lg">
            {capabilities.sub}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((p) => (
            <motion.article key={p.id} variants={card}>
              <Link
                href={`/products/${p.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 border-t border-line p-6">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {p.model}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-ink">
                      {p.name}
                    </h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-steel transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10">
          <Link
            href="/#products"
            className="group inline-flex items-center gap-2 font-semibold text-accent-600 transition hover:text-accent-700"
          >
            View all machines
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
