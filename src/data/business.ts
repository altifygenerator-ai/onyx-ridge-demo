export const business = {
  name: "Onyx Ridge Building Solutions",
  alternateName: "Onyx Ridge Builders",
  category: "Plumber",
  url: "https://onyxridge.net",
  logo: "/images/logov2.png",
  shareImage: "/onyxridge-share.jpg",
  phone: "817-948-2020",
  phoneHref: "tel:8179482020",
  email: "jake_shockley@outlook.com",
  emailHref: "mailto:jake_shockley@outlook.com",
  googleProfileUrl: "https://share.google/lHkqmRbKPNtC3A0y0",
  ratingValue: "5.0",
  reviewCount: 9,
  license: "RMP-46760",
  priceRange: "$$",
  hoursLabel: "Open 24 hours",
  areaServed: [
    "Dallas-Fort Worth",
    "Granbury TX",
    "Mansfield TX",
    "Fort Worth TX",
    "Dallas TX",
    "Arlington TX",
    "North Texas",
  ],
  serviceTypes: [
    "Drain Cleaning",
    "Water Heater Repair",
    "Water Heater Installation",
    "Sewer Line Repair",
    "Water Line Repair",
    "Gas Piping",
    "Gas Testing",
    "Slab Leak Repair",
    "Kitchen Plumbing",
    "Bathroom Remodel Plumbing",
    "New Construction Plumbing",
  ],
  description:
    "Onyx Ridge Building Solutions is a local family owned plumbing and construction company serving homeowners and businesses throughout the DFW area. Led by a licensed Master Plumber, Onyx Ridge handles drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing.",
  shortDescription:
    "Local DFW plumber for drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodels, and new construction plumbing.",
};

export const absoluteUrl = (path = "") => {
  if (!path) return business.url;
  if (path.startsWith("http")) return path;
  return `${business.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export const allDayOpeningHours = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
].map((dayOfWeek) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek,
  opens: "00:00",
  closes: "23:59",
}));
