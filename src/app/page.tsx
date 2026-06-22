import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
