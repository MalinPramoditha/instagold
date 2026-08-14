import {
    BadgeCheck,
    Banknote,
    Coins,
    Gem,
    LineChart,
    MapPin,
    Sparkles,
    Star,
} from "lucide-react";

// Gold Coins locality page - route: /gold-coin-buyers-nyc/tribeca
export const goldCoinTribecaData = {
    meta: {
        title: "Gold Coin Buyers Tribeca | Top Payouts | InstaGold",
        description: "Gold coin buyers serving Tribeca. Top rates for Krugerrands, Eagles and rare coins at our licensed 47th St location. Paid same day.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/gold-coin-buyers-nyc/tribeca",
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
        title: "Gold Coin Buyers Serving Tribeca",
        image: {
            title: "gold-coins-hero",
            alt: "Gold coins including Krugerrands and Eagles on stone at the InstaGold 47th Street office, serving Tribeca",
        },
        description: "Gold coin buyers serving Tribeca do not come more trusted than InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top rates for bullion and rare gold coins. Tribeca sits just south of the Diamond District, so selling in person means no mailing, no waiting, and a real offer the same day. We test, weigh, and value your coins in front of you and pay the same day. No appointment needed. No obligation to sell.",
    },
    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            { title: "Get a Free Offer", body: "Submit the form or walk in and tell us what coins you have." },
            { title: "Free Evaluation", body: "We test, weigh, and value your coins in front of you." },
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
        title: "Why Tribeca Sellers Choose InstaGold",
        description: "Tribeca residents value discretion and quality, and expect the same when they sell.",
        items: [
            { icon: BadgeCheck, title: "Licensed and Bonded", body: "NYC Lic# 2134780-DCWP." },
            { icon: Banknote, title: "Same-Day Payment", body: "Cash or wire once you accept." },
            { icon: LineChart, title: "Live Market Pricing", body: "Every offer is based on the current gold spot price." },
            { icon: MapPin, title: "Diamond District Location", body: "31 W 47th Street, Suite 202." },
        ],
    },
    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Gold Coins We Buy",
        description: "We buy bullion coins and numismatic coins in any quantity, from single pieces to full collections.",
        items: [
            { icon: Star, title: "American Gold Eagles", body: "The most traded US gold coin." },
            { icon: Coins, title: "Krugerrands", body: "The classic one ounce bullion coin." },
            { icon: Sparkles, title: "Canadian Maple Leafs", body: "24 karat bullion, any year." },
            { icon: Gem, title: "Rare and Numismatic Coins", body: "Pre-1933 US coins, sovereigns, and collectible pieces." },
        ],
        secondary_description: "We also buy Britannias, Philharmonics, Pandas, and gold coin lots of every kind.",
    },
    about: {
        align: "left",
        tone: "stone",
        image: { title: "gold-examined", alt: "Gold coins examined during an InstaGold evaluation" },
        eyebrow: "Fair value",
        title: "Get More for Your Gold Coins",
        description: `Most coin sellers are underpaid. Pawn shops and mail-in buyers pay melt value only and ignore what a coin is really worth.\n\nFor rare or collectible coins, that can mean losing hundreds or thousands of dollars in numismatic value.\n\nInstaGold values your coins two ways, by live metal price and by collectible worth, and pays you the higher of the two. We show you exactly how the offer is calculated. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: { label: "", url: "", action: "" },
    },
    location: {
        align: "right",
        tone: "white",
        image: { title: "office-appraisal", alt: "InstaGold specialist valuing gold coins at the 47th Street Diamond District office" },
        eyebrow: "Location",
        title: "Where to Sell Gold Coins Near Tribeca",
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
        { quote: "Sold a small collection of Eagles and Krugerrands. They valued each coin and paid me the same visit at the live rate.", name: "Daniel Rosen", item: "Gold coins" },
        { quote: "I had a few rare pre-1933 coins and they knew the numismatic value, not just the melt. Paid far more than the last place.", name: "Kevin Matthews", item: "Rare coins" },
        { quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure.", name: "Przemysław Prusinowski", item: "Gold coins" },
        { quote: "Fast and honest. They weighed and tested my Maple Leafs in front of me and explained the offer.", name: "Priya Sharma", item: "Maple Leafs" },
    ],
    faqs: [
        { q: "Do you buy gold coins from Tribeca sellers?", a: "Yes. Tribeca is a quick trip from Tribeca up to the Diamond District. Bring your coins in for a free, same-day offer, or get a quote online first." },
        { q: "How much are my gold coins worth?", a: "It depends on the coin. Bullion coins are valued at the live gold price by weight and purity. Rare coins are valued for their collectible worth. We pay the higher of the two." },
        { q: "Do you buy single coins or only collections?", a: "Both. We buy single coins and full collections, in any quantity." },
        { q: "Do I need an appointment?", a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first." },
        { q: "How do you pay?", a: "Same day, by cash or wire transfer, once you accept the offer." },
        { q: "Is InstaGold licensed?", a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202." },
    ],
    cta: {
        title: "Sell Your Gold Coins Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer",
    },
};
