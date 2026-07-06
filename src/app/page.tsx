import Hero from "@/components/home/Hero";
// import Philosophy from "@/components/home/Philosophy";
import Stats from "@/components/home/Stats";
import AboutUs from "@/components/home/AboutUs";
// import DoorsSection from "@/components/home/DoorsSection";
// import Categories from "@/components/home/Categories";
// import ScrollingProducts from "@/components/home/ScrollingProducts";
import FurnishCorner from "@/components/home/FurnishCorner";
import VideoCarousel from "@/components/home/VideoCarousel";
import FeaturedProducts from "@/components/home/FeaturedCollection";
import Services from "@/components/home/Services";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import FAQ from "@/components/home/FAQ";
import BlogSection from "@/components/home/BlogSection";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export default function Home() {
  return (
    <HomeWrapper>
      <main id="main-content" className="min-h-screen">
        <Hero />
        {/* <ScrollingProducts /> */}
        <FurnishCorner />
        <VideoCarousel />
        {/* <Philosophy /> */}
        {/* <FeaturedProducts /> */}
        <Services />
        <Stats />
        {/* <AboutUs /> */}
        <ManufacturingProcess />
        {/* <DoorsSection /> */}
        {/* <Categories /> */}
        {/* <FeaturedProducts /> */}
        {/* <FAQ /> */}
        <BlogSection />
        <CTA />
        <Footer />
      </main>
    </HomeWrapper>
  );
}
