import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { BackgroundLines } from "../BackgroundLines";

const HOURS = [
  { d: "Monday – Thursday", h: "5:00 PM – 10:00 PM" },
  { d: "Friday", h: "5:00 PM – 12:00 AM" },
  { d: "Saturday", h: "11:00 AM – 12:00 AM" },
  { d: "Sunday", h: "11:00 AM – 9:00 PM" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-24 border-y border-border/60">
      <BackgroundLines />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Find Us, Call Us, Join Us"
          subtitle="We're just off Sixth Street, with valet on weekends."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-card border border-border p-7 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl">Hours</h3>
            <ul className="mt-6 divide-y divide-border">
              {HOURS.map((h) => (
                <li key={h.d} className="py-3 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-primary" />
                    <span className="text-sm">{h.d}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{h.h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-5 border-t border-border pt-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed">
                  742 Magnolia Avenue<br />Austin, TX 78701, USA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+15125550142" className="text-sm hover:text-primary">
                  (512) 555-0142
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hello@emberandoak.com" className="text-sm hover:text-primary">
                  hello@emberandoak.com
                </a>
              </div>
            </div>

            <a
              href="tel:+15125550142"
              className="mt-10 inline-block w-full text-center px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] hover:bg-primary/90 transition-colors"
            >
              Call to Reserve
            </a>
          </div>

          <div className="border border-border min-h-[420px] overflow-hidden bg-muted">
            <iframe
              title="Ember & Oak location"
              src="https://www.google.com/maps?q=Austin%2C+TX%2C+USA&output=embed"
              className="w-full h-full min-h-[420px] grayscale-[0.2] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
