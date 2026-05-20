import { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const fn = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[900] flex items-center justify-center p-8"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <button onClick={onClose}
        className="absolute top-5 right-6 font-display text-lg tracking-[3px] text-amber
          flex items-center gap-2 hover:text-white transition-colors">
        <X size={18}/> CLOSE
      </button>

      <img src={item.src} alt={item.title}
        className="max-w-[88vw] max-h-[86vh] object-contain rounded-sm" />

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[9px] tracking-[3px] uppercase text-amber">{item.category}</p>
        <p className="font-serif text-lg text-white mt-1">{item.title}</p>
        {item.sub && <p className="text-[12px] text-white/50 mt-0.5">{item.sub}</p>}
      </div>
    </div>
  );
}
