"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site, type Product } from "@/lib/content";
import Container from "../ui/Container";
import Button from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Product hero: a full-width split showcase. Graphite text panel on the left;
 * the real machine photo bleeds in on the right and blends into the dark with a
 * gradient, so the machine is shown clearly (not scrimmed). Stacks on mobile.
 */
export default function ProductHero({ product }: { product: Product }) {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: 0.1 } },
  };
  const up = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-ink">
      {/* faint grid + glow behind the text for depth (desktop; covered by the image on mobile) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(120% 100% at 0% 0%, black 0%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(120% 100% at 0% 0%, black 0%, transparent 60%)",
        }}
      />

      {/* Machine photo: full-bleed background on mobile, right ~56% on desktop */}
      <div className="absolute inset-0 lg:left-auto lg:w-[56%]">
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          preload
          quality={90}
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover object-center"
        />
        {/* horizontal: left-dark for overlaid text on mobile, blends into graphite on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10 lg:via-ink/40 lg:to-transparent" />
        {/* mobile-only bottom darken for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Text (overlaid on the image on mobile, left panel on desktop) */}
      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl py-28 sm:py-32 lg:max-w-[48%]"
        >
          <motion.nav
            variants={up}
            className="flex flex-wrap items-center gap-1.5 text-sm text-white/55"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#products" className="transition hover:text-white">
              Products
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/85">{product.name}</span>
          </motion.nav>

          <motion.span
            variants={up}
            className="mt-6 inline-block rounded-md border border-white/25 bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-sm"
          >
            {product.model}
          </motion.span>

          <motion.h1
            variants={up}
            className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.06] tracking-tight text-white"
          >
            {product.name}
          </motion.h1>

          <motion.p
            variants={up}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {product.tagline}
          </motion.p>

          <motion.ul variants={up} className="mt-6 flex flex-wrap gap-2.5">
            {product.highlights.map((h) => (
              <li
                key={h}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={up} className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/#contact">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              <Phone className="h-4 w-4" />
              Call us
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
