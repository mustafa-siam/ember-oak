import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-primary" />
        <p className="text-[12px] uppercase tracking-[0.3em] text-primary font-medium">
          {eyebrow}
        </p>
        <span className="h-px w-8 bg-primary" />
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
