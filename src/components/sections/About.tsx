import { motion } from "framer-motion";
import about from "@/assets/about.jpg";
import { BackgroundLines } from "../BackgroundLines";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-24 border-y border-border/60">
      <BackgroundLines />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-3 border border-primary/40 -z-10" />
          <img
            src={about}
            alt="Inside Ember & Oak — warm wood, brick and Edison bulbs"
            loading="lazy"
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <p className="text-[12px] uppercase tracking-[0.3em] text-primary">Our Story</p>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            A neighborhood table since 1998.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ember & Oak was born out of a love for cast-iron skillets, Texas oak smoke,
            and Sunday suppers that lasted into the night. Three decades later, our
            kitchen still runs on the same simple idea — honest American food,
            cooked over fire, served with warmth.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From dry-aged steaks and slow-smoked ribs to buttermilk biscuits and
            bourbon poured neat — every plate is a small love letter to the
            American table.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "27+", l: "Years" },
              { n: "120k", l: "Guests / yr" },
              { n: "★ 4.9", l: "Avg. rating" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl md:text-4xl text-primary">{s.n}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
