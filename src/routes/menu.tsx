import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundLines } from "@/components/BackgroundLines";
import { MenuCard } from "@/components/MenuCard";
import { CATEGORIES, MENU, type MenuCategory } from "@/data/menu";

type CatFilter = "All" | MenuCategory;
type SpecialFilter = "All" | "Popular" | "Offer";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Ember & Oak" },
      {
        name: "description",
        content:
          "Browse the full Ember & Oak menu — American starters, mains, pasta, desserts and a full bar.",
      },
      { property: "og:title", content: "The Menu — Ember & Oak" },
      { property: "og:description", content: "Our full American menu, hand-crafted in Austin." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState<CatFilter>("All");
  const [special, setSpecial] = useState<SpecialFilter>("All");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    return MENU.filter((m) => {
      if (cat !== "All" && m.category !== cat) return false;
      if (special === "Popular" && !m.popular) return false;
      if (special === "Offer" && !m.discount) return false;
      if (q && !m.name.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [cat, special, q]);

  return (
    <div className="relative">
      <BackgroundLines />
      <Navbar />
      <main className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <p className="text-[12px] uppercase tracking-[0.3em] text-primary">Full Menu</p>
              <span className="h-px w-8 bg-primary" />
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02]">
              Every Plate, Every Pour
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From smoky starters to bourbon nightcaps — the full menu, served daily.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-12 border border-border bg-card p-4 md:p-6 space-y-5">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 cursor-pointer text-[12px] uppercase tracking-[0.2em] border transition-colors ${
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {(["All", "Popular", "Offer"] as SpecialFilter[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpecial(s)}
                    className={`px-4 py-2 cursor-pointer text-[12px] uppercase tracking-[0.2em] border transition-colors ${
                      special === s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {s === "Popular" ? "★ Popular" : s === "Offer" ? "On Offer" : "All Specials"}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search dishes…"
                  className="w-full pl-10 pr-3 py-2.5 bg-background border border-border text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {items.map((it) => (
              <MenuCard key={it.id} item={it} />
            ))}
          </div>

          {items.length === 0 && (
            <p className="mt-20 text-center text-muted-foreground">
              No dishes match your filters yet.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
