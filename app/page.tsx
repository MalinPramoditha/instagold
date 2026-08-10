"use server"
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "../components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { PROCESS } from "./data/HowitWorks";
import { TrustStrip } from "@/components/site/TrustStrip";
import { MediaStrip } from "@/components/site/MediaStrip";
import { WhatWeBuy } from "@/components/site/WhatWeBuy";
import { AboutSection } from "@/components/site/AboutSection";
import { Hero } from "@/components/site/Hero";
import { SellingGold } from "@/components/site/SellingGold";
import { GetOfferSection } from "@/components/site/GetOfferSection";
export default async function Page() {
  return (
    <>
      <Hero />
      <GetOfferSection />
      <TrustStrip />
      <MediaStrip />
      <WhatWeBuy />
      <HowItWorks eyebrow="How it works" title="Three steps from question to payment" steps={PROCESS} ctaLabel="Get an offer" />
      <AboutSection />
      <SellingGold />
      <Testimonials />
      <FAQ />
      <CTASection title="Find out what your gold is worth today" intro="Share a few details and receive a private, no-obligation valuation at today's spot price." />
    </>
  );
}