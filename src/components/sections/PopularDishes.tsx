import { MENU } from "@/data/menu";
import { MenuCard } from "../MenuCard";
import { SectionHeader } from "../SectionHeader";
import { BackgroundLines } from "../BackgroundLines";

export function PopularDishes() {
  const items = MENU.filter((m) => m.popular).slice(0, 4);
  return (
    <section className="relative py-20 md:py-24 border-y border-border/60">
      <BackgroundLines />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Chef's Picks"
          title="The Most Loved Plates"
          subtitle="The dishes our guests come back for, hand-selected by the kitchen."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it) => (
            <MenuCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
