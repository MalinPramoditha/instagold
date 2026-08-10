import { Section, Container, Eyebrow } from "./ui";
import { Check } from "lucide-react";
import { SITE } from "@/app/data/site";
import officeImage from "@/public/assets/office-appraisal.jpg";
import { WHY } from "@/app/data/Why";


export function AboutSection() {
    return (
        <Section tone="white" labelledBy="why-title">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <img
                        src={officeImage.src}
                        alt="Specialist appraising a piece in the InstaGold 47th Street office"
                        width={1400}
                        height={1050}
                        loading="lazy"
                        className="aspect-4/3 w-full rounded-lg object-cover "
                    />
                    <div>
                        <Eyebrow>Why InstaGold</Eyebrow>
                        <h2 id="why-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                            Two decades of refining and buying in the Diamond District
                        </h2>
                        <ul className="mt-5 space-y-3">
                            {WHY.map((w) => (
                                <li key={w} className="flex items-start gap-3 text-base leading-relaxed">
                                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-link" />
                                    {w}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-base text-muted-foreground">
                            {SITE.address.street}, {SITE.address.locality}, {SITE.address.region} {SITE.address.postal} ·{" "}
                            <a href={SITE.mapsUrl} className="font-medium text-link underline underline-offset-4">
                                View directions
                            </a>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}