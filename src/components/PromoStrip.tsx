import Link from "next/link";

export default function PromoStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--primary)] py-5 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[#0b45d8] to-[#07111f]" />
      <div className="absolute left-[-80px] top-[-80px] h-40 w-40 rounded-full bg-white/15 blur-3xl" />

      <div className="container relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
            Current Specials
          </span>

          <p className="mt-1 text-lg font-black leading-snug text-white">
            Plumbing specials available for water heaters, repairs, and remodel plumbing.
          </p>
        </div>

        <Link
          href="/promotions"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-black uppercase tracking-[0.08em] !text-black transition hover:bg-white/85"
        >
          View Promotions →
        </Link>
      </div>
    </section>
  );
}