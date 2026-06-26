"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";
import Button from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Immersive cinematic hero: a single dark, dramatic full-width photo with the
 * headline, intro and CTAs overlaid. A single still (no carousel) with a
 * left-anchored layout keeps it distinct from the home hero. All motion respects
 * prefers-reduced-motion.
 */
export default function AboutHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = aboutPage;

  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 0.5]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.15 } },
  };
  // Translate + fade reveal (no overflow mask, so nothing clips horizontally or
  // hides the orange underline).
  const lineUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink"
    >
      {/* Background photo: slow zoom + scroll parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: reduceMotion ? 1 : 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 10, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            preload
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic scrims + vignette (neutral, no blue) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-black/50" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.6)" }}
      />
      {/* subtle grain for texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* darken further as you scroll into the page */}
      <motion.div style={{ opacity: fade }} className="absolute inset-0 bg-ink" />

      <Container className="relative z-10 w-full py-32 sm:py-36">
        {/* breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-1.5 text-sm text-white/60"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="text-white/90">About Us</span>
        </motion.nav>

        <motion.div variants={container} initial="hidden" animate="show" className="mt-10">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            {hero.eyebrow}
          </motion.span>

          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.04] tracking-tight text-white">
            {hero.headline.map((line, li) => (
              <motion.span key={li} variants={lineUp} className="block">
                {line.map((seg, si) =>
                  "highlight" in seg && seg.highlight ? (
                    <span key={si} className="relative whitespace-pre text-accent">
                      {seg.text}
                      <motion.span
                        aria-hidden
                        initial={{ scaleX: reduceMotion ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: EASE, delay: 1 }}
                        className="absolute -bottom-1 left-0 h-1.5 w-full origin-left rounded-full bg-accent"
                      />
                    </span>
                  ) : (
                    <span key={si} className="whitespace-pre">
                      {seg.text}
                    </span>
                  ),
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              <Phone className="h-4 w-4" />
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
