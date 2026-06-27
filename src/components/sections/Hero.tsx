"use client";

import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "50+", label: "Projects\nCompleted" },
    { value: "1+", label: "Years of\nExperience" },
    { value: "100%", label: "Client\nSatisfaction" },
    { value: "Worldwide", label: "Clients\nAcross Globe" },
  ];

  const brands = ["V8", "HELPO", "PUREZA", "OMNIA", "SAVILLE", "WEHELP"];

  const mobileProjects = [ 
    {
      id: "01",
      title: "Luxury Logo",
      tag: "Brand Identity",
      image: "/images/project/project-1.jpg",
    },
    {
      id: "02",
      title: "Elevate Your Brand",
      tag: "Social Creative",
      image: "/images/project/project-2.jpg",
    },
    {
      id: "03",
      title: "Design That Connects",
      tag: "Campaign Visual",
      image: "/images/project/project-3.jpg",
    },
    {
      id: "04",
      title: "New Campaign",
      tag: "Marketing Creative",
      image: "/images/project/project-4.jpg",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 lg:pt-36"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute left-[-8%] top-[16%] h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[120px]" />
      <div className="absolute right-[-10%] top-[8%] h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[140px]" />
      <div className="absolute inset-x-0 top-[12%] mx-auto h-[1px] max-w-[1200px] bg-white/[0.06]" />

      <div className="container-shell relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-4 py-2.5 text-[10px] uppercase tracking-[0.28em] text-white/68 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-4 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-white/75 shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
              <span>Graphic Designer</span>
              <span className="text-white/28">•</span>
              <span>Social Media Marketing</span>
            </div>

            <h1 className="mt-7 max-w-[760px] leading-[0.92] tracking-[-0.045em] sm:leading-[0.9]">
              <span className="block text-[2.7rem] font-semibold text-white sm:text-[4.3rem] lg:text-[5.4rem]">
                Crafting
              </span>

              <span className="block text-[2.7rem] font-semibold text-white sm:text-[4.3rem] lg:text-[5.4rem]">
                Brands with
              </span>

              <span className="block text-[2.7rem] font-semibold text-white sm:text-[4.3rem] lg:text-[5.4rem]">
                Presence,
              </span>

              <span className="mt-1 block font-serif text-[2.45rem] italic text-white/85 sm:text-[4.1rem] lg:text-[5.1rem]">
                Precision and
              </span>

              <span className="mt-1 block font-serif text-[2.45rem] italic text-white sm:text-[4.1rem] lg:text-[5.1rem]">
                Purpose
              </span>
            </h1>

            <p className="relative mt-6 max-w-none pr-1 text-[15px] leading-[1.95] tracking-[-0.01em] text-white/70 sm:mt-8 sm:max-w-[620px] sm:text-[19px] sm:leading-9 sm:text-white/62">
              <span className="absolute -left-3 top-1 hidden h-[72%] w-px bg-gradient-to-b from-white/35 via-white/12 to-transparent sm:hidden" />
              <span className="block max-w-[34ch] text-balance">
                I help brands communicate with clarity and style through premium design,
                social media creatives and digital marketing — creating visuals and brand
                experiences that feel refined, strategic and memorable.
              </span>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="btn-light">
                View My Work
                <span className="ml-2 text-base">↗</span>
              </a>

              <a href="#contact" className="btn-dark">
                Start a Project
              </a>
            </div>

            {/* mini proof row */}
            <div className="mt-10 flex items-center gap-4 sm:gap-6">
              {/* left client block */}
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex -space-x-3">
                  {["/images/avatar/avatar-1.jpg",
                    "/images/avatar/avatar-2.jpg",
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-[linear-gradient(135deg,#2d2d2d,#101010)] shadow-[0_12px_24px_rgba(0,0,0,0.35)] ring-2 ring-black sm:h-12 sm:w-12"
                    >
                      <Image
                        src={src}
                        alt={`Client ${index + 1}`}
                        height={100}
                        width={100}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="leading-none">
                  <div className="text-[2rem] font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    50+
                  </div>
                  <p className="mt-1 text-[13px] text-white/55 sm:text-sm">
                    Happy Clients
                  </p>
                </div>
              </div>

              {/* divider - mobile ilum desktop ilum same line */}
              <div className="h-12 w-px shrink-0 bg-white/10 sm:h-14" />

              {/* rating block */}
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-[15px] leading-none text-[#f6c768] sm:text-[18px]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="mt-2 whitespace-nowrap text-[13px] text-white/55 sm:text-sm">
                  5.0 on Reviews.io
                </p>
              </div>
            </div>

            {/* ================= MOBILE / TABLET PREMIUM PROJECT SHOWCASE ================= */}
            <div className="mt-12 lg:hidden">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">
                    Selected Projects
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Creative Showcase
                  </h3>
                </div>

                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-white/45">
                  Scroll
                </div>
              </div>

              {/* single scrolling row */}
              <div className="mt-6 overflow-hidden">
                <div className="hero-mobile-marquee">
                  <div className="hero-mobile-track">
                    {[...mobileProjects, ...mobileProjects].map((item, index) => (
                      <article
                        key={`${item.id}-${index}`}
                        className="hero-mobile-project-card group"
                      >
                        <div className="relative h-[320px]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            height={400}
                            width={400} 
                            className="object-cover transition duration-700 group-hover:scale-[1.05]"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.16)_30%,rgba(0,0,0,0.75)_100%)]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
                        </div>

                        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                          <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
                            {item.tag}
                          </span>
                          <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/45 backdrop-blur-xl">
                            /{item.id}
                          </span>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <h4 className="font-serif text-[1.9rem] leading-[0.95] text-white">
                            {item.title}
                          </h4>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>

              {/* mobile stats panel */}
              <div className="mt-6 sm:hidden hero-mobile-marquee">
                <div className="hero-mobile-track">
                  {stats.map((item, index) => (
                    <div
                      key={item.value}
                      className="group relative min-w-0 overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#0a0a0a] px-3 py-4 shadow-[0_14px_35px_rgba(0,0,0,0.28)]"
                    >
                      {/* soft glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_34%)] opacity-70" />
                      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-white/35">
                            0{index + 1}
                          </span>
                          <span className="h-2 w-2 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.55)]" />
                        </div>

                        <div className="mt-5 text-[1.45rem] font-semibold leading-none tracking-[-0.04em] text-white">
                          {item.value}
                        </div>

                        <p className="mt-3 whitespace-pre-line text-[11px] leading-5 text-white/48">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL STACK - DESKTOP ONLY */}
          <div className="relative hidden min-h-[760px] lg:block">
            {/* orbit lines */}
            <div className="pointer-events-none absolute left-[10%] top-[12%] h-[520px] w-[520px] rounded-full border border-white/[0.08]" />
            <div className="pointer-events-none absolute left-[18%] top-[20%] h-[420px] w-[420px] rounded-full border border-white/[0.06]" />
            <div className="pointer-events-none absolute left-[6%] top-[28%] h-[620px] w-[620px] rounded-full border border-white/[0.04]" />

            {/* sparkle dots */}
            <div className="absolute left-[18%] top-[18%] h-3 w-3 rounded-full bg-white shadow-[0_0_35px_rgba(255,255,255,0.95)]" />
            <div className="absolute right-[8%] top-[30%] h-3 w-3 rounded-full bg-white shadow-[0_0_35px_rgba(255,255,255,0.95)]" />
            <div className="absolute right-[18%] bottom-[18%] h-3 w-3 rounded-full bg-white shadow-[0_0_35px_rgba(255,255,255,0.95)]" />

            {/* availability badge */}
            <div className="absolute right-0 top-24 z-20 hidden h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-black/45 text-center text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-xl lg:flex">
              <div>
                Available for
                <br />
                selected clients
              </div>
            </div>

            {/* CARD 1 - tall main poster */}
            <div className="hero-card absolute right-[22%] top-8 z-20 w-[300px] rotate-[-7deg] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div className="hero-image relative h-[430px] overflow-hidden">
                <Image
                  src="/images/project/project-1.jpg"
                  alt="Project-1"
                  height={400}
                  width={400} 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%)]" />
              <div className="absolute left-6 right-6 top-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                  New Collection
                </p>
                <h3 className="mt-3 font-serif text-[48px] leading-[0.95] text-white">
                  Luxury
                  <br />
                  Logo
                </h3>
                <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-white/45">
                  Discover the art of glow
                </p>
              </div>
            </div>

            {/* CARD 2 - right portrait card */}
            <div className="hero-card absolute right-[2%] top-[180px] z-10 w-[250px] rotate-[4deg] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="hero-image relative h-[430px] overflow-hidden">
                <Image
                  src="/images/project/project-2.jpg"
                  alt="Project-2"
                  height={400}
                  width={400} 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.45))]" />
              <div className="absolute left-6 right-6 top-7">
                <h3 className="max-w-[180px] font-serif text-[38px] leading-[0.95] text-white">
                  Elevate
                  <br />
                  your
                  <br />
                  brand
                </h3>
                <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Strategy
                  <br />
                  Creative
                  <br />
                  Results
                </p>
              </div>
            </div>

            {/* CARD 3 - left social card */}
            <div className="hero-card absolute left-[6%] top-[330px] z-30 w-[290px] rotate-[3deg] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div className="absolute left-5 right-5 top-4 z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full border border-white/10 bg-white/10" />
                  <div>
                    <p className="text-sm font-medium text-white">LIYA STUDIO</p>
                    <p className="text-[11px] text-white/40">Digital Design Studio</p>
                  </div>
                </div>
                <span className="text-white/35">•••</span>
              </div>

              <div className="hero-image relative h-[330px] overflow-hidden">
                <Image
                  src="/images/project/project-3.jpg"
                  alt="Project 3"
                  height={400}
                  width={400} 
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_24%)]" />

              <div className="absolute bottom-20 left-6 right-6">
                <h3 className="font-serif text-[42px] leading-[0.95] text-white">
                  Design
                  <br />
                  that
                  <br />
                  connects.
                </h3>
              </div>

              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-sm text-white/60">
                <div className="flex items-center gap-4">
                  <span className="text-red-500">♥ 342</span>
                  <span>◔ 27</span>
                </div>
                <span>🔖</span>
              </div>
            </div>

            {/* CARD 4 - bottom right campaign */}
            <div className="hero-card absolute bottom-[140px] right-[10%] z-20 w-[310px] rotate-[-3deg] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d0d0d] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="hero-image relative h-[430px] overflow-hidden">
                <Image
                  src="/images/project/project-4.jpg"
                  alt="Project-4"
                  height={400}
                  width={400} 
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.35))]" />
              <div className="absolute left-6 right-6 top-6">
                <h3 className="font-serif text-[44px] leading-[0.95] text-white">
                  New
                  <br />
                  Campaign
                </h3>
                <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Summer ’25
                </p>
              </div>
              <div className="absolute bottom-6 left-6 text-sm text-white/60">
                View Project
              </div>
            </div>

            {/* bottom stats panel */}
            <div className="absolute bottom-0 left-0 right-0 z-40">
              <div className="rounded-[2rem] border border-white/10 bg-black/45 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.value}
                      className="flex min-h-[120px] flex-col justify-center rounded-[1.5rem] border border-white/8 bg-white/[0.02] px-6 py-5"
                    >
                      <div className="text-4xl font-semibold text-white">{item.value}</div>
                      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/50">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trusted brands */}
        <div className="mt-16 border-t border-white/8 pt-10">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/45">
              Trusted by brands
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-6 text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/14 hover:bg-white/[0.04]"
              >
                <div className="text-[30px] tracking-[0.12em]">{brand}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/30">
                  Brand Partner
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}