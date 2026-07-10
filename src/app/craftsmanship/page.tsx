import CraftsmanshipHero from "@/components/craftsmanship/CraftsmanshipHero";
import ProcessTimeline from "@/components/craftsmanship/ProcessTimeline";
import FactoryGallery from "@/components/craftsmanship/FactoryGallery";
import VideoShowcase from "@/components/craftsmanship/VideoShowcase";
import ArtisanSpotlight from "@/components/craftsmanship/ArtisanSpotlight";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export const metadata = {
 title: "Craftsmanship | Milan Wood",
 description: "Discover how Milan Wood creates doors of exceptional quality — from timber selection through a six-stage manufacturing process to heirloom-grade finishing.",
};

export default function CraftsmanshipPage() {
 return (
 <HomeWrapper>
 <main id="main-content" className="min-h-screen">
 <CraftsmanshipHero />
 <ProcessTimeline />
 <FactoryGallery />
 <VideoShowcase />
 <ArtisanSpotlight />
 <CTA />
 <Footer />
 </main>
 </HomeWrapper>
 );
}
