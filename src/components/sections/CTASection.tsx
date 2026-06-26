"use client";

import { useState } from "react";

const ctaCards = [
  {
    id: "whatsapp",
    eyebrow: "Quickest Contact",
    title: "Start on WhatsApp",
    short: "For fast project discussions, design inquiries and direct responses.",
    description:
      "Use WhatsApp to quickly discuss your project, share references, ask pricing questions or start a new collaboration. It’s the fastest way to connect for branding, design, social creatives and digital marketing work.",
    actionLabel: "Chat on WhatsApp",
    actionHref: "https://wa.me/919048954518?text=Hi%20Liya%20Studio%2C%20I%20want%20to%20discuss%20a%20project.",
    featured: true,
  },
  {
    id: "project",
    eyebrow: "Project Inquiry",
    title: "Tell Me About Your Brand",
    short: "Share what you need, your timeline and the kind of creative support you’re looking for.",
    description:
      "Whether you need a logo, brand visuals, social media creatives, campaign graphics or digital marketing support, this is where your project can begin. Mention your business type, deliverables, style references and expected timeline for a smoother conversation.",
    actionLabel: "View My Work",
    actionHref: "#work",
  },
  {
    id: "email",
    eyebrow: "Detailed Discussion",
    title: "Prefer a Formal Conversation?",
    short: "Ideal for brand briefs, collaboration requests and detailed project communication.",
    description:
      "If you want to discuss your project in a more structured way, use email or a detailed inquiry flow. This works well for bigger projects, long-term collaborations, campaign planning and complete brand presentation work.",
    actionLabel: "Contact Me",
    actionHref: "#footer",
  },
];

export default function CTASection() {
  const [activeCard, setActiveCard] = useState<string>("whatsapp");

  const toggleCard = (id: string) => {
    setActiveCard((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="contact" className="section-space pt-8 sm:pt-12">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,#0b0b0b_0%,#070707_100%)] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 shadow-[0_35px_120px_rgba(0,0,0,0.45)]">
          {/* background accents */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_26%)]" />
          <div className="pointer-events-none absolute left-[-80px] top-[20%] h-[240px] w-[240px] rounded-full bg-white/[0.03] blur-[110px]" />
          <div className="pointer-events-none absolute right-[-60px] bottom-[-20px] h-[260px] w-[260px] rounded-full bg-white/[0.03] blur-[120px]" />

          <div className="relative z-10">
            {/* top heading */}
            <div className="max-w-3xl">
              <span className="eyebrow">Let’s Build Something Refined</span>
              <h2 className="section-title mt-4 max-w-3xl">
                A premium way to start your next brand, design or marketing project.
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                Choose the contact flow that fits you best — quick WhatsApp discussion,
                direct project inquiry or a more detailed conversation for larger work.
              </p>
            </div>

            {/* cards */}
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              {/* left large featured area */}
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:p-6">
                <div className="flex flex-col gap-4">
                  {ctaCards.map((card) => {
                    const isOpen = activeCard === card.id;

                    return (
                      <div
                        key={card.id}
                        className={`overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
                          isOpen
                            ? "border-white/16 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                            : "border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.04]"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleCard(card.id)}
                          className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                        >
                          <div className="min-w-0">
                            <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                              {card.eyebrow}
                            </p>
                            <h3 className="mt-2 text-[1.15rem] font-semibold text-white sm:text-[1.35rem]">
                              {card.title}
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55 sm:text-[15px]">
                              {card.short}
                            </p>
                          </div>

                          <div
                            className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                              isOpen
                                ? "border-white/18 bg-white/[0.08] text-white rotate-45"
                                : "border-white/10 bg-white/[0.04] text-white/55"
                            }`}
                          >
                            +
                          </div>
                        </button>

                        <div
                          className={`grid transition-all duration-500 ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                              <div className="rounded-[1.25rem] border border-white/8 bg-black/30 p-4 sm:p-5">
                                <p className="max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px] sm:leading-8">
                                  {card.description}
                                </p>

                                <div className="mt-5 flex flex-wrap items-center gap-3">
                                  <a
                                    href={card.actionHref}
                                    target={card.id === "whatsapp" ? "_blank" : undefined}
                                    rel={card.id === "whatsapp" ? "noopener noreferrer" : undefined}
                                    className={
                                      card.id === "whatsapp"
                                        ? "inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5"
                                        : "inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06]"
                                    }
                                  >
                                    {card.actionLabel}
                                    <span className="text-base">↗</span>
                                  </a>

                                  {card.id === "whatsapp" && (
                                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/38">
                                      Fast Response
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* right side premium summary panel */}
              <div className="flex flex-col gap-4">
                <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                    Best for
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Logo & brand identity",
                      "Social media creatives",
                      "Campaign design support",
                      "Marketing visuals",
                      "Premium digital presentation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/70"
                      >
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                    Quick Note
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Serious about visual quality?
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    If you already know what you need, WhatsApp is the quickest way
                    to start. If the project is larger, use the inquiry card and we
                    can structure the discussion around deliverables, timelines and
                    creative direction.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://wa.me/919048954518?text=Hi%20Liya%20Studio%2C%20I%20want%20to%20start%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5"
                    >
                      WhatsApp
                      <span className="text-base">↗</span>
                    </a>

                    <a
                      href="#work"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.06]"
                    >
                      See Work
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom note */}
            <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-white/[0.02] px-4 py-4 sm:px-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-white/55">
                  Prefer a quick conversation first? Start with WhatsApp and move to
                  a full project discussion once the direction is clear.
                </p>

                <a
                  href="https://wa.me/919048954518?text=Hi%20Liya%20Studio%2C%20I%20want%20to%20discuss%20a%20design%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-white/18 hover:bg-white/[0.06] sm:self-auto"
                >
                  Open WhatsApp
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}