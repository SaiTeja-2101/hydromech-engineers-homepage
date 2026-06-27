"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { contactPage, site } from "@/lib/content";
import Container from "../ui/Container";
import Button from "../ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Contact hero: full-bleed cinematic photo with a layered scrim and the title /
 * quick CTAs overlaid on the left, matching the FAQ and product heroes.
 */
export default function ContactHero() {
  const reduceMotion = useReducedMotion();
  const { hero } = contactPage;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.1, delayChildren: 0.12 } },
  };
  const up = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-ink">
      {/* full-bleed photo + layered scrim (bright photo, so keep the left dark) */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: reduceMotion ? 1 : 1.1 }}
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
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/30" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl py-24 sm:py-28"
        >
          <motion.nav
            variants={up}
            className="flex items-center gap-1.5 text-sm text-white/55"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/85">Contact</span>
          </motion.nav>

          <motion.span
            variants={up}
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent"
          >
            <span className="h-px w-8 bg-accent" />
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={up}
            className="mt-5 font-display text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={up}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div variants={up} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              Call us
            </Button>
            <Button href={site.whatsappHref} variant="ghost">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
