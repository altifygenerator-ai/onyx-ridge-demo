"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/data/gallery";

const categories = [
  "All Work",
  "Water Heaters",
  "Kitchen Plumbing",
  "Bathroom Plumbing",
  "Underground Plumbing",
  "Under Home Plumbing",
  "Exterior Plumbing",
  "Plumbing Vents",
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filtered =
    activeCategory === "All Work"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="section">
      <div className="container">
        {/* FILTERS */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                    : "border-[var(--border)] bg-[#0b0d12] text-white/75 hover:border-[var(--primary)] hover:text-[var(--primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* GALLERY */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.image}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.03, 0.18),
                }}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0b0d12] shadow-xl"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="border-t border-white/10 p-5">
                  <p className="text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}