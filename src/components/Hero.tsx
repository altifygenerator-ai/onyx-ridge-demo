"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/images/gallery/bathtub.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(20,93,255,0.18),transparent_35%)]" />

      <div className="container relative z-10 grid items-center gap-14 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--primary)]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--primary)]">
            Reliable Plumbing Work Across DFW
          </div>

          <h1 className="text-white">
            Built With Precision.
            <br />
            Backed By Integrity.
          </h1>

          <div className="gold-line" />

          <p className="mt-6 max-w-xl text-lg text-white/80">
            DFW plumbing services for water heaters, slab leaks, sewer repairs,
            gas testing, and kitchen or bath remodel work.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="tel:8179482020" className="btn btn-gold">
              Call/Text 817-948-2020
            </a>

            <a href="#contact" className="btn btn-outline">
              Request A Free Estimate
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Water Heaters", "Slab Leaks", "Sewer Repairs", "Gas Testing"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/80"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="absolute h-[430px] w-[430px] rounded-full bg-[var(--primary)]/15 blur-3xl" />

          <Image
            src="/images/logov2.png"
            alt="Onyx Ridge Building Solutions"
            width={700}
            height={700}
            priority
            className="relative z-10 w-full max-w-[520px] object-contain opacity-[0.28] drop-shadow-[0_0_45px_rgba(20,93,255,0.45)]"
          />

          <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5" />
        </motion.div>
      </div>
    </section>
  );
}