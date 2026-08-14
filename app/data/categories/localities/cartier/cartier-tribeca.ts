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

// Cartier locality page - route: /sell-cartier-nyc/tribeca
export const cartierTribecaData = {
    meta: {
        title: "Sell Cartier Tribeca | Top Cash | InstaGold",
        description: "Sell your Cartier in Tribeca with InstaGold. Licensed 47th St buyer paying top cash, expert valuation, paid same day. Free offer fast.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-cartier-nyc/tribeca",
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
                { "@type": "Place", name: "Tribeca" },
                { "@type": "Place", name: "Manhattan" },
                { "@type": "Place", name: "New York City" },
            ],
        },
    ],
    hero: {
        eyebrow: "New York · Tribeca",
        title: "Sell Your Cartier in Tribeca",
        image: {
            title: "cartier-tribeca-hero",
            alt: "Cartier watches on stone at the InstaGold 47th Street office, serving Tribeca sellers",
        },
        description: "Sell your Cartier in Tribeca the smart way with InstaGold. We are a licensed watch buyer on 47th Street in the Diamond District, paying top cash for Santos, Tank, Ballon Bleu, and every Cartier reference, with or without box and papers. Tribeca sits just south of the Diamond District, so selling in person means no mailing, no waiting, and a real offer the same day. We authenticate and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us which Cartier you have." },
            { title: "Free Authentication", body: "We authenticate, inspect, and value your Cartier in front of you." },
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
        title: "Why Tribeca Sellers Choose InstaGold",
        description: "Tribeca residents value discretion and quality, and expect the same when they sell.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Real Market Offers", body: "Priced against current resale and auction data, tracked daily." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Cartier Models We Buy",
        description: "We buy every Cartier, from modern references to vintage pieces, working or not, with or without box and papers.",
        items: [
            { icon: Watch, title: "Cartier Tank", body: "Solo, Americaine, Francaise, and Louis Cartier." },
            { icon: Sparkles, title: "Cartier Santos", body: "Santos de Cartier and Santos-Dumont." },
            { icon: Gauge, title: "Cartier Ballon Bleu", body: "All sizes and metals." },
            { icon: ShieldCheck, title: "Vintage and Jeweled Cartier", body: "Panthere, Pasha, and diamond-set pieces." },
        ],
        secondary_description: "We also buy Cartier jewelry, Cartier Drive, Roadster, and watches with or without box and papers.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "cat-gold", alt: "A Cartier watch inspected with a loupe during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More for Your Cartier",
        description: `Most people who sell a Cartier are underpaid. Pawn shops and quick-cash buyers offer a fraction of resale value and count on you not knowing what your reference is really worth.\n\nA Cartier is valued on its model and reference, its condition and service history, the originality of its parts, and current collector demand, not on gold weight or a generic estimate.\n\nInstaGold prices your Cartier against current resale and auction data, authenticates it in front of you, and explains exactly how each part of the offer is determined. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "right",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist authenticating a Cartier at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell a Cartier Near Tribeca",
        description: "Tribeca sits just south of the Diamond District, so selling in person means no mailing, no waiting, and a real offer the same day. InstaGold is a quick trip from Tribeca up to the Diamond District, close to City Hall and the Financial District. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Serving Tribeca and the greater NYC area",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments",
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: { label: "Get Directions", url: "", action: "Direction" },
    },
    testimonials: [
        { quote: "Sold my Cartier and got a better offer than the online buyers quoted. They checked it over in front of me and paid the same visit.", name: "James Thornton", item: "Cartier" },
        { quote: "I had a Cartier with no box or papers and thought that would be a problem. It was not. They valued it fairly and I walked out with cash.", name: "Anthony Delgado", item: "Cartier" },
        { quote: "They knew exactly what my watch was worth and priced it against real auction results. No lowball, no games, just a fair number.", name: "Kevin Matthews", item: "Cartier" },
        { quote: "Fast, fair, and knowledgeable. They authenticated it on the spot and the payout matched the market.", name: "Daniel Rosen", item: "Cartier" },
    ],
    faqs: [
        { q: "Do you buy Cartier watches from Tribeca sellers?", a: "Yes. Tribeca is a quick trip from Tribeca up to the Diamond District. Bring your Cartier in for a free, same-day appraisal, or get an offer online first." },
        { q: "How much can I get for my Cartier?", a: "It depends on the model and reference, the condition and service history, the originality of the parts, and current collector demand. We price against real-time resale and auction data." },
        { q: "Do you buy a Cartier without box and papers?", a: "Yes. Box and papers add value, but we buy Cartier watches with or without them." },
        { q: "Do you buy non-working or damaged Cartier watches?", a: "Yes. We buy Cartier watches that are scratched, not running, or in need of service, and price them fairly." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Cartier in Tribeca Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
