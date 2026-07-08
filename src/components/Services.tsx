import {
  FaFireBurner,
  FaWater,
  FaToilet,
  FaHouseFloodWater,
  FaBath,
  FaWrench,
} from "react-icons/fa6";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: FaWrench,
    title: "Drain Cleaning",
    text: "Drain cleaning and service for slow drains, backups, and clogged residential plumbing lines.",
  },
  {
    icon: FaFireBurner,
    title: "Water Heaters",
    text: "Water heater repair, replacement, and installation for homes across the DFW area.",
  },
  {
    icon: FaToilet,
    title: "Sewer & Water Line Repairs",
    text: "Sewer line repair, water line repair, and underground plumbing support.",
  },
  {
    icon: FaHouseFloodWater,
    title: "Slab Leaks",
    text: "Slab leak detection and repair work handled with care and clear communication.",
  },
  {
    icon: FaWater,
    title: "Gas Piping & Testing",
    text: "Gas piping and gas testing work focused on safety, accuracy, and reliability.",
  },
  {
    icon: FaBath,
    title: "Remodel & New Construction Plumbing",
    text: "Plumbing support for kitchen remodels, bathroom remodels, and new construction projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,93,255,0.08),transparent_30%)]" />

      <div className="container relative z-10">
        <ScrollReveal direction="left">
          <div className="max-w-3xl">
            <span className="eyebrow">Plumbing Services</span>

            <h2 className="max-w-3xl">
              Plumbing Services Built Around Real Homes, Real Problems, And Real
              Work
            </h2>

            <div className="gold-line" />

            <p className="mt-5 max-w-2xl text-[var(--muted)]">
              Reliable plumbing solutions across DFW including drain cleaning,
              water heaters, slab leaks, sewer and water line repairs, gas
              piping, remodel plumbing, and new construction plumbing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3 mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.title}
                direction="up"
                delay={index * 0.06}
              >
                <div className="card group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/[0.03] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--primary)]/10 transition duration-300 group-hover:scale-110 group-hover:border-[var(--primary)]/40">
                      <Icon className="text-[var(--primary)]" size={26} />
                    </div>

                    <h3>{service.title}</h3>

                    <p className="mt-4">{service.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="btn btn-outline">
              View All Plumbing Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
