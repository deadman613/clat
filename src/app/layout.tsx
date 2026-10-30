import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { BUSINESS_NAME } from "@/lib/site-details";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_NAME} — India's Premier CLAT & Law Entrance Preparation Platform`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    `Crack CLAT, AILET and other law entrance exams with ${BUSINESS_NAME}. Expert faculty, comprehensive study material, mock tests, daily current affairs, and personalized mentorship for aspiring law students.`,
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
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} — CLAT & Law Entrance Preparation`,
    description:
      "India's Premier CLAT & Law Entrance Preparation Platform. Expert coaching for CLAT, AILET, and all NLU admissions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — CLAT Coaching`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} — India's Premier CLAT Preparation Platform`,
    description:
      "Crack CLAT with India's most trusted law entrance preparation platform.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="antialiased" style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
