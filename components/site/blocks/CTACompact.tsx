import { Container, Section, CTA } from "./index"
import { SITE } from "@/app/data/site"

export const CTACompact = ({ title }: { title: string }) => {
    return (

        <Section tone="light" labelledBy="what-we-buy-cta-title">
            <Container className="text-center">
                <h2 id="what-we-buy-cta-title" className="mx-auto max-w-xl text-2xl leading-tight sm:text-3xl">
                    {title}
                </h2>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                    <CTA href={SITE.offerUrl}>Get My Free Offer</CTA>
                    <CTA href={SITE.phoneHref} variant="outline" >
                        Call {SITE.phone}
                    </CTA>
                </div>
            </Container>
        </Section>
    )
}