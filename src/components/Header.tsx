"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logov2.png"
            alt="Onyx Ridge Building Solutions"
            width={62}
            height={62}
            className="object-contain"
            priority
          />

          <div className="leading-none">
            <span className="block text-2xl font-black tracking-tight text-white">
              ONYX RIDGE
            </span>

            <span className="block text-[11px] uppercase tracking-[0.18em] text-[var(--gold)] mt-1">
              Building Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/services">
  Services
</Link>

          <Link
            href="/about"
            className="text-sm font-semibold text-white/85 hover:text-[var(--gold)] transition"
          >
            About
          </Link>

          <Link
            href="#contact"
            className="text-sm font-semibold text-white/85 hover:text-[var(--gold)] transition"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:8179482020"
            className="text-sm font-bold text-white"
          >
            Call/Text 817-948-2020
          </a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="btn btn-gold"
          >
            Free Estimate
          </motion.a>
        </div>

        <button className="lg:hidden text-white">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}