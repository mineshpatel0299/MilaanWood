import MaterialsHero from "@/components/materials/MaterialsHero";
import WoodTypes from "@/components/materials/WoodTypes";
import CoreConstruction from "@/components/materials/CoreConstruction";
import FinishesPalette from "@/components/materials/FinishesPalette";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export const metadata = {
 title: "Materials & Finishes | Milan Wood",
 description: "Explore the premium timber species, engineered core constructions, and heirloom-grade finishes that define every Milan Wood door.",
};

export default function MaterialsPage() {
 return (
 <HomeWrapper>
 <main id="main-content" className="min-h-screen bg-[#faf9f7]">
 <MaterialsHero />
 <WoodTypes />
 <CoreConstruction />
 <FinishesPalette />
 <CTA />
 <Footer />
 </main>
 </HomeWrapper>
 );
}
