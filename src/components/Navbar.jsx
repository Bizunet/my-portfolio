import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#about",    label: "About"    },
  { href: "#work",     label: "Work"     },
  { href: "#services", label: "Services" },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-cream-50/95 dark:bg-ink-900/95 backdrop-blur-md border-b border-amber/20 shadow-sm"
        : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <span className="font-display text-xl tracking-[6px] text-amber">PORTFOLIO</span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-[11px] tracking-[3px] uppercase text-ink-600/70 dark:text-cream-200/60
                hover:text-amber dark:hover:text-amber transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleDark}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-amber/20
                bg-cream-100 dark:bg-ink-700 hover:border-amber transition-all duration-200">
              {dark ? <Sun size={13} className="text-amber" /> : <Moon size={13} className="text-amber" />}
              <span className="text-[10px] tracking-[2px] uppercase text-ink-600/60 dark:text-cream-200/60">
                {dark ? "Light" : "Dark"}
              </span>
            </button>
          </li>
        </ul>

        <button className="md:hidden text-amber" onClick={() => setOpen(o => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 dark:bg-ink-800 border-t border-amber/20 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[12px] tracking-[3px] uppercase text-ink-600/70 dark:text-cream-200/60 hover:text-amber transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={toggleDark}
            className="flex items-center gap-2 self-start px-3 py-2 rounded-full border border-amber/20 bg-cream-100 dark:bg-ink-700 text-[10px] tracking-[2px] uppercase text-amber">
            {dark ? <Sun size={13}/> : <Moon size={13}/>} {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
