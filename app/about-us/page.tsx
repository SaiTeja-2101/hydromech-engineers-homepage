import type { Metadata } from "next";
import { aboutPage } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutFacts from "@/components/about/AboutFacts";
import AboutValues from "@/components/about/AboutValues";
import AboutCapabilities from "@/components/about/AboutCapabilities";
import AboutProcess from "@/components/about/AboutProcess";
import AboutVision from "@/components/about/AboutVision";

export const metadata: Metadata = {
  title: "About Us | Hydro Mech Engineers",
  description:
    "Hydro Mech Engineers is a Bangalore sheet metal company delivering reliable, economical machines and press brake tools, backed by strong after sales support.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutFacts />
      <AboutValues />
      <AboutCapabilities />
      <AboutProcess />
      <AboutVision />

      {/* CTA: distinct from the product-page band - light, bordered panel, left aligned */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="flex flex-col gap-8 rounded-2xl border border-line bg-mist p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {aboutPage.cta.heading}
              </h2>
              <p className="mt-4 leading-relaxed text-steel">{aboutPage.cta.sub}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Button href="/#contact">Request a Quote</Button>
              <Button href="/#products" variant="outline">
                Explore Machines
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
