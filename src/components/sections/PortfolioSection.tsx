import Image from "next/image";

const services = [
  {
    title: "Graphic Design",
    text: "Premium visual design for brands, campaigns, promotions and digital presence.",
  },
  {
    title: "Social Media Creatives",
    text: "High-quality branded posts, promotional visuals and social content systems.",
  },
  {
    title: "Social Media Marketing",
    text: "Creative marketing support with stronger presentation, ad visuals and campaign direction.",
  },
];

const featuredProjects = [
  {
    eyebrow: "Branding / Logo",
    title: "Luxury Brand Logo",
    text: "A premium visual direction crafted for stronger brand recall, cleaner presentation and high-end communication.",
    image: "/images/portfolio/portfolio-1.jpg",
  },
  {
    eyebrow: "Content / Visual System",
    title: "Social Media Creative Set",
    text: "A curated creative set designed for brand consistency across social content, promotions and digital visibility.",
    image: "/images/portfolio/portfolio-2.jpg",
  },
];

const galleryItems = [
  {
    title: "Brand Logo Series",
    category: "Graphic Design",
    year: "2026",
    image: "/images/portfolio/portfolio-1.jpg",
  },
  {
    title: "Luxury Social Campaign",
    category: "Social Media",
    year: "2026",
    image: "/images/portfolio/portfolio-2.jpg",
  },
  {
    title: "Product Promo Visual",
    category: "Campaign Creative",
    year: "2026",
    image: "/images/portfolio/portfolio-3.jpg",
  },
  {
    title: "Brand Identity Preview",
    category: "Branding",
    year: "2026",
    image: "/images/portfolio/portfolio-4.jpg",
  },
  {
    title: "Prodect Marketing Creative",
    category: "Marketing Visual",
    year: "2026",
    image: "/images/portfolio/portfolio-5.jpg",
  },
  {
    title: "Promotional Design Set",
    category: "Creative Direction",
    year: "2026",
    image: "/images/portfolio/portfolio-6.jpg",
  },
  {
    title: "Product Promo Visual",
    category: "Campaign Creative",
    year: "2026",
    image: "/images/portfolio/portfolio-7.jpg",
  },
  {
    title: "Grow Marketing Visual",
    category: "Marketing Visual",
    year: "2026",
    image: "/images/portfolio/portfolio-8.jpg",
  },
  {
    title: "Promotional Design Set",
    category: "Creative Direction",
    year: "2026",
    image: "/images/portfolio/portfolio-9.jpg",
  },
  {
    title: "Education Poster Design",
    category: "Creative Direction",
    year: "2026",
    image: "/images/portfolio/portfolio-10.jpg",
  },
];

const gallerylogoItems = [
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-1.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-2.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-3.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-4.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-5.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-6.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-7.jpg",
  },
  {
    title: "Brand Logo Series",
    category: "Illustrator Design",
    year: "2026",
    image: "/images/logos/logo-8.jpg",
  },
];

const marqueeItems = [...galleryItems, ...galleryItems];
const marqueelogoItems = [...gallerylogoItems, ...gallerylogoItems];

export default function PortfolioSection() {
  return (
    <section id="work" className="section-space">
      <div className="container-shell">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow">Selected Showcase</span>
          <h2 className="section-title mt-4">
            A compact luxury portfolio built around design, visuals & brand presentation.
          </h2>
          <p className="section-copy mx-auto mt-6 max-w-3xl">
            A curated portfolio section designed to present creative quality,
            selected works and brand-focused visuals in a clean, premium and
            memorable format.
          </p>
        </div>

        {/* SERVICES */}
        <div id="services" className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={item.title}
              className="group premium-card relative overflow-hidden p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm text-white/35">/0{index + 1}</span>
                <span className="h-4 w-4 rounded-full border border-white/12 bg-white/[0.04]" />
              </div>

              <h3 className="relative z-10 mt-8 text-3xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="relative z-10 mt-4 text-base leading-8 text-white/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* FEATURED SHOWCASE */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((item, index) => (
            <article
              key={item.title}
              className="group premium-card overflow-hidden"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={400}
                  width={700} 
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.6))]" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                    {item.eyebrow}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/60 backdrop-blur-md">
                    /0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <h3 className="max-w-xl text-3xl font-semibold text-white sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GALLERY HEADING */}
        <div className="mt-20 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">Gallery</span>
            <h3 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              More selected creative works
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/55 sm:text-[15px]">
            A flowing gallery strip for posters, branding visuals, campaign creatives,
            social media designs and selected presentation work.
          </p>
        </div>

        {/* AUTO SCROLLING GALLERY */}
        <div className="portfolio-marquee-wrap mt-10">
          <div className="portfolio-marquee-track">
            {marqueeItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="portfolio-gallery-card group"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={1000} 
                    width={1000} 
                    className="object-cover transition duration-700 group-hover:scale-[1.08]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.45))]" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/70 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60 backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-[1.25rem] border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-white/60">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* AUTO LOGO GALLERY */}
        <div className="logo-marquee-wrap mt-10">
          <div className="logo-marquee-track">
            {marqueelogoItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="logo-gallery-card group"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={1000} 
                    width={1000} 
                    className="object-cover transition duration-700 group-hover:scale-[1.20]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.45))]" />

                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/70 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/60 backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-[1.25rem] border border-white/10 bg-black/35 p-4 backdrop-blur-md">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-white/60">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}