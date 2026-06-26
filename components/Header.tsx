"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import Logo from "./ui/Logo";
import NavDropdown from "./ui/NavDropdown";
import Button from "./ui/Button";

// Routes with a dark full-bleed hero behind a transparent header.
const TRANSPARENT_HERO_ROUTES = new Set(["/", "/about-us"]);

export default function Header() {
  // `scrolled` flips the header from transparent-over-hero to frosted white.
  // Routes with a dark hero start transparent; every other route (light
  // sub-pages) is solid from the top.
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = !TRANSPARENT_HERO_ROUTES.has(pathname) || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          solid
            ? "border-b border-line bg-white/85 backdrop-blur-md shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" aria-label="Hydro Mech Engineers — home">
            <Logo tone={solid ? "light" : "dark"} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <NavDropdown key={link.href} solid={solid} />
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-semibold transition-colors",
                    solid
                      ? "text-ink hover:text-accent"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  {link.label}
                  {/* animated underline */}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/#contact" className="hidden sm:inline-flex">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
                solid ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10",
              )}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ink px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <Logo tone="dark" />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
                {/* Strong, tappable contact actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button href={site.phoneHref} className="w-full">
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                  <Button href={site.whatsappHref} variant="ghost" className="w-full">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
                <Button
                  href="/#contact"
                  variant="white"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={site.emailHref}
                  className="mt-1 inline-flex items-center justify-center gap-2 text-sm text-silver/80 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {site.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
