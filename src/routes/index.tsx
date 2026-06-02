import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/components/sections/Hero";
import { PopularDishes } from "@/components/sections/PopularDishes";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { About } from "@/components/sections/About";
import { ParallaxStrip } from "@/components/sections/ParallaxStrip";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember & Oak — American Kitchen & Bar in Austin, TX" },
      {
        name: "description",
        content:
          "An American kitchen and bar in Austin, Texas — fire-cooked steaks, smoked ribs, craft cocktails and Sunday suppers since 1998.",
      },
      { property: "og:title", content: "Ember & Oak — American Kitchen & Bar" },
      { property: "og:description", content: "Fire-cooked American classics in downtown Austin." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="relative">
        <Hero />
        <PopularDishes />
        <MenuPreview />
        <About />
        <ParallaxStrip />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
