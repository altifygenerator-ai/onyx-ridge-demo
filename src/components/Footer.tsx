import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-10">
<div className="container">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          
          {/* BRAND */}
          <div>
            <Image
              src="/images/logov2.png"
              alt="Onyx Ridge Building Solutions"
              width={86}
              height={86}
              className="mb-5"
            />

            <h3 className="text-white">
              Onyx Ridge Building Solutions
            </h3>

            <p className="mt-4 max-w-md text-sm text-[var(--muted)]">
              Plumbing services across the Dallas–Fort Worth area including
              water heaters, slab leaks, sewer repairs, gas testing, kitchen
              plumbing, bathroom plumbing, and remodel plumbing.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 text-xs font-bold text-white/75">
                Free Estimates
              </span>

              <span className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 text-xs font-bold text-white/75">
                DFW Service Area
              </span>

              <span className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 text-xs font-bold text-white/75">
                Residential Plumbing
              </span>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white">Pages</h3>

            <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>

              <Link href="/gallery" className="hover:text-white transition">
                Gallery
              </Link>

              <Link href="/promotions" className="hover:text-white transition">
                Promotions
              </Link>

              <Link href="/about" className="hover:text-white transition">
                About
              </Link>

              <Link href="#contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white">Contact</h3>

            <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <a
                href="tel:8179482020"
                className="hover:text-white transition"
              >
                817-948-2020
              </a>

              <a
                href="mailto:jake_shockley@outlook.com"
                className="hover:text-white transition"
              >
                jake_shockley@outlook.com
              </a>

              <span>Dallas–Fort Worth Area</span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Onyx Ridge Building Solutions. All
            rights reserved.
          </p>

          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Website by Hometown Web Services
          </a>
        </div>
      </div>
    </footer>
  );
}