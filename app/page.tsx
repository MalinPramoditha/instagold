"use server"
import { FAQ } from "@/components/site/FAQ";
import { Testimonials } from "../components/site/Testimonials";
import { CTASection } from "@/components/site/sections/CTASection";
import { Process } from "@/components/site/Process";
import { PROCESS } from "./data/HowitWorks";
import { TrustStrip } from "@/components/site/TrustStrip";
import { MediaStrip } from "@/components/site/MediaStrip";
import { WhatWeBuy } from "@/components/site/WhatWeBuy";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { Hero } from "@/components/site/Hero";
import { SellingGold } from "@/components/site/SellingGold";
import { GetOfferSection } from "@/components/site/GetOfferSection";
import { FAQS } from "@/app/data/FAQS";
import { TESTIMONIALS } from "@/app/data/testimonials";
import { WHY } from "./data/Why";

export default async function Page() {
  return (
    <>
      <Hero />
      <GetOfferSection />
      <TrustStrip />
      <MediaStrip />
      <WhatWeBuy />
      {/* <Process data={PROCESS} /> */}
      <AboutSection data={WHY} />
      <SellingGold />
      <Testimonials data={TESTIMONIALS} />
      <FAQ data={FAQS} />
      <CTASection title="Find out what your gold is worth today" intro="Share a few details and receive a private, no-obligation valuation at today's spot price." />
    </>
  );
}