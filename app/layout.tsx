import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "../components/site/Footer";

export const metaData: Metadata = {
  title: "Sell Gold NYC | Diamond District Gold Buyer | InstaGold",
  description: "Sell gold, coins, bullion, diamonds and luxury watches in NYC. Licensed Diamond District buyer on 47th St paying live spot prices, same day. Free offer.",
  alternates: {
    canonical: "https://instagoldbuyers.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sell Gold NYC | Diamond District Gold Buyer | InstaGold",
    description: "Sell gold, coins, bullion, diamonds and luxury watches in NYC. Licensed Diamond District buyer on 47th St paying live spot prices, same day. Free offer.",
    url: "https://instagoldbuyers.com/",
    type: "website",
    images: [
      {
        url: "https://instagoldbuyers.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InstaGold",
      },
    ],
    siteName: "InstaGold",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Gold NYC | Diamond District Gold Buyer | InstaGold",
    description: "Sell gold, coins, bullion, diamonds and luxury watches in NYC. Licensed Diamond District buyer on 47th St paying live spot prices, same day. Free offer.",
    images: [
      {
        url: "https://instagoldbuyers.com/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InstaGold",
      },
    ],
  },

}


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/Commissioner-VariableFont_slnt,wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
