import Image from "next/image";
import Link from "next/link";

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
    <section className="section">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* REVIEW IMAGE */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12]">
            <div className="border-b border-white/10 px-6 py-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                Customer Review
              </span>

              <h2 className="mt-2 text-2xl text-white">
                Real Feedback From A Customer
              </h2>
            </div>

            <div className="relative">
              <Image
                src="/images/reviews/review1.png"
                alt="Facebook review for Onyx Ridge Building Solutions"
                width={1200}
                height={1400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* TRUST SECTION */}
          <div>
            <span className="eyebrow">Why Customers Choose Us</span>

            <h2 className="max-w-2xl">
              Plumbing Work Built Around Trust And Follow-Through
            </h2>

            <div className="gold-line" />

            <p className="mt-6 text-[var(--muted)]">
              A good plumbing company is about more than fixing the issue. It is
              about showing up, explaining the work, respecting the property,
              and leaving customers confident in the finished job.
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

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:8179482020" className="btn btn-gold">
                Call/Text 817-948-2020
              </a>

              <Link href="/gallery" className="btn btn-outline">
                View Work Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* REVIEW CTA */}
        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[#0b0d12] p-8 md:p-10">
          <span className="eyebrow">Leave A Review</span>

          <h2 className="max-w-3xl">
            Worked With Onyx Ridge? Your Feedback Helps The Business Grow.
          </h2>

          <p className="mt-6 max-w-3xl text-[var(--muted)]">
            Customer reviews help local homeowners know who they can trust for
            water heaters, sewer repairs, slab leaks, gas testing, kitchen
            plumbing, bathroom plumbing, and remodel plumbing across DFW.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#" className="btn btn-gold">
              Leave A Review
            </a>

            <Link href="/gallery" className="btn btn-outline">
              View Work Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}