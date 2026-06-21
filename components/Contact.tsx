"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Check } from "lucide-react";
import { site, products } from "@/lib/content";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const infoRows = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsappHref,
  },
  { icon: Mail, label: "Email", value: site.email, href: site.emailHref },
  { icon: MapPin, label: "Visit us", value: site.address, href: site.mapUrl },
] as const;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please tell us what you need.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
    }
  };

  const field =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-steel/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* Banner */}
      <Image
        src="/contact-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <Container className="relative z-10">
        <Reveal className="max-w-2xl">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-accent">
            Contact Us
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Machine
          </h2>
          <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
            Tell us what you run and what you need. Our team will get back to you quickly.
          </p>
        </Reveal>

        <Reveal index={1} className="mt-12 grid overflow-hidden rounded-2xl shadow-2xl shadow-black/40 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left — info */}
          <div className="bg-graphite p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Talk to our team
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-silver/80">
              Reach us on the channel that suits you. We are happy to help with
              quotes, specs and support.
            </p>

            <ul className="mt-8 space-y-5">
              {infoRows.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={label === "Visit us" ? "_blank" : undefined}
                    rel={label === "Visit us" ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-silver/60">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-[0.95rem] leading-snug text-white transition group-hover:text-accent">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="bg-white p-8 sm:p-10">
            {sent ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-7 w-7" strokeWidth={3} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  Thanks, we&apos;ll be in touch.
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
                  Your message has been noted. Our team will reach out to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Send us a message
                </h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Labeled label="Full name" required error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set("name")}
                      aria-invalid={!!errors.name}
                      placeholder="Your name"
                      className={field}
                    />
                  </Labeled>
                  <Labeled label="Company">
                    <input
                      type="text"
                      value={form.company}
                      onChange={set("company")}
                      placeholder="Company name"
                      className={field}
                    />
                  </Labeled>
                  <Labeled label="Email" required error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      placeholder="you@company.com"
                      className={field}
                    />
                  </Labeled>
                  <Labeled label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 00000 00000"
                      className={field}
                    />
                  </Labeled>
                </div>

                <div className="mt-5">
                  <Labeled label="Interested in">
                    <select
                      value={form.interest}
                      onChange={set("interest")}
                      className={`${field} ${form.interest ? "text-ink" : "text-steel/60"}`}
                    >
                      <option value="">Select a machine</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name} className="text-ink">
                          {p.name}
                        </option>
                      ))}
                      <option value="General enquiry" className="text-ink">
                        General enquiry
                      </option>
                    </select>
                  </Labeled>
                </div>

                <div className="mt-5">
                  <Labeled label="Message" required error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      rows={4}
                      placeholder="Tell us about your material, output and requirements."
                      className={`${field} resize-y`}
                    />
                  </Labeled>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-accent-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-700/25 transition hover:-translate-y-0.5 hover:bg-accent-700 sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Labeled({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
