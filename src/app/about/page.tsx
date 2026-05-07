import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutPageContent from "@/components/AboutPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AboutSchema from "@/components/AboutSchema";

export const metadata = {
  title: "About Onyx Ridge Building Solutions | DFW Plumbing",
  description:
    "Learn about Onyx Ridge Building Solutions, a DFW plumbing company focused on water heaters, sewer repairs, slab leaks, gas testing, kitchen and bath remodels, quality work, and clear communication.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutSchema />

      <Header />

      <PageHero
        eyebrow="About Onyx Ridge"
        title="Quality Work. Clear Communication. Reliable Service."
        description="Onyx Ridge Building Solutions serves the Dallas–Fort Worth area with plumbing service solutions including water heaters, sewer repairs, slab leaks, gas testing, and kitchen and bath remodels."
      />

      <AboutPageContent />

      <CTA />

      <Footer />
    </main>
  );
}