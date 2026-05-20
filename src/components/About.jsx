const skills = ["Event Posters","Logo Design","Brand Identity","Ethiopic Typography","Social Media","Print Design","Adobe Photoshop","Illustrator"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p className="text-[10px] tracking-[4px] uppercase text-amber mb-3">Who I Am</p>
          <h2 className="font-display text-[clamp(44px,6vw,68px)] leading-none tracking-wide mb-4">
            ABOUT<br /><span className="text-amber">ME</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-amber to-crimson mb-6" />

          <p className="text-ink-600/70 dark:text-cream-200/60 text-[15px] leading-relaxed mb-4">
            I'm a graphic designer based in Addis Ababa, Ethiopia — creating visual work
            rooted in culture, faith, and community. From bold event posters to clean brand
            identities, I bring ideas to life with intention and purpose.
          </p>
          <p className="text-ink-600/70 dark:text-cream-200/60 text-[15px] leading-relaxed mb-8">
            My work spans event design, music concert branding, commercial
            advertising, and logo creation for local businesses — always blending
            contemporary design with Ethiopic identity and heritage.
          </p>

          <p className="text-[10px] tracking-[3px] uppercase text-amber mb-3">Core Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map(s => (
              <span key={s}
                className="text-[10px] tracking-[2px] uppercase text-amber border border-amber/30
                  bg-cream-100 dark:bg-ink-700 hover:bg-amber hover:text-white hover:border-amber
                  px-3 py-2 rounded-sm transition-all duration-200 cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="relative">
          <div className="relative">
            <img
              src="/images/profile.jpg"
              alt="Designer"
              className="w-full aspect-[3/4] object-cover object-top rounded-sm
                filter dark:brightness-90"
            />
            <div className="absolute inset-0 rounded-sm ring-1 ring-amber/20 pointer-events-none" />
          </div>
          {/* decorative accents */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber -z-10" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-crimson opacity-20 -z-10" />
        </div>

      </div>
    </section>
  );
}
