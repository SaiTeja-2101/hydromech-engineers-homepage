import Image from "next/image";
import { about } from "@/lib/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";

/**
 * About Us — editorial split, icon-free. Left = headline + story + numbered
 * values (01/02/03) + vision quote + button. Right = real flagship machine on a
 * clean light stage with a "15+ Years" chip. No lucide icons anywhere here.
 */
export default function About({ showMoreLink = true }: { showMoreLink?: boolean }) {
  return (
    <section id="about" className="overflow-x-clip bg-white py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base lg:text-lg">
              About Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl md:text-5xl">
              {about.headline}
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-steel">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {/* Numbered values — no icons */}
            <ul className="mt-8 border-t border-line">
              {about.values.map((v, i) => (
                <li
                  key={v.title}
                  className="flex gap-5 border-b border-line py-4"
                >
                  <span className="font-mono text-lg font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-steel">
                      {v.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-lg italic leading-relaxed text-ink/80">
              “{about.vision}”
            </blockquote>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/#products">Discover Our Machines →</Button>
              {showMoreLink && (
                <Button href="/about-us" variant="outline">
                  More about us →
                </Button>
              )}
            </div>
          </Reveal>

          {/* Visual */}
          <Reveal index={1} className="relative mx-auto w-full max-w-[520px] lg:mr-0">
            {/* subtle offset frame for depth */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-2xl border border-accent/30"
            />

            <div className="relative rounded-2xl border border-line bg-mist p-6 shadow-xl shadow-ink/5">
              {/* soft floor shadow */}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-3/5 -translate-x-1/2 rounded-[50%] bg-ink/10 blur-2xl"
              />
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

            {/* 15+ Years chip */}
            <div className="absolute -right-3 -top-3 flex items-center gap-2.5 rounded-lg border-l-2 border-accent bg-ink px-4 py-2.5 shadow-lg">
              <span className="font-display text-2xl font-bold text-white">15+</span>
              <span className="text-[0.62rem] font-semibold uppercase leading-tight tracking-wider text-silver/80">
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
