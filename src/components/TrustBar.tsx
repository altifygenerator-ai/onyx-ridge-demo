"use client";

import { motion } from "framer-motion";
import {
  FaWrench,
  FaFire,
  FaWater,
  FaBath,
  FaShieldAlt,
} from "react-icons/fa";

const items = [
  {
    icon: FaShieldAlt,
    text: "Licensed & Insured",
  },
  {
    icon: FaWrench,
    text: "Drain Cleaning",
  },
  {
    icon: FaFire,
    text: "Water Heater Installation",
  },
  {
    icon: FaWater,
    text: "Slab Leak Repair",
  },
  {
    icon: FaWrench,
    text: "Sewer & Water Line Repairs",
  },
  {
    icon: FaBath,
    text: "Gas Piping & Remodel Plumbing",
  },
  {
    icon: FaShieldAlt,
    text: "DFW Plumbing Services",
  },
];

export default function TrustBar() {
  const repeated = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-[#0a0d14] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center gap-14 whitespace-nowrap"
      >
        {repeated.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 px-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--primary)]/10">
                <Icon className="text-[var(--primary)]" size={16} />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.08em] text-white/85">
                {item.text}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}