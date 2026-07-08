import { absoluteUrl, allDayOpeningHours, business } from "@/data/business";
import { services } from "@/data/services";

export default function ServicesSchema() {
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
        areaServed: business.areaServed.map((name) => ({
          "@type": "Place",
          name,
        })),
        openingHours: "Mo-Su 00:00-23:59",
        openingHoursSpecification: allDayOpeningHours,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: business.ratingValue,
          reviewCount: business.reviewCount,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${business.url}/services#webpage`,
        url: `${business.url}/services`,
        name: `Plumbing Services DFW | ${business.name}`,
        description:
          "Drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing across Dallas-Fort Worth.",
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
            name: "Services",
            item: `${business.url}/services`,
          },
        ],
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        areaServed: business.areaServed,
        provider: {
          "@id": plumberId,
        },
        description: service.description,
        url: absoluteUrl(`/services#${service.slug}`),
      })),
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
