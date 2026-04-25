import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import sofa from "@/assets/sofa.png";

const items = [
  { img: bedroom, title: "Bedroom Suites", tag: "Velvet · Wood", span: "md:col-span-2 md:row-span-2" },
  { img: dining, title: "Dining Sets", tag: "Marble · Steel" },
  { img: wardrobe, title: "Wardrobes", tag: "Walnut · Brass" },
];

export function Collection() {
  return (
    <section id="collection" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              The Collection
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-xl">
              Every piece <span className="text-gold-gradient italic">tells a story.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Hand-picked materials. Master craftsmanship. Designed to last decades, loved every day.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 h-auto md:h-[640px]">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-3d ${
                it.span ?? ""
              }`}
              style={{ minHeight: i === 0 ? 480 : 280 }}
            >
              <img
                src={it.img}
                alt={`${it.title} by Shiv Furniture`}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">
                  {it.tag}
                </div>
                <h3 className="font-display text-2xl md:text-3xl">{it.title}</h3>
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Featured floating sofa banner */}
        <div className="relative mt-16 rounded-3xl overflow-hidden bg-card-gradient border border-white/10 p-8 md:p-12 shadow-card-luxe">
          <div className="absolute -right-10 -top-20 w-[450px] h-[450px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="grid md:grid-cols-2 items-center gap-8 relative">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
                New Arrival
              </div>
              <h3 className="font-display text-4xl md:text-5xl">
                The Curve <span className="text-gold-gradient italic">Modular Sofa</span>
              </h3>
              <p className="mt-5 text-muted-foreground max-w-md">
                Sculptural silhouette in boucle fabric, hand-stitched cushions, brass-finished feet.
                Reconfigurable for any space.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 text-sm font-medium transition-colors"
              >
                Enquire Now →
              </a>
            </div>
            <div className="relative perspective-1000">
              <img
                src={sofa}
                alt="Curve modular boucle sofa"
                className="w-full animate-float drop-shadow-[0_40px_50px_rgba(0,0,0,0.5)]"
                style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
