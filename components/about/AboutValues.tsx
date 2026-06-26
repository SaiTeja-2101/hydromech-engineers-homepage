import { aboutPage } from "@/lib/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

/**
 * "What We Stand For" is a light editorial values grid. Each cell staggers in via
 * the shared Reveal wrapper and grows its accent rule on hover.
 */
export default function AboutValues() {
  const { values } = aboutPage;

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
            {values.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {values.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((v, i) => (
            <Reveal
              key={v.title}
              index={i % 3}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-mist sm:p-8"
            >
              <span className="font-mono text-lg font-semibold tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{v.desc}</p>
              <span className="mt-5 block h-0.5 w-8 origin-left rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-[2]" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
