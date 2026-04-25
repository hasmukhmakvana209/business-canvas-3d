const packages = [
  {
    name: "1 BHK Package",
    tag: "Cozy Living",
    price: "₹ 1,49,000",
    items: ["3-Seater Sofa Set", "Queen Bed + Mattress", "Dining 4-Seater", "Wardrobe (3 Door)", "TV Unit + Coffee Table"],
    accent: "from-gold/30 to-gold/5",
    border: "border-gold/30",
  },
  {
    name: "2 BHK Package",
    tag: "Most Popular",
    price: "₹ 2,79,000",
    items: ["L-Shape Sofa Set", "Two King Beds + Mattresses", "Dining 6-Seater", "Two Wardrobes (4 Door)", "TV Unit, Shoe Rack & Decor"],
    accent: "from-primary/40 to-primary/10",
    border: "border-primary/50",
    featured: true,
  },
  {
    name: "Custom Bespoke",
    tag: "Made to Order",
    price: "On Request",
    items: ["Free Home Consultation", "3D Visual Layout", "Premium Materials", "Personalised Design", "Lifetime Service Support"],
    accent: "from-white/10 to-white/0",
    border: "border-white/15",
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-hero opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Curated Packages
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Furnish your home <span className="text-gold-gradient italic">effortlessly.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Move-in ready packages with everything you need — premium quality, one price, zero stress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`group relative rounded-3xl p-px bg-gradient-to-b ${p.accent} ${
                p.featured ? "lg:-translate-y-4" : ""
              } transition-transform duration-500 ease-luxe hover:-translate-y-3`}
            >
              <div
                className={`relative h-full rounded-3xl bg-card-gradient backdrop-blur-xl border ${p.border} p-8 shadow-card-luxe`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-gradient text-gold-foreground text-[10px] uppercase tracking-[0.25em] font-semibold shadow-glow-gold">
                    Most Loved
                  </div>
                )}
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {p.tag}
                </div>
                <h3 className="font-display text-3xl mt-2">{p.name}</h3>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl text-gold-gradient">{p.price}</span>
                </div>

                <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <ul className="space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                      <span className="mt-1 grid place-items-center w-4 h-4 rounded-full bg-gold-gradient text-gold-foreground shrink-0">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium transition-transform ease-luxe hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gold-gradient text-gold-foreground shadow-glow-gold"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
