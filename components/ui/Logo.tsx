import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Hydro Mech Engineers brand logo (the real asset at /public/logo.png).
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
      src="/logo.png"
      alt="Hydro Mech Engineers"
      width={3156}
      height={1025}
      priority
      className={cn(
        "h-8 w-auto sm:h-9",
        tone === "dark" && "brightness-0 invert",
        className,
      )}
    />
  );
}
