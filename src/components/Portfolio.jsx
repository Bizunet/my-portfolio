import { useState } from "react";
import { posters, printings, logos } from "../data/projects";
import Lightbox from "./Lightbox";

function SectionLabel({ tag, title, desc }) {
  return (
    <div className="mb-12">
      <p className="text-[10px] tracking-[4px] uppercase text-amber mb-2">{tag}</p>
      <h2 className="font-display text-[clamp(40px,5.5vw,64px)] leading-none tracking-wide">{title}</h2>
      <div className="w-12 h-0.5 bg-gradient-to-r from-amber to-crimson mt-3 mb-4" />
      {desc && <p className="text-[14px] text-ink-600/60 dark:text-cream-200/50 max-w-lg leading-relaxed">{desc}</p>}
    </div>
  );
}

/* ─── single poster card ─── */
function PosterCard({ item, featured, onClick }) {
  return (
    <div
      onClick={() => onClick({ ...item, category: "Poster Design" })}
      className={`group relative overflow-hidden cursor-pointer bg-ink-700 rounded-sm
        ${featured ? "col-span-2 aspect-[16/9] md:aspect-[21/9]" : "aspect-square"}`}>
      <img src={item.src} alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out
          group-hover:scale-105 brightness-90 group-hover:brightness-100" />

      {/* number badge */}
      <span className="absolute top-3 left-3 font-display text-2xl text-white/20
        group-hover:text-amber/60 transition-colors duration-300 leading-none">
        {String(item.id).padStart(2,"0")}
      </span>

      {/* hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
        <span className="text-[9px] tracking-[3px] uppercase text-amber mb-1">{item.sub}</span>
        <p className="font-serif text-white text-lg font-semibold leading-tight">{item.title}</p>
        <p className="text-white/40 text-[11px] mt-1">{item.year}</p>
      </div>
    </div>
  );
}

/* ─── logo card ─── */
function LogoCard({ item, onClick }) {
  return (
    <div onClick={() => onClick({ ...item, category: "Logo & Branding" })}
      className="group cursor-pointer bg-cream-100 dark:bg-ink-700 rounded-sm
        border border-amber/10 hover:border-amber/30 transition-all duration-300 overflow-hidden">
      <div className="aspect-square flex items-center justify-center p-8 overflow-hidden"
        style={{ background: item.bg }}>
        <img src={item.src} alt={item.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4 border-t border-amber/10">
        <p className="font-serif font-semibold text-[15px] text-ink-800 dark:text-cream-50">{item.title}</p>
        <p className="text-[11px] tracking-[1px] text-ink-600/50 dark:text-cream-300/40 mt-0.5">{item.sub}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lbItem, setLbItem] = useState(null);
  const featured = posters[0];
  const rest = posters.slice(1);

  return (
    <section id="work" className="py-24 bg-cream-100 dark:bg-ink-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* ── POSTER DESIGN ── */}
        <SectionLabel
          tag="Category 01"
          title="POSTER DESIGN"
          desc="Event posters, concert flyers and social media graphics for worship events, choir nights, and concerts across Ethiopia." />

        {/* Featured + grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] mb-2">
          {/* Featured — spans 2 cols */}
          <PosterCard item={featured} featured onClick={setLbItem} />
          {/* Grid of remaining 11 */}
          {rest.map(p => (
            <PosterCard key={p.id} item={p} onClick={setLbItem} />
          ))}
        </div>

        {/* ── PRINTINGS ── */}
        <div className="mt-24">
          <SectionLabel
            tag="Category 02"
            title="PRINTINGS"
            desc="Print-ready portrait and wide-format banner designs crafted for physical production." />

          <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-stretch">
            {/* Portrait */}
            <div
              onClick={() => setLbItem({ ...printings[0], category: "Printings" })}
              className="group relative overflow-hidden cursor-pointer bg-ink-700 rounded-sm aspect-[3/4]">
              <img src={printings[0].src} alt={printings[0].title}
                className="w-full h-full object-cover object-top transition-transform duration-700
                  group-hover:scale-105 brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[9px] tracking-[3px] uppercase text-amber mb-1">{printings[0].sub}</span>
                <p className="font-serif text-white text-lg font-semibold">{printings[0].title}</p>
              </div>
            </div>

            {/* Banner — with a proper aspect box */}
            <div
              onClick={() => setLbItem({ ...printings[1], category: "Printings" })}
              className="group relative overflow-hidden cursor-pointer bg-ink-700 rounded-sm flex items-center">
              <img src={printings[1].src} alt={printings[1].title}
                className="w-full h-full object-cover transition-transform duration-700
                  group-hover:scale-105 brightness-90 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[9px] tracking-[3px] uppercase text-amber mb-1">{printings[1].sub}</span>
                <p className="font-serif text-white text-lg font-semibold">{printings[1].title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── LOGO & BRANDING ── */}
        <div className="mt-24">
          <SectionLabel
            tag="Category 03"
            title="LOGOS & BRANDING"
            desc="Brand marks and visual identities for churches, choirs, cafés, and businesses — built to be remembered." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {logos.map(l => <LogoCard key={l.id} item={l} onClick={setLbItem} />)}
          </div>
        </div>

      </div>

      {lbItem && <Lightbox item={lbItem} onClose={() => setLbItem(null)} />}
    </section>
  );
}
