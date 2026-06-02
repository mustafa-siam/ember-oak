import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";

interface Props {
  item: MenuItem;
}

export function MenuCard({ item }: Props) {
  const discounted = item.discount
    ? +(item.price * (1 - item.discount / 100)).toFixed(2)
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative bg-card border border-border p-3 sm:p-4 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3] sm:aspect-square bg-muted">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badges top-left */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          {item.popular && (
            <span className="bg-foreground text-background text-[10px] uppercase tracking-[0.18em] px-2 py-1 font-medium">
              ★ Popular
            </span>
          )}
          {item.discount && (
            <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.18em] px-2 py-1 font-medium">
              −{item.discount}%
            </span>
          )}
        </div>

        {/* Price chip top-right */}
        <div className="absolute top-2 right-2 bg-background/95 backdrop-blur px-2.5 py-1.5 flex items-baseline gap-1.5 border border-border">
          {discounted !== null && (
            <span className="text-[12px] line-through text-muted-foreground">
              ${item.price}
            </span>
          )}
          <span className="font-display text-base sm:text-lg text-primary leading-none">
            ${discounted ?? item.price}
          </span>
        </div>
      </div>

      <div className="pt-3 sm:pt-4">
        <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
          {item.category}
        </p>
        <h3 className="font-display text-lg sm:text-xl mt-1 leading-snug text-foreground">
          {item.name}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
