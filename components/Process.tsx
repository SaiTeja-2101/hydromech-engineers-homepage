import { processSteps } from "@/lib/content";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

/**
 * Process / How It Works — icon-free numbered timeline. Desktop: a 4-column row
 * with an orange-node connector line. Mobile: a vertical timeline. Light section.
 */
export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="How We Work, Step by Step"
          subtitle="A simple path from your first call to reliable after-sales support."
          align="left"
          tone="light"
        />

        {/* Desktop — horizontal timeline */}
        <div className="relative mt-16 hidden grid-cols-4 gap-8 lg:grid">
          <div
            aria-hidden
            className="absolute left-0 right-1/4 top-[7px] h-px bg-line"
          />
          {processSteps.map((s, i) => (
            <Reveal key={s.title} index={i} className="relative">
              <span className="relative z-10 block h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-white" />
              <div className="mt-6 font-display text-5xl font-bold leading-none text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-steel">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Mobile — vertical timeline */}
        <div className="relative mt-12 lg:hidden">
          <div
            aria-hidden
            className="absolute bottom-3 left-4 top-3 w-px bg-line"
          />
          {processSteps.map((s, i) => (
            <Reveal
              key={s.title}
              index={i}
              className="relative flex gap-6 pb-9 last:pb-0"
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
                <span className="h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-white" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-steel">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
