import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Hydro Mech Engineers brand logo (the real asset at /public/logo.webp).
 *
 * `tone="light"` → full-colour logo, for light backgrounds (scrolled header).
 * `tone="dark"`  → white knockout (brightness-0 invert), for dark backgrounds
 *                  (hero transparent state, footer, mobile drawer). The asset
 *                  has an alpha channel, so the knockout stays clean.
 */
export default function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Image
      src="/logo.webp"
      alt="Hydro Mech Engineers"
      width={329}
      height={74}
      priority
      className={cn(
        "h-9 w-auto",
        tone === "dark" && "brightness-0 invert",
        className,
      )}
    />
  );
}
