import {
  FaFireBurner,
  FaWater,
  FaToilet,
  FaHouseFloodWater,
  FaBath,
} from "react-icons/fa6";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: FaFireBurner,
    title: "Water Heaters",
    text: "Water heater repair, replacement, and installation for homes across the DFW area.",
  },
  {
    icon: FaHouseFloodWater,
    title: "Slab Leaks",
    text: "Slab leak detection and repair work handled with care and clear communication.",
  },
  {
    icon: FaToilet,
    title: "Sewer Repairs",
    text: "Sewer repair and plumbing solutions for backups, damage, and failing lines.",
  },
  {
    icon: FaWater,
    title: "Gas Testing",
    text: "Gas line testing and service work focused on safety, accuracy, and reliability.",
  },
  {
    icon: FaBath,
    title: "Kitchen & Bath Remodels",
    text: "Plumbing and finish work for kitchen and bathroom remodel projects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <ScrollReveal direction="left">
          <div>
            <span className="eyebrow">Plumbing Services</span>

            <h2 className="max-w-3xl">
              Plumbing Services Built Around Real Homes, Real Problems, And Real
              Work
            </h2>

            <div className="gold-line" />
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
                <div className="card">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--gold)]/10">
                    <Icon className="text-[var(--gold)]" size={26} />
                  </div>

                  <h3>{service.title}</h3>

                  <p className="mt-4">{service.text}</p>
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