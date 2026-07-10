import MaintenanceHero from "@/components/maintenance/MaintenanceHero";
import CareGuide from "@/components/maintenance/CareGuide";
import DosDonts from "@/components/maintenance/DosDonts";
import SurfaceCare from "@/components/maintenance/SurfaceCare";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export const metadata = {
 title: "Maintenance & Care | Milan Wood",
 description: "How to clean, protect, and maintain your Milan Wood doors for a lifetime of performance and beauty. Surface-specific care guides for veneer, lacquer, laminate, and paint.",
};

export default function MaintenancePage() {
 return (
 <HomeWrapper>
 <main id="main-content" className="min-h-screen bg-[#faf9f7]">
 <MaintenanceHero />
 <CareGuide />
 <DosDonts />
 <SurfaceCare />
 <CTA />
 <Footer />
 </main>
 </HomeWrapper>
 );
}
