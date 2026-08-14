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

// Rolex locality page - route: /sell-rolex-nyc/chelsea
export const rolexChelseaData = {
    meta: {
        title: "Sell Rolex Chelsea | Top Cash NYC | InstaGold",
        description: "Sell your Rolex in Chelsea with InstaGold. Licensed 47th St buyer paying top cash for all Rolex models, with or without papers. Paid same day.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-rolex-nyc/chelsea",
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
                { "@type": "Place", name: "Chelsea" },
                { "@type": "Place", name: "Manhattan" },
                { "@type": "Place", name: "New York City" },
            ],
        },
    ],
    hero: {
        eyebrow: "New York · Chelsea",
        title: "Sell Your Rolex in Chelsea",
        image: {
            title: "watches-hero",
            alt: "Rolex watches on stone at the InstaGold 47th Street office, serving Chelsea sellers",
        },
        description: "Selling a Rolex in Chelsea is simple with InstaGold. We are a licensed Rolex buyer a few blocks north on 47th Street in the Diamond District, paying top cash for every Rolex model, with or without box and papers. We authenticate and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us which Rolex you have." },
            { title: "Free Authentication", body: "We authenticate, inspect, and value your Rolex in front of you." },
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
        title: "Why Chelsea Sellers Choose InstaGold",
        description: "Chelsea sellers appreciate a modern, transparent process with no pressure.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Real Market Offers", body: "Priced against current resale and auction data, tracked daily." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Rolex Models We Buy",
        description: "We buy every Rolex, from modern sports models to vintage references, working or not, with or without box and papers.",
        items: [
            { icon: Watch, title: "Rolex Submariner", body: "All references, date and no-date." },
            { icon: Sparkles, title: "Rolex Datejust and Day-Date", body: "Steel, two-tone, and precious metal." },
            { icon: Gauge, title: "Rolex Daytona and GMT-Master", body: "Sports and racing chronographs." },
            { icon: ShieldCheck, title: "Vintage and Rare Rolex", body: "Explorer, Sea-Dweller, and discontinued references." },
        ],
        secondary_description: "We also buy Yacht-Master, Air-King, Milgauss, Cellini, and Rolex parts and incomplete watches.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "watch-feature", alt: "A Rolex watch inspected with a loupe during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More for Your Rolex",
        description: `Most people who sell a Rolex are underpaid. Pawn shops and quick-cash buyers offer a fraction of resale value and count on you not knowing what your reference is really worth.\n\nA Rolex is valued on its model and reference, its condition and service history, the originality of its parts, and current collector demand, not on gold weight or a generic estimate.\n\nInstaGold prices your Rolex against current resale and auction data, authenticates it in front of you, and explains exactly how each part of the offer is determined. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "right",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist authenticating a Rolex at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell a Rolex Near Chelsea",
        description: "Chelsea is a short hop from our 47th Street office, so you can sell your Rolex in person, see the appraisal, and walk out paid the same day. InstaGold is minutes from Chelsea, near Bryant Park and Rockefeller Center. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Serving Chelsea and the greater NYC area",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments",
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: { label: "Get Directions", url: "", action: "Direction" },
    },
    testimonials: [
        { quote: "Sold my Submariner and got a better offer than the online buyers quoted. They checked it over in front of me and paid the same visit.", name: "James Thornton", item: "Rolex Submariner" },
        { quote: "I had a Datejust with no box or papers and thought that would be a problem. It was not. They valued it fairly and I walked out with cash.", name: "Anthony Delgado", item: "Rolex Datejust" },
        { quote: "They knew exactly what my vintage Explorer was worth and priced it against real auction results. No lowball, no games.", name: "Kevin Matthews", item: "Vintage Rolex Explorer" },
        { quote: "Fast, fair, and knowledgeable. They authenticated my Daytona on the spot and the payout matched the market.", name: "Daniel Rosen", item: "Rolex Daytona" },
    ],
    faqs: [
        { q: "Do you buy Rolex watches from Chelsea?", a: "Yes. Chelsea is minutes from our 47th Street office. Come in for a free, same-day appraisal, or get an offer online first." },
        { q: "How much can I get for my Rolex?", a: "It depends on the model and reference, the condition and service history, the originality of the parts, and current collector demand. We price against real-time resale and auction data and explain how the offer is determined." },
        { q: "Do you buy a Rolex without box and papers?", a: "Yes. Box and papers add value, but we buy Rolex watches with or without them." },
        { q: "Do you buy non-working or damaged Rolex watches?", a: "Yes. We buy Rolex watches that are scratched, not running, or in need of service, and price them fairly." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Rolex in Chelsea Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
