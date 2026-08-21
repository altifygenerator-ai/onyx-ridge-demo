import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { business } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),

  title: {
    default: "DFW Plumber | Onyx Ridge Building Solutions",
    template: "%s | Onyx Ridge Building Solutions",
  },

  description:
    "DFW plumber for drain cleaning, water heaters, sewer and water line repair, gas piping, slab leaks, remodel plumbing, and new construction. RMP-46760.",

  verification: {
    google: "7g9B6FNo6tkWbP9kK25HWqV2-mjgSkXrkBMwKuCMnT4",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "DFW Plumber | Onyx Ridge Building Solutions",
    description:
      "DFW plumbing for drain cleaning, water heaters, sewer and water line repair, gas piping, slab leaks, remodels, and new construction.",
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${business.url}${business.shareImage}`,
        width: 1200,
        height: 630,
        alt: "Onyx Ridge Building Solutions DFW plumbing services",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DFW Plumber | Onyx Ridge Building Solutions",
    description:
      "DFW plumbing for water heaters, drain cleaning, sewer and water line repair, gas piping, slab leaks, remodels, and new construction.",
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
