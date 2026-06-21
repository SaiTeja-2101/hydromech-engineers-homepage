import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { about } from "@/lib/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";

/**
 * About Us — light section that floats the REAL flagship machine photo, with a
 * real workshop close-up inset and a "15+ Years" chip. Uses the company's own
 * provided images for credibility (the hero carousel uses stock atmosphere).
 */
export default function About() {
  return (
    <section id="about" className="overflow-x-clip bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <Reveal>
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-accent">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Built on Reliable, Economical Engineering
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {about.values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-accent-600 text-white">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] font-medium text-ink">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg italic leading-relaxed text-ink/80">
              “{about.vision}”
            </blockquote>

            <Button href="#products" className="mt-9">
              Discover Our Machines
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>

          {/* Visual composition */}
          <Reveal index={1} className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            {/* subtle offset frame behind the card for depth */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl border border-accent/30"
            />

            {/* Main flagship product card */}
            <div className="relative rounded-2xl border border-line bg-mist p-6 shadow-xl shadow-ink/5">
              {/* model tag — top-left, no longer collides with anything */}
              <span className="absolute left-4 top-4 z-10 rounded-md bg-ink px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-silver">
                HMB-303 · Bus Bar
              </span>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/products/busbar-processing.jpg"
                  alt="Hydro Mech Hydraulic Bus Bar Processing Machine (3-in-1)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Real workshop inset — bottom-right */}
            <div className="absolute -bottom-6 right-5 w-32 overflow-hidden rounded-xl shadow-lg ring-1 ring-line sm:w-40">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/products/detail-bending.jpg"
                  alt="Bending station on the Hydro Mech workshop floor"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 15+ Years chip — top-right */}
            <div className="absolute -top-4 right-4 flex items-center gap-2.5 rounded-lg border-l-2 border-accent bg-ink px-3.5 py-2 shadow-lg">
              <span className="font-display text-xl font-bold text-white">15+</span>
              <span className="text-[0.6rem] font-semibold uppercase leading-tight tracking-wider text-silver/80">
                Years of
                <br />
                Experience
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
