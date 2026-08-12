import { BadgeCheck, Banknote, Check, Crown, Gem, LineChart, MapPin, Watch } from "lucide-react";

export const watchesData = {
    meta: {
        title: "Sell Used Watch NYC | Same-Day Cash | InstaGold",
        description: "Sell your used watch in NYC for top cash. We buy Rolex, Patek, AP and more at our licensed 47th St location in Manhattan. Free offer in minutes, paid same day.",
    },

    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell a Used Watch in NYC",
        image: {
            title: "watches-hero",
            alt: "Pre-owned luxury wristwatches on travertine stone at the InstaGold 47th Street office",
        },
        description: "Sell a used watch in NYC the smart way with InstaGold. We are a licensed watch buyer on 47th Street in the Diamond District, steps from Rockefeller Center and Fifth Avenue, paying top cash for luxury and everyday watches. We inspect and value your watch in front of you and pay the same day. No appointment needed. No obligation to sell."
    },

    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            {
                title: "Get a Free Offer",
                body: "Submit the form or walk in and tell us what you have.",
            },
            {
                title: "Free Inspection",
                body: "We authenticate, inspect, and value your watch in front of you.",
            },
            {
                title: "Get Paid Same Day",
                body: "Accept the offer and get paid. Walk away anytime if you do not.",
            },
        ]
    },

    rates: [
        { metal: "Gold", note: "Priced at today's live spot rate" },
        { metal: "Silver", note: "Priced at today's live spot rate" },
        { metal: "Platinum", note: "Priced at today's live spot rate" },
    ],

    companyDetails: {
        eyebrow: "Why InstaGold",
        title: "Why Sell Your Watch to InstaGold",
        description: "We make selling a watch in Manhattan simple, fair, and fast.",
        items: [
            {
                icon: BadgeCheck,
                title: "Licensed Buyer",
                body: "NYC Lic# 2134780-DCWP.",
            },
            {
                icon: Banknote,
                title: "Same-Day Payment",
                body: "Cash or wire once you accept.",
            },
            {
                icon: LineChart,
                title: "Fair Market Offers",
                body: "Priced against real resale and auction data.",
            },
            {
                icon: MapPin,
                title: "Diamond District Location",
                body: "31 W 47th Street, Suite 202, in the heart of Manhattan.",
            },
        ]
    },

    whatWeBuy: {
        eyebrow: "Brands",
        title: "Watch Brands We Buy",
        description: "We buy used and pre-owned watches from every major maker, working or not, with or without box and papers.",
        items: [
            {
                icon: Crown,
                title: "Rolex",
                body: "Submariner, Datejust, Daytona, GMT-Master, and all models.",
            },
            {
                icon: Gem,
                title: "Patek Philippe",
                body: "Nautilus, Aquanaut, Calatrava, and complications.",
            },
            {
                icon: BadgeCheck,
                title: "Audemars Piguet",
                body: "Royal Oak, Royal Oak Offshore, and more.",
            },
            {
                icon: Watch,
                title: "Other Luxury Brands",
                body: "Omega, Cartier, Tudor, Breitling, IWC, and Jaeger-LeCoultre.",
            },
        ],
        secondary_description: "We also buy vintage watches, watch lots, and estate collections.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "watch-feature",
            alt: "Specialist inspecting a pre-owned luxury watch with a loupe during an InstaGold valuation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Used Watch",
        description: `Most people who sell a watch get underpaid. Pawn shops and quick-cash buyers offer a fraction of resale value and count on you not knowing the market.\n\nOn a luxury watch, that gap can be thousands of dollars left on the table.\n\nInstaGold prices your watch against real resale and auction data, inspects it in front of you, and shows you exactly how the offer is built. Licensed, clear, and same day.`,
        list: [],
        link_description: "",
        link: {
            label: "",
            url: "",
            action: "",
        }
    },

    location: {
        align: "right",
        tone: "white",
        image: {
            title: "office-appraisal",
            alt: "InstaGold specialist valuing a watch at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell a Used Watch in NYC",
        description: "InstaGold is located at 31 W 47th Street in the Diamond District, minutes from Rockefeller Center, Bryant Park, and Grand Central. It is the most trusted place to sell a used watch in Manhattan. We buy from sellers across New York City and the tri-state area. Walk in during business hours or get an offer online first.",
        list: [
            "Prime Diamond District location: 31 W 47th Street, Suite 202",
            "Steps from Times Square & Grand Central Terminal",
            "Easy subway access (B, D, F, M, N, Q, R, W, 1, 2, 3)",
            "Safe, licensed and bonded buyer",
            "Open weekdays for walk-in offers & appointments"
        ],
        link_description: "31 W 47th Street, Suite 202, New York, NY 10036",
        link: {
            label: "Get Directions",
            url: "",
            action: "Direction",
        }
    },

    testimonials: [
        {
            quote: "Brought in a box of old gold chains and a few coins. Everything was weighed and tested right in front of me, the spot price was on the screen the whole time, and I walked out with cash the same visit.",
            name: "Arielle Pierre",
            item: "Gold jewelry & coins",
        },
        {
            quote: "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
            name: "Olivia MacKinnon",
            item: "Scrap gold",
        },
        {
            quote: "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
            name: "Przemysław Prusinowski",
            item: "Gold bullion",
        },
        {
            quote: "I had inherited scrap gold and had no idea what it was worth. They explained the karat testing, showed me the math against the live market and gave me a fair number with no pressure at all.",
            name: "Olivia MacKinnon",
            item: "Scrap gold",
        },
        {
            quote: "It’s not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you’d like to visit.",
            name: "Przemysław Prusinowski",
            item: "Gold bullion",
        },
    ],

    faqs: [
        {
            q: "How much can I get for my used watch?",
            a: "It depends on the brand, model, condition, and whether you have box and papers. We price against current resale and auction data and show you how the offer is calculated.",
        },
        {
            q: "Do you buy watches without box or papers?",
            a: "Yes. Box and papers help the value, but we buy watches with or without them.",
        },
        {
            q: "Do you buy non-working or damaged watches?",
            a: "Yes. We buy watches that are broken, scratched, or not running, and price them fairly.",
        },
        {
            q: "Do I need an appointment?",
            a: "No. Walk in to our 47th Street location during business hours, or submit a free offer online first.",
        },
        {
            q: "How do you pay?",
            a: "Same day, by cash or wire transfer, once you accept the offer.",
        },
        {
            q: "Is InstaGold licensed?",
            a: "Yes. We are a licensed NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202.",
        },
    ],

    cta: {
        title: "Sell Your Watch Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};