import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import Craftsmanship from "@/components/about/Craftsmanship";
import Values from "@/components/about/Values";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Milan Wood",
  description: "Discover the heritage, craftsmanship, and uncompromising luxury behind Milan Wood's premium architectural doors.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      <AboutHero />
      <OurStory />
      <Craftsmanship />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
}
