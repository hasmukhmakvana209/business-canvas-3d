import heroLiving from "@/assets/hero-living.jpg";
import chair from "@/assets/chair.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-hero"
    >
      {/* Decorative grid + orbs */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] rounded-full bg-gold/20 blur-[120px] animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-muted-foreground mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Women-Owned · 5.0 ★ Rated
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Transform Your
            <br />
            Space Into a
            <br />
            <span className="text-gold-gradient italic">haven of luxury.</span>
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Bespoke 1 BHK & 2 BHK furniture packages crafted with premium materials
            and meticulous design. Redefine the way you live — in Ahmedabad.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#packages"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-gradient text-gold-foreground font-medium shadow-glow-gold hover:scale-[1.04] active:scale-[0.98] transition-transform ease-luxe"
            >
              Explore Packages
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              View Collection
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "500+", l: "Homes Designed" },
              { v: "5.0★", l: "Google Rating" },
              { v: "10yr", l: "Craftsmanship" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gold-gradient">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D floating composition */}
        <div className="relative perspective-1000 h-[520px] md:h-[620px] animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {/* Main hero card tilted */}
          <div
            className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-float ring-1 ring-white/10 animate-float"
            style={{ transform: "rotateY(-12deg) rotateX(6deg) rotateZ(-2deg)" }}
          >
            <img
              src={heroLiving}
              alt="Luxury emerald velvet sofa with marble side table — Shiv Furniture signature piece"
              className="w-full h-full object-cover"
              width={1536}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>

          {/* Floating chair */}
          <div
            className="absolute -bottom-8 -left-6 md:-left-12 w-44 md:w-60 animate-float-slow drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
            style={{ animationDelay: "1s" }}
          >
            <img src={chair} alt="Emerald velvet armchair" className="w-full" width={1024} height={1024} loading="lazy" />
          </div>

          {/* Floating spec card */}
          <div
            className="absolute top-6 -right-2 md:-right-6 glass rounded-2xl p-4 shadow-card-luxe animate-float-slow"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Featured
            </div>
            <div className="font-display text-lg mt-1">Emerald Lounge</div>
            <div className="text-xs text-muted-foreground mt-1">Velvet · Brass · Marble</div>
            <div className="mt-3 flex items-center gap-1 text-gold text-sm">
              {"★★★★★"}
            </div>
          </div>

          {/* Bottom price tag */}
          <div
            className="absolute bottom-10 right-2 md:right-10 bg-gold-gradient text-gold-foreground rounded-2xl px-5 py-3 shadow-glow-gold animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
              Starting
            </div>
            <div className="font-display text-xl font-semibold leading-tight">₹ 1.49 L</div>
          </div>
        </div>
      </div>
    </section>
  );
}
