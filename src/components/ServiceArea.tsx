import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceArea() {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="grid-2">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">Service Area</span>

              <h2>Serving The Dallas–Fort Worth Area</h2>

              <div className="gold-line" />

              <p className="mt-6">
                Onyx Ridge serves homeowners and businesses across the DFW area
                with drain cleaning, water heaters, slab leaks, sewer and
                water line repairs, gas piping, remodel plumbing, and new
                construction plumbing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.08}>
            <div className="card">
              <h3>Core Service Area</h3>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">
                <span>Granbury</span>
                <span>Mansfield</span>
                <span>Fort Worth</span>
                <span>Dallas</span>
                <span>Arlington</span>
                <span>DFW Metroplex</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}