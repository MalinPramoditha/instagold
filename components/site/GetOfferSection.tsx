import { Container, Section } from "./ui";
import { SITE } from "@/app/data/site";
import { OfferForm } from "./OfferForm";

export function GetOfferSection({ initialCategory }: { initialCategory?: string }) {
    return (
        <section aria-label="Start your free offer" className="border-y border-hairline bg-surface-grey py-10 sm:py-14">
            <Container>
                <div className="mx-auto max-w-2xl">
                    <OfferForm compact initialCategory={initialCategory} />
                    <p className="mt-3 text-sm text-muted-foreground">
                        Prefer to speak with an expert?{" "}
                        <a href={SITE.phoneHref} className="font-medium text-link underline underline-offset-4">
                            Call {SITE.phone}
                        </a>
                    </p>
                </div>
            </Container>
        </section>
    )
}