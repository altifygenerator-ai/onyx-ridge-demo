import { absoluteUrl, business } from "@/data/business";
import { galleryItems } from "@/data/gallery";

export default function GallerySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": `${business.url}/gallery#gallery`,
        name: "Onyx Ridge Plumbing Work Gallery",
        url: `${business.url}/gallery`,
        description:
          "Gallery of recent plumbing work from Onyx Ridge Building Solutions across the Dallas-Fort Worth area, including water heaters, under-sink plumbing, underground plumbing, bathroom plumbing, kitchen plumbing, and remodel plumbing.",
        image: galleryItems.map((item) => ({
          "@type": "ImageObject",
          name: item.title,
          contentUrl: absoluteUrl(item.image),
          description: item.description,
        })),
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
            name: "Gallery",
            item: `${business.url}/gallery`,
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
