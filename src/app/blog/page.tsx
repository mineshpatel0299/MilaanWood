import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/Footer";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "The Journal | Milan Wood",
  description: "Insights on architectural trends, luxury materials, and the enduring craft of bespoke door manufacturing.",
};

export default function BlogPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <BlogHero />
      <BlogGrid />
      <CTA />
      <Footer />
    </main>
  );
}
