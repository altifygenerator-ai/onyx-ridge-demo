import { absoluteUrl, allDayOpeningHours, business } from "@/data/business";
import { googleReviews } from "@/data/reviews";
import { services } from "@/data/services";

export default function HomeSchema() {
  const plumberId = `${business.url}/#plumber`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": plumberId,
        name: business.name,
        alternateName: business.alternateName,
        url: business.url,
        image: absoluteUrl(business.shareImage),
        logo: absoluteUrl(business.logo),
        telephone: business.phone,
        email: business.email,
        priceRange: business.priceRange,
        description: business.description,
        hasMap: business.googleProfileUrl,
        areaServed: business.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        address: {
          "@type": "PostalAddress",
          addressRegion: "TX",
          addressCountry: "US",
        },
        identifier: {
          "@type": "PropertyValue",
          name: "Texas Plumbing License",
          value: business.license,
        },
        openingHours: "Mo-Su 00:00-23:59",
        openingHoursSpecification: allDayOpeningHours,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: business.ratingValue,
          reviewCount: business.reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
        review: googleReviews.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody: review.body,
        })),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            serviceType: service.title,
            url: absoluteUrl(`/services#${service.slug}`),
            areaServed: "Dallas-Fort Worth",
            provider: {
              "@id": plumberId,
            },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${business.url}/#website`,
        url: business.url,
        name: business.name,
        publisher: {
          "@id": plumberId,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${business.url}/#webpage`,
        url: business.url,
        name: `${business.name} | DFW Plumbing Services`,
        description: business.shortDescription,
        isPartOf: {
          "@id": `${business.url}/#website`,
        },
        about: {
          "@id": plumberId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
