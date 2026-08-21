import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutPageContent from "@/components/AboutPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AboutSchema from "@/components/AboutSchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "About Our DFW Plumbing Team",
  description:
    "Meet Onyx Ridge Building Solutions, a family-owned DFW plumbing company led by a licensed Master Plumber and focused on reliable, quality work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Onyx Ridge | DFW Plumbing",
    description:
      "Meet the family-owned DFW plumbing company behind Onyx Ridge Building Solutions.",
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
