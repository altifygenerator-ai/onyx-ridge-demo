import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesPageContent from "@/components/ServicesPageContent";
import PromoStrip from "@/components/PromoStrip";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ServicesSchema from "@/components/ServicesSchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Plumbing Services DFW | Onyx Ridge Building Solutions",
  description:
    "Onyx Ridge provides plumbing services across Dallas-Fort Worth including drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, kitchen plumbing, bathroom remodel plumbing, and new construction plumbing.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Plumbing Services DFW | Onyx Ridge Building Solutions",
    description:
      "Drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing across DFW.",
    url: `${business.url}/services`,
    images: [business.shareImage],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSchema />

      <Header />

      <PageHero
        eyebrow="DFW Plumbing Services"
        title="Plumbing Services Built Around Clean, Reliable Work"
        description="Onyx Ridge provides plumbing services across the Dallas–Fort Worth area including drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing."
      />

      <ServicesPageContent />

      <PromoStrip />

      <CTA />

      <Footer />
    </main>
  );
}
