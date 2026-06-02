import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  images: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export function Lightbox({ images, index, onClose, onIndex }: Props) {
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onIndex]);

  const next = () => index !== null && onIndex((index + 1) % images.length);
  const prev = () => index !== null && onIndex((index - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={onClose}
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart.current === null) return;
            const dx = e.changedTouches[0].clientX - touchStart.current;
            if (dx > 50) prev();
            else if (dx < -50) next();
            touchStart.current = null;
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-8 text-white/80 hover:text-white p-3 z-10 bg-white/5 hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-8 text-white/80 hover:text-white p-3 z-10 bg-white/5 hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[index].src}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] object-contain"
          />
          <p className="absolute bottom-5 inset-x-0 text-center text-xs uppercase tracking-[0.25em] text-white/70">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
