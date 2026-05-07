export default function ReviewsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Onyx Ridge Building Solutions",
    url: "https://onyxridge.net/reviews",
    telephone: "817-948-2020",
    areaServed: [
      "Dallas-Fort Worth",
      "Fort Worth TX",
      "Dallas TX",
      "North Texas",
    ],
    description:
      "Reviews and customer feedback for Onyx Ridge Building Solutions, a DFW plumbing company providing water heaters, sewer repairs, slab leaks, gas testing, kitchen plumbing, and bathroom remodel plumbing.",
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