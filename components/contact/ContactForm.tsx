"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { contactPage, products } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Contact enquiry form: the page's primary action. Client-side validation with
 * an inline success state (no backend), reusing the home Contact form pattern.
 */
export default function ContactForm() {
  const { formIntro } = contactPage;
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
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
    }
  };

  const field =
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-steel/60 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-ink/5 sm:p-9">
      {sent ? (
        <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
            <CheckCircle2 className="h-8 w-8" />
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
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {formIntro.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-steel">{formIntro.sub}</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
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
            className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent-700/25 transition hover:-translate-y-0.5 hover:bg-accent-700 sm:w-auto"
          >
            Send message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      )}
    </div>
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
