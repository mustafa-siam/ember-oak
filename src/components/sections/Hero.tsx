import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const SLIDES = [
  { src: hero1, alt: "Prime dry-aged ribeye" },
  { src: hero2, alt: "Warm American dining room at dusk" },
  { src: hero3, alt: "Chef plating an entrée" },
  { src: hero4, alt: "Steaming gourmet cheeseburger" },
];

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section 
    id="hero"
    className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={SLIDES[i].src}
            alt={SLIDES[i].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrim for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/75" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative frame lines */}
      <div className="absolute inset-x-5 md:inset-x-10 top-24 md:top-28 bottom-10 md:bottom-14 border border-white/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-white/70" />
          <p className="text-[12px] md:text-xs uppercase tracking-[0.4em] text-white/90 hero-text-shadow">
            American Kitchen & Bar · Austin, TX
          </p>
          <span className="h-px w-10 bg-white/70" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] max-w-5xl hero-text-shadow"
        >
          Fire, Wood<br/>& Hospitality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-xl text-base md:text-lg text-white/90 leading-relaxed hero-text-shadow"
        >
          Slow-cooked classics, prime cuts and bourbon nights — an American table
          built around the open flame.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/menu"
            className="px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
          >
            Explore the Menu
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/70 text-white text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-foreground transition-colors"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 inset-x-0 z-10 flex items-center justify-center gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-[2px] transition-all ${
              i === idx ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
