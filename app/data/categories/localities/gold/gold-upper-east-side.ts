import {
    BadgeCheck,
    Banknote,
    Coins,
    Gem,
    LineChart,
    MapPin,
    Recycle,
    Sparkles,
} from "lucide-react";

// Cash for Gold locality page - route: /cash-for-gold-nyc/upper-east-side
export const goldUpperEastSideData = {
    meta: {
        title: "Cash for Gold Upper East Side | Same-Day Payout | InstaGold",
        description: "Cash for gold in Upper East Side at InstaGold, a licensed 47th St buyer. Top payouts on gold jewelry, coins and bullion, paid same day. Free offer fast.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/cash-for-gold-nyc/upper-east-side",
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
        title: "Cash for Gold in Upper East Side",
        image: {
            title: "gold-hero",
            alt: "Gold jewelry, coins and bullion on stone at the InstaGold 47th Street office, serving Upper East Side sellers",
        },
        description: "Cash for gold in Upper East Side starts here. InstaGold is a licensed gold buyer on 47th Street in the Diamond District, paying top rates for gold jewelry, coins, and bullion. From the Upper East Side, our 47th Street office is a short ride down, so you can sell in person and get a fair, same-day offer. We test and weigh your gold in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us what you have." },
            { title: "Free Evaluation", body: "We weigh, test, and price your gold in front of you at live rates." },
            { title: "Get Paid Same Day", body: "Accept the offer and get paid. Walk away anytime if you do not." },
        ],
    },
    rates: [
        { metal: "Gold", note: "Priced at today's live spot rate" },
        { metal: "Silver", note: "Priced at today's live spot rate" },
        { metal: "Platinum", note: "Priced at today's live spot rate" },
    ],
    companyDetails: {
        eyebrow: "Why InstaGold",
        title: "Why Upper East Side Sellers Choose InstaGold",
        description: "Upper East Side sellers expect a refined, discreet, and accurate appraisal.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Live Market Pricing", body: "Every offer is based on the current gold spot price." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "What Gold We Buy",
        description: "We pay cash for gold in every form and every karat, from 10K to 24K.",
        items: [
            { icon: Sparkles, title: "Gold Jewelry", body: "Chains, rings, bracelets, earrings, broken or scrap." },
            { icon: Coins, title: "Gold Coins", body: "Krugerrands, American Eagles, Maple Leafs, and rare coins." },
            { icon: Gem, title: "Gold Bullion", body: "Bars and rounds, from 1 gram to 1 kilo." },
            { icon: Recycle, title: "Scrap and Dental Gold", body: "Broken pieces, casting, and dental gold." },
        ],
        secondary_description: "We also buy gold watches, gold-filled items, and mixed karat lots.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "gold-examined", alt: "Gold jewelry weighed on a jeweler's scale during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More Cash for Your Gold",
        description: `Most sellers get less than their gold is worth. Pawn shops and mail-in services quote below market and count on you not checking the spot price.\n\nOn just a few ounces, the difference between a fair offer and a lowball can be thousands of dollars.\n\nInstaGold pays against the live market rate, weighs and tests your gold in front of you, and shows you exactly how your offer is calculated. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "right",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist testing gold at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell Gold Near Upper East Side",
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
        { quote: "Brought in some old gold chains and got paid more than three other places quoted. Fast and honest.", name: "Daniel Rosen", item: "Gold jewelry" },
        { quote: "They weighed everything in front of me and explained the price. Walked out with cash the same day.", name: "Priya Sharma", item: "Gold jewelry" },
        { quote: "Sold my scrap gold here. No pressure, fair offer, done in fifteen minutes.", name: "Marcus Lee", item: "Scrap gold" },
        { quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure.", name: "Przemysław Prusinowski", item: "Gold coins" },
    ],
    faqs: [
        { q: "Do you buy gold from Upper East Side sellers?", a: "Yes. Upper East Side is a direct ride from the Upper East Side down to the Diamond District. Bring your gold in for a free, same-day offer, or get a quote online first." },
        { q: "How much cash can I get for my gold?", a: "Your payout is based on your gold's weight, karat, and the live market price on the day you sell. We calculate it transparently in front of you." },
        { q: "What types of gold do you buy?", a: "All of it. Jewelry, coins, bullion, and scrap or dental gold, from 10K to 24K, in any condition." },
        { q: "Do I need an appointment?", a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Turn Your Gold Into Cash Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
