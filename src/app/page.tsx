import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
import DoorsSection from "@/components/home/DoorsSection";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <Stats />
      <AboutUs />
      <DoorsSection />
      <Categories />
      <FeaturedProducts />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
