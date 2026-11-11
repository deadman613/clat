import type { Metadata } from "next";

export const HOME_METADATA: Metadata = {
  title: {
    absolute: "CLAT Coaching in Delhi | Online & Offline | Delhi Law School",
  },
  description:
    "CLAT coaching in Delhi for students across North India. Free CLAT resources, study material, and demo classes. Online and offline batches.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Delhi Law School",
    url: "/",
    title: "CLAT Coaching in Delhi: Online and Offline Classes",
    description:
      "Free demo classes, free CLAT resources and study material. Batches for students across North India.",
    images: [
      {
        url: "/logo.jpeg",
        alt: "Delhi Law School logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CLAT Coaching in Delhi: Online and Offline Classes",
    description:
      "Free demo classes, free CLAT resources and study material. Batches for students across North India.",
    images: ["/logo.jpeg"],
  },
};
