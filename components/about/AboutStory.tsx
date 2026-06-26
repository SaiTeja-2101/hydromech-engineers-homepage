"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Story / manifesto: a large lead sentence that reveals word by word, supporting
 * paragraphs, a relocated set of editorial stat figures, and a parallax workshop
 * photo. White band.
 */
export default function AboutStory() {
  const reduceMotion = useReducedMotion();
  const { story } = aboutPage;
  const words = story.lead.split(" ");

  const imgRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40]);

  const leadContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } },
  };
  const word = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : "0.5em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
          <span className="h-px w-8 bg-accent" />
          {story.eyebrow}
        </span>

        <motion.p
          variants={leadContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15%" }}
          className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl"
        >
          {words.map((w, i) => (
            <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
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

            {/* Relocated, restyled editorial figures */}
            <motion.dl
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {story.stats.map((s) => (
                <div key={s.label} className="border-t-2 border-accent pt-3">
                  <dd className="font-display text-3xl font-bold leading-none tracking-tight text-ink sm:text-4xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-[0.7rem] font-semibold uppercase leading-tight tracking-wider text-steel sm:text-xs">
                    {s.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            {/* offset accent for depth */}
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent/10"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-ink/10">
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
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
