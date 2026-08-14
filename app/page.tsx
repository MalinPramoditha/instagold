"use server"
import { FAQ } from "@/components/site/FAQ";
import { GetOfferSection } from "@/components/site/GetOfferSection";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { SellingGold } from "@/components/site/SellingGold";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhatWeBuy } from "@/components/site/WhatWeBuy";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { CTASection } from "@/components/site/sections/CTASection";
import { Testimonials } from "../components/site/Testimonials";

import { homeData } from "./data/homeData";
import { Metadata } from "next";

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