import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LexAscent — India's Premier CLAT & Law Entrance Preparation Platform",
    template: "%s | LexAscent",
  },
  description:
    "Crack CLAT, AILET and other law entrance exams with LexAscent. Expert faculty, comprehensive study material, mock tests, daily current affairs, and personalized mentorship for aspiring law students.",
  keywords: [
    "CLAT coaching",
    "CLAT preparation",
    "CLAT online coaching",
    "CLAT mock test",
    "CLAT test series",
    "CLAT current affairs",
    "AILET preparation",
    "law entrance exam",
    "NLU admission",
    "CLAT coaching India",
  ],
  authors: [{ name: "LexAscent" }],
  creator: "LexAscent",
  publisher: "LexAscent",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://lexascent.in",
    siteName: "LexAscent",
    title: "LexAscent — Rise Above. Lead with Law.",
    description:
      "India's Premier CLAT & Law Entrance Preparation Platform. Expert coaching for CLAT, AILET, and all NLU admissions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LexAscent — CLAT Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LexAscent — India's Premier CLAT Preparation Platform",
    description:
      "Crack CLAT with India's most trusted law entrance preparation platform.",
    images: ["/og-image.png"],
    creator: "@lexascent",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-inter antialiased bg-white text-slate-900">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
