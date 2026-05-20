const services = [
  { n:"01", title:"Event Poster Design",    desc:"High-impact posters for choir nights, concerts, conferences and worship events — merging Ethiopic script with bold visual composition." },
  { n:"02", title:"Logo & Brand Identity",  desc:"Timeless logos and visual systems for choirs, cafés, ministries and businesses — designed with clarity and lasting purpose." },
  { n:"03", title:"Print Design",           desc:"Banners, certificates and wide-format materials crafted with precision and ready for professional production." },
  { n:"04", title:"Social Media Graphics",  desc:"Scroll-stopping content for Telegram, Instagram, TikTok and Facebook — designed to communicate and connect." },
  { n:"05", title:"Ethiopic Typography",    desc:"Expressive use of Amharic script — transforming Ge'ez characters into striking display art for posters and covers." },
  { n:"06", title:"Commercial Advertising", desc:"Ad creatives for airlines, fashion boutiques and local businesses — competitive designs built to drive attention." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-[10px] tracking-[4px] uppercase text-amber mb-2">What I Offer</p>
        <h2 className="font-display text-[clamp(40px,5.5vw,64px)] leading-none tracking-wide">SERVICES</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-amber to-crimson mt-3" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber/10">
        {services.map(s => (
          <div key={s.n}
            className="group relative bg-cream-50 dark:bg-ink-900 p-10 overflow-hidden
              hover:bg-cream-100 dark:hover:bg-ink-800 transition-colors duration-300">
            {/* bottom border animation */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-amber group-hover:w-full transition-all duration-500" />
            <div className="font-display text-6xl leading-none text-amber/10 mb-3">{s.n}</div>
            <h3 className="font-serif text-xl font-semibold text-ink-800 dark:text-cream-50 mb-3">{s.title}</h3>
            <p className="text-[13px] text-ink-600/60 dark:text-cream-200/50 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
