import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://onyxridge.net"),

  title: {
    default:
      "Onyx Ridge Building Solutions | Plumbing Services in Dallas–Fort Worth, TX",
    template: "%s | Onyx Ridge Building Solutions",
  },

  description:
    "Onyx Ridge Building Solutions provides professional plumbing services across the Dallas–Fort Worth area, including water heaters, slab leak repair, sewer repairs, gas testing, kitchen plumbing, bathroom plumbing, remodel plumbing, and new construction plumbing.",

  keywords: [
    "Onyx Ridge Building Solutions",
    "Onyx Ridge plumbing",
    "Onyx Ridge Building Solutions DFW",
    "DFW plumber",
    "Dallas plumber",
    "Fort Worth plumber",
    "Dallas Fort Worth plumber",
    "plumber Dallas TX",
    "plumber Fort Worth TX",
    "plumbing services DFW",
    "plumbing services Dallas",
    "plumbing services Fort Worth",
    "residential plumber DFW",
    "residential plumbing Dallas",
    "residential plumbing Fort Worth",
    "local plumber DFW",
    "licensed plumber DFW",
    "water heater installation DFW",
    "water heater replacement DFW",
    "water heater repair DFW",
    "slab leak repair DFW",
    "slab leak detection DFW",
    "sewer repair DFW",
    "sewer line repair DFW",
    "gas testing DFW",
    "gas line testing DFW",
    "kitchen plumbing DFW",
    "bathroom plumbing DFW",
    "remodel plumbing DFW",
    "new construction plumbing DFW",
    "plumbing contractor DFW",
    "Dallas-Fort Worth plumbing",
    "Dallas plumbing contractor",
    "Fort Worth plumbing contractor",
    "DFW plumbing contractor",
    "Texas plumbing contractor",
    "RMP-46760",
  ],

  verification: {
    google: "7g9B6FNo6tkWbP9kK25HWqV2-mjgSkXrkBMwKuCMnT4",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Onyx Ridge Building Solutions | Plumbing Services in Dallas–Fort Worth, TX",

    description:
      "Professional plumbing services across Dallas–Fort Worth including water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, bathroom plumbing, remodel plumbing, and new construction plumbing.",

    url: "https://onyxridge.net",

    siteName: "Onyx Ridge Building Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://onyxridge.net/onyxridge-share.jpg",
        width: 1200,
        height: 630,
        alt: "Onyx Ridge Building Solutions - DFW Plumbing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Onyx Ridge Building Solutions | DFW Plumbing Services",

    description:
      "Water heaters, slab leak repair, sewer repairs, gas testing, kitchen plumbing, bathroom plumbing, remodel plumbing, and new construction plumbing across Dallas–Fort Worth.",

    images: ["https://onyxridge.net/onyxridge-share.jpg"],
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