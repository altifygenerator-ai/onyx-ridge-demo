import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutPageContent from "@/components/AboutPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AboutSchema from "@/components/AboutSchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "About Onyx Ridge Building Solutions | DFW Plumber",
  description:
    "Learn about Onyx Ridge Building Solutions, a local family owned DFW plumbing company led by a licensed Master Plumber and focused on clear communication, quality work, and dependable service.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Onyx Ridge Building Solutions | DFW Plumber",
    description:
      "A local DFW plumbing company for drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodels, and new construction plumbing.",
    url: `${business.url}/about`,
    images: [business.shareImage],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutSchema />

      <Header />

      <PageHero
        eyebrow="About Onyx Ridge"
        title="Quality Work. Clear Communication. Reliable Service."
        description="Onyx Ridge Building Solutions serves the Dallas–Fort Worth area with plumbing services including drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing."
      />

      <AboutPageContent />

      <CTA />

      <Footer />
    </main>
  );
}
