import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectTestimonials from "@/components/projects/ProjectTestimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";
import HomeWrapper from "@/components/home/HomeWrapper";

export const metadata = {
 title: "Completed Projects | Milan Wood",
 description: "A portfolio of Milan Wood's executed projects — from luxury residences and boutique hotels to landmark commercial spaces across India.",
};

export default function ProjectsPage() {
 return (
 <HomeWrapper>
 <main id="main-content" className="min-h-screen">
 <ProjectsHero />
 <FeaturedProject />
 <ProjectsGrid />
 <ProjectTestimonials />
 <CTA />
 <Footer />
 </main>
 </HomeWrapper>
 );
}
