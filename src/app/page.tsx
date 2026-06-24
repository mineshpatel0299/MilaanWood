import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
import DoorsSection from "@/components/home/DoorsSection";
import Categories from "@/components/home/Categories";
// import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <Philosophy />
      <Services />
      <Stats />
      <AboutUs />
      <ManufacturingProcess />
      {/* <DoorsSection /> */}
      {/* <Categories /> */}
      {/* <FeaturedProducts /> */}
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
