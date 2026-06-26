"use client";

import { useState } from "react";

const services = [
  {
    id: "graphic-design",
    number: "01",
    title: "Graphic Design",
    mini: "Brand visuals, posters & premium design presentation",
    description:
      "Premium visual design support for brands, campaigns, social content and promotional materials. Focused on cleaner layouts, stronger visual hierarchy, attractive brand presentation and polished creative execution that helps the brand feel more professional and memorable.",
    points: [
      "Brand posters & promotional creatives",
      "Visual layouts for campaigns and launches",
      "Presentation-focused design systems",
    ],
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media Creatives",
    mini: "Branded social posts, content visuals & campaign creatives",
    description:
      "High-quality social media creative support for businesses and personal brands. Built around attractive branded posts, promotional visuals, content systems and premium feed presentation that feels cohesive, modern and scroll-stopping.",
    points: [
      "Instagram / Facebook post creatives",
      "Branded promotional content sets",
      "Visual consistency for social presence",
    ],
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    mini: "Creative marketing support with stronger visual communication",
    description:
      "Creative support for digital marketing through ad visuals, campaign presentation, promotional assets and content-ready design materials. The focus is on making campaigns look stronger, cleaner and more visually effective through refined creative direction.",
    points: [
      "Ad creatives & campaign support visuals",
      "Promotional assets for marketing activity",
      "Presentation-driven digital brand support",
    ],
  },
];

type ServiceAccordionProps = {
  title: string;
  number: string;
  mini: string;
  description: string;
  points: string[];
  isOpen: boolean;
  onClick: () => void;
};

function ServiceAccordionCard({
  title,
  number,
  mini,
  description,
  points,
  isOpen,
  onClick,
}: ServiceAccordionProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border transition-all duration-300 ${
        isOpen
          ? "border-white/18 bg-[linear-gradient(180deg,#111111,#0a0a0a)] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
          : "border-white/10 bg-[#0b0b0b]"
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition duration-300 hover:bg-white/[0.02]"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
              /{number}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          </div>

          <h3 className="mt-4 text-[1.35rem] font-semibold leading-tight text-white">
            {title}
          </h3>

          <p className="mt-3 max-w-[28rem] text-sm leading-7 text-white/50">
            {mini}
          </p>
        </div>

        <span
          className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition duration-300 ${
            isOpen ? "rotate-180 border-white/20 bg-white/[0.07]" : ""
          }`}
        >
          ↓
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/8 px-5 pb-5 pt-5">
            <p className="text-sm leading-8 text-white/68">{description}</p>

            <div className="mt-5 space-y-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[1.1rem] border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/55" />
                  <p className="text-sm leading-7 text-white/62">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [openService, setOpenService] = useState<string>("graphic-design");

  const toggleService = (id: string) => {
    setOpenService((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="services" className="section-space">
      <div className="container-shell">
        {/* heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">Services</span>
          <h2 className="section-title mt-4">
            Creative services built around
            <span className="block text-white/45">
              visuals, branding support and premium digital presentation.
            </span>
          </h2>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            A compact premium service section designed to present the core creative
            offerings in a cleaner, more luxury way — with enough detail to explain
            value without making the homepage feel long or crowded.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ACCORDION ================= */}
        <div className="mt-10 space-y-4 xl:hidden">
          {services.map((service) => (
            <ServiceAccordionCard
              key={service.id}
              title={service.title}
              number={service.number}
              mini={service.mini}
              description={service.description}
              points={service.points}
              isOpen={openService === service.id}
              onClick={() => toggleService(service.id)}
            />
          ))}
        </div>

        {/* ================= DESKTOP LUXURY GRID ================= */}
        <div className="mt-14 hidden gap-5 xl:grid xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="premium-card group relative overflow-hidden p-7 2xl:p-8"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_28%)] opacity-70 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                    /{service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/38 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-[2rem] font-semibold leading-tight text-white 2xl:text-[2.2rem]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-white/55">
                  {service.mini}
                </p>

                <div className="mt-7 h-px w-full bg-white/8" />

                <p className="mt-7 text-[15px] leading-8 text-white/66">
                  {service.description}
                </p>

                <div className="mt-7 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[1.15rem] border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/55" />
                      <p className="text-sm leading-7 text-white/60">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}