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

// Cartier hub page - route: /sell-cartier-nyc
export const cartierData = {
    meta: {
        title: "Sell Cartier NYC | Top Cash for Cartier | InstaGold",
        description: "Sell your Cartier in NYC at our licensed 47th St location. Top cash for Cartier, valued by experts and paid same day. Free offer in minutes.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-cartier-nyc",
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
        title: "Sell Your Cartier in NYC",
        image: {
            title: "cartier-hero",
            alt: "Cartier watches on stone at the InstaGold 47th Street office",
        },
        description: "Sell your Cartier in NYC the smart way with InstaGold. We are a licensed watch buyer on 47th Street in the Diamond District, paying top cash for Santos, Tank, Ballon Bleu, and every Cartier reference, with or without box and papers. We authenticate and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell.",
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
        title: "Why Sell Your Cartier to InstaGold",
        description: "We make selling a Cartier simple, fair, and fast.",
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
        secondary_description: "We also buy Cartier jewelry, Cartier Drive, Roadman, and watches with or without box and papers.",
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
        align: "left",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist authenticating a Cartier at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell a Cartier in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell a Cartier in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
        { quote: "Sold my Cartier and got a better offer than the online buyers quoted. They checked it over in front of me and paid the same visit.", name: "James Thornton", item: "Cartier" },
        { quote: "I had a Cartier with no box or papers and thought that would be a problem. It was not. They valued it fairly and I walked out with cash.", name: "Anthony Delgado", item: "Cartier" },
        { quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.", name: "Przemysław Prusinowski", item: "Cartier" },
        { quote: "They knew exactly what my watch was worth and priced it against real auction results. No lowball, no games, just a fair number.", name: "Kevin Matthews", item: "Cartier" },
        { quote: "Fast, fair, and knowledgeable. They authenticated it on the spot and the payout matched the market.", name: "Daniel Rosen", item: "Cartier" },
    ],
    faqs: [
        { q: "How much can I get for my Cartier?", a: "It depends on the model and reference, the condition and service history, the originality of the parts, and current collector demand. We price against real-time resale and auction data and explain how the offer is determined." },
        { q: "Do you buy a Cartier without box and papers?", a: "Yes. Box and papers add value, but we buy Cartier watches with or without them." },
        { q: "Do you buy non-working or damaged Cartier watches?", a: "Yes. We buy Cartier watches that are scratched, not running, or in need of service, and price them fairly." },
        { q: "Do I need an appointment?", a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Cartier Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
