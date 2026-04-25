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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Desktop Nav */}
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

        <div className="flex items-center gap-3">
          <a
            href="tel:+918000615837"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold-gradient text-gold-foreground text-sm font-medium shadow-glow-gold hover:scale-[1.03] active:scale-[0.98] transition-transform ease-luxe"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
            </svg>
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full glass grid place-items-center text-foreground active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-background/95 backdrop-blur-xl animate-fade-in md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl tracking-tight hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+918000615837"
              className="mt-4 flex items-center gap-3 px-8 py-4 rounded-full bg-gold-gradient text-gold-foreground font-medium shadow-glow-gold"
            >
              Call Us: +91 80006 15837
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
