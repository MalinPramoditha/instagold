import { SITE } from "@/app/data/site"
import { Section } from "@/components/site/blocks/Sections";
import { Container } from "@/components/site/blocks/Container";
import { Button } from "@/components/ui/button"
import Link from "next/link";
// import Cta from "./Cta";


export function CTASection({
    title,
    intro,
    primaryLabel = "Get a Free Offer",
}: {
    title: string;
    intro?: string;
    primaryLabel?: string;
}) {
    return (
        <Section tone="light" labelledBy="final-cta-title">
            <Container className="text-center">
                <h2 id="final-cta-title" className="mx-auto max-w-2xl text-2xl leading-tight sm:text-3xl">
                    {title}
                </h2>
                {intro ? (
                    <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
                ) : null}
                <div className="mt-7 flex justify-center">
                    <Link href={SITE.offerUrl}>
                        <Button variant="default" size="lg" className="bg-champagne hover:bg-brand-hover text-ink px-7 py-6"> {primaryLabel}</Button>
                    </Link>
                </div>
                {/* <AlternativeContact className="mt-5 text-sm" /> */}
                <address className="mt-4 text-sm not-italic text-muted-foreground">
                    <a
                        href={SITE.mapsUrl}
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        {SITE.address.street}, {SITE.address.locality}, {SITE.address.region} {SITE.address.postal}
                    </a>
                </address>
            </Container>
        </Section>
    );
}