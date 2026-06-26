import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import CTASection from "../components/sections/CTASection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <> 
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </main> 
    </>
  );
}

