"use client";

import { Icon } from "@iconify/react";
import { site, products } from "@/lib/content";
import Container from "./ui/Container";
import Logo from "./ui/Logo";

const connect = [
  { icon: "mdi:whatsapp", label: "WhatsApp", href: site.whatsappHref },
  { icon: "solar:phone-bold", label: "Call", href: site.phoneHref },
  { icon: "solar:letter-bold", label: "Email", href: site.emailHref },
  { icon: "solar:map-point-bold", label: "Location", href: site.mapUrl },
];

const company = [
  { label: "About", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const isExternal = (href: string) => href.startsWith("http");

export default function Footer() {
  return (
    <footer className="bg-ink text-silver">
      {/* Main columns */}
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] sm:py-20">
        {/* Brand + connect */}
        <div>
          <Logo tone="dark" className="h-10" />
          <p className="mt-5 max-w-xs text-base leading-relaxed text-silver/70">
            Sheet metal machines built for reliable, economical, long-term
            production. Based in Bangalore.
          </p>
          <div className="mt-6 flex gap-3">
            {connect.map((c) => (
              <a
                key={c.label}
                href={c.href}
                aria-label={c.label}
                target={isExternal(c.href) ? "_blank" : undefined}
                rel={isExternal(c.href) ? "noopener noreferrer" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-graphite-700 bg-graphite text-silver transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon icon={c.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Machines */}
        <FooterCol title="Machines">
          {products.map((p) => (
            <FooterLink key={p.id} href="#products">
              {p.name}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Company */}
        <FooterCol title="Company">
          {company.map((c) => (
            <FooterLink key={c.href} href={c.href}>
              {c.label}
            </FooterLink>
          ))}
        </FooterCol>

        {/* Get in touch */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-silver/55">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-3.5 text-base text-silver/80">
            <li>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed transition hover:text-white"
              >
                {site.address}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="transition hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`https://${site.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent"
              >
                {site.website}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-graphite-700">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-silver/55">
            © 2026 Hydro Mech Engineers. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite-700 text-silver transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Icon icon="solar:alt-arrow-up-linear" className="h-5 w-5" />
          </a>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-silver/55">
        {title}
      </h3>
      <ul className="mt-5 space-y-3.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-2 text-base text-silver/80 transition hover:text-white"
      >
        <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
        {children}
      </a>
    </li>
  );
}
