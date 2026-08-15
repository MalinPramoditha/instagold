
import { categoryData } from "../data/categories";
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
            canonical: `https://instagoldbuyers.com/${category}`,
        }
    }



}

export default async function Page({ params }: PageParams) {
    const { category } = await params;
    const data = categoryData[category as keyof typeof categoryData]

    if (!data) { return }

    const faqSchema = data.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    } : null;

    const allSchemas = [
        ...(data.schema || []),
        ...(faqSchema ? [faqSchema] : [])
    ];

    return (
        <>
            {allSchemas.map((schemaObj, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
                />
            ))}

            {data.hero && <HeroSection data={data.hero} />}
            <RateSection />
            <GetOfferSection initialCategory={data.offerForm?.initialCategory} />
            <TrustStrip />
            {data.companyDetails && <CompanyDetails data={data.companyDetails} />}
            {data.whatWeBuy && <Subcategory data={data.whatWeBuy} />}
            {data.about && <AboutSection data={data.about} />}
            {data.process && <Process data={data.process} />}
            {data.location && <AboutSection data={data.location} />}
            {data.testimonials && <Testimonials data={data.testimonials} />}
            {data.faqs && <FAQ data={data.faqs} />}
            {data.cta && <CTASection data={data.cta} />}
        </>
    )

}