import type { Metadata } from "next";
import { whyPage } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import WhyHero from "@/components/why/WhyHero";
import WhyReasons from "@/components/why/WhyReasons";

export const metadata: Metadata = {
  description:
    "Why partner with Ethics Metal Forming Machineries: precision, reliability, custom solutions, and strong after sales support, built into every sheet metal machine.",
};

export default function WhyUsPage() {
  return (
    <main>
      <WhyHero />

      {/* Promise statement */}
      <section className="bg-mist py-20 sm:py-28">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
              <span className="h-px w-8 bg-accent" />
              {whyPage.promise.eyebrow}
            </span>
            <p className="mt-6 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              {whyPage.promise.lead}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
              {whyPage.promise.body}
            </p>
          </Reveal>
        </Container>
      </section>

      <WhyReasons />

      {/* Commitment quote band */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -left-2 top-2 select-none font-display text-[16rem] leading-none text-white/[0.06] sm:text-[20rem]"
        >
          &ldquo;
        </span>
        <Container className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base">
              <span className="h-px w-8 bg-accent" />
              {whyPage.commitment.eyebrow}
            </span>
            <blockquote className="mt-8 max-w-4xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
              {whyPage.commitment.quote}
            </blockquote>
            <p className="mt-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="h-px w-8 bg-white/50" />
              Ethics Metal Forming Machineries
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-ink p-9 shadow-2xl shadow-ink/20 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {whyPage.cta.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-silver">{whyPage.cta.sub}</p>
            </div>
            <div className="relative flex shrink-0 flex-wrap gap-4">
              <Button href="/#contact">Request a Quote</Button>
              <Button href="/#products" variant="white">
                Explore Machines
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
