import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const values = [
  "Quality",
  "Efficiency",
  "Integrity",
  "Communication",
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
          <ScrollReveal direction="left">
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
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-[var(--border)] bg-black">
              <Image
                src="/images/about/owner-1.jpg"
                alt="Owner of Onyx Ridge Building Solutions"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                  Onyx Ridge Building Solutions
                </span>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Local Plumbing Service Built Around Real Work
                </h3>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {values.map((value, index) => (
            <ScrollReveal key={value} direction="up" delay={index * 0.06}>
              <div className="card">
                <h3 className="text-white">{value}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up">
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
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="mt-16 overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12]">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[360px]">
                <Image
                  src="/images/about/owner-work.jpg"
                  alt="Onyx Ridge owner working on a plumbing project"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="eyebrow">Built Around Real Work</span>

                <h2 className="max-w-xl">
                  Plumbing Service Focused On Quality And Follow-Through
                </h2>

                <div className="gold-line" />

                <p className="mt-6 text-[var(--muted)]">
                  Onyx Ridge was built around the idea that customers deserve
                  clear communication, dependable work, and a company that takes
                  pride in the finished result. From water heaters and slab
                  leaks to sewer repairs and remodel plumbing, the focus is
                  always on doing the job right and treating people with respect
                  throughout the process.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}