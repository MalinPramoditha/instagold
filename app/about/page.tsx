import { Container, Section } from "@/components/site/blocks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About InstaGold | Trusted NYC Gold & Watch Buyer",
    description: "Learn about InstaGold, a licensed gold, watch, and jewelry buyer in NYC's Diamond District. Fair offers, expert evaluation, and same-day payment.",
    alternates: {
        canonical: "https://lux-offer-pro.lovable.app/about",
    },
};

export default function Page() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "InstaGold",
        url: "https://lux-offer-pro.lovable.app",
        telephone: "+1-212-901-5705",
        address: {
            "@type": "PostalAddress",
            streetAddress: "31 W 47th St, Suite 202",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10036",
            addressCountry: "US",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Section tone="ivory">
                <Container>
                    <h1>About</h1>
                </Container>
            </Section>
        </>
    );
}