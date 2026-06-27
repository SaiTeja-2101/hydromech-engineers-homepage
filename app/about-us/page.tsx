import type { Metadata } from "next";
import { aboutPage } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutProcess from "@/components/about/AboutProcess";
import AboutVision from "@/components/about/AboutVision";

export const metadata: Metadata = {
  description:
    "Ethics Metal Forming Machineries is a Bangalore sheet metal company delivering reliable, economical machines and press brake tools, backed by strong after sales support.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutCapabilities />
      <AboutProcess />
      <AboutVision />

      {/* CTA: premium dark panel on white, a strong finish into the footer */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-ink p-9 shadow-2xl shadow-ink/20 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
            {/* accent glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {aboutPage.cta.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-silver">{aboutPage.cta.sub}</p>
            </div>
            <div className="relative flex shrink-0 flex-wrap gap-4">
              <Button href="/contact">Request a Quote</Button>
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
