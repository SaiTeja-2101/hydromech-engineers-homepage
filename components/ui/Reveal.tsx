"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Scroll-reveal wrapper. Fades + lifts its children into view once.
 * Honors `prefers-reduced-motion`: when set, content simply appears.
 *
 * Pass an `index` to stagger items in a grid (each one waits a little longer).
 */
export default function Reveal({
  children,
  className,
  index = 0,
  y = 18,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
  y?: number;
  as?: "div" | "li" | "section" | "span";
}) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
