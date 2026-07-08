import ScrollReveal from "@/components/ScrollReveal";

export default function Guarantees() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">Why Choose Onyx Ridge</span>

              <h2>Plumbing Work Without The Runaround</h2>

              <div className="gold-line" />

              <p className="mt-6 text-[var(--muted)]">
                At Onyx Ridge, we believe good plumbing work comes down to
                showing up, communicating clearly, protecting the health and
                safety of the community, and doing the job right the first time.
                Whether it’s drain cleaning, a water heater replacement, sewer or
                water line repair, slab leak, gas piping, remodel plumbing, or
                new construction plumbing, our goal is to provide
                dependable service and quality work people can feel confident
                in.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5">
            <ScrollReveal direction="up" delay={0.05}>
              <div className="card">
                <h3>Clear Communication</h3>

                <p className="mt-3">
                  Customers should know what is happening, what it costs, and
                  what the next step is.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <div className="card">
                <h3>Plumbing-First Focus</h3>

                <p className="mt-3">
                  Built around the services people search for most: water
                  heaters, slab leaks, sewer and water line repairs, gas piping,
                  remodel plumbing, and new construction plumbing.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <div className="card">
                <h3>Health & Safety Focused</h3>

                <p className="mt-3">
                  Plumbing work should help protect the health and safety of the
                  home and the community through clean, reliable service done
                  the right way.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="card">
                <h3>Real Work, Real Photos</h3>

                <p className="mt-3">
                  We believe customers should be able to see real examples of
                  the work before making a decision, which is why Onyx Ridge
                  uses actual project photos from jobs completed across the DFW
                  area.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}