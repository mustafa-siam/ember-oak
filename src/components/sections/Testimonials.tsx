import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import parallax from "@/assets/parallax-1.jpg";

const QUOTES = [
  {
    q: "The best steak I've eaten this side of the Mississippi. Service that makes you feel like family.",
    n: "Sarah M.",
    c: "Austin, TX",
  },
  {
    q: "Old-fashioneds done right, ribs that fall off the bone, and a room that just feels like home.",
    n: "James K.",
    c: "Dallas, TX",
  },
  {
    q: "An honest American kitchen with real soul. We drove three hours and would do it again tomorrow.",
    n: "Olivia R.",
    c: "Houston, TX",
  },
  {
    q: "From the first appetizer to dessert, every plate felt crafted with care. Worth every mile of the journey.",
    n: "Michael T.",
    c: "San Antonio, TX",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < QUOTES.length - cardsToShow) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const visibleQuotes = QUOTES.slice(
    index,
    index + cardsToShow
  );

  return (
    <section
      className="relative py-24 md:py-36 parallax-bg border-y border-border/60"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary">
              Guest Stories
            </p>
            <span className="h-px w-8 bg-primary" />
          </div>

          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white hero-text-shadow">
            What Our Guests Say
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            className={`grid gap-5 md:gap-6 ${
              cardsToShow === 1
                ? "grid-cols-1"
                : "md:grid-cols-3"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {visibleQuotes.map((t) => (
                <motion.figure
                  key={t.q}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background/95 backdrop-blur p-7 md:p-8 border border-border"
                >
                  <p className="text-primary text-xl tracking-widest">
                    ★★★★★
                  </p>

                  <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-foreground">
                    “{t.q}”
                  </blockquote>

                  <figcaption className="mt-6 pt-5 border-t border-border">
                    <p className="font-medium text-foreground">
                      {t.n}
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {t.c}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
            h-14 w-14 items-center justify-center
            rounded-full
            bg-background/95
            backdrop-blur-sm
            border border-border/50
            shadow-xl
            text-foreground
            hover:scale-105
            transition-all duration-300
            disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            disabled={index >= QUOTES.length - cardsToShow}
            aria-label="Next testimonials"
            className="hidden md:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2
            h-14 w-14 items-center justify-center
            rounded-full
            bg-background/95
            backdrop-blur-sm
            border border-border/50
            shadow-xl
            text-foreground
            hover:scale-105
            transition-all duration-300
            disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={22} />
          </button>

          {/* Mobile Arrows */}
          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous testimonials"
              className="h-12 w-12 flex items-center justify-center rounded-full
              bg-background/95 border border-border/50 shadow-lg
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed ml-2 sm:ml-0 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              disabled={index >= QUOTES.length - cardsToShow}
              aria-label="Next testimonials"
              className="h-12 w-12 flex items-center justify-center rounded-full
              bg-background/95 border border-border/50 shadow-lg
              transition-all duration-300
              disabled:opacity-40 disabled:cursor-not-allowed mr-2 sm:mr-0 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}