import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/#about" },
  { label: "Gallery", to: "/#gallery" },
  { label: "Contact", to: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <button
  type="button"
  onClick={() => {
    navigate({ to: "/" });

    const scrollToHero = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // wait for route render
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHero);
    });
  }}
  className="flex items-center gap-2 cursor-pointer"
>
  <span
            className={`font-display text-2xl md:text-3xl tracking-wide ${
              scrolled ? "text-foreground" : "text-white hero-text-shadow"
            }`}
          >
            Ember<span className="text-primary">&</span>Oak
          </span>
</button>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className={`text-sm uppercase tracking-[0.18em] transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-white hero-text-shadow"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] hover:bg-primary/90 transition-colors"
          >
            Reserve
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV.map((n) => (
              <a
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-primary border-b border-border/60 last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 px-5 py-3 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] text-center"
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
