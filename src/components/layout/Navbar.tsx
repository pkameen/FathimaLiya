export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-5">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/55 px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-[1px] before:rounded-full before:border before:border-white/[0.05] before:content-['']">
          <a
            href="#home"
            className="relative z-10 text-[18px] font-semibold tracking-[0.34em] text-white"
          >
            FATHIMA LIYA
          </a>

          <nav className="relative z-10 hidden items-center gap-8 md:flex">
            <a href="#work" className="text-sm text-white/65 transition hover:text-white">
              Work
            </a>
            <a href="#services" className="text-sm text-white/65 transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="text-sm text-white/65 transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="relative z-10 rounded-full border border-white/12 bg-white px-5 py-2.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  );
}