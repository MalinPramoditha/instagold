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

// Audemars Piguet locality page - route: /sell-audemars-piguet-nyc/upper-east-side
export const audemarsPiguetUpperEastSideData = {
    meta: {
        title: "Sell Audemars Piguet Upper East Side | Top Cash | InstaGold",
        description: "Sell your Audemars Piguet in Upper East Side with InstaGold. Licensed 47th St buyer paying top cash, expert valuation, paid same day. Free offer fast.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-audemars-piguet-nyc/upper-east-side",
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
                { "@type": "Place", name: "Upper East Side" },
                { "@type": "Place", name: "Manhattan" },
                { "@type": "Place", name: "New York City" },
            ],
        },
    ],
    hero: {
        eyebrow: "New York · Upper East Side",
        title: "Sell Your Audemars Piguet in Upper East Side",
        image: {
            title: "audemars-piguet-upper-east-side-hero",
            alt: "Audemars Piguet watches on stone at the InstaGold 47th Street office, serving Upper East Side sellers",
        },
        description: "Sell your Audemars Piguet in Upper East Side the smart way with InstaGold. We are a licensed watch buyer on 47th Street in the Diamond District, paying top cash for Royal Oak, Royal Oak Offshore, and every AP reference, with or without box and papers. From the Upper East Side, our 47th Street office is a short ride down, so you can sell in person and get a fair, same-day offer. We authenticate and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us which Audemars Piguet you have." },
            { title: "Free Authentication", body: "We authenticate, inspect, and value your Audemars Piguet in front of you." },
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
        title: "Why Upper East Side Sellers Choose InstaGold",
        description: "Upper East Side sellers expect a refined, discreet, and accurate appraisal.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Real Market Offers", body: "Priced against current resale and auction data, tracked daily." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Audemars Piguet Models We Buy",
        description: "We buy every Audemars Piguet, from modern references to vintage pieces, working or not, with or without box and papers.",
        items: [
            { icon: Watch, title: "Royal Oak", body: "Jumbo, Selfwinding, and all references." },
            { icon: Sparkles, title: "Royal Oak Offshore", body: "Chronographs and Diver models." },
            { icon: Gauge, title: "Royal Oak Concept", body: "Complications and limited editions." },
            { icon: ShieldCheck, title: "Vintage and Rare AP", body: "Discontinued and collector references." },
        ],
        secondary_description: "We also buy Code 11.59, Millenary, Jules Audemars, and AP watches with or without box and papers.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "cat-gold", alt: "A Audemars Piguet watch inspected with a loupe during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More for Your Audemars Piguet",
        description: `Most people who sell a Audemars Piguet are underpaid. Pawn shops and quick-cash buyers offer a fraction of resale value and count on you not knowing what your reference is really worth.\n\nA Audemars Piguet is valued on its model and reference, its condition and service history, the originality of its parts, and current collector demand, not on gold weight or a generic estimate.\n\nInstaGold prices your Audemars Piguet against current resale and auction data, authenticates it in front of you, and explains exactly how each part of the offer is determined. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "left",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist authenticating a Audemars Piguet at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell a Audemars Piguet Near Upper East Side",
        description: "From the Upper East Side, our 47th Street office is a short ride down, so you can sell in person and get a fair, same-day offer. InstaGold is a direct ride from the Upper East Side down to the Diamond District, near Fifth Avenue. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Serving Upper East Side and the greater NYC area",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments",
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: { label: "Get Directions", url: "", action: "Direction" },
    },
    testimonials: [
        { quote: "Sold my Audemars Piguet and got a better offer than the online buyers quoted. They checked it over in front of me and paid the same visit.", name: "James Thornton", item: "Audemars Piguet" },
        { quote: "I had a Audemars Piguet with no box or papers and thought that would be a problem. It was not. They valued it fairly and I walked out with cash.", name: "Anthony Delgado", item: "Audemars Piguet" },
        { quote: "They knew exactly what my watch was worth and priced it against real auction results. No lowball, no games, just a fair number.", name: "Kevin Matthews", item: "Audemars Piguet" },
        { quote: "Fast, fair, and knowledgeable. They authenticated it on the spot and the payout matched the market.", name: "Daniel Rosen", item: "Audemars Piguet" },
    ],
    faqs: [
        { q: "Do you buy Audemars Piguet watches from Upper East Side sellers?", a: "Yes. Upper East Side is a direct ride from the Upper East Side down to the Diamond District. Bring your Audemars Piguet in for a free, same-day appraisal, or get an offer online first." },
        { q: "How much can I get for my Audemars Piguet?", a: "It depends on the model and reference, the condition and service history, the originality of the parts, and current collector demand. We price against real-time resale and auction data." },
        { q: "Do you buy a Audemars Piguet without box and papers?", a: "Yes. Box and papers add value, but we buy Audemars Piguet watches with or without them." },
        { q: "Do you buy non-working or damaged Audemars Piguet watches?", a: "Yes. We buy Audemars Piguet watches that are scratched, not running, or in need of service, and price them fairly." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Audemars Piguet in Upper East Side Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
