import { getCollectionBySlug, collections } from "@/data/collections";
import { notFound } from "next/navigation";
import CollectionProducts from "@/components/collections/CollectionProducts";
import Footer from "@/components/Footer";

export function generateStaticParams() {
 return collections.map((col) => ({
 slug: col.slug,
 }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const collection = getCollectionBySlug(slug);
 if (!collection) return { title: "Not Found" };
 return {
 title: `${collection.name} | Milan Wood`,
 description: collection.description,
 };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const collection = getCollectionBySlug(slug);

 if (!collection) {
 notFound();
 }

 return (
 <main id="main-content" className="min-h-screen bg-[#0a0a0a]">
 <CollectionProducts collection={collection} />
 <Footer />
 </main>
 );
}
