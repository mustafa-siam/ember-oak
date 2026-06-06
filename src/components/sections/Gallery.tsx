import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { Lightbox } from "../Lightbox";
import { BackgroundLines } from "../BackgroundLines";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/g7.png";
import g8 from "@/assets/g8.png";

const PHOTOS = [
  {
    src: g1,
    alt: "Chef plating in our kitchen",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: g2,
    alt: "Our sommelier presenting wine",
    span: "",
  },
  {
    src: g3,
    alt: "Behind the bar — bourbon pour",
    span: "",
  },
  {
    src: g4,
    alt: "Patio at dusk under string lights",
    span: "md:col-span-2",
  },
  {
    src: g5,
    alt: "Guests sharing a toast",
    span: "",
  },
  {
    src: g6,
    alt: "Pastry course in the making",
    span: "",
  },
  {
    src: g7,
    alt: "Our chef in action",
    span: "",
  },
  {
    src: g8,
    alt: "A signature cocktail being poured",
    span: "",
  },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-20 md:py-24 bg-secondary/50 border-y border-border/60">
      <BackgroundLines />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Inside the Room"
          subtitle="Moments from the kitchen, the bar, and the room."
        />
        
        <div
          className="
            mt-14
            grid
            grid-cols-2
            auto-rows-[200px]
            gap-3
            grid-flow-dense
            md:grid-cols-4
            md:auto-rows-[240px]
            md:gap-4
          "
        >
          {PHOTOS.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl bg-muted ${p.span}`}
              aria-label={`Open image: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              
              {/* Elegant gradient overlay matched from your reference component */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>
      
      <Lightbox
        images={PHOTOS.map((p) => ({ src: p.src, alt: p.alt }))}
        index={open}
        onIndex={setOpen}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}