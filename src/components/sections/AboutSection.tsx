"use client";

import { useState } from "react";

const intro = {
  title: "Graphic Designer & Digital Marketing Creative",
  text1:
    "I’m Liya — a creative designer focused on building premium brand visuals, social media creatives and presentation-driven design systems. My work is built around helping brands look cleaner, stronger and more visually memorable through thoughtful layouts, refined styling and polished execution.",
  text2:
    "From branding support and campaign visuals to social content and promotional design, I enjoy creating visuals that feel modern, intentional and attractive. I’m especially interested in luxury-style presentation, clean composition and brand-focused visual communication.",
};

const expertise = [
  "Graphic Design",
  "Social Media Creatives",
  "Brand Presentation",
  "Digital Marketing Support",
  "Poster Design",
  "Campaign Visuals",
];

const education = [
  {
    title: "Bachelor of Business Administration (BBA)",
    place: "IGNOU University",
    year: "2025 – Present",
  },
  {
    title: "Graphic Design & Digital Marketing",
    place: "Nile Institute, Manjeri",
    year: "Expected Graduation: 2026",
  },
];

const experience = [
  "Freelance graphic design projects for client-based requirements",
  "Social media creatives, posters and promotional design support",
  "Brand presentation materials and campaign visuals",
  "Direct collaboration with clients for revisions and final creative output",
];

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "Adobe Lightroom",
  "CorelDRAW",
  "Canva",
  "Figma",
];

const languages = [
  "Malayalam — Native",
  "English — Intermediate",
  "Tamil — Speaking",
];

const interests = [
  "Cinema",
  "Art & Craft",
  "Design",
  "Games",
  "Photography",
  "Illustration",
];

const personal = [
  { label: "Location", value: "Kerala, India" },
  { label: "Languages", value: "Malayalam, English, Tamil" },
  { label: "Focus", value: "Branding, visuals & premium design presentation" },
  { label: "Availability", value: "Open for freelance creative projects" },
];

const contact = [
  { label: "Email", value: "liyahpk53@gmail.com" },
  { label: "Phone", value: "+91 90489 54518" },
  { label: "Instagram", value: "@_Vebbadesign_" },
  { label: "Behance", value: "behance.net/Vebbadesign" },
];

type AccordionItemProps = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function AccordionItem({ title, isOpen, onClick, children }: AccordionItemProps) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0b]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition duration-300 hover:bg-white/[0.03]"
      >
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/78">
          {title}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition duration-300 ${
            isOpen ? "rotate-180" : ""
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
          <div className="border-t border-white/8 px-5 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [openItem, setOpenItem] = useState<string>("about");

  const toggleItem = (key: string) => {
    setOpenItem((prev) => (prev === key ? "" : key));
  };

  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        {/* top heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow">About</span>
          <h2 className="section-title mt-4">
            A creative profile built around
            <span className="block text-white/45">
              branding, visuals, social creatives and refined presentation.
            </span>
          </h2>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            This section presents the designer in a more premium editorial format —
            combining introduction, background, creative focus, education, tools and
            contact details in a compact luxury layout.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ACCORDION ================= */}
        <div className="mt-10 space-y-4 xl:hidden">
          {/* mini intro card */}
          <div className="premium-card relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative z-10">
              <span className="eyebrow !mb-0">Profile</span>
              <h3 className="mt-4 text-[2.3rem] font-semibold tracking-[0.08em] text-white">
                LIYA
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-8 text-white/62">
                {intro.title}
              </p>
            </div>
          </div>

          <AccordionItem
            title="About Me"
            isOpen={openItem === "about"}
            onClick={() => toggleItem("about")}
          >
            <div className="space-y-5">
              <p className="text-sm leading-8 text-white/74">{intro.text1}</p>
              <p className="text-sm leading-8 text-white/62">{intro.text2}</p>

              <div className="grid gap-4 pt-2">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                    Design Style
                  </p>
                  <p className="mt-3 text-base font-medium leading-8 text-white">
                    Clean, modern and premium visual presentation
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                    Creative Goal
                  </p>
                  <p className="mt-3 text-base font-medium leading-8 text-white">
                    Make brands look sharper, more attractive and memorable
                  </p>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Contact"
            isOpen={openItem === "contact"}
            onClick={() => toggleItem("contact")}
          >
            <div className="space-y-4">
              {contact.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/30">
                    {item.label}
                  </p>
                  <p className="mt-2 break-words text-sm leading-7 text-white/72">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Core Expertise"
            isOpen={openItem === "expertise"}
            onClick={() => toggleItem("expertise")}
          >
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/62"
                >
                  {item}
                </span>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Education"
            isOpen={openItem === "education"}
            onClick={() => toggleItem("education")}
          >
            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-7 text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/62">{item.place}</p>
                      <p className="mt-1 text-sm text-white/40">{item.year}</p>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/28">
                      /0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Experience"
            isOpen={openItem === "experience"}
            onClick={() => toggleItem("experience")}
          >
            <div className="space-y-4">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white/60" />
                  <p className="text-sm leading-8 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Software Skills"
            isOpen={openItem === "tools"}
            onClick={() => toggleItem("tools")}
          >
            <div className="space-y-3">
              {tools.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <span className="text-sm text-white/74">{item}</span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/28">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Languages"
            isOpen={openItem === "languages"}
            onClick={() => toggleItem("languages")}
          >
            <div className="space-y-3">
              {languages.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Interests"
            isOpen={openItem === "interests"}
            onClick={() => toggleItem("interests")}
          >
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] tracking-[0.12em] text-white/65"
                >
                  {item}
                </span>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Creative Snapshot"
            isOpen={openItem === "snapshot"}
            onClick={() => toggleItem("snapshot")}
          >
            <div className="grid gap-4">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                  Primary Focus
                </p>
                <p className="mt-3 text-base font-medium leading-8 text-white">
                  Branding, social creatives and premium design presentation
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                  Best Fit Projects
                </p>
                <p className="mt-3 text-base font-medium leading-8 text-white">
                  Brand visuals, campaign creatives, posters and digital promotions
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                  Working Style
                </p>
                <p className="mt-3 text-base font-medium leading-8 text-white">
                  Minimal, elegant, brand-conscious and presentation-driven
                </p>
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* ================= DESKTOP LUXURY GRID ================= */}
        <div className="mt-12 hidden gap-5 xl:grid xl:grid-cols-[1.05fr_1.3fr_0.9fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-5">
            <div className="premium-card relative overflow-hidden p-7 2xl:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
              <div className="relative z-10">
                <span className="eyebrow !mb-0">Profile</span>

                <h3 className="mt-5 text-[3rem] font-semibold leading-none tracking-[0.08em] text-white 2xl:text-[3.2rem]">
                  LIYA
                </h3>

                <p className="mt-5 max-w-md text-[15px] leading-8 text-white/62">
                  {intro.title}
                </p>

                <div className="mt-7 space-y-4">
                  {personal.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                        {item.label}
                      </p>
                      <p className="mt-2 text-[15px] leading-7 text-white/74">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="premium-card p-7 2xl:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Core Expertise</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Focus
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/62"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN */}
          <div className="space-y-5">
            <div className="premium-card relative overflow-hidden p-8 2xl:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow !mb-0">About Me</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/40">
                    Editorial Bio
                  </span>
                </div>

                <div className="mt-7 space-y-6">
                  <p className="text-[16px] leading-9 text-white/76">{intro.text1}</p>
                  <p className="text-[16px] leading-9 text-white/66">{intro.text2}</p>
                </div>

                <div className="mt-8 grid gap-4 2xl:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                      Design Style
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      Clean, modern and premium visual presentation
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      Minimal layouts, stronger hierarchy, elegant visuals and brand-focused design direction.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                      Creative Goal
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      Make brands look sharper, more attractive and memorable
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      Stronger visuals for social media, campaigns, promotions and brand communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-8 2xl:p-10">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow !mb-0">Experience</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Freelance
                </span>
              </div>

              <div className="mt-7 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Freelance Creative Work
                </h3>
                <p className="mt-2 text-sm text-white/42">2025 – Present</p>

                <div className="mt-6 space-y-4">
                  {experience.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b border-white/8 pb-4 last:border-none last:pb-0"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white/60" />
                      <p className="text-[15px] leading-8 text-white/66">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="premium-card p-8 2xl:p-10">
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow !mb-0">Education</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Background
                </span>
              </div>

              <div className="mt-7 space-y-4">
                {education.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[15px] text-white/62">{item.place}</p>
                        <p className="mt-1 text-sm text-white/40">{item.year}</p>
                      </div>

                      <span className="text-[11px] uppercase tracking-[0.24em] text-white/28">
                        /0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            <div className="premium-card p-7 2xl:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Software Skills</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Tools
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {tools.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <span className="text-[15px] text-white/74">{item}</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/28">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-7 2xl:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Languages</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Spoken
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {languages.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-[15px] text-white/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-7 2xl:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Interests</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Personal
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[12px] tracking-[0.12em] text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="premium-card p-7 2xl:p-8">
              <div className="flex items-center justify-between">
                <span className="eyebrow !mb-0">Contact</span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/28">
                  Reach Out
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {contact.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/32">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-[15px] leading-7 text-white/72">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card relative overflow-hidden p-7 2xl:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
              <div className="relative z-10">
                <span className="eyebrow !mb-0">Creative Snapshot</span>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                      Primary Focus
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-8 text-white">
                      Branding, social creatives and premium design presentation
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                      Best Fit Projects
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-8 text-white">
                      Brand visuals, campaign creatives, posters and digital promotions
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/32">
                      Working Style
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-8 text-white">
                      Minimal, elegant, brand-conscious and presentation-driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================= END DESKTOP ================= */}
      </div>
    </section>
  );
}