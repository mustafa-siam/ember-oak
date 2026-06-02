import { Link } from "@tanstack/react-router";
import { MENU } from "@/data/menu";
import { MenuCard } from "../MenuCard";
import { SectionHeader } from "../SectionHeader";
import { BackgroundLines } from "../BackgroundLines";

export function MenuPreview() {
  const items = MENU.slice(0, 8);
  return (
    <section id="menu" className="relative py-20 md:py-24 bg-secondary/50 border-y border-border/60">
      <BackgroundLines />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="The Menu"
          title="A Taste of America"
          subtitle="From the smokehouse to the cellar — eight signature plates to start."
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it) => (
            <MenuCard key={it.id} item={it} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/menu"
            className="px-8 py-4 bg-foreground text-background text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
