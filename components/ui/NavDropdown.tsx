"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { products } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Desktop "Products" menu — a clean dropdown listing the machine categories.
 * Opens on hover and on keyboard focus (focus-within) for accessibility;
 * no extra JS state needed.
 */
export default function NavDropdown({ solid }: { solid: boolean }) {
  return (
    <div className="group relative">
      <button
        className={cn(
          "inline-flex items-center gap-1 text-sm font-semibold transition-colors",
          solid
            ? "text-ink hover:text-accent"
            : "text-white/90 hover:text-white",
        )}
        aria-haspopup="true"
      >
        Products
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>

      {/* Panel */}
      <div
        className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
      >
        <div className="overflow-hidden rounded-xl border border-line bg-white p-2 shadow-2xl shadow-black/10">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="flex items-center justify-between gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-accent"
            >
              <span className="leading-snug">{product.name}</span>
              <span className="shrink-0 rounded border border-line bg-mist px-1.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wide text-steel">
                {product.model}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
