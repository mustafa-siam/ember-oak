import parallax from "@/assets/parallax-2.jpg";

export function ParallaxStrip() {
  return (
    <section
      className="relative py-24 md:py-36 parallax-bg border-y border-border/60"
      style={{ backgroundImage: `url(${parallax})` }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <p className="text-[12px] uppercase tracking-[0.4em] text-primary">Fire-Cooked, Always</p>
        <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl text-white hero-text-shadow leading-[1.05]">
          Every plate begins<br/>over the open flame.
        </h2>
        <p className="mt-6 text-white/85 max-w-xl mx-auto hero-text-shadow">
          From the cast-iron skillet to the Texas oak smoker — we let the fire do the talking.
        </p>
      </div>
    </section>
  );
}
