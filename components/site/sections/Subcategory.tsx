import { Container, Section, CTA, Eyebrow } from "../../site/blocks"
import { SITE } from "@/app/data/site";

export function Subcategory({ data }: { data: any }) {
    return (
        <Section tone="white" labelledBy="buy-title">
            <Container>
                <Eyebrow>{data.eyebrow}</Eyebrow>
                <h2 id="buy-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                    {data.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {data.description}
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
                {data.secondary_description && (
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {data.secondary_description}
                    </p>
                )}
                <div className="mt-8">
                    <CTA href={SITE.offerUrl}>Get My Free Offer</CTA>
                </div>
            </Container>
        </Section>
    )
}