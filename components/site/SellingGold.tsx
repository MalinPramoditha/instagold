import { Container, Section } from "./ui";
import { ItemsGrid } from "./ItemsGrid";
import { Eyebrow } from "@/components/site/blocks/Eyebrow";
import { GOLD_ITEMS } from "@/app/data/GoldItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE } from "@/app/data/site";

export function SellingGold() {
    return (
        <Section tone="stone" labelledBy="gold-title">
            <Container>
                <Eyebrow>Gold</Eyebrow>
                <h2 id="gold-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                    Selling gold in New York
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    Gold is priced on purity and weight against the live spot market. We test the karat and weigh
                    every piece in front of you, then show how the offer was calculated. Read our{" "}
                    <a
                        href="/what-we-buy/gold-buyers-nyc"
                        className="font-medium text-link underline underline-offset-4"
                    >
                        gold selling guide
                    </a>
                    .
                </p>
                <div className="mt-6">
                    <ItemsGrid
                        models={GOLD_ITEMS}
                        note="Diamonds, fine jewelry and luxury watches are also appraised by our specialists."
                    />
                </div>
                <div className="mt-7">
                    <Link href={SITE.offerUrl}>
                        <Button variant="default" size="lg" className="bg-champagne hover:bg-brand-hover text-ink px-7 py-6"> Get a Gold Offer</Button>
                    </Link>
                </div>
            </Container>
        </Section>
    )
}