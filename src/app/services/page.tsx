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
  title: "DFW Plumbing Services",
  description:
    "DFW plumbing services for drain cleaning, water heaters, sewer and water line repair, gas piping, slab leaks, remodel plumbing, and new construction.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "DFW Plumbing Services | Onyx Ridge",
    description:
      "Drain cleaning, water heaters, sewer and water line repair, gas piping, slab leaks, remodels, and new construction across DFW.",
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
