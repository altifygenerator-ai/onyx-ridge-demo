"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "Promotions", href: "/promotions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

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

            <span className="block text-[11px] uppercase tracking-[0.18em] text-[var(--primary)] mt-1">
              Building Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/85 hover:text-[var(--primary)] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:8179482020" className="text-sm font-bold text-white">
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

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden text-white"
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur">
          <div className="container py-6">
            <nav className="grid gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:8179482020"
                onClick={() => setOpen(false)}
                className="btn btn-gold mt-2"
              >
                Call/Text 817-948-2020
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}