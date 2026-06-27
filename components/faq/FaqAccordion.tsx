"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Phone, MessageCircle } from "lucide-react";
import { faqPage, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "../ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * FAQ accordion: a sticky intro on the left and a single-open accordion of the
 * questions on the right, each tagged with its category. Reduced-motion safe.
 */
export default function FaqAccordion() {
  const reduceMotion = useReducedMotion();
  const { intro, faqs } = faqPage;
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              {intro.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              {intro.heading}
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-steel">{intro.line}</p>

            {/* Still stuck card */}
            <div className="mt-8 rounded-2xl border border-line bg-mist p-6">
              <p className="text-sm font-semibold text-ink">Still stuck?</p>
              <p className="mt-1 text-sm leading-relaxed text-steel">
                Talk to us directly and we will help you out.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent-700"
                >
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <MessageCircle className="h-4 w-4 text-accent" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="border-t border-line">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const btnId = `faq-btn-${i}`;
              return (
                <div key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      id={btnId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-center gap-5 py-6 text-left"
                    >
                      <span
                        className={cn(
                          "min-w-0 flex-1 font-display text-lg font-bold leading-snug tracking-tight transition-colors sm:text-xl",
                          isOpen ? "text-accent-700" : "text-ink group-hover:text-accent-700",
                        )}
                      >
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                          isOpen
                            ? "rotate-45 border-accent bg-accent text-white"
                            : "border-line bg-white text-ink group-hover:border-accent/50",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.32, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-[0.975rem] leading-relaxed text-steel">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
