import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Avorria Cycle | Digital Ecosystems for Local Bike Shops",
  description: "We build complete digital ecosystems for independent bike shops — ecommerce website, workshop management, and local SEO.",
  metadataBase: new URL("https://cycles.avorria.com"),
  openGraph: {
    title: "Avorria Cycle | Digital Ecosystems for Local Bike Shops",
    description: "We build complete digital ecosystems for independent bike shops — ecommerce website, workshop management, and local SEO.",
    url: "https://cycles.avorria.com",
    siteName: "Avorria Cycle",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    title: "Avorria Cycle | Digital Ecosystems for Local Bike Shops",
    description: "We build complete digital ecosystems for independent bike shops.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

