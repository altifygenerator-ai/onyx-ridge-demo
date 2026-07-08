import Link from "next/link";
import { business } from "@/data/business";
import { googleReviews } from "@/data/reviews";

type GoogleReviewsSectionProps = {
  compact?: boolean;
};

function Stars() {
  return (
    <span
      aria-label="5 star rating"
      className="tracking-[0.08em] text-[var(--primary)]"
    >
      ★★★★★
    </span>
  );
}

export default function GoogleReviewsSection({
  compact = false,
}: GoogleReviewsSectionProps) {
  const reviews = compact ? googleReviews.slice(0, 3) : googleReviews;

  return (
    <section className="section relative overflow-hidden bg-[#080a0f]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,93,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(20,93,255,0.055)_1px,transparent_1px)] bg-[size:38px_38px]" />
      <div className="absolute left-[-140px] top-[-120px] h-80 w-80 rounded-full bg-[var(--primary)]/10 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="sticky top-28 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[#171a22] via-[#0f1218] to-black p-7 shadow-2xl md:p-8">
            <div className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--primary)]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
              Google Reviews
            </div>

            <h2 className="max-w-2xl text-white">
              5-Star Plumbing Reviews From Local Customers
            </h2>

            <div className="gold-line" />

            <p className="mt-5 text-[var(--muted)]">
              Onyx Ridge is listed on Google as a plumber and currently shows a
              {" "}
              <strong className="font-black text-white">
                {business.ratingValue} rating from {business.reviewCount} Google reviews
              </strong>
              . These are a few recent customer comments about the communication,
              pricing, response time, and finished work.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-[0.72fr_1fr] sm:items-center">
              <div className="rounded-xl border border-[var(--border)] bg-black/35 p-5 text-center">
                <div className="text-5xl font-black leading-none text-white">
                  {business.ratingValue}
                </div>
                <div className="mt-3 text-xl">
                  <Stars />
                </div>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/55">
                  {business.reviewCount} Google Reviews
                </p>
              </div>

              <div className="grid gap-3 text-sm font-bold text-white/78">
                <span className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
                  ✔ {business.hoursLabel}
                </span>
                <span className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
                  ✔ Listed as a Plumber on Google
                </span>
                <span className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
                  ✔ Licensed Master Plumber {business.license}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Check Google Reviews
              </a>

              <a
                href={business.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Leave A Google Review
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12] p-6 shadow-xl ${
                  index === 0 && !compact ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute right-[-44px] top-[-44px] h-28 w-28 rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/5" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-white/45">
                        Google Review
                      </p>
                      <h3 className="mt-1 text-lg text-white">
                        {review.name}
                      </h3>
                    </div>

                    <div className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--primary)]/10 px-3 py-1 text-sm font-black text-[var(--primary)]">
                      5.0
                    </div>
                  </div>

                  <div className="mt-4 text-sm">
                    <Stars />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    “{review.body}”
                  </p>
                </div>
              </article>
            ))}

            {compact && (
              <div className="rounded-2xl border border-dashed border-[var(--border)] bg-white/[0.025] p-6 md:col-span-2">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                      More Customer Feedback
                    </p>
                    <h3 className="mt-2 text-2xl text-white">
                      See the full review page and Google profile.
                    </h3>
                  </div>

                  <Link href="/reviews" className="btn btn-outline">
                    View Review Page
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
