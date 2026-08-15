"use client"
import { Container, Eyebrow, Section } from "@/components/site/ui";
import { ReviewCard } from "@/components/site/blocks/";
import { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { reviewSchema } from "@/app/data/schema/reviewSchema";

const FILTERS = ["All", "Gold", "Watches", "Diamonds", "Jewelry"] as const;

const STATS = [
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Users, value: "2,500+", label: "Happy Sellers" },
    { icon: Wallet, value: "Same Day", label: "Payment" },
];
type Category = "Gold" | "Watches" | "Diamonds" | "Jewelry";


const REVIEWS: { quote: string; name: string; category: Category }[] = [
    {
        quote:
            "Brought in old gold chains and got paid more than three other places quoted. Fast, honest, and no pressure at all.",
        name: "Daniel R.",
        category: "Gold",
    },
    {
        quote:
            "They weighed everything in front of me and explained the price clearly. Walked out with cash the same day.",
        name: "Priya S.",
        category: "Gold",
    },
    {
        quote:
            "Sold my scrap gold here with no pressure and a fair offer. The whole thing was done in under fifteen minutes.",
        name: "Marcus L.",
        category: "Gold",
    },
    {
        quote:
            "Sold my Rolex Datejust and got a better offer than the online buyers. Smooth, professional, and paid on the spot.",
        name: "James T.",
        category: "Watches",
    },
    {
        quote:
            "They knew exactly what my watch was worth and paid on the spot with no games. A genuinely easy experience.",
        name: "Anthony D.",
        category: "Watches",
    },
    {
        quote:
            "Great experience selling my Omega. Quick, fair, and no hassle from start to finish. Highly recommend the team.",
        name: "Kevin M.",
        category: "Watches",
    },
    {
        quote:
            "Graded my diamond ring right in front of me and explained every detail. Trustworthy and completely transparent.",
        name: "Sophia G.",
        category: "Diamonds",
    },
    {
        quote:
            "Got a fair price for a loose diamond I inherited. Very knowledgeable team and a calm, no-pressure process.",
        name: "Rachel B.",
        category: "Diamonds",
    },
    {
        quote:
            "Sold an inherited diamond and they walked me through the grading. Fair price and paid the same afternoon.",
        name: "Olivia P.",
        category: "Diamonds",
    },
    {
        quote:
            "Sold a mix of old jewelry and they valued the stones too, not just the gold. Honestly impressed by the fairness.",
        name: "Elena V.",
        category: "Jewelry",
    },
    {
        quote:
            "Fair, fast, and friendly from the first minute. Got paid the same day for my jewelry with zero hassle.",
        name: "Nadia K.",
        category: "Jewelry",
    },
    {
        quote:
            "Brought in a few broken pieces expecting little and left with a great offer. Friendly, honest, and quick.",
        name: "Tomás A.",
        category: "Jewelry",
    },
];


export function ReviewHome() {
    const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
    const visible = useMemo(
        () => (filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.category === filter)),
        [filter],
    );
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema.localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema.breadCrumbList) }}
            />
            <Section tone="ivory" className="pb-8 sm:pb-10">
                <Container className="text-center">
                    <Eyebrow>Reviews</Eyebrow>
                    <h1 className="mx-auto mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
                        What Our Customers Say
                    </h1>
                    <p className="mt-4 text-base text-muted-foreground">Real sellers. Real payouts. Same day.</p>

                    <ul className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-3">
                        {STATS.map((s) => (
                            <li key={s.label} className="flex flex-col items-center">
                                <s.icon aria-hidden="true" className="size-5 text-link" />
                                <p className="mt-3 font-display text-3xl leading-none sm:text-4xl">{s.value}</p>
                                <p className="eyebrow mt-2">{s.label}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="stone" className="pt-8 sm:pt-10" labelledBy="reviews-grid-title">
                <Container>
                    <h2 id="reviews-grid-title" className="sr-only">
                        Customer reviews
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                type="button"
                                onClick={() => setFilter(f)}
                                aria-pressed={filter === f}
                                className={cn(
                                    "inline-flex min-h-11 items-center rounded-md border px-5 text-sm font-semibold transition-colors duration-200",
                                    filter === f
                                        ? "border-brand bg-brand text-ink"
                                        : "border-hairline bg-card text-foreground hover:border-link hover:text-link",
                                )}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {visible.map((r) => (
                            <ReviewCard data={r} />
                        ))}
                    </ul>
                </Container>
            </Section>
        </>
    )
}