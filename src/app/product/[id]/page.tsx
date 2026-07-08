import { getProductDetails } from "@/data/productDetails";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductDetails(id);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} | Milan Wood`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductDetails(id);

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#faf9f8]">
      <ProductDetailClient product={product} />
      <Footer />
    </main>
  );
}
