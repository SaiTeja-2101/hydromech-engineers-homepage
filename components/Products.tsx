"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { products, type Product } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import Button from "./ui/Button";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Products() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll-spy: highlight whichever machine panel is crossing viewport-center.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = panelRefs.current.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    panelRefs.current[i]?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section id="products" className="bg-ink">
      <Container className="py-20 sm:py-28">
        <div className="lg:grid lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-x-16">
          {/* Left — sticky index */}
          <div className="lg:sticky lg:top-28 lg:self-start lg:h-fit">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base lg:text-lg">
              Products &amp; Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Machines
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-silver/80">
              Engineered for performance, precision and reliability.
            </p>

            {/* clickable index (desktop only) */}
            <ul className="mt-8 hidden lg:block">
              {products.map((p, i) => {
                const isActive = i === active;
                return (
                  <li key={p.id}>
                    <button
                      onClick={() => scrollTo(i)}
                      aria-current={isActive}
                      className="relative flex w-full items-center gap-4 rounded-lg px-4 py-3.5 text-left"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="prod-active"
                          className="absolute inset-0 -z-0 rounded-lg border-l-2 border-accent bg-graphite"
                          transition={{ type: "spring", stiffness: 500, damping: 40 }}
                        />
                      )}
                      <span
                        className={cn(
                          "relative z-10 font-mono text-sm tabular-nums transition-colors duration-300",
                          isActive ? "text-accent" : "text-steel",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "relative z-10 text-[1.05rem] font-semibold leading-snug transition-colors duration-300",
                          isActive ? "text-white" : "text-silver hover:text-white",
                        )}
                      >
                        {p.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — scrolling machine panels */}
          <div className="mt-10 lg:mt-0">
            {products.map((p, i) => (
              <MachinePanel
                key={p.id}
                product={p}
                index={i}
                reduceMotion={!!reduceMotion}
                registerRef={(el) => (panelRefs.current[i] = el)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MachinePanel({
  product,
  index,
  reduceMotion,
  registerRef,
}: {
  product: Product;
  index: number;
  reduceMotion: boolean;
  registerRef: (el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [28, -28]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <article
      id={product.id}
      ref={(el) => {
        ref.current = el;
        registerRef(el);
      }}
      className="flex min-h-[78vh] scroll-mt-28 flex-col justify-center border-t border-graphite-700 py-12 first:border-t-0 lg:py-16"
    >
      {/* Stage image (scale-in + parallax) */}
      <motion.div style={{ y }} className="will-change-transform">
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-2xl bg-mist p-6 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-1/2 h-12 w-3/5 -translate-x-1/2 rounded-[50%] bg-ink/15 blur-2xl"
          />
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-15%" }}
        className="mt-8"
      >
        <motion.span
          variants={item}
          className="inline-block rounded-md border border-graphite-700 bg-graphite px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent"
        >
          {product.model}
        </motion.span>
        <motion.h3
          variants={item}
          className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl"
        >
          {product.name}
        </motion.h3>
        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-lg leading-relaxed text-silver/90"
        >
          {product.blurb}
        </motion.p>
        <motion.ul variants={item} className="mt-6 flex flex-wrap gap-3">
          {product.points.map((pt) => (
            <li
              key={pt}
              className="inline-flex items-center gap-2 rounded-full border border-graphite-700 bg-graphite px-4 py-2 text-sm font-medium text-silver"
            >
              <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={3} />
              {pt}
            </li>
          ))}
        </motion.ul>
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={`/products/${product.id}`}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="#contact" variant="ghost">
            Get a Quote
          </Button>
        </motion.div>
      </motion.div>
    </article>
  );
}
