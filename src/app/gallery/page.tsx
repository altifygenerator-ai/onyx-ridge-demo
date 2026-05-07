import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GallerySchema from "@/components/GallerySchema";
export const metadata = {
  title: "Plumbing Work Gallery DFW | Onyx Ridge Building Solutions",
  description:
    "View recent plumbing work from Onyx Ridge Building Solutions including water heater installs, under-sink plumbing, sewer repairs, slab leak work, bathroom plumbing, kitchen plumbing, and remodel plumbing across DFW.",
};

export default function GalleryPage() {
  return (
    <main>
        <GallerySchema />
      <Header />

      <PageHero
        eyebrow="Plumbing Work Gallery"
        title="Recent Plumbing Work Across DFW"
        description="Take a look at real work from Onyx Ridge, including water heater installs, under-sink plumbing, sewer repairs, underground plumbing, bathroom plumbing, kitchen plumbing, and remodel projects."
      />

      <GalleryGrid />

      <CTA />

      <Footer />
    </main>
  );
}