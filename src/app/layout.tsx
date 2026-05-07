import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://onyxridge.net"),

  title: {
    default:
      "Onyx Ridge Building Solutions | DFW Plumbing Services",
    template: "%s | Onyx Ridge Building Solutions",
  },

  description:
    "Onyx Ridge Building Solutions provides plumbing services across the Dallas–Fort Worth area including water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, bathroom plumbing, and remodel plumbing.",

  keywords: [
    "DFW plumber",
    "Dallas plumber",
    "Fort Worth plumber",
    "water heater installation",
    "slab leak repair",
    "sewer repair",
    "gas testing",
    "kitchen plumbing",
    "bathroom plumbing",
    "remodel plumbing",
    "Dallas-Fort Worth plumbing",
    "Onyx Ridge Building Solutions",
  ],

  alternates: {
    canonical: "https://onyxridge.net",
  },

  openGraph: {
    title:
      "Onyx Ridge Building Solutions | DFW Plumbing Services",

    description:
      "Water heaters, slab leaks, sewer repairs, gas testing, kitchen plumbing, bathroom plumbing, and remodel plumbing across Dallas–Fort Worth.",

    url: "https://onyxridge.net",

    siteName: "Onyx Ridge Building Solutions",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Onyx Ridge Building Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Onyx Ridge Building Solutions | DFW Plumbing Services",

    description:
      "Water heaters, sewer repairs, slab leaks, gas testing, kitchen plumbing, bathroom plumbing, and remodel plumbing across DFW.",

    images: ["/og-image.png"],
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
      <body>{children}</body>
    </html>
  );
}