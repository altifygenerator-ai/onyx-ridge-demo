import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ReviewsPageContent from "@/components/ReviewsPageContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ReviewsSchema from "@/components/ReviewsSchema";

export const metadata = {
  title: "Reviews | Onyx Ridge Building Solutions DFW Plumbing",
  description:
    "Read reviews and customer feedback for Onyx Ridge Building Solutions, serving the DFW area with water heaters, sewer repairs, slab leaks, gas testing, kitchen plumbing, and bathroom remodel plumbing.",
};

export default function ReviewsPage() {
  return (
    <main>
      <ReviewsSchema />

      <Header />

      <PageHero
        eyebrow="Customer Reviews"
        title="Reviews And Customer Feedback"
        description="See what customers are saying about Onyx Ridge Building Solutions and the plumbing work provided across the Dallas–Fort Worth area."
      />

      <ReviewsPageContent />

      <CTA />

      <Footer />
    </main>
  );
}