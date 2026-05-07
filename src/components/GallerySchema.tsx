import { galleryItems } from "@/data/gallery";

export default function GallerySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Onyx Ridge Plumbing Work Gallery",
    url: "https://onyxridge.net/gallery",
    description:
      "Gallery of recent plumbing work from Onyx Ridge Building Solutions across the Dallas-Fort Worth area, including water heaters, under-sink plumbing, underground plumbing, bathroom plumbing, kitchen plumbing, and remodel plumbing.",
    image: galleryItems.map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      contentUrl: `https://onyxridge.net${item.image}`,
      description: item.description,
    })),
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