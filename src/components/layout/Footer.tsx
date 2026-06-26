const footerLinks = {
  navigation: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    "Graphic Design",
    "Social Media Creatives",
    "Digital Marketing",
    "Brand Presentation",
  ],
  contact: [
    { label: "Email", value: "liyahpk53@gmail.com" },
    { label: "Phone", value: "+91 90489 54518" },
    { label: "Instagram", value: "@liya_dsgn" },
    { label: "Behance", value: "behance.net/Vebbadesign" },
  ],
};

export default function Footer() {
  return (
    <footer className="pb-8 pt-6 sm:pb-10">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] px-5 py-8 sm:px-7 sm:py-10 md:px-10 md:py-12 lg:rounded-[2.5rem] lg:px-12 lg:py-12">
          {/* premium background layers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)]" />

          <div className="relative z-10">
            {/* TOP GRID */}
            <div className="grid gap-8 border-b border-white/8 pb-8 md:gap-10 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1fr] lg:pb-10">
              {/* Brand block */}
              <div className="max-w-md">
                <span className="eyebrow">Liya Portfolio</span>

                <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Premium design presence for modern brands.
                </h3>

                <p className="mt-5 max-w-md text-[15px] leading-8 text-white/62">
                  Graphic design, social media creatives and digital marketing
                  support presented through a clean, premium and brand-focused visual approach.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:liyahpk53@gmail.com"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90"
                  >
                    Start a Project
                  </a>

                  <a
                    href="#work"
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/80 transition duration-300 hover:border-white/22 hover:bg-white/[0.06]"
                  >
                    View Work
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                  Navigation
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  {footerLinks.navigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-[15px] text-white/68 transition duration-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                  Services
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  {footerLinks.services.map((item) => (
                    <p key={item} className="text-[15px] text-white/68">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                  Contact
                </p>

                <div className="mt-5 space-y-4">
                  {footerLinks.contact.map((item) => (
                    <div key={item.label}>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-[15px] leading-7 text-white/70">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="flex flex-col gap-4 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Liya Portfolio. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href="#about"
                  className="transition duration-300 hover:text-white"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="transition duration-300 hover:text-white"
                >
                  Services
                </a>
                <a
                  href="#work"
                  className="transition duration-300 hover:text-white"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="transition duration-300 hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}