export function BackgroundLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Mobile: 2 lines */}
      <div className="absolute hidden inset-y-0 left-[33%] w-px bg-border/60" />
      <div className="absolute hidden inset-y-0 left-[67%] w-px bg-border/60" />
      {/* Tablet: +1 center (3 total) */}
      <div className="hidden md:block lg:hidden absolute inset-y-0 left-1/2 w-px bg-border/50" />
      {/* Desktop: replace with 5-line layout */}
      <div className="absolute inset-y-0 left-[12%] w-px bg-border/50" />
      <div className="absolute inset-y-0 left-[88%] w-px bg-border/50" />
      <div className="hidden  absolute inset-y-0 left-1/2 w-px bg-border/40" />
    </div>
  );
}
