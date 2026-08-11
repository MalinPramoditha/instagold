import { Container, Section, CTA, Eyebrow } from "../../site/blocks"
import { SITE } from "@/app/data/site";

export function Subcategory({ data }: { data: any }) {
    return (
        <Section tone="white" labelledBy="buy-title">
            <Container>
                <Eyebrow>What we buy</Eyebrow>
                <h2 id="buy-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                    What Gold We Buy
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    We pay cash for gold in every form and every karat, from 10K to 24K.
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {data.items?.map(({ icon: Icon, title, body }: any) => (
                        <li key={title} className="panel-soft rounded-xl border border-hairline bg-card p-5">
                            <Icon aria-hidden="true" className="size-5 text-link" />
                            <h3 className="mt-3 text-lg">{title}</h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <CTA href={SITE.offerUrl}>Get My Free Offer</CTA>
                </div>
            </Container>
        </Section>
    )
}