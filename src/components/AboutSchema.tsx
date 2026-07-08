import { allDayOpeningHours, business } from "@/data/business";

export default function AboutSchema() {
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
        identifier: {
          "@type": "PropertyValue",
          name: "Texas Plumbing License",
          value: business.license,
        },
      },
      {
        "@type": "AboutPage",
        "@id": `${business.url}/about#webpage`,
        url: `${business.url}/about`,
        name: `About ${business.name}`,
        description: business.description,
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
            name: "About",
            item: `${business.url}/about`,
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
