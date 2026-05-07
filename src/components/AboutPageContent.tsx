import Image from "next/image";

const values = [
  "Quality",
  "Efficiency",
  "Integrity",
  "Clear Communication",
];

const services = [
  "Water Heaters",
  "Sewer Repairs",
  "Slab Leaks",
  "Gas Testing",
  "Kitchen & Bath Remodels",
];

export default function AboutPageContent() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <span className="eyebrow">About Onyx Ridge</span>

            <h2>
              Built On Quality, Efficiency, And Integrity
            </h2>

            <div className="gold-line" />

            <p className="mt-6 text-[var(--muted)]">
              At Onyx Ridge Building Solutions, we bring craftsmanship,
              reliability, and respect to every job. Whether it’s a water heater,
              sewer repair, slab leak, gas test, remodel, or smaller plumbing
              job, the goal is simple: do the work right and keep the process
              clear from start to finish.
            </p>

            <p className="mt-4 text-[var(--muted)]">
              We don’t believe in shortcuts. Our focus is on showing up,
              communicating clearly, treating your property with respect, and
              making sure the finished work is something customers can feel
              confident in.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[var(--border)] bg-black">
            <Image
              src="/images/gallery/waterheatergarage.jpg"
              alt="Onyx Ridge plumbing work in the DFW area"
              fill
              className="object-cover opacity-85"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                DFW Plumbing Work
              </span>

              <h3 className="mt-2 text-2xl font-black text-white">
                Real Work. Clear Process. Reliable Results.
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="card">
              <h3 className="text-white">{value}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-2xl border border-[var(--border)] bg-[#0b0d12] p-8 md:grid-cols-2 md:p-10">
          <div>
            <span className="eyebrow">One Team. Multiple Solutions.</span>

            <h2 className="text-white">
              Plumbing And Remodel Support Across DFW
            </h2>

            <p className="mt-6 text-[var(--muted)]">
              Onyx Ridge is based in the Dallas–Fort Worth area and serves
              homeowners, property managers, and investors throughout the region.
              From a single repair to a larger remodel or project, the goal is
              to handle the details so customers can stay confident in the
              process.
            </p>
          </div>

          <div className="grid gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-white"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}