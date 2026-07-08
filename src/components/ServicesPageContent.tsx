"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesPageContent() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.slug}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.08, 0.25),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12] lg:grid-cols-2"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 1 ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65 }}
                  className={`relative min-h-[320px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur">
                    Recent Project
                  </div>
                </motion.div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                    Plumbing Service
                  </span>

                  <h2 className="mt-3 text-3xl text-white">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-[var(--muted)]">
                    {service.description}
                  </p>

                  <p className="mt-4 text-[var(--muted)]">
                    {service.details}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-bold text-[var(--primary)]">
                      Free Estimates
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white/70">
                      DFW Service Area
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white/70">
                      Residential Plumbing
                    </span>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href="tel:8179482020" className="btn btn-gold">
                      Call/Text 817-948-2020
                    </a>

                    <Link href="/gallery" className="btn btn-outline">
                      View Work Photos
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">Dallas–Fort Worth Plumbing</span>

          <h2 className="max-w-3xl">
            Serving Homeowners Across The DFW Area
          </h2>

          <div className="gold-line" />

          <p className="mt-6 max-w-3xl text-[var(--muted)]">
            Onyx Ridge provides plumbing services across the Dallas–Fort Worth
            area for homeowners needing drain cleaning, water heater repair or
            installation, slab leak work, sewer and water line repairs, gas
            piping, kitchen plumbing, bathroom plumbing, remodel plumbing, and
            new construction plumbing support.
          </p>

          <p className="mt-4 max-w-3xl text-[var(--muted)]">
            Whether the job is a small fixture update, an under-sink plumbing
            repair, a water heater replacement, gas piping, or underground plumbing work,
            the goal is to keep the process clear, the work clean, and the
            finished result dependable.
          </p>
        </div>
      </section>
    </>
  );
}