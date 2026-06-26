"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";
import Button from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * About hero: a light, editorial split. Bold headline + intro on the left, a
 * contained photo in an angled frame with an orange accent stripe on the right.
 * Deliberately NOT a full-bleed photo hero (that is the home page signature).
 */
export default function AboutHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = aboutPage;

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax of the photo inside its fixed frame.
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "6%"]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.05 } },
  };
  const lineUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 sm:pb-24">
      {/* faint oversized brand mark in the background */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-2 select-none font-display text-[22vw] font-bold leading-none tracking-tighter text-ink/[0.035] sm:-top-6 lg:text-[16rem]"
      >
        ABOUT
      </span>

      <Container className="relative">
        {/* breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-steel">
          <span className="transition hover:text-accent">Home</span>
          <span aria-hidden>/</span>
          <span className="text-ink">About Us</span>
        </nav>

        <div ref={ref} className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
            >
              {hero.eyebrow}
            </motion.span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {hero.headlineLines.map((l) => (
                <span key={l} className="block overflow-hidden">
                  <motion.span variants={lineUp} className="block">
                    {l}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div variants={fadeUp} className="mt-6 h-1 w-16 rounded-full bg-accent" />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-steel sm:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                <Phone className="h-4 w-4" />
                {hero.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>

          {/* Angled photo frame */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            {/* orange accent stripe behind, following the angled edge */}
            <motion.div
              aria-hidden
              initial={{ scaleY: reduceMotion ? 1 : 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
              className="absolute -left-3 top-6 bottom-6 w-3 origin-top rounded-full bg-accent sm:-left-4 sm:w-4"
            />
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-ink/15 sm:aspect-[5/5]"
              style={{
                clipPath: reduceMotion
                  ? undefined
                  : "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
              }}
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-6%]">
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
