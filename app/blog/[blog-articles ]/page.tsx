import { ShieldCheck } from "lucide-react";

import { Container, Cta, Section } from "@/components/site/ui";
import { SITE } from "@/app/data/site";

import heroImg from "@/public/assets/blog-sell-gold-nyc.jpg";
import authorImg from "@/public/assets/author-placeholder.jpg";
import Link from "next/link"

const URL = "https://lux-offer-pro.lovable.app/blog/how-to-sell-gold-in-nyc-fast";
const TITLE = "How to Sell Gold in NYC Fast | InstaGold";
const DESCRIPTION =
    "How to sell gold in NYC fast and still get a fair price. A simple same-day guide from InstaGold, a licensed buyer in the Diamond District.";
const PUBLISHED = "2026-08-10";


function CtaCard() {
    return (
        <aside className="my-10 rounded-xl border border-hairline bg-card p-6 sm:p-8">
            <p className="eyebrow">Get a Free Offer</p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Free, no obligation, and based on the live market. Same-day payment in the Diamond District.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
                <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                <Cta href={SITE.phoneHref} variant="outline" >
                    Call {SITE.phone}
                </Cta>
            </div>
        </aside>
    );
}

export default function Page() {
    return (
        <>
            <Section tone="ivory" className="pb-8 sm:pb-10">
                <Container className="measure">
                    <p className="eyebrow">Gold</p>
                    <h1 className="mt-3 text-3xl leading-tight sm:text-5xl">How to Sell Gold in NYC Fast</h1>
                    <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-link" />
                        Licensed NYC buyer, Lic# 2134780-DCWP, 47th Street Diamond District.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                        By Sophia Bennett, InstaGold, August 2026.
                    </p>
                </Container>
            </Section>

            <Section tone="stone" className="py-0">
                <Container className="measure">
                    <img
                        src={heroImg.src}
                        alt="Gold chains, rings and coins weighed on a jeweler's scale in a New York gold buyer's office"
                        width={1280}
                        height={720}
                        className="aspect-[16/9] w-full rounded-xl object-cover"
                    />
                </Container>
            </Section>

            <Section tone="ivory" className="pt-8 sm:pt-10">
                <Container className="measure">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                        How to sell gold in NYC fast comes down to three things: knowing what your gold is worth,
                        choosing a licensed buyer, and skipping the steps that slow you down. If you want cash the
                        same day and a fair price, this short guide walks you through it.
                    </p>

                    <CtaCard />

                    <h2>Know What Your Gold Is Worth First</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Before you sell, get a rough idea of your gold's value. Two things decide it: the weight
                        and the karat. Higher karat gold, like 18K or 24K, is worth more per gram than 10K or 14K.
                        The current gold spot price sets the base rate, and it changes every day.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        You do not need to be an expert. Just knowing your karat and rough weight helps you spot a
                        fair offer from a lowball one. Most gold jewelry is stamped with its karat somewhere, often
                        on the clasp or inside a ring band. If you have a small kitchen scale, weigh your pieces in
                        grams so you have a number to work with.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        A good buyer will weigh and test your gold in front of you and explain the number. If a
                        buyer refuses to show you the scale or how they reached the price, that is a sign to walk
                        away.
                    </p>

                    <h2 className="mt-10">Choose a Licensed Buyer, Not a Pawn Shop</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Speed means nothing if you get underpaid. Pawn shops and quick-cash spots often pay well
                        below market because they count on you being in a hurry.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        A{" "}
                        <Link
                            href="/cash-for-gold-nyc"
                            className="font-medium text-foreground underline decoration-2 decoration-accent-soft underline-offset-4 hover:decoration-link"
                        >
                            licensed gold buyer
                        </Link>{" "}
                        is the faster and safer choice. In New York, licensed buyers are held to real standards,
                        quote against the live market, and give you a clear offer with no pressure. Look for a
                        license number and a real address before you hand anything over.
                    </p>

                    <h2 className="mt-10">Get an Offer Online Before You Go</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        The fastest way to sell gold in NYC is to start online. Send a quick description or photo
                        of what you have and get a rough offer before you leave home. This cuts your visit down to
                        minutes instead of an afternoon.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        When you arrive, the buyer confirms the details, tests the gold, and finalizes the offer.
                        If you accept, you get paid on the spot.
                    </p>

                    <h2 className="mt-10">What to Bring</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        To sell gold fast and get paid the same day, bring:
                    </p>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Your gold items, in any condition.
                        </li>
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            A valid government issued photo ID, required by law in NYC.
                        </li>
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Any paperwork you have, like receipts or certificates. This is helpful but not required.
                        </li>
                    </ul>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        That is all it takes. No appointment needed.
                    </p>

                    <h2 className="mt-10">Avoid These Common Mistakes</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        A few simple mistakes cost sellers money and time. Steer clear of these and you will sell
                        faster and for more.
                    </p>
                    <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Selling to the first place you see without comparing. A quick online offer from a
                            licensed buyer takes minutes and gives you a real benchmark.
                        </li>
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Cleaning or repairing gold before selling. It rarely adds value and can cost you more
                            than it returns.
                        </li>
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Selling by mail. Mailing gold means waiting days and losing control of your item.
                            Selling in person in NYC means same-day cash.
                        </li>
                        <li className="flex gap-3">
                            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-soft" />
                            Not bringing ID. Without a valid photo ID, a licensed buyer cannot legally complete the
                            sale, so you would have to come back.
                        </li>
                    </ul>

                    <h2 className="mt-10">Get Paid the Same Day</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Once you accept an offer, a good buyer pays you immediately by cash or wire. There is no
                        waiting, no mailing, and no holding period when you sell in person. You walk in with gold
                        and walk out with cash.
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Selling in the Diamond District has one more advantage. It is the center of the gold and
                        jewelry trade in New York, so buyers there compete for your business and tend to pay more
                        than a random shop across town. That competition works in your favor.
                    </p>

                    <h2 className="mt-10">Sell Your Gold Fast with InstaGold</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        InstaGold is a licensed gold buyer at 31 W 47th Street in the Diamond District, the most
                        trusted place to{" "}
                        <Link
                            href="/cash-for-gold-nyc"
                            className="font-medium text-foreground underline decoration-2 decoration-accent-soft underline-offset-4 hover:decoration-link"
                        >
                            sell gold in NYC
                        </Link>
                        . We test and weigh your gold in front of you, price it against the live market, and pay
                        the same day. Get a free offer online first, then visit us to get paid. No appointment, no
                        pressure, no obligation.
                    </p>

                    <CtaCard />

                    <div className="mt-4 rounded-xl border border-hairline bg-card p-6 sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                            <img
                                src={authorImg.src}
                                alt="Sophia Bennett, InstaGold"
                                loading="lazy"
                                width={640}
                                height={640}
                                className="size-20 shrink-0 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg font-semibold text-foreground">Sophia Bennett</p>
                                <p className="mt-1 text-sm text-muted-foreground">Precious Metals & Luxury Watch Specialist</p>
                                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                                    Sophia Bennett is a precious metals and luxury watch specialist at InstaGold, with experience evaluating gold jewelry, coins, bullion, Rolex watches, and other high-value pieces. Based in New York’s Diamond District, she helps sellers understand what influences an item’s value and guides them through a private, straightforward appraisal process.
                                </p>
                                <p className="mt-3 text-sm text-muted-foreground">
                                    Reviewed for accuracy by the InstaGold team.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
