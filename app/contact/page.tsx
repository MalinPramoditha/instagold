import { BadgeCheck, Clock, MapPin, Phone, Send, Sparkles, Store } from "lucide-react";

import { Container, Cta, Eyebrow, Section } from "@/components/site/ui";
import { OfferForm } from "@/components/site/OfferForm";
import { SITE } from "@/app/data/site";

const URL = "https://instagoldbuyers.com/contact";
const TITLE = "Contact InstaGold | Gold & Watch Buyer NYC";
const DESCRIPTION =
    "Contact InstaGold, a licensed gold and watch buyer at 31 W 47th St in NYC's Diamond District. Call, visit, or get a free offer online. Same-day payment.";

const DIRECTIONS_URL =
    "https://www.google.com/maps/dir/?api=1&destination=31+W+47th+Street+Suite+202+New+York+NY+10036";
const MAP_EMBED_URL =
    "https://www.google.com/maps?q=31+W+47th+Street+Suite+202+New+York+NY+10036&z=17&output=embed";

const AREA_SERVED = [
    "Manhattan",
    "New York City",
    "Diamond District",
    "Midtown",
    "Tribeca",
    "Financial District",
    "Chelsea",
    "SoHo",
    "Flatiron District",
    "West Village",
    "NoMad",
    "Upper West Side",
    "Upper East Side",
    "Murray Hill",
    "Gramercy",
    "Hudson Yards",
    "Lincoln Square",
    "DUMBO",
    "Brooklyn Heights",
    "Park Slope",
    "Long Island City",
    "Hoboken",
    "Downtown Jersey City",
];

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
    geo: { "@type": "GeoCoordinates", latitude: 40.757, longitude: -73.9805 },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
        },
    ],
    areaServed: AREA_SERVED.map((name) => ({ "@type": "Place", name })),
};


const DETAILS = [
    {
        icon: MapPin,
        title: "Address",
        body: "31 W 47th Street, Suite 202, New York, NY 10036.",
    },
    {
        icon: Sparkles,
        title: "Best For",
        body: "Selling gold, watches, diamonds, silver, platinum, and jewelry.",
    },
    {
        icon: BadgeCheck,
        title: "License",
        body: "NYC Lic# 2134780-DCWP.",
    },
];

const HOURS = [
    { day: "Monday to Friday", time: "10:00 AM to 6:00 PM" },
    { day: "Saturday", time: "10:00 AM to 4:00 PM" },
    { day: "Sunday", time: "Closed" },
];

const REACH = [
    {
        icon: Send,
        title: "Get an Offer Online",
        body: "Fill out the form for a fast, free quote.",
    },
    {
        icon: Phone,
        title: "Call or Text",
        body: "Reach us at (212) 901-5705 during business hours.",
    },
    {
        icon: Store,
        title: "Walk In",
        body: "Visit us at 31 W 47th Street, Suite 202. No appointment needed.",
    },
];

const allSchemas = [
    LOCAL_BUSINESS,
    AREA_SERVED
];

export async function generateMetadata() {

    return {
        title: TITLE,
        description: DESCRIPTION,
        alternates: {
            canonical: URL,
        }
    }

}

export default function Page() {
    return (
        <>
            {allSchemas.map((schemaObj, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
                />
            ))}
            <Section tone="ivory" labelledBy="contact-title">
                <Container>
                    <div className="max-w-2xl">
                        <Eyebrow>New York · West 47th Street</Eyebrow>
                        <h1 id="contact-title" className="mt-3 text-[2rem] leading-[1.15] sm:text-[2.5rem]">
                            Contact InstaGold
                        </h1>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            Contact InstaGold to sell gold, watches, or jewelry in NYC. We are a licensed buyer at
                            31 W 47th Street in the heart of the Diamond District. Call us, visit in person, or get
                            a free offer online. There is no appointment needed and no obligation to sell.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                            <Cta href={SITE.phoneHref} variant="outline" >
                                Call {SITE.phone}
                            </Cta>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
                        <div>
                            <OfferForm defaultOpen />
                        </div>

                        <div>
                            <Eyebrow>Visit us</Eyebrow>
                            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">Visit Our NYC Location</h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                InstaGold is located in the Diamond District on 47th Street, between Fifth and Sixth
                                Avenue, minutes from Rockefeller Center, Bryant Park, and Grand Central.
                            </p>

                            <ul className="mt-6 space-y-3">
                                <li className="panel-soft flex items-start gap-3 rounded-xl border border-hairline bg-card p-4">
                                    <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-link" />
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground">Phone</h3>
                                        <a
                                            href={SITE.phoneHref}
                                            className="mt-1 inline-block text-base font-medium text-link underline underline-offset-4"
                                        >
                                            {SITE.phone}
                                        </a>
                                    </div>
                                </li>
                                {DETAILS.map(({ icon: Icon, title, body }) => (
                                    <li
                                        key={title}
                                        className="panel-soft flex items-start gap-3 rounded-xl border border-hairline bg-card p-4"
                                    >
                                        <Icon aria-hidden="true" className="mt-1 size-4 shrink-0 text-link" />
                                        <div>
                                            <h3 className="text-base font-semibold text-foreground">{title}</h3>
                                            <p className="mt-1 text-base leading-relaxed text-muted-foreground">{body}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="mt-10 text-2xl leading-tight sm:text-3xl">Hours</h2>
                            <ul className="panel-soft mt-4 rounded-xl border border-hairline bg-card px-5 py-2">
                                {HOURS.map(({ day, time }) => (
                                    <li
                                        key={day}
                                        className="flex items-center justify-between gap-6 border-b border-hairline py-3.5 last:border-b-0"
                                    >
                                        <span className="flex items-center gap-3 text-base text-foreground">
                                            <Clock aria-hidden="true" className="size-4 shrink-0 text-link" />
                                            {day}
                                        </span>
                                        <span className="text-base text-muted-foreground">{time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section tone="white" labelledBy="find-title">
                <Container>
                    <Eyebrow>Find us</Eyebrow>
                    <h2 id="find-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        Find Us
                    </h2>
                    <div className="mt-6 overflow-hidden rounded-xl border border-hairline">
                        <iframe
                            title="Map showing InstaGold at 31 W 47th Street, Suite 202, New York, NY 10036"
                            src={MAP_EMBED_URL}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="block h-[22rem] w-full border-0 sm:h-[26rem]"
                        />
                    </div>
                    <a
                        href={DIRECTIONS_URL}
                        className="mt-4 inline-block text-base font-medium text-link underline underline-offset-4"
                    >
                        Get Directions
                    </a>
                </Container>
            </Section>

            <Section tone="stone" labelledBy="reach-title">
                <Container>
                    <Eyebrow>How to reach us</Eyebrow>
                    <h2 id="reach-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        How to Reach Us
                    </h2>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                        {REACH.map(({ icon: Icon, title, body }) => (
                            <li key={title} className="panel-soft rounded-xl border border-hairline bg-card p-5">
                                <Icon aria-hidden="true" className="size-5 text-link" />
                                <h3 className="mt-3 text-lg">{title}</h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{body}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>

            <Section tone="ivory" labelledBy="serving-title">
                <Container className="max-w-3xl">
                    <Eyebrow>Service area</Eyebrow>
                    <h2 id="serving-title" className="mt-3 text-2xl leading-tight sm:text-3xl">
                        Serving All of NYC
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        We buy from sellers across Manhattan and the greater New York City area, including
                        Midtown, the Upper East Side, Tribeca, the Financial District, and the surrounding
                        neighborhoods. Wherever you are in the city, InstaGold makes selling simple.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Cta href={SITE.offerUrl}>Get My Free Offer</Cta>
                        <Cta href={SITE.phoneHref} variant="outline" >
                            Call {SITE.phone}
                        </Cta>
                    </div>
                </Container>
            </Section>
        </>
    );
}
