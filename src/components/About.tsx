const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 7v10l8 5 8-5V7l-8-5z" /><path d="M4 7l8 5 8-5" /><path d="M12 22V12" />
      </svg>
    ),
    title: "Premium Materials",
    desc: "Solid wood, brass, marble, and certified upholstery from trusted suppliers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v4H3zM5 7v14h14V7" /><path d="M9 11h6" />
      </svg>
    ),
    title: "Move-in Ready Packages",
    desc: "1 BHK & 2 BHK ready packages — pick a style, we handle the rest.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 14.5 8.5 21 9.5l-4.8 4.5L17.5 21 12 17.5 6.5 21l1.3-7L3 9.5l6.5-1z" />
      </svg>
    ),
    title: "5.0 ★ on Google",
    desc: "A perfect rating from every customer. Service that goes the extra mile.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "On-time delivery and assembly across Ahmedabad and surroundings.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            About Shiv Furniture
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.08]">
            Crafting <span className="text-gold-gradient italic">modern Indian homes.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            From our workshop in Gota, Ahmedabad, we design, build, and deliver complete furniture
            packages that turn empty apartments into elegant homes — in days, not months.
          </p>


        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-2xl bg-card-gradient border border-white/10 p-6 shadow-card-luxe hover:-translate-y-1 transition-transform duration-500 ease-luxe"
            >
              <div className="w-11 h-11 rounded-xl bg-gold-gradient text-gold-foreground grid place-items-center shadow-glow-gold mb-5">
                {f.icon}
              </div>
              <h3 className="font-display text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
