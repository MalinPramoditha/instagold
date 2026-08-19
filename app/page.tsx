import { FAQ } from "@/components/site/FAQ";
import { GetOfferSection } from "@/components/site/GetOfferSection";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { SellingGold } from "@/components/site/SellingGold";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhatWeBuy } from "@/components/site/WhatWeBuy";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { CTASection } from "@/components/site/sections/CTASection";
import { Testimonials } from "@/components/site/Testimonials";
import { RateSection } from "@/components/site/sections/RateSection";

import { homeData } from "./data/homeData";
import { homeSchema } from "./data/schema/homeSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
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
        url: "https://instagoldbuyers.com/assets/og-image.png",
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
        url: "https://instagoldbuyers.com/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "InstaGold",
      },
    ],
  },

}


export default async function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema.organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema.website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema.breadcrumbList) }}
      />

      <Hero />
      <RateSection />
      <GetOfferSection />
      <TrustStrip />
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