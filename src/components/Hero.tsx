"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/gallery/waterheater1.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />

      <div className="container relative z-10 grid items-center gap-16 pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
         <span className="eyebrow">
  Reliable Plumbing Work Across DFW
</span>

<h1 className="text-white">
  Built With Precision.
  <br />
  Backed By Integrity.
</h1>

<div className="gold-line" />

<p className="mt-6 max-w-2xl text-lg text-white/80">
  Onyx Ridge provides dependable plumbing services across the
  Dallas–Fort Worth area, specializing in water heaters, slab leaks,
  sewer repairs, gas testing, and kitchen and bath remodel plumbing.
</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="tel:8179482020" className="btn btn-gold">
              Call/Text 817-948-2020
            </a>

            <a href="#contact" className="btn btn-outline">
              Request A Free Estimate
            </a>
          </div>

          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="border-l border-[var(--gold)] pl-4">
              <h3 className="text-2xl font-black text-white">
                Water Heaters
              </h3>

              <p className="mt-1 text-sm text-white/70">
                Repair and installation
              </p>
            </div>

            <div className="border-l border-[var(--gold)] pl-4">
              <h3 className="text-2xl font-black text-white">
                Slab Leaks
              </h3>

              <p className="mt-1 text-sm text-white/70">
                Detection and repair work
              </p>
            </div>

            <div className="border-l border-[var(--gold)] pl-4">
              <h3 className="text-2xl font-black text-white">
                Sewer Repairs
              </h3>

              <p className="mt-1 text-sm text-white/70">
                Reliable plumbing solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          {/* glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />

          {/* watermark logo */}
          <Image
            src="/images/logov2.png"
            alt="Onyx Ridge Building Solutions"
            width={700}
            height={700}
            priority
            className="relative z-10 w-full max-w-[520px] object-contain opacity-[0.22] drop-shadow-[0_0_35px_rgba(37,99,235,0.35)]"
          />

          {/* subtle border ring */}
          <div className="absolute h-[520px] w-[520px] rounded-full border border-white/5" />
        </motion.div>
      </div>
    </section>
  );
}