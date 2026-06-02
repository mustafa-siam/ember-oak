import { motion } from "framer-motion";
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
];

export function Testimonials() {
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
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary">Guest Stories</p>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-white hero-text-shadow">
            What Our Guests Say
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
          {QUOTES.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background/95 backdrop-blur p-7 md:p-8 border border-border"
            >
              <p className="text-primary text-xl tracking-widest">★★★★★</p>
              <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-foreground">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-medium text-foreground">{t.n}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.c}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
