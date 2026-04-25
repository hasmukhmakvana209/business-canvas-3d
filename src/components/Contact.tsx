export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[2rem] overflow-hidden bg-card-gradient border border-white/10 shadow-3d grid lg:grid-cols-2">
          {/* Left: info */}
          <div className="p-8 md:p-12 relative">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Visit our showroom
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.08]">
              Let's design your <span className="text-gold-gradient italic">dream home.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Walk into our Gota showroom or call us — we'll guide you to the perfect package.
            </p>

            <div className="mt-10 space-y-5">
              <Info
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                }
                title="Showroom"
                lines={[
                  "GF 2, G.M Business Hub, 15/16,",
                  "nr. Delta Tradelink Road,",
                  "behind Parivar Homes, Gota,",
                  "Ahmedabad, Gujarat 382481",
                ]}
              />
              <Info
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
                  </svg>
                }
                title="Phone"
                lines={["+91 80006 15837"]}
                href="tel:+918000615837"
              />
              <Info
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                  </svg>
                }
                title="Hours"
                lines={["Mon – Sat · 10 AM – 9 PM", "Sunday · Closed"]}
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary/15 to-transparent border-t lg:border-t-0 lg:border-l border-white/10">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
            >
              <Field label="Your Name" type="text" placeholder="Riya Sharma" />
              <Field label="Phone" type="tel" placeholder="+91 ..." />
              <Field label="Interested In">
                <select className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-gold transition-colors">
                  <option className="bg-card">1 BHK Package</option>
                  <option className="bg-card">2 BHK Package</option>
                  <option className="bg-card">Custom / Bespoke</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  rows={4}
                  placeholder="Tell us about your space..."
                  className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gold-gradient text-gold-foreground font-medium shadow-glow-gold hover:scale-[1.02] active:scale-[0.99] transition-transform ease-luxe"
              >
                Request Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  lines,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl glass grid place-items-center text-gold shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-foreground/90 leading-relaxed">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:text-gold transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  type,
  placeholder,
  children,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </span>
      {children ?? (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border border-white/15 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-colors"
        />
      )}
    </label>
  );
}
