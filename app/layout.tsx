import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "../components/site/Footer";

export const metadata: Metadata = {
  title: "Sell Gold in NYC | InstaGold Buyers Refinery, 47th Street",
  description: "Sell gold, bullion, coins and scrap in New York at live spot-based prices. On-site testing, transparent offers and same-day payment at our West 47th Street refinery. We also buy diamonds and watches.",
};

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
