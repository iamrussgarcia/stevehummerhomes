import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Steve Hummer Homes | Licensed Real Estate",
    template: "%s | Steve Hummer Homes",
  },
  description:
    "Steve Hummer Homes — Your trusted real estate partner. Find or sell your home with confidence, integrity, and ease. Browse listings, learn about our services, and get in touch today.",
  keywords: [
    "real estate",
    "Steve Hummer",
    "homes for sale",
    "buy home",
    "sell home",
    "real estate agent",
    "property listings",
    "IDX",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stevehummerhomesllc.com",
    siteName: "Steve Hummer Homes",
    title: "Steve Hummer Homes | Licensed Real Estate",
    description:
      "Your trusted real estate partner helping you find or sell your home with confidence and ease.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
