import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GallerySchema from "@/components/GallerySchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Plumbing Work Gallery DFW | Onyx Ridge Building Solutions",
  description:
    "View recent plumbing work from Onyx Ridge Building Solutions including water heaters, under-sink plumbing, sewer and water line repairs, slab leak work, gas piping, bathroom plumbing, kitchen plumbing, and remodel plumbing across DFW.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Plumbing Work Gallery DFW | Onyx Ridge Building Solutions",
    description:
      "Real DFW plumbing work photos from Onyx Ridge Building Solutions.",
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
