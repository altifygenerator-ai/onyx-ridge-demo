import QuoteForm from "./QuoteForm";

export default function CTA() {
  return (
    <section id="contact" className="section bg-black">
      <div className="container">
        <div className="grid gap-10 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[#181818] to-black p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <span className="eyebrow">Free Estimates</span>

            <h2 className="max-w-2xl">
              Need Plumbing Work Done Right Across DFW?
            </h2>

            <div className="gold-line" />

            <p className="mt-6 max-w-xl text-[var(--muted)]">
              Onyx Ridge provides water heater installs, slab leak repairs,
              sewer repairs, gas testing, kitchen plumbing, bathroom plumbing,
              and remodel plumbing across the Dallas–Fort Worth area.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:8179482020" className="btn btn-gold">
                Call/Text 817-948-2020
              </a>

              <a
                href="mailto:jake_shockley@outlook.com"
                className="btn btn-outline"
              >
                Email Jake
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-white/70">
              <span>✔ Free Estimates</span>
              <span>✔ DFW Service Area</span>
              <span>✔ Residential Plumbing Services</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="mb-5">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                Request A Quote
              </span>

              <h3 className="mt-2 text-3xl font-black text-white">
                Tell Us About Your Project
              </h3>
            </div>

            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}