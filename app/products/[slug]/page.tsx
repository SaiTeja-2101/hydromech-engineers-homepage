import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Only the six known machines exist; anything else 404s (fully static).
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Hydro Mech Engineers`,
    description: product.overview,
  };
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" className="fill-accent/12" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}

const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(20,23,28,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,23,28,0.04) 1px, transparent 1px)",
  backgroundSize: "44px 44px",
  maskImage: "radial-gradient(120% 80% at 100% 0%, black 0%, transparent 60%)",
  WebkitMaskImage: "radial-gradient(120% 80% at 100% 0%, black 0%, transparent 60%)",
} as const;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  const galleryCount = product.gallery.length;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60" style={gridBg} />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-accent/5 blur-3xl"
        />

        <Container className="relative">
          <nav className="flex flex-wrap items-center gap-1.5 text-sm text-steel">
            <Link href="/" className="transition hover:text-accent">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/#products" className="transition hover:text-accent">
              Products
            </Link>
            <span aria-hidden>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <Reveal>
              <span className="inline-block rounded-md border border-line bg-mist px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-accent-600">
                {product.model}
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-ink/80">
                {product.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-steel">
                {product.overview}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/#contact">Request a Quote</Button>
                <Button href={site.phoneHref} variant="outline">
                  Call us
                </Button>
              </div>
            </Reveal>

            {/* Stage image with layered accent + model watermark */}
            <Reveal index={1} className="relative mx-auto w-full max-w-[560px] lg:mr-0">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-accent/10"
              />
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-mist p-6 shadow-xl shadow-ink/5 sm:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-3 select-none whitespace-nowrap font-display text-5xl font-bold leading-none tracking-tight text-ink/[0.04] sm:text-6xl"
                >
                  {product.model}
                </span>
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-8 left-1/2 h-12 w-3/5 -translate-x-1/2 rounded-[50%] bg-ink/10 blur-2xl"
                />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    preload
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="bg-mist py-16 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Technical Data</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Specifications
            </h2>
          </Reveal>
          <Reveal index={1} className="mt-8 overflow-hidden rounded-2xl border border-line bg-white">
            <dl className="grid sm:grid-cols-2">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between gap-6 border-b border-line px-5 py-4 transition-colors hover:bg-mist sm:odd:border-r"
                >
                  <dt className="text-sm text-steel">{s.label}</dt>
                  <dd className="text-right font-mono text-sm font-medium text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Key Features */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <Eyebrow>Why it works</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Key Features
            </h2>
          </Reveal>
          <Reveal index={1}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-md hover:shadow-ink/5"
                >
                  <Check />
                  <span className="leading-relaxed text-steel">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Gallery */}
      {galleryCount > 0 && (
        <section className="bg-mist py-16 sm:py-20">
          <Container>
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                A Closer Look
              </h2>
            </Reveal>
            <div
              className={cn(
                "mt-8 grid gap-6",
                galleryCount === 1
                  ? "max-w-md"
                  : galleryCount === 2
                    ? "max-w-3xl sm:grid-cols-2"
                    : "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {product.gallery.map((g, i) => (
                <Reveal key={g.src} index={i}>
                  <figure>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white">
                      <Image
                        src={g.src}
                        alt={g.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm font-medium text-steel">
                      {g.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA band */}
      <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Interested in this machine?
            </h2>
            <p className="mt-4 leading-relaxed text-silver">
              Tell us your material and output, and our team will help you spec
              the right machine and share a quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/#contact">Request a Quote</Button>
              <Button href={site.phoneHref} variant="white">
                Call us
              </Button>
            </div>
            <div className="mt-6">
              <Link
                href="/#products"
                className="text-sm font-semibold text-accent transition hover:text-white"
              >
                View all machines →
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
