import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesPageContent from "@/components/ServicesPageContent";
import PromoStrip from "@/components/PromoStrip";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ServicesSchema from "@/components/ServicesSchema";

export const metadata = {
  title: "Plumbing Services DFW | Onyx Ridge Building Solutions",
  description:
    "Onyx Ridge provides plumbing services across Dallas-Fort Worth including water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, and bathroom remodel plumbing.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSchema />

      <Header />

      <PageHero
        eyebrow="DFW Plumbing Services"
        title="Plumbing Services Built Around Clean, Reliable Work"
        description="Onyx Ridge provides plumbing services across the Dallas–Fort Worth area including water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, and bathroom remodel plumbing."
      />

      <ServicesPageContent />

      <PromoStrip />

      <CTA />

      <Footer />
    </main>
  );
}