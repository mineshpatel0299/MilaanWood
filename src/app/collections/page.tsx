import CollectionGrid from "@/components/collections/CollectionGrid";
import CollectionHero from "@/components/collections/CollectionHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Collections | Milan Wood — Premium Wooden Doors",
  description:
    "Explore our curated collections of handcrafted wooden doors. From Art Deco to Zen Series, each piece is built to last.",
};

export default function CollectionsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      <CollectionHero />
      <CollectionGrid />
      <Footer />
    </main>
  );
}
