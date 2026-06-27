"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, site } from "@/lib/content";
import Container from "./ui/Container";
import Button from "./ui/Button";

const DURATION_MS = 6000;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const count = heroSlides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 fill of the active segment
  const progressRef = useRef(0);

  const goTo = useCallback(
    (i: number) => {
      progressRef.current = 0;
      setProgress(0);
      setIndex((i + count) % count);
    },
    [count],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay driven by a progress ticker so the pager bar stays perfectly in
  // sync and can pause on hover/focus. Disabled entirely for reduced motion.
  useEffect(() => {
    if (reduceMotion) return;
    const STEP = 50;
    const id = setInterval(() => {
      if (paused) return;
      progressRef.current += STEP / DURATION_MS;
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setIndex((i) => (i + 1) % count);
      }
      setProgress(progressRef.current);
    }, STEP);
    return () => clearInterval(id);
  }, [paused, reduceMotion, count]);

  // Touch swipe
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchX.current = null;
  };

  const slide = heroSlides[index];

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[600px] items-center overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Ethics Metal Forming Machineries highlights"
    >
      {/* Full-bleed background photo (crossfades between slides) */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: reduceMotion ? 0 : 1 },
            scale: { duration: reduceMotion ? 0 : 7, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            preload={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Neutral scrims for legibility (no blue — keeps it photographic) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

      {/* Content */}
      <Container className="relative z-10 w-full">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-white/80">
                {slide.eyebrow}
              </span>

              <h1 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
                {slide.headline}
              </h1>

              {/* signature orange underline */}
              <div className="mt-5 h-1 w-16 rounded-full bg-accent" />

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {slide.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs — static so they don't flicker between slides */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
            <Button href="#products">
              Explore Machines
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={site.phoneHref} variant="ghost">
              <Phone className="h-4 w-4" />
              Talk to an Expert
            </Button>
          </div>
        </div>
      </Container>

      {/* Carousel controls — bottom left */}
      <Container className="pointer-events-none absolute inset-x-0 bottom-6 z-10 sm:bottom-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-5">
          <div className="pointer-events-auto flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-white hover:bg-white/10 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Progress segments */}
          <div className="pointer-events-auto flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1 w-8 overflow-hidden rounded-full bg-white/25 sm:w-12"
              >
                <span
                  className="block h-full rounded-full bg-accent"
                  style={{
                    width:
                      i < index
                        ? "100%"
                        : i === index
                          ? `${(reduceMotion ? 1 : progress) * 100}%`
                          : "0%",
                    transition: i === index ? "width 60ms linear" : "none",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
