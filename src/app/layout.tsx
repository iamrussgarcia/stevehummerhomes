import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
