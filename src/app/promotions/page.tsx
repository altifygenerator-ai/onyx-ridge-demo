import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { promotions } from "@/data/promotions";
import PromotionsSchema from "@/components/PromotionsSchema";
export const metadata = {
  title: "Plumbing Specials & Coupons DFW | Onyx Ridge",
  description:
    "View current plumbing specials, coupons, and promotions from Onyx Ridge for water heaters, plumbing repairs, sewer repairs, slab leaks, gas testing, and remodel plumbing across Dallas–Fort Worth.",
};

export default function PromotionsPage() {
  return (
    <main>
  <PromotionsSchema />
      <Header />

      <PageHero
        eyebrow="Plumbing Specials & Coupons"
        title="Current Plumbing Promotions Across DFW"
        description="View current offers from Onyx Ridge for plumbing repairs, water heaters, sewer repairs, slab leaks, gas testing, and remodel plumbing across the Dallas–Fort Worth area."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {promotions.map((promo) => (
              <div key={promo.title} className="card">
                <span className="text-xs font-black uppercase tracking-[0.14em] text-[var(--primary)]">
                  {promo.highlight}
                </span>

                <h2 className="mt-4 text-2xl text-white">
                  {promo.title}
                </h2>

                <p className="mt-4 text-[var(--muted)]">
                  {promo.description}
                </p>

                <p className="mt-6 text-sm font-bold text-white">
                  {promo.expires}
                </p>

                <a href="tel:8179482020" className="btn btn-gold mt-6">
                  Call/Text 817-948-2020
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow">DFW Plumbing Deals</span>

          <h2 className="max-w-3xl">
            Plumbing Specials For Homeowners Across Dallas–Fort Worth
          </h2>

          <div className="gold-line" />

          <p className="mt-6 max-w-3xl text-[var(--muted)]">
            Onyx Ridge provides plumbing specials and seasonal promotions for
            homeowners needing water heater replacement, sewer repair, slab leak
            service, gas testing, kitchen plumbing, bathroom plumbing, and
            remodel plumbing across the DFW area.
          </p>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}