"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Mail, CheckCircle2 } from "lucide-react";
import { faqPage, site, products } from "@/lib/content";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const channels = [
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref, external: false },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsappHref, external: true },
  { icon: Mail, label: "Email", value: site.email, href: site.emailHref, external: false },
] as const;

/**
 * "Ask Us" section for the FAQ page: a graphite contact panel beside a white
 * enquiry form with client-side validation and a success state.
 */
export default function FaqContact() {
  const { contact } = faqPage;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
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
      setForm({ name: "", email: "", phone: "", interest: "", message: "" });
    }
  };

  const field =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-steel/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <section id="ask" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {contact.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-steel sm:text-lg">{contact.sub}</p>
        </Reveal>

        <Reveal
          index={1}
          className="mt-12 grid overflow-hidden rounded-2xl shadow-2xl shadow-ink/15 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Left: graphite info panel over a faint banner */}
          <div className="relative isolate overflow-hidden bg-graphite p-8 sm:p-10">
            <Image
              src={faqPage.hero.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="-z-10 object-cover object-center opacity-20"
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-graphite/80" />
            <h3 className="font-display text-2xl font-bold text-white">Talk to our team</h3>
            <p className="mt-2 text-sm leading-relaxed text-silver/85">
              Reach us on whichever channel suits you. We are happy to help with quotes,
              specs and support.
            </p>

            <ul className="mt-8 space-y-5">
              {channels.map(({ icon: Ico, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-accent/25">
                      <Ico className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-wider text-silver/60">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-[0.95rem] leading-snug text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: enquiry form */}
          <div className="bg-white p-8 sm:p-10">
            {sent ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  Thanks, we&apos;ll be in touch.
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
                  Your question has been noted. Our team will get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
                >
                  Ask another question
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display text-2xl font-bold text-ink">Ask us anything</h3>

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
                  <Labeled label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 00000 00000"
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
                  <Labeled label="About">
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
                  <Labeled label="Your question" required error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={set("message")}
                      aria-invalid={!!errors.message}
                      rows={4}
                      placeholder="Tell us about your material, output and what you need."
                      className={`${field} resize-y`}
                    />
                  </Labeled>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-md bg-accent-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-700/25 transition hover:-translate-y-0.5 hover:bg-accent-700 sm:w-auto"
                >
                  Send question
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
