import { Coins, Gem, MapPin, Phone, Scale, ShieldCheck, Sparkles, Watch } from "lucide-react";

import { Container, Cta, Eyebrow, Section } from "@/components/site/ui";
import { OfferForm } from "@/components/site/OfferForm";
import { SITE } from "@/app/data/site";
import heroAppraisal from "@/public/assets/hero-appraisal.jpg";
import officeImage from "@/public/assets/office-appraisal.jpg";

const URL = "https://lux-offer-pro.lovable.app/about";
const TITLE = "About InstaGold | Trusted NYC Gold & Watch Buyer";
const DESCRIPTION =
    "Learn about InstaGold, a licensed gold, watch, and jewelry buyer in NYC's Diamond District. Fair offers, expert evaluation, and same-day payment.";

const LOCAL_BUSINESS = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "InstaGold",
    url: URL,
    telephone: "+1-212-901-5705",
    address: {
        "@type": "PostalAddress",
        streetAddress: "31 W 47th St, Suite 202",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10036",
        addressCountry: "US",
    },
};



const WHAT_WE_BUY = [
    {
        icon: Coins,
        title: "Gold",
        body: "Jewelry, coins, bullion, and scrap, in every karat.",
    },
    {
        icon: Watch,
        title: "Watches",
        body: "Rolex, Patek Philippe, Audemars Piguet, and other luxury brands.",
    },
    {
        icon: Gem,
        title: "Diamonds and Jewelry",
        body: "Loose stones, engagement rings, and fine jewelry.",
    },
    {
        icon: Scale,
        title: "Silver and Platinum",
        body: "Bars, coins, flatware, and jewelry.",
    },
];

const PILLARS = [
    {
        icon: ShieldCheck,
        title: "Expert Evaluation",
        body: "Our specialists know gold, watches, and diamonds inside out. We assess every item carefully and share exactly what we see, so you always understand its value.",
    },
    {
        icon: Sparkles,
        title: "A Simple Process",
        body: "From your first offer to final payment, everything is clear and efficient. We respect your time and make selling as smooth as possible.",
    },
    {
        icon: Scale,
        title: "Fair Market Pricing",
        body: "We price against the live market and real resale data. Our offers reflect what your item is truly worth today.",
    },
];

export default function Page() {
    return (
        <>
            {
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS) }}
                />
            }
            <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ink">
                <img
                    src={heroAppraisal.src}
                    alt="InstaGold specialist evaluating gold and jewelry at the 47th Street Diamond District office in Manhattan"
                    width={1600}
                    height={1072}
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
                />
                <Container className="py-16 sm:py-24 lg:py-28">
                    <div className="max-w-xl lg:max-w-2xl">
                        <Eyebrow className="text-white/80">New York · West 47th Street</Eyebrow>
                        <h1
                            id="hero-title"
                            className="mt-4 text-pretty text-[2rem] leading-[1.15] font-semibold text-white sm:text-[2.75rem] lg:text-5xl"
                        >
                            About InstaGold
                        </h1>
                        <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
                            When it comes to selling gold, watches, or jewelry in New York, working with InstaGold
                            is simple and stress-free. We are a licensed buyer in the heart of the Diamond
                            District, and we value the trust you place in us with every piece you bring through
                            our door.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                            <Cta href={SITE.phoneHref} variant="light" >
                                Call {SITE.phone}
                            </Cta>
                        </div>
                    </div>
                </Container>
            </section>

            <Section tone="ivory" labelledBy="who-title">
                <Container className="max-w-3xl">
                    <Eyebrow>Who we are</Eyebrow>
                    <h2 id="who-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        Who We Are
                    </h2>
                    <p className="measure mt-4 text-base leading-relaxed text-muted-foreground">
                        InstaGold is a licensed gold, precious metals, and watch buyer located on 47th Street in
                        Manhattan's Diamond District. We buy from everyday sellers, collectors, and estates
                        across New York City. Our focus is straightforward: give you an honest evaluation, a fair
                        price based on the live market, and payment the same day. We believe selling should be
                        clear and comfortable, so we take the time to explain how your offer is calculated and
                        answer every question before you decide.
                    </p>
                </Container>
            </Section>

            <Section tone="white" labelledBy="what-title">
                <Container>
                    <Eyebrow>What we buy</Eyebrow>
                    <h2 id="what-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        What We Buy
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        We pay top rates for a wide range of valuables, all evaluated in front of you.
                    </p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {WHAT_WE_BUY.map(({ icon: Icon, title, body }) => (
                            <li key={title} className="panel-soft rounded-xl border border-hairline bg-card p-5">
                                <Icon aria-hidden="true" className="size-5 text-link" />
                                <h3 className="mt-3 text-lg">{title}</h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="stone" labelledBy="why-title">
                <Container>
                    <Eyebrow>Why choose us</Eyebrow>
                    <h2 id="why-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        Why Choose InstaGold
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        Every part of how we work is built around trust.
                    </p>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {PILLARS.map(({ icon: Icon, title, body }) => (
                            <li key={title} className="panel-soft flex flex-col rounded-xl border border-hairline bg-card p-5">
                                <Icon aria-hidden="true" className="size-5 text-link" />
                                <h3 className="mt-3 text-lg">{title}</h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="white" labelledBy="visit-title">
                <Container>
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        <img
                            src={officeImage.src}
                            alt="InstaGold office at 31 W 47th Street, Suite 202, in the Manhattan Diamond District"
                            width={1400}
                            height={1050}
                            loading="lazy"
                            className="aspect-4/3 w-full rounded-lg object-cover"
                        />
                        <div className="measure">
                            <Eyebrow>Visit us</Eyebrow>
                            <h2 id="visit-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                                Visit Us in the Diamond District
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                You will find InstaGold at 31 W 47th Street, Suite 202, in the heart of New York's
                                Diamond District, minutes from Rockefeller Center and Grand Central. Walk in during
                                business hours or get a free offer online first. There is never any pressure and
                                never any obligation to sell.
                            </p>
                            <ul className="mt-5 space-y-3 text-base leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-link" />
                                    {SITE.address.street}, {SITE.address.locality}, {SITE.address.region}{" "}
                                    {SITE.address.postal}
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-link" />
                                    <a
                                        href={SITE.phoneHref}

                                        className="font-medium text-link underline underline-offset-4"
                                    >
                                        {SITE.phone}
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-7 flex flex-wrap gap-3">
                                <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                                <Cta href={SITE.mapsUrl} variant="outline" >
                                    View Directions
                                </Cta>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <section aria-label="Start your free offer" className="bg-surface-grey py-10 sm:py-14">
                <Container>
                    <div className="mx-auto max-w-2xl">
                        <OfferForm compact />
                        <p className="mt-3 text-sm text-muted-foreground">
                            Prefer to speak with an expert?{" "}
                            <a
                                href={SITE.phoneHref}
                                className="font-medium text-link underline underline-offset-4"
                            >
                                Call {SITE.phone}
                            </a>
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}
