import {
    BadgeCheck,
    Banknote,
    Gauge,
    LineChart,
    MapPin,
    ShieldCheck,
    Sparkles,
    Watch,
} from "lucide-react";

// Richard Mille hub page - route: /sell-richard-mille-nyc
export const richardMilleData = {
    meta: {
        title: "Sell Richard Mille NYC | Top Cash | InstaGold",
        description: "Sell your Richard Mille in NYC at our licensed 47th St location. Top cash for Richard Mille, valued by experts and paid same day. Free offer in minutes.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-richard-mille-nyc",
            telephone: "+1-212-901-5705",
            address: {
                "@type": "PostalAddress",
                streetAddress: "31 W 47th St, Suite 202",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10036",
                addressCountry: "US",
            },
            areaServed: [
                "Manhattan", "New York City", "Diamond District", "Midtown", "Tribeca",
                "Financial District", "Chelsea", "SoHo", "Flatiron District", "West Village",
                "NoMad", "Upper West Side", "Upper East Side", "Murray Hill", "Gramercy",
                "Hudson Yards", "Lincoln Square", "DUMBO", "Brooklyn Heights", "Park Slope",
                "Long Island City", "Hoboken", "Downtown Jersey City"
            ].map((name) => ({ "@type": "Place", name })),
        },
    ],
    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell Your Richard Mille in NYC",
        image: {
            title: "richard-mille-hero",
            alt: "Richard Mille watches on stone at the InstaGold 47th Street office",
        },
        description: "Sell your Richard Mille in NYC the smart way with InstaGold. We are a licensed watch buyer on 47th Street in the Diamond District, paying top cash for RM 011, RM 035, RM 055, and every Richard Mille reference, with or without box and papers. We authenticate and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    offerForm: {
        initialCategory: "Watches",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us which Richard Mille you have." },
            { title: "Free Authentication", body: "We authenticate, inspect, and value your Richard Mille in front of you." },
            { title: "Get Paid Same Day", body: "Accept the offer and get paid. Walk away anytime if you do not." },
        ],
    },
    rates: [
        { metal: "Model & Reference", note: "Valued on the specific model and reference number" },
        { metal: "Condition", note: "Assessed on condition, service history, and originality" },
        { metal: "Market Demand", note: "Priced against live resale and collector demand" },
    ],
    companyDetails: {
        eyebrow: "Why InstaGold",
        title: "Why Sell Your Richard Mille to InstaGold",
        description: "We make selling a Richard Mille simple, fair, and fast.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Real Market Offers", body: "Priced against current resale and auction data, tracked daily." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Richard Mille Models We Buy",
        description: "We buy every Richard Mille, from modern references to vintage pieces, working or not, with or without box and papers.",
        items: [
            { icon: Watch, title: "RM Automatic", body: "RM 011, RM 030, and Flyback Chronographs." },
            { icon: Sparkles, title: "RM Tourbillon", body: "RM 035, RM 27, and tourbillon references." },
            { icon: Gauge, title: "RM Bonbon and Sport", body: "Sport, Bonbon, and limited editions." },
            { icon: ShieldCheck, title: "Rare and Collector RM", body: "Discontinued and special-edition references." },
        ],
        secondary_description: "We also buy RM ladies models, collaborations, and watches with or without box and papers.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "richard-mille-examined", alt: "A Richard Mille watch inspected with a loupe during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More for Your Richard Mille",
        description: `Most people who sell a Richard Mille are underpaid. Pawn shops and quick-cash buyers offer a fraction of resale value and count on you not knowing what your reference is really worth.\n\nA Richard Mille is valued on its model and reference, its condition and service history, the originality of its parts, and current collector demand, not on gold weight or a generic estimate.\n\nInstaGold prices your Richard Mille against current resale and auction data, authenticates it in front of you, and explains exactly how each part of the offer is determined. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "right",
        tone: "white",
        image: { title: "richard-mille-end", alt: "InstaGold specialist authenticating a Richard Mille at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell a Richard Mille in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell a Richard Mille in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Steps from Times Square & Grand Central Terminal",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments",
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: { label: "Get Directions", url: "", action: "Direction" },
    },
    testimonials: [
        { quote: "Sold my Richard Mille and got a better offer than the online buyers quoted. They checked it over in front of me and paid the same visit.", name: "James Thornton", item: "Richard Mille" },
        { quote: "I had a Richard Mille with no box or papers and thought that would be a problem. It was not. They valued it fairly and I walked out with cash.", name: "Anthony Delgado", item: "Richard Mille" },
        { quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.", name: "Przemysław Prusinowski", item: "Richard Mille" },
        { quote: "They knew exactly what my watch was worth and priced it against real auction results. No lowball, no games, just a fair number.", name: "Kevin Matthews", item: "Richard Mille" },
        { quote: "Fast, fair, and knowledgeable. They authenticated it on the spot and the payout matched the market.", name: "Daniel Rosen", item: "Richard Mille" },
    ],
    faqs: [
        { q: "How much can I get for my Richard Mille?", a: "It depends on the model and reference, the condition and service history, the originality of the parts, and current collector demand. We price against real-time resale and auction data and explain how the offer is determined." },
        { q: "Do you buy a Richard Mille without box and papers?", a: "Yes. Box and papers add value, but we buy Richard Mille watches with or without them." },
        { q: "Do you buy non-working or damaged Richard Mille watches?", a: "Yes. We buy Richard Mille watches that are scratched, not running, or in need of service, and price them fairly." },
        { q: "Do I need an appointment?", a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Richard Mille Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
