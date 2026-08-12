"use server"
import { FAQ } from "@/components/site/FAQ";
import { GetOfferSection } from "@/components/site/GetOfferSection";
import { Hero } from "@/components/site/Hero";
import { MediaStrip } from "@/components/site/MediaStrip";
import { Process } from "@/components/site/Process";
import { SellingGold } from "@/components/site/SellingGold";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhatWeBuy } from "@/components/site/WhatWeBuy";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { CTASection } from "@/components/site/sections/CTASection";
import { Testimonials } from "../components/site/Testimonials";

import { homeData } from "./data/home";
import { Metadata } from "next";

// const metaData: Metadata = {
//   title: "InstaGold - Best Place to Sell Gold & Diamonds",
//   description: "Sell gold, silver, jewelry, and diamonds in NYC's Diamond District. Get top cash offers instantly.",
//   keywords: ["sell gold NYC", "sell diamonds NYC", "sell jewelry NYC", "cash for gold NYC", "gold buyers NYC", "platinum buyers NYC", "silver buyers NYC", "engagement rings NYC", "gold coins NYC", "loose diamonds NYC", "jewelry buyers NYC", "gold dealers NYC", "jewelry buyers New York", "jewelry buyers Manhattan", "jewelry buyers Brooklyn", "jewelry buyers Queens", "jewelry buyers Bronx", "jewelry buyers Staten Island", "jewelry buyers New Jersey", "jewelry buyers Connecticut", "jewelry buyers Long Island"],
//   openGraph: {
//     title: "InstaGold - Best Place to Sell Gold & Diamonds",
//     description: "Sell gold, silver, jewelry, and diamonds in NYC's Diamond District. Get top cash offers instantly.",
//     url: "https://instagold.com",
//     siteName: "InstaGold",
//     images: [
//       {
//         url: "https://instagold.com/images/gold.png",
//         width: 1200,
//         height: 630,
//         alt: "Gold",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "InstaGold - Best Place to Sell Gold & Diamonds",
//     description: "Sell gold, silver, jewelry, and diamonds in NYC's Diamond District. Get top cash offers instantly.",
//     images: ["https://instagold.com/images/gold.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },
//   alternates: {
//     canonical: "https://instagold.com",
//   },
//   applicationName: "InstaGold",
//   icons: {
//     icon: ["https://instagold.com/favicon.ico"],
//   },
// };

const metaData: Metadata = {
  title: homeData.meta.title,
  description: homeData.meta.description
}
export default async function Page() {
  return (
    <>
      <Hero />
      <GetOfferSection />
      <TrustStrip />
      <MediaStrip />
      <WhatWeBuy />
      <Process data={homeData.process} />
      <AboutSection data={homeData.about} />
      <SellingGold />
      <Testimonials data={homeData.testimonials} />
      <FAQ data={homeData.faqs} />
      <CTASection data={homeData.cta} />
    </>
  );
}