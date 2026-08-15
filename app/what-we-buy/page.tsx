import type { Metadata } from "next";
import { Section, Container, Eyebrow } from "@/components/site/ui";
import { CategoryCard } from "@/components/site/blocks/CategoryCard";
import { SITE } from "@/app/data/site";
import { CTACompact } from "@/components/site/blocks";

export const metadata: Metadata = {
    title: "What We Buy | Gold, Watches & Diamonds | InstaGold",
    description: "InstaGold buys gold, watches, diamonds, and jewelry in NYC's Diamond District. Explore what we buy and get a free, same-day offer.",
};

const CARDS = [
    { name: "Gold", descriptor: "Jewelry, coins, scrap", href: "/cash-for-gold-nyc", alt: "Gold jewelry and coins icon", icon: "Gem" },
    { name: "Gold Coins", descriptor: "Bullion and rare coins", href: "/gold-coin-buyers-nyc", alt: "Gold coin icon", icon: "Coins" },
    { name: "Gold Bullion & Bars", descriptor: "Bars, rounds, ingots", href: "/sell-gold-bullion-nyc", alt: "Gold bullion bar icon", icon: "Layers" },
    { name: "Scrap & Dental Gold", descriptor: "Any karat, any form", href: "/sell-dental-gold-nyc", alt: "Scrap gold icon", icon: "Recycle" },
    { name: "Luxury Watches", descriptor: "All major brands", href: "/sell-used-watch-nyc", alt: "Luxury watch icon", icon: "Watch" },
    { name: "Rolex", descriptor: "Every model", href: "/sell-rolex-nyc", alt: "Rolex watch icon", icon: "Crown" },
    { name: "Patek Philippe", descriptor: "Nautilus and more", href: "/sell-patek-philippe-nyc", alt: "Patek Philippe watch icon", icon: "Watch" },
    { name: "Audemars Piguet", descriptor: "Royal Oak and more", href: "/sell-audemars-piguet-nyc", alt: "Audemars Piguet watch icon", icon: "Watch" },
    { name: "Diamonds", descriptor: "Loose and certified", href: "/sell-diamonds-nyc", alt: "Diamond icon", icon: "Diamond" },
    { name: "Fine Jewelry", descriptor: "Gold and designer", href: "/sell-jewelry-for-cash-nyc", alt: "Fine jewelry icon", icon: "Sparkles" },
    { name: "Estate Pieces", descriptor: "Antique and inherited", href: "/sell-jewelry-for-cash-nyc", alt: "Estate jewelry icon", icon: "Landmark" },
    { name: "Platinum & Silver", descriptor: "Bars, coins, flatware", href: "/sell-platinum-silver-nyc", alt: "Platinum and silver icon", icon: "Utensils" },
] as const;

export default function WhatWeBuyPage() {
    return (
        <>
            <Section tone="ivory" className="pb-10 sm:pb-12">
                <Container className="text-center">
                    <Eyebrow>What We Buy</Eyebrow>
                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
                        What We Buy
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                        Top cash for gold, watches, diamonds, and more. Evaluated in person, paid same day.
                    </p>
                </Container>
            </Section>

            <Section tone="stone" className="pt-8 sm:pt-10" labelledBy="categories-title">
                <Container>
                    <h2 id="categories-title" className="sr-only">
                        Categories we buy
                    </h2>
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {CARDS.map((card, i) => (
                            <CategoryCard key={card.name} card={card} index={i} />
                        ))}
                    </ul>
                </Container>
            </Section>

            <CTACompact title=" Not sure what you have? Bring it in or get a free offer online." />
        </>
    )
}