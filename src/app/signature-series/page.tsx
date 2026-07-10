import SignatureHero from "@/components/signature-series/SignatureHero";
import SignatureIntro from "@/components/signature-series/SignatureIntro";
import SignatureProducts from "@/components/signature-series/SignatureProducts";
import SignatureFeatures from "@/components/signature-series/SignatureFeatures";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export const metadata = {
 title: "Signature Series | Milan Wood",
 description: "Milan Wood's most prestigious collection — hand-selected timber, master-craft joinery, and heirloom-grade finishing. Explore the Signature Series.",
};

export default function SignatureSeriesPage() {
 return (
 <HomeWrapper>
 <main id="main-content" className="min-h-screen">
 <SignatureHero />
 <SignatureIntro />
 <SignatureProducts />
 <SignatureFeatures />
 <CTA />
 <Footer />
 </main>
 </HomeWrapper>
 );
}
