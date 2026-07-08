import Link from "next/link";

export default function PromoStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--primary)] py-5 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[var(--primary)] to-[#0b45d8]" />

      <div className="absolute left-[-100px] top-[-100px] h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-80px] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-black/15 px-6 py-5 backdrop-blur-sm md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
              Current Specials
            </span>

            <p className="mt-2 text-xl font-black leading-tight text-white">
              Plumbing specials available for water heaters, repairs, sewer and
              water line work, gas piping, and remodel plumbing across DFW.
            </p>
          </div>

          <Link
            href="/promotions"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white px-6 text-sm font-black uppercase tracking-[0.08em] !text-black shadow-lg transition hover:scale-[1.02] hover:bg-white/90"
          >
            View Promotions →
          </Link>
        </div>
      </div>
    </section>
  );
}