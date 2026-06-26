"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Story / manifesto: a large lead sentence that reveals word by word, with
 * supporting paragraphs beside a contained workshop photo. Light (mist) band.
 */
export default function AboutStory() {
  const reduceMotion = useReducedMotion();
  const { story } = aboutPage;
  const words = story.lead.split(" ");

  const leadContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } },
  };
  const word = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : "0.5em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
          {story.eyebrow}
        </span>

        <motion.p
          variants={leadContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="mt-5 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-5 text-base leading-relaxed text-steel sm:text-lg"
          >
            {story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-ink/10"
          >
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
