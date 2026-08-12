import { Container, Eyebrow, Section } from "./ui";
import { SITE } from "@/app/data/site";


export function Process({ data }: { data: any, }) {

    return (
        <Section tone={data.tone} labelledBy="process-title">
            <Container>
                <Eyebrow>{data.eyebrow}</Eyebrow>
                <h2 id="process-title" className="mt-3 max-w-2xl text-2xl leading-tight sm:text-3xl">
                    {data.title}
                </h2>
                <ol className="mt-10 grid gap-8 md:grid-cols-3">
                    {data.steps.map((step: any, index: number) => (
                        <li key={step.title}>
                            <span className="inline-grid size-11 place-items-center rounded-full bg-accent-soft text-lg font-semibold text-ink">
                                {index + 1}
                            </span>
                            <h3 className="mt-4 text-lg">{step.title}</h3>
                            <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">{step.body}</p>
                        </li>
                    ))}
                </ol>
                {data.ctaLabel ? (
                    <p className="mt-10">
                        <a href={SITE.offerUrl} className="font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-accent-soft hover:decoration-link">
                            {data.ctaLabel}
                        </a>
                    </p>
                ) : null}
            </Container>
        </Section>
    );
}