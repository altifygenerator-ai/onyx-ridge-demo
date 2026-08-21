import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ReviewsPageContent from "@/components/ReviewsPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ReviewsSchema from "@/components/ReviewsSchema";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "DFW Plumbing Reviews",
  description:
    "Read customer reviews for Onyx Ridge Building Solutions, a 5-star DFW plumbing company serving homeowners and businesses across Dallas-Fort Worth.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "DFW Plumbing Reviews | Onyx Ridge",
    description:
      "Read customer reviews and feedback for Onyx Ridge Building Solutions.",
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
