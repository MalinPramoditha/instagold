"use client"
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container, Cta, Eyebrow, Section } from "@/components/site/ui";
import { SITE } from "@/app/data/site";
import { cn } from "@/lib/utils";

import featuredImg from "@/public/assets/blog-sell-gold-nyc.jpg";
import watchImg from "@/public/assets/blog-rolex-worth.jpg";
import karatsImg from "@/public/assets/blog-gold-karats.jpg";
import diamondImg from "@/public/assets/blog-diamond-grading.jpg";
import inheritedImg from "@/public/assets/blog-inherited-jewelry.jpg";
import districtImg from "@/public/assets/blog-diamond-district.jpg";
import BlogArticalCard from "@/components/site/blocks/BlogArticalCard";

const URL = "https://instagoldbuyers.com/blog";
const TITLE = "Blog | Selling Gold, Watches & Jewelry in NYC | InstaGold";
const DESCRIPTION =
    "Tips and guides on selling gold, watches, diamonds, and jewelry in NYC. Learn how to get the most for your valuables from InstaGold's experts.";



export default function BlogHome({ data }: { data: any[] }) {

    const featured = data.filter((post: any) => post.featured)[0];
    console.log(featured)
    return (
        <>
            <Section tone="ivory" className="pb-8 sm:pb-10">
                <Container className="text-center">
                    <Eyebrow>InstaGold Blog</Eyebrow>
                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
                        The InstaGold Blog
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                        Guides and tips for selling gold, watches, and jewelry in NYC.
                    </p>
                </Container>
            </Section>
            {featured && <Section tone="stone" className="pt-8 sm:pt-10">
                <Container>
                    <article className="panel-soft overflow-hidden rounded-xl border border-hairline bg-card transition-all duration-300 hover:border-link">
                        <a href={`/blog/${featured.slug.current}`} className="grid gap-0 lg:grid-cols-2">
                            <div className="aspect-[16/9] w-full overflow-hidden bg-surface-light lg:h-full lg:aspect-auto">
                                <img
                                    src={featured.imageUrl}
                                    alt={featured.imageAlt}
                                    width={1280}
                                    height={720}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                                <span className="eyebrow">Featured · {featured.category}</span>
                                <h2 className="text-xl leading-tight text-foreground sm:text-2xl">
                                    {featured.title}
                                </h2>
                                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{featured.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-link">
                                    Read more
                                    <ArrowRight aria-hidden="true" className="size-4" />
                                </span>
                            </div>
                        </a>
                    </article>
                </Container>
            </Section>}
            <Section tone="stone" className="pt-2 sm:pt-4" labelledBy="blog-grid-title">
                <Container>
                    <h2 id="blog-grid-title" className="sr-only">
                        Latest articles
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((article: any, i: number) => (
                            <BlogArticalCard key={article._id} article={article} index={i} />
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="light" labelledBy="blog-cta-title">
                <Container className="text-center">
                    <h2 id="blog-cta-title" className="mx-auto max-w-xl text-2xl leading-tight sm:text-3xl">
                        Ready to sell? Get a free offer in minutes.
                    </h2>
                    <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                        <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                        <Cta href={SITE.phoneHref} variant="outline">
                            Call {SITE.phone}
                        </Cta>
                    </div>
                </Container>
            </Section>
        </>
    );
}
