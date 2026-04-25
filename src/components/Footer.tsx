export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 bg-background/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gold-gradient grid place-items-center shadow-glow-gold">
                <span className="font-display text-gold-foreground font-bold leading-none">S</span>
              </div>
              <div>
                <div className="font-display text-base">
                  SHIV <span className="text-gold-gradient">FURNITURE</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Crafted in Ahmedabad
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Transform your space with premium 1 BHK & 2 BHK furniture packages. Sleek, modern, and meticulously crafted.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
              <li><a href="#collection" className="hover:text-gold transition-colors">Collection</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>GF 2, G.M Business Hub, 15/16, nr. Delta Tradelink Road, Gota, Ahmedabad 382481</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+918000615837" className="hover:text-gold transition-colors">+91 80006 15837</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Mon – Sat · 10 AM – 9 PM<br/>Sunday · Closed</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow us for the latest furniture designs and showroom updates.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-gold hover:text-gold-foreground transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-foreground hover:bg-gold hover:text-gold-foreground transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Shiv Furniture. All rights reserved. · Women-Owned Business
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
