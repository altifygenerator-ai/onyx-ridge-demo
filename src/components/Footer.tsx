import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] py-10">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.7fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <Image
              src="/images/logov2.png"
              alt="Onyx Ridge Building Solutions"
              width={86}
              height={86}
              className="mb-5"
            />

            <h3 className="text-white">Onyx Ridge Building Solutions</h3>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
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

          {/* PAGES */}
          <div className="md:pt-[70px]">
            <h3 className="text-white">Pages</h3>

            <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>

              <Link href="/gallery" className="transition hover:text-white">
                Gallery
              </Link>

              <Link href="/promotions" className="transition hover:text-white">
                Promotions
              </Link>

              <Link href="/about" className="transition hover:text-white">
                About
              </Link>

              <Link href="#contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="md:pt-[70px]">
            <h3 className="text-white">Contact</h3>

            <div className="mt-5 grid gap-3 text-sm text-[var(--muted)]">
              <a href="tel:8179482020" className="transition hover:text-white">
                817-948-2020
              </a>

              <a
                href="mailto:jake_shockley@outlook.com"
                className="transition hover:text-white"
              >
                jake_shockley@outlook.com
              </a>

              <span>Dallas–Fort Worth Area</span>
            </div>
          </div>

          {/* LICENSE */}
          <div className="md:pt-[70px]">
            <h3 className="text-white">License Info</h3>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                Texas Plumbing
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                License RMP-46760
              </p>

              <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                Regulated by the Texas State Board of Plumbing Examiners.
              </p>

              <div className="mt-4 grid gap-2 text-xs leading-relaxed text-[var(--muted)]">
                <span>
                  7915 Cameron Road
                  <br />
                  Austin, TX 78751
                </span>

                <a href="tel:5129365200" className="transition hover:text-white">
                  512-936-5200
                </a>
              </div>
            </div>
          </div>
        </div>

     

        {/* BOTTOM */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p className="max-w-none">
              © {new Date().getFullYear()} Onyx Ridge Building Solutions. All
              rights reserved.
            </p>

            <a
              href="https://hometownwebservicesar.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white md:whitespace-nowrap"
            >
              Website by Hometown Web Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}