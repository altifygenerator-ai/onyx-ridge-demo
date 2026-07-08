import { allDayOpeningHours, business } from "@/data/business";
import { googleReviews } from "@/data/reviews";

export default function ReviewsSchema() {
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
        telephone: business.phone,
        email: business.email,
        priceRange: business.priceRange,
        description: business.description,
        hasMap: business.googleProfileUrl,
        openingHours: "Mo-Su 00:00-23:59",
        openingHoursSpecification: allDayOpeningHours,
        areaServed: business.areaServed,
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
      },
      {
        "@type": "WebPage",
        "@id": `${business.url}/reviews#webpage`,
        url: `${business.url}/reviews`,
        name: `Google Reviews | ${business.name}`,
        description:
          "Google reviews and customer feedback for Onyx Ridge Building Solutions, a DFW plumber serving homeowners and businesses.",
        about: {
          "@id": plumberId,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: business.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Reviews",
            item: `${business.url}/reviews`,
          },
        ],
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
