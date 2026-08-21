import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GallerySchema from "@/components/GallerySchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "DFW Plumbing Work Gallery",
  description:
    "See recent DFW plumbing work from Onyx Ridge, including water heaters, sewer and water lines, under-sink plumbing, gas piping, bathrooms, and remodels.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "DFW Plumbing Work Gallery | Onyx Ridge",
    description:
      "See recent plumbing work completed by Onyx Ridge Building Solutions across DFW.",
    url: `${business.url}/gallery`,
    images: [business.shareImage],
  },
};

export default function GalleryPage() {
  return (
    <main>
      <GallerySchema />
      <Header />

      <PageHero
        eyebrow="Plumbing Work Gallery"
        title="Recent Plumbing Work Across DFW"
        description="Take a look at real work from Onyx Ridge, including water heater installs, under-sink plumbing, sewer and water line repairs, gas piping, underground plumbing, bathroom plumbing, kitchen plumbing, and remodel projects."
      />

      <GalleryGrid />

      <CTA />

      <Footer />
    </main>
  );
}
