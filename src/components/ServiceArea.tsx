export default function ServiceArea() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="eyebrow">Service Area</span>

            <h2>Serving The Dallas–Fort Worth Area</h2>

            <div className="gold-line" />

            <p className="mt-6">
              Onyx Ridge serves homeowners and businesses across the DFW area
              with plumbing repairs, water heaters, slab leaks, sewer work, gas
              testing, and remodel plumbing.
            </p>
          </div>

          <div className="card">
            <h3>Core Service Area</h3>

            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">
              <span>Fort Worth</span>
              <span>Dallas</span>
              <span>Arlington</span>
              <span>North Texas</span>
              <span>DFW Metroplex</span>
              <span>Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}