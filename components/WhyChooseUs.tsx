"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { features } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";

/**
 * Why Choose Us — awwwards-style pinned horizontal scroll of FULL-IMAGE cards
 * (text overlaid on a gradient). Light section. Desktop pins and the row slides
 * through all 6 cards (last fully revealed) then releases. Mobile / reduced
 * motion: native swipe carousel. Icon-free.
 */
export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [pin, setPin] = useState(false);
  const [maxX, setMaxX] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const measure = () => {
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      setPin(isLg && !reduceMotion);
      setVh(window.innerHeight);
      const cards = trackRef.current?.children;
      if (cards && cards.length > 1) {
        const first = cards[0] as HTMLElement;
        const last = cards[cards.length - 1] as HTMLElement;
        // scroll the last card all the way to where the first card started
        setMaxX(Math.max(0, last.offsetLeft - first.offsetLeft));
      }
    };
    measure();
    const t = setTimeout(measure, 300); // re-measure after layout settles
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  // match the Container padding (px-5 sm:px-8 → 2rem on desktop) so the first
  // card starts exactly on the heading's left edge.
  const gutter = "max(2rem,calc((100vw - 1240px)/2 + 2rem))";

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative bg-mist"
      style={pin ? { height: vh + maxX } : undefined}
    >
      <div
        className={cn(
          pin ? "sticky top-0 flex h-screen flex-col overflow-hidden" : "py-20 sm:py-28",
        )}
      >
        <Container className={cn("shrink-0", pin && "pt-24")}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base lg:text-lg">
            Why Choose Us
          </span>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
            Why Partner with Ethics Metal Forming Machineries?
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            Because your success depends on precision, reliability, and trust.
          </p>
        </Container>

        {/* Card track */}
        <div className={cn(pin ? "flex min-h-0 flex-1 items-center" : "mt-10")}>
          <motion.div
            ref={trackRef}
            style={pin ? { x, paddingLeft: gutter, paddingRight: gutter } : undefined}
            className={
              pin
                ? "flex gap-6"
                : "flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            }
          >
            {features.map((f, i) => (
              <article
                key={f.title}
                className="group relative h-[clamp(360px,50vh,520px)] w-[clamp(300px,80vw,380px)] shrink-0 snap-start overflow-hidden rounded-2xl shadow-xl shadow-ink/10 transition-transform duration-300 hover:-translate-y-1"
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* gradient scrim for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
                <span className="absolute left-5 top-5 font-mono text-sm font-semibold text-white/85 drop-shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block h-1 w-10 rounded-full bg-accent" />
                  <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {f.desc}
                  </p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        {/* Progress bar (desktop pin only) */}
        {pin && (
          <Container className="shrink-0 pb-8 pt-2">
            <div className="h-1 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full origin-left rounded-full bg-accent"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </Container>
        )}
      </div>
    </section>
  );
}
