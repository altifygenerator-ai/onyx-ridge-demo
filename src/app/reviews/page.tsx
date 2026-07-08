import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ReviewsPageContent from "@/components/ReviewsPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ReviewsSchema from "@/components/ReviewsSchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Google Reviews | Onyx Ridge Building Solutions DFW Plumber",
  description:
    "Read Google reviews and customer feedback for Onyx Ridge Building Solutions, a 5.0-rated DFW plumber serving homeowners and businesses with water heaters, sewer and water line repairs, slab leaks, gas piping, and remodel plumbing.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Google Reviews | Onyx Ridge Building Solutions DFW Plumber",
    description:
      "See Google reviews and customer feedback for Onyx Ridge Building Solutions.",
    url: `${business.url}/reviews`,
    images: [business.shareImage],
  },
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsSchema />

      <Header />

      <PageHero
        eyebrow="Google Reviews"
        title="5-Star Reviews And Customer Feedback"
        description="See what customers are saying about Onyx Ridge Building Solutions and the plumbing work provided across the Dallas–Fort Worth area."
      />

      <ReviewsPageContent />

      <CTA />

      <Footer />
    </main>
  );
}
