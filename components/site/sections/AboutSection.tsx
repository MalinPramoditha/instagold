import { SITE } from "@/app/data/site";
import { cn } from "@/lib/utils";
import { Check, CircleCheck } from "lucide-react";
import { Container, Eyebrow, Section } from "../ui";


export function AboutSection({ data }: { data: any }) {
    return (
        <Section tone={data.tone} labelledBy="why-title">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <img
                        src={`/assets/examined/${data.image.title}.png`}
                        alt={data.image.alt}
                        width={1400}
                        height={1050}
                        loading="lazy"
                        className={cn("aspect-4/3 w-full rounded-lg object-cover", data.align === "left" ? "order-1" : "order-2")}
                    />
                    <div className={data.align === "left" ? "order-2" : "order-1"}>
                        <Eyebrow>{data.eyebrow}</Eyebrow>
                        <h2 id="why-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                            {data.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                            {data.description}
                        </p>
                        <ul className="mt-5 space-y-4">
                            {data.list.map((item: string, index: number) => (
                                <li key={index} className="flex items-start gap-3 text-base leading-relaxed">
                                    <CircleCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-base text-muted-foreground">
                            {data.link_description}·{" "}
                            <a href={data.link.action === 'Direction' ? SITE.mapsUrl : data.link.action === 'Call' ? SITE.phoneHref : data.link.action === 'Visit' ? SITE.reviewsUrl : "#"} className="font-medium text-link underline underline-offset-4">
                                {data.link.label}
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}