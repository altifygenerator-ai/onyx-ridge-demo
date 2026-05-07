export default function PromotionsSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "LocalBusiness",

        name: "Onyx Ridge Building Solutions",

        url: "https://onyxridge.net/promotions",

        telephone: "817-948-2020",

        areaServed: [
          "Dallas-Fort Worth",
          "Fort Worth TX",
          "Dallas TX",
        ],

        description:
          "Onyx Ridge provides plumbing services and plumbing specials across the Dallas–Fort Worth area including water heaters, sewer repairs, slab leaks, gas testing, and remodel plumbing.",
      },

      {
        "@type": "Offer",

        name: "Free Plumbing Estimates",

        description:
          "Free plumbing estimates for water heaters, sewer repairs, slab leaks, and remodel plumbing across DFW.",

        availability: "https://schema.org/InStock",
      },

      {
        "@type": "Offer",

        name: "Water Heater Installation Specials",

        description:
          "Seasonal plumbing specials and water heater installation offers in Dallas–Fort Worth.",

        availability: "https://schema.org/InStock",
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