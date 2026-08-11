import { Section, Container } from "./ui";
import { SITE } from "@/app/data/site";
// import { AlternativeContact } from "../site/AlternativeContact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export function FAQ({ data }: { data: any }) {
    return (
        <Section tone="ivory" labelledBy="faq-title">
            <Container className="text-center">
                <h2 id="faq-title" className="text-2xl leading-tight sm:text-3xl">
                    Frequently asked questions
                </h2>
                <Accordion defaultValue={["item-0"]} className="mx-auto mt-6 max-w-3xl text-left rounded-2xl border border-hairline bg-card px-5 py-1 sm:px-8 sm:py-2">
                    {data.map((faq: { q: string, a: string }, index: number) => (
                        <AccordionItem value={`item-${index}`} key={index} className="group border-b border-hairline last:border-b-0">
                            <AccordionTrigger className="text-base font-semibold leading-snug text-foreground sm:text-lg">{faq.q}</AccordionTrigger>
                            <AccordionContent className="measure pb-6 text-base leading-relaxed text-muted-foreground">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mt-6 ">
                    <p className="text-base text-muted-foreground text-sm">
                        Not ready to submit online?{" "}
                        <a
                            href={SITE.phoneHref}
                            className="font-medium text-foreground hover:text-brand"
                        >
                            Call {SITE.phone}
                        </a>{" "}
                        or{" "}
                        <a
                            href="/contact-us"
                            className="font-medium text-foreground hover:text-brand"
                        >
                            book a private appointment
                        </a>
                        .
                    </p>
                </div>

            </Container>
        </Section>
    )
}