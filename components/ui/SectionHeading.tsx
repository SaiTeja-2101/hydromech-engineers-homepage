import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

/**
 * Shared section heading: small uppercase eyebrow + display title + optional
 * subtitle. `tone` switches text colors for light vs dark sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:text-base lg:text-lg">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            isDark ? "text-silver" : "text-steel",
            align === "center" ? "mx-auto" : "",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
