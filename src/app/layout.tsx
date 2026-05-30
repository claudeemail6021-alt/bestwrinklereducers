import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bestwrinklereducers.com"),
  title: {
    default: "Best Wrinkle Reducers 2026 — Expert Anti-Aging Cream Reviews",
    template: "%s | BestWrinkleReducers.com",
  },
  description:
    "Independent, dermatologist-backed reviews of the best wrinkle reducers and anti-aging creams in 2026. Compare retinol creams, peptide serums, and more to find what actually works.",
  keywords: [
    "best wrinkle reducers 2026",
    "best anti-aging cream",
    "best retinol cream",
    "wrinkle cream reviews",
    "anti-aging skincare",
    "retinol vs retinal",
    "best peptide cream",
  ],
  authors: [{ name: "BestWrinkleReducers Editorial Team" }],
  creator: "BestWrinkleReducers.com",
  publisher: "BestWrinkleReducers.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bestwrinklereducers.com",
    siteName: "BestWrinkleReducers.com",
    title: "Best Wrinkle Reducers 2026 — Expert Anti-Aging Cream Reviews",
    description:
      "Honest, science-backed reviews of the best anti-aging creams and wrinkle reducers in 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BestWrinkleReducers.com — Top Anti-Aging Skincare Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Wrinkle Reducers 2026",
    description: "Honest, dermatologist-backed anti-aging cream reviews.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-adsense-account": "ca-pub-3024315445700130",
  },
  verification: { google: "wWxUJKO7_5badfwWP3Zw7M3MK_NrT5ycEgwAbOeCnqc" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3024315445700130"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18184715619"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18184715619');
        `}</Script>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G0NY9GTNBP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G0NY9GTNBP');
        `}</Script>
      </head>
      <body className="min-h-screen flex flex-col bg-cream-50 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
