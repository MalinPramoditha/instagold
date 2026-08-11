import { Section, Container, Eyebrow } from "../blocks";


export function CompanyDetails(data: { data: any }) {
    return (
        <Section tone="ivory" labelledBy="why-title">
            <Container>
                <Eyebrow>{data.data.eyebrow}</Eyebrow>
                <h2 id="why-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                    {data.data.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {data.data.description}
                </p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                    {data.data?.items?.map(({ icon: Icon, title, body }: any) => (
                        <li
                            key={title}
                            className="panel-soft flex items-start gap-4 rounded-xl border border-hairline bg-card p-5"
                        >
                            <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-link" />
                            <div>
                                <h3 className="text-lg">{title}</h3>
                                <p className="mt-1 text-base leading-relaxed text-muted-foreground">{body}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}