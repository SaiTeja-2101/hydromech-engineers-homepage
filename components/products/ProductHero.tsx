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
      {/* Full-bleed machine photo with a layered scrim (home-hero style): the dark
          left fades smoothly into the photo, so there is no flat black block. */}
      <div className="absolute inset-0">
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* left-dark fading right (text legibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/15" />
        {/* depth: bottom + slight top darken */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
        {/* subtle vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
        />
      </div>

      {/* Text overlaid on the left, like the home hero */}
      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl py-28 sm:py-32 lg:max-w-[52%]"
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
