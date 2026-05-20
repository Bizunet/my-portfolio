import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    els?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      el.classList.add("fade-up");
    });
  }, []);

  return (
    <section ref={ref}
      className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 dark:from-ink-900 dark:to-ink-800
        flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 relative overflow-hidden transition-colors duration-300">

      {/* top/bottom decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-amber/60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent to-amber/60" />

      {/* Profile circle */}
      <div className="reveal opacity-0 relative mb-9">
        {/* Spinning ring */}
        <div className="profile-ring absolute -top-3 -left-3 w-[148px] h-[148px] rounded-full
          border border-dashed border-amber/40 pointer-events-none">
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-amber" />
        </div>
        <div className="w-[122px] h-[122px] rounded-full overflow-hidden
          border-[3px] border-amber shadow-[0_0_0_6px_theme(colors.cream.50),0_0_0_8px_theme(colors.amber.DEFAULT/20)]
          dark:shadow-[0_0_0_6px_theme(colors.ink.900),0_0_0_8px_theme(colors.amber.DEFAULT/20)]
          transition-shadow duration-300">
          <img src="/images/profile.jpg" alt="Designer" className="w-full h-full object-cover object-top" />
        </div>
      </div>

      <p className="reveal opacity-0 text-[10px] tracking-[5px] uppercase text-amber mb-3">
        Graphic Designer · Dire Dawa, Ethiopia
      </p>

      <h1 className="reveal opacity-0 font-display text-[clamp(64px,10vw,110px)] leading-[0.88] tracking-wide mb-2">
        CREATIVE
        <span className="block text-amber">DESIGNER</span>
      </h1>

      <p className="reveal opacity-0 font-serif italic text-[clamp(16px,2.2vw,22px)] text-ink-600/60 dark:text-cream-200/50 mt-4 mb-10">
        Event Posters &nbsp;·&nbsp; Print Design &nbsp;·&nbsp; Brand Identity
      </p>

      {/* Stats */}
      <div className="reveal opacity-0 flex gap-12 mb-12">
        {[
          { num: "12", lbl: "Posters"  },
          { num: "02", lbl: "Printings"},
          { num: "04", lbl: "Logos"    },
        ].map(s => (
          <div key={s.lbl} className="text-center">
            <div className="font-display text-5xl text-amber leading-none">{s.num}</div>
            <div className="text-[10px] tracking-[3px] uppercase text-ink-600/50 dark:text-cream-300/40 mt-1">{s.lbl}</div>
          </div>
        ))}
      </div>

      <a href="#work"
        className="reveal opacity-0 inline-flex items-center gap-3 px-10 py-3.5 border border-amber text-amber
          font-display text-base tracking-[4px] rounded-sm hover:bg-amber hover:text-white transition-all duration-300 group">
        View My Work
        <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-200" />
      </a>

      {/* Scroll hint */}
      <div className="scroll-bounce absolute bottom-8 left-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-amber to-transparent" />
        <span className="text-[9px] tracking-[3px] uppercase text-amber/60">Scroll</span>
      </div>
    </section>
  );
}
