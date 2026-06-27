import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock, Check, ArrowUpRight } from "lucide-react";
import { contactPage, site } from "@/lib/content";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  description:
    "Contact Ethics Metal Forming Machineries in Bangalore for quotes, custom sheet metal machines and after sales support. Call, WhatsApp, email or visit us.",
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;

const cardCls =
  "group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5";

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-steel">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      {/* Quick contact method cards */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Reach us
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl">
              {contactPage.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-steel sm:text-lg">
              {contactPage.subheading}
            </p>
          </Reveal>

          <Reveal index={1} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Call */}
            <a href={site.phoneHref} className={cardCls}>
              <IconTile>
                <Phone className="h-5 w-5" />
              </IconTile>
              <span>
                <Label>Call us</Label>
                <span className="mt-1 block font-display text-lg font-bold text-ink">
                  {site.phone}
                </span>
              </span>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Call now
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cardCls}
            >
              <IconTile>
                <MessageCircle className="h-5 w-5" />
              </IconTile>
              <span>
                <Label>WhatsApp</Label>
                <span className="mt-1 block font-display text-lg font-bold text-ink">
                  {site.phone}
                </span>
              </span>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Chat with us
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            {/* Email (two addresses) */}
            <div className={cardCls}>
              <IconTile>
                <Mail className="h-5 w-5" />
              </IconTile>
              <span>
                <Label>Email us</Label>
                <a
                  href={site.emailHref}
                  className="mt-1 block break-words text-[0.95rem] font-semibold text-ink transition hover:text-accent-600"
                >
                  {site.email}
                </a>
                <a
                  href={site.emailHref2}
                  className="mt-0.5 block break-words text-[0.95rem] font-semibold text-ink transition hover:text-accent-600"
                >
                  {site.email2}
                </a>
              </span>
            </div>

            {/* Visit */}
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cardCls}
            >
              <IconTile>
                <MapPin className="h-5 w-5" />
              </IconTile>
              <span>
                <Label>Visit us</Label>
                <span className="mt-1 block text-[0.95rem] font-semibold leading-snug text-ink">
                  {site.addressShort}
                </span>
              </span>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
                Get directions
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Form + info panel */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Dark info panel */}
            <Reveal
              index={1}
              className="relative overflow-hidden rounded-3xl bg-ink p-8 text-silver shadow-xl shadow-ink/20 sm:p-9"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
              />
              <div className="relative">
                {/* Address */}
                <h3 className="font-display text-xl font-bold text-white">Visit our works</h3>
                <p className="mt-3 flex items-start gap-3 text-sm leading-relaxed text-silver/85">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {site.address}
                </p>
                <Button href={site.mapUrl} variant="white" className="mt-5">
                  Get directions
                  <ArrowUpRight className="h-4 w-4" />
                </Button>

                {/* Hours */}
                <div className="mt-8 border-t border-white/10 pt-7">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-white">
                    <Clock className="h-5 w-5 text-accent" />
                    Working hours
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {contactPage.hours.map((h) => (
                      <li
                        key={h.days}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-silver/85">{h.days}</span>
                        <span className="font-semibold text-white">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Assurances */}
                <div className="mt-8 border-t border-white/10 pt-7">
                  <ul className="space-y-3">
                    {contactPage.assurances.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm text-silver/85">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Live map */}
      <section className="bg-white pb-20 sm:pb-24">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-line shadow-sm">
            <iframe
              title="Ethics Metal Forming Machineries location"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full sm:h-[440px]"
            />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
