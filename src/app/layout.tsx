import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { business } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),

  title: {
    default:
      "Onyx Ridge Building Solutions | DFW Plumber & Plumbing Services",
    template: "%s | Onyx Ridge Building Solutions",
  },

  description:
    "Onyx Ridge Building Solutions is a local DFW plumber serving homeowners and businesses with drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodel plumbing, and new construction plumbing.",

  keywords: [
    "Onyx Ridge Building Solutions",
    "Onyx Ridge Builders",
    "Onyx Ridge plumbing",
    "Onyx Ridge Building Solutions DFW",
    "DFW plumber",
    "Dallas plumber",
    "Fort Worth plumber",
    "Granbury plumber",
    "Mansfield plumber",
    "Dallas Fort Worth plumber",
    "plumber Dallas TX",
    "plumber Fort Worth TX",
    "plumber Granbury TX",
    "plumber Mansfield TX",
    "plumbing services DFW",
    "plumbing services Dallas",
    "plumbing services Fort Worth",
    "residential plumber DFW",
    "commercial plumber DFW",
    "licensed plumber DFW",
    "Master Plumber DFW",
    "drain cleaning DFW",
    "water heater installation DFW",
    "water heater replacement DFW",
    "water heater repair DFW",
    "slab leak repair DFW",
    "sewer repair DFW",
    "sewer line repair DFW",
    "water line repair DFW",
    "gas piping DFW",
    "gas testing DFW",
    "gas line testing DFW",
    "kitchen plumbing DFW",
    "bathroom plumbing DFW",
    "remodel plumbing DFW",
    "new construction plumbing DFW",
    "plumbing contractor DFW",
    "Dallas-Fort Worth plumbing",
    "Texas plumbing contractor",
    business.license,
  ],

  verification: {
    google: "7g9B6FNo6tkWbP9kK25HWqV2-mjgSkXrkBMwKuCMnT4",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Onyx Ridge Building Solutions | DFW Plumber & Plumbing Services",
    description:
      "Local DFW plumber for drain cleaning, water heaters, sewer and water line repairs, gas piping, slab leaks, remodels, and new construction plumbing.",
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${business.url}${business.shareImage}`,
        width: 1200,
        height: 630,
        alt: "Onyx Ridge Building Solutions - DFW Plumbing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Onyx Ridge Building Solutions | DFW Plumbing Services",
    description:
      "Drain cleaning, water heaters, slab leak repair, sewer and water line repairs, gas piping, remodel plumbing, and new construction plumbing across DFW.",
    images: [`${business.url}${business.shareImage}`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Plumbing Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
