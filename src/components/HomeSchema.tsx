export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",

    name: "Onyx Ridge Building Solutions",

    url: "https://onyxridge.net",

    telephone: "817-948-2020",

    email: "jake_shockley@outlook.com",

    areaServed: [
      "Dallas-Fort Worth",
      "Fort Worth TX",
      "Dallas TX",
      "Arlington TX",
      "North Texas",
    ],

    serviceType: [
      "Water Heater Repair",
      "Water Heater Installation",
      "Slab Leak Repair",
      "Sewer Repair",
      "Gas Testing",
      "Kitchen Plumbing",
      "Bathroom Remodel Plumbing",
    ],

    description:
      "Onyx Ridge Building Solutions provides plumbing services across the Dallas-Fort Worth area including water heaters, slab leaks, sewer repairs, gas testing, and kitchen and bath remodel plumbing.",

    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
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