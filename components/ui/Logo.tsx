import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Ethics Metal Forming Machineries brand logo (the real asset at /public/logo.png).
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
      alt="Ethics Metal Forming Machineries"
      width={3156}
      height={1025}
      preload
      className={cn(
        "h-8 w-auto sm:h-9",
        tone === "dark" && "brightness-0 invert",
        className,
      )}
    />
  );
}
