import Link from "next/link";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import { business } from "@/data/business";

const trustItems = [
  "Clear communication",
  "Respect for your property",
  "Clean plumbing work",
  "Free estimates",
  "Reliable service",
  "DFW area support",
];

export default function ReviewsPageContent() {
  return (
    <>
      <GoogleReviewsSection />

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="eyebrow">Why Customers Choose Us</span>

              <h2 className="max-w-2xl">
                Plumbing Work Built Around Trust And Follow-Through
              </h2>

              <div className="gold-line" />

              <p className="mt-6 text-[var(--muted)]">
                A good plumbing company is about more than fixing the issue. It
                is about showing up, explaining the work, respecting the
                property, and leaving customers confident in the finished job.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[var(--border)] bg-[#0b0d12] px-4 py-3 text-sm font-bold text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[#0b0d12] p-8 md:p-10">
              <span className="eyebrow">Leave A Review</span>

              <h2 className="max-w-3xl text-white">
                Worked With Onyx Ridge? Your Feedback Helps Local Homeowners.
              </h2>

              <p className="mt-6 text-[var(--muted)]">
                Reviews help other homeowners know who they can trust for drain
                cleaning, water heaters, sewer and water line repairs, gas
                piping, slab leaks, remodel plumbing, and new construction
                plumbing across DFW.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={business.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Leave A Google Review
                </a>

                <Link href="/gallery" className="btn btn-outline">
                  View Work Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
