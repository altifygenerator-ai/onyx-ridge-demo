import Image from "next/image";

export default function ReviewsPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* LEFT */}
          <div>
            <span className="eyebrow">Customer Feedback</span>

            <h2 className="max-w-2xl">
              Built Around Trust, Communication, And Clean Work
            </h2>

            <div className="gold-line" />

            <p className="mt-6 max-w-xl text-[var(--muted)]">
              Onyx Ridge focuses on showing up, communicating clearly,
              respecting your property, and doing quality plumbing work people
              can feel confident in.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-lg border border-[var(--border)] bg-[#0b0d12] px-4 py-3 text-sm font-bold text-white">
                ✔ Free Estimates Across DFW
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[#0b0d12] px-4 py-3 text-sm font-bold text-white">
                ✔ Water Heaters, Sewer Repairs, Slab Leaks & Remodel Plumbing
              </div>

              <div className="rounded-lg border border-[var(--border)] bg-[#0b0d12] px-4 py-3 text-sm font-bold text-white">
                ✔ Real Work Photos And Local Service
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12] shadow-2xl">
            <div className="border-b border-white/10 px-6 py-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                Facebook Review
              </span>

              <h3 className="mt-2 text-2xl font-black text-white">
                Real Feedback From A Customer
              </h3>
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
        </div>
      </div>
    </section>
  );
}