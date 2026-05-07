import { services } from "@/data/services";

export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        name: "Onyx Ridge Building Solutions",
        url: "https://onyxridge.net/services",
        telephone: "817-948-2020",
        areaServed: [
          "Dallas-Fort Worth",
          "Fort Worth TX",
          "Dallas TX",
          "North Texas",
        ],
        description:
          "Onyx Ridge Building Solutions provides plumbing services across the Dallas-Fort Worth area including water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, and bathroom remodel plumbing.",
      },
      ...services.map((service) => ({
        "@type": "Service",
        name: service.title,
        serviceType: service.title,
        areaServed: "Dallas-Fort Worth",
        provider: {
          "@type": "Plumber",
          name: "Onyx Ridge Building Solutions",
          telephone: "817-948-2020",
        },
        description: service.description,
        url: `https://onyxridge.net/services#${service.slug}`,
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