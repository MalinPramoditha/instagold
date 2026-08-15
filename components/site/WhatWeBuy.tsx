import Image from "next/image";
import { Container, Eyebrow, Section } from "./ui";
import { ThingsWeBuy } from "@/app/data/ThingsWeBuy";
export function WhatWeBuy() {
    return (
        <Section tone="ivory" labelledBy="categories-title">
            <Container>
                <Eyebrow>What we buy</Eyebrow>
                <h2 id="categories-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                    Gold first, and everything precious after it
                </h2>

                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {ThingsWeBuy.map((c) => (
                        <li key={c.title} className="panel-soft flex flex-col overflow-hidden rounded-xl border border-hairline bg-card">
                            <Image
                                src={c.image.src}
                                alt={c.alt}
                                width={370}
                                height={278}
                                loading="lazy"
                                className="aspect-4/3 w-full object-cover"
                            />
                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg">{c.title}</h3>
                                <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">{c.body}</p>
                                <a
                                    href={c.href}
                                    className="mt-4 font-medium text-link underline underline-offset-4 hover:text-link-dark"
                                >
                                    Sell {c.title}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    );
}