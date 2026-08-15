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
import { Metadata } from "next";

const URL = "https://lux-offer-pro.lovable.app/blog";
const TITLE = "Blog | Selling Gold, Watches & Jewelry in NYC | InstaGold";
const DESCRIPTION =
    "Tips and guides on selling gold, watches, diamonds, and jewelry in NYC. Learn how to get the most for your valuables from InstaGold's experts.";

type Article = {
    title: string;
    tag: string;
    excerpt: string;
    href: string;
    image: string;
    alt: string;
};

const FEATURED: Article = {
    title: "How to Sell Gold in NYC Fast",
    tag: "Gold",
    excerpt:
        "The quickest way to turn gold into cash in New York, and how to get a fair price the same day.",
    href: "/blog/how-to-sell-gold-in-nyc-fast",
    image: featuredImg.src,
    alt: "Gold chains, rings and coins arranged on a warm travertine surface",
};

const ARTICLES: Article[] = [
    {
        title: "How to Sell Gold in NYC Fast",
        tag: "Gold",
        excerpt:
            "Walk into the Diamond District with confidence. Learn what to bring, how appraisals work, and how to leave with same-day cash at a fair price without the runaround.",
        href: "/blog/how-to-sell-gold-in-nyc-fast",
        image: featuredImg.src,
        alt: "Gold chains, rings and coins arranged on a warm travertine surface",
    },
    {
        title: "What Is My Rolex Really Worth?",
        tag: "Watches",
        excerpt:
            "Brand, model, condition, box and papers, and market demand all shape your watch's resale value. Here is how a professional buyer breaks down each factor step by step.",
        href: "/blog/what-is-my-rolex-worth",
        image: watchImg.src,
        alt: "A luxury watch with a leather strap resting on soft beige linen",
    },
    {
        title: "Gold Karats Explained: 10K vs 14K vs 24K",
        tag: "Gold",
        excerpt:
            "Purity drives price. We break down the difference between 10K, 14K, 18K, and 24K gold so you know exactly how karat weight translates into the cash you walk away with.",
        href: "/blog/gold-karats-explained",
        image: karatsImg.src,
        alt: "Three gold rings of different karat purity lined up on a warm stone surface",
    },
    {
        title: "How We Grade Diamonds Before Making an Offer",
        tag: "Diamonds",
        excerpt:
            "Cut, color, clarity, and carat weight form the 4 Cs. Learn how our gemologists evaluate each one and what that means for the offer you receive on the spot.",
        href: "/blog/how-we-grade-diamonds",
        image: diamondImg.src,
        alt: "A loose brilliant-cut diamond held in tweezers under soft light",
    },
    {
        title: "Selling Inherited Jewelry: A Simple Guide",
        tag: "Jewelry",
        excerpt:
            "Inherited pieces come with questions. This guide covers appraisal basics, emotional considerations, and how to get a fair offer without pressure or obligation.",
        href: "/blog/selling-inherited-jewelry",
        image: inheritedImg.src,
        alt: "An open vintage jewelry box with inherited gold and gemstone pieces",
    },
    {
        title: "Why Sell Gold in the Diamond District",
        tag: "Local",
        excerpt:
            "47th Street has been the heart of New York's gold trade for generations. Find out why density of buyers, competition, and expertise work in your favor here.",
        href: "/blog/why-sell-gold-diamond-district",
        image: districtImg.src,
        alt: "A warm street scene of New York's Diamond District at golden hour",
    },
];

const BLOG_POSTS = [FEATURED, ...ARTICLES.slice(1)].map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    url: `https://lux-offer-pro.lovable.app${a.href}`,
    articleSection: a.tag,
    image: a.image,
}));

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: URL,
    }
}

export default function Page() {
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

            <Section tone="stone" className="pt-8 sm:pt-10">
                <Container>
                    <article className="panel-soft overflow-hidden rounded-xl border border-hairline bg-card transition-all duration-300 hover:border-link">
                        <a href={FEATURED.href} className="grid gap-0 lg:grid-cols-2">
                            <div className="aspect-[16/9] w-full overflow-hidden bg-surface-light lg:h-full lg:aspect-auto">
                                <img
                                    src={FEATURED.image}
                                    alt={FEATURED.alt}
                                    width={1280}
                                    height={720}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
                                <span className="eyebrow">Featured · {FEATURED.tag}</span>
                                <h2 className="text-xl leading-tight text-foreground sm:text-2xl">
                                    {FEATURED.title}
                                </h2>
                                <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{FEATURED.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-link">
                                    Read more
                                    <ArrowRight aria-hidden="true" className="size-4" />
                                </span>
                            </div>
                        </a>
                    </article>
                </Container>
            </Section>

            <Section tone="stone" className="pt-2 sm:pt-4" labelledBy="blog-grid-title">
                <Container>
                    <h2 id="blog-grid-title" className="sr-only">
                        Latest articles
                    </h2>
                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {ARTICLES.map((article, i) => (
                            <BlogArticalCard key={article.href} article={article} index={i} />
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
