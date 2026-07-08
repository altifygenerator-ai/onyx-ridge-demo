import { business } from "@/data/business";
import { promotions } from "@/data/promotions";

export default function PromotionsSchema() {
  const plumberId = `${business.url}/#plumber`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": plumberId,
        name: business.name,
        url: `${business.url}/promotions`,
        telephone: business.phone,
        areaServed: business.areaServed,
        description: business.shortDescription,
      },
      {
        "@type": "WebPage",
        "@id": `${business.url}/promotions#webpage`,
        url: `${business.url}/promotions`,
        name: `Plumbing Specials DFW | ${business.name}`,
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
            name: "Promotions",
            item: `${business.url}/promotions`,
          },
        ],
      },
      ...promotions.map((promo) => ({
        "@type": "Offer",
        name: promo.title,
        description: promo.description,
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          description: promo.highlight,
        },
        offeredBy: {
          "@id": plumberId,
        },
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
