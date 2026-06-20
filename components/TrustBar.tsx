import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "./ui/Container";
import Counter from "./ui/Counter";
import Reveal from "./ui/Reveal";

/**
 * Dark graphite credibility strip that sits between the hero and the About
 * section. Four numbers count up when scrolled into view (reused Counter).
 * All figures are real, taken from the company website.
 */
export default function TrustBar() {
  return (
    <section className="bg-ink py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 sm:gap-y-0 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              index={i}
              className={cn(
                "flex flex-col items-center text-center",
                // hairline dividers between items (not before the first in a row)
                "sm:border-graphite-700",
                i !== 0 && "lg:border-l",
                i === 1 && "sm:border-l lg:border-l",
                i === 3 && "sm:border-l",
              )}
            >
              <div
                className={cn(
                  "font-display text-4xl font-bold tracking-tight sm:text-5xl",
                  stat.accent ? "text-accent" : "text-white",
                )}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-silver/80 sm:text-sm">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
