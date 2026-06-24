import ProductHero from "@/components/products/ProductHero";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCTA from "@/components/products/ProductCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Products | Milan Wood — Premium Wooden Doors",
  description:
    "Explore our curated collection of handcrafted wooden doors. From luxury interiors to contemporary designs, each piece is built to last.",
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <ProductHero />
      <ProductGrid />
      <ProductCTA />
      <Footer />
    </main>
  );
}
