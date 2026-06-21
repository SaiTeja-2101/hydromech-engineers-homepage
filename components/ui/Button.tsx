import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "white";

// Sharper 6px corners read as "engineered/industrial" rather than soft SaaS pills.
const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  // Solid burnt orange — primary call to action
  primary:
    "bg-accent-600 text-white shadow-lg shadow-accent-700/25 hover:bg-accent-700 hover:-translate-y-0.5",
  // Bordered, for use on light backgrounds
  outline:
    "border border-line text-ink hover:border-accent-600 hover:text-accent-600",
  // Frosted glass, for use on dark backgrounds / over photos
  ghost:
    "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
  // Solid white, for use on dark backgrounds
  white:
    "bg-white text-ink shadow-lg shadow-black/10 hover:-translate-y-0.5 hover:bg-mist",
};

/** Anchor-style button used across CTAs. Renders an <a>/Next <Link>. */
export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={cn(base, variants[variant], className)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
