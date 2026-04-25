import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#packages", label: "Packages" },
  { href: "#collection", label: "Collection" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between rounded-full transition-all duration-500 ease-luxe ${
          scrolled ? "glass shadow-card-luxe py-3" : "py-3"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-gold-gradient shadow-glow-gold grid place-items-center">
            <span className="font-display text-gold-foreground font-bold text-lg leading-none">
              S
            </span>
            <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base md:text-lg tracking-wide">
              SHIV <span className="text-gold-gradient">FURNITURE</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Ahmedabad · Est.
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+918000615837"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-gold-foreground text-sm font-medium shadow-glow-gold hover:scale-[1.03] active:scale-[0.98] transition-transform ease-luxe"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
          </svg>
          Call Now
        </a>
      </div>
    </header>
  );
}
