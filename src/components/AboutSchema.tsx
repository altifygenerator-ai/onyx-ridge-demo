export default function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Onyx Ridge Building Solutions",
    url: "https://onyxridge.net/about",
    telephone: "817-948-2020",
    areaServed: [
      "Dallas-Fort Worth",
      "Fort Worth TX",
      "Dallas TX",
      "North Texas",
    ],
    description:
      "Onyx Ridge Building Solutions provides plumbing services across the Dallas-Fort Worth area including water heaters, sewer repairs, slab leaks, gas testing, and kitchen and bath remodels.",
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