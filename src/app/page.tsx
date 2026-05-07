import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Guarantees from "@/components/Guarantees";
import FeaturedWork from "@/components/FeaturedWork";
import ReviewsPreview from "@/components/ReviewsPreview";
import PromoStrip from "@/components/PromoStrip";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HomeSchema from "@/components/HomeSchema";

export default function HomePage() {
  return (
    <main>
      <HomeSchema />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Guarantees />
      <FeaturedWork />
      <ReviewsPreview />
      <PromoStrip />
      <ServiceArea />
      <CTA />
      <Footer />
    </main>
  );
}