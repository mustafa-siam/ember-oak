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

const PHOTOS = [
  { src: g1, alt: "Chef plating in our kitchen", span: "row-span-2" },
  { src: g2, alt: "Our sommelier presenting wine" },
  { src: g4, alt: "Patio at dusk under string lights" },
  { src: g3, alt: "Behind the bar — bourbon pour", span: "row-span-2" },
  { src: g5, alt: "Guests sharing a toast" },
  { src: g6, alt: "Pastry course in the making" },
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
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 grid-flow-row-dense auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {PHOTOS.map((p, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setOpen(i)}
              className={`relative overflow-hidden group bg-muted ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
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
