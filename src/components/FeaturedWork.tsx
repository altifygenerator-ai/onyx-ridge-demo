import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/data/gallery";

export default function FeaturedWork() {
  const featured = galleryItems.slice(0, 6);

  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow">Recent Work</span>

            <h2 className="max-w-2xl">
              Real Plumbing And Remodel Work From Onyx Ridge
            </h2>

            <div className="gold-line" />

            <p className="max-w-2xl text-[var(--muted)]">
              A look at recent water heater installs, sewer repairs, under-sink
              plumbing, slab leak work, and remodel plumbing projects.
            </p>
          </div>

          <Link href="/gallery" className="btn btn-outline">
            View Full Gallery
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[#0b0d12]"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--primary)]">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}