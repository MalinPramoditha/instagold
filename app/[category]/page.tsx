
import { categoryData } from "../data/categories/";
import { HeroSection } from "@/components/site/sections/HeroSection";
import { RateSection } from "@/components/site/sections/RateSection";
import { GetOfferSection } from "@/components/site/GetOfferSection";
import { TrustStrip } from "@/components/site/TrustStrip";
import { CompanyDetails } from "@/components/site/sections/CompanyDetails";
import { Subcategory } from "@/components/site/sections/Subcategory";
import { AboutSection } from "@/components/site/sections/AboutSection";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/sections/CTASection";

type PageParams = {
    params: Promise<{ category: string }>
}

export async function generateStaticParams() {
    return Object.keys(categoryData).map((category) => ({
        category: category
    }))
}

export async function generateMetadata({ params }: PageParams) {

    const { category } = await params;
    const data = categoryData[category as keyof typeof categoryData];

    if (!data || !data.meta) {
        return { title: "Page Not Found" }
    }

    return {
        title: data.meta.title,
        description: data.meta.description,
        alternates: {
            canonical: `https://lux-offer-pro.lovable.app/${category}`,
        }
    }


}

export default async function Page({ params }: PageParams) {
    const { category } = await params;
    const data = categoryData[category as keyof typeof categoryData]

    if (!data) { return }

    return (
        <>
            <HeroSection data={data.hero} />
            <RateSection data={data.rates} />
            <GetOfferSection />
            <TrustStrip />
            <CompanyDetails data={data.companyDetails} />
            <Subcategory data={data.whatWeBuy} />
            <AboutSection data={data.about} />
            <Process data={data.process} />
            <AboutSection data={data.location} />
            <Testimonials data={data.testimonials} />
            <FAQ data={data.faqs} />
            <CTASection
                title={data.cta.title}
                intro={data.cta.intro}
                primaryLabel={data.cta.primaryLabel}
            />
        </>
    )

}