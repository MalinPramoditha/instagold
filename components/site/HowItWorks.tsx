import { Container, Eyebrow, Section } from "./ui";
import { SITE } from "@/app/data/site";

export function HowItWorks({
    eyebrow,
    title,
    steps,
    ctaLabel,
    tone = "stone",
}: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
    ctaLabel?: string;
    tone?: "stone" | "ivory";
}) {
    return (
        <Section tone={tone} labelledBy="process-title">
            <Container>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 id="process-title" className="mt-3 max-w-2xl text-2xl leading-tight sm:text-3xl">
                    {title}
                </h2>
                <ol className="mt-10 grid gap-8 md:grid-cols-3">
                    {steps.map((s, i) => (
                        <li key={s.title}>
                            <span className="inline-grid size-11 place-items-center rounded-full bg-accent-soft text-lg font-semibold text-ink">
                                {i + 1}
                            </span>
                            <h3 className="mt-4 text-lg">{s.title}</h3>
                            <p className="mt-2 max-w-sm text-base leading-relaxed text-muted-foreground">{s.body}</p>
                        </li>
                    ))}
                </ol>
                {ctaLabel ? (
                    <p className="mt-10">
                        <a href={SITE.offerUrl} className="font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-accent-soft hover:decoration-link">
                            {ctaLabel}
                        </a>
                    </p>
                ) : null}
            </Container>
        </Section>
    );
}