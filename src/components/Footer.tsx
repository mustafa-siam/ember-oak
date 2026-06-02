export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">
            Ember<span className="text-primary">&</span>Oak
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            An American kitchen and bar serving fire-touched classics in the heart of downtown.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-4">Visit</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            742 Magnolia Avenue<br />Austin, TX 78701<br />United States
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-foreground mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            (512) 555-0142<br />hello@emberandoak.com
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ember & Oak. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Made in the USA</p>
        </div>
      </div>
    </footer>
  );
}
