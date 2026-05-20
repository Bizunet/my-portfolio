export default function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-16 bg-ink-900 dark:bg-ink-900 border-t border-amber/15
      flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg tracking-[5px] text-amber">PORTFOLIO</span>
      <p className="text-[11px] tracking-[1px] text-cream-200/30">
        © 2025 · Graphic Designer · Dire Dawa, Ethiopia
      </p>
      <div className="flex gap-3">
        {["✈","◈","▶","f"].map((icon,i) => (
          <a key={i} href="#"
            className="w-8 h-8 border border-amber/20 rounded-sm flex items-center justify-center
              text-cream-200/40 hover:border-amber hover:text-amber transition-all duration-200 text-sm">
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
