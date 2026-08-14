import {
    BadgeCheck,
    Banknote,
    Boxes,
    Gem,
    Landmark,
    LineChart,
    MapPin,
    Scale,
} from "lucide-react";

export const goldBullionData = {
    meta: {
        title: "Sell Gold Bullion NYC | Top Spot Rates | InstaGold",
        description: "Sell gold bullion in NYC at our licensed 47th St location. Top rates for gold bars, rounds and ingots, tested and paid same day. Free offer in minutes.",
    },
    schema: [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "InstaGold",
            url: "https://lux-offer-pro.lovable.app/sell-gold-bullion-nyc",
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
        }
    ],
    hero: {
        eyebrow: "New York · West 47th Street",
        title: "Sell Gold Bullion in NYC",
        image: {
            title: "gold-bullion-hero",
            alt: "Gold bars, ingots and bullion rounds on stone at the InstaGold 47th Street office",
        },
        description: "Sell gold bullion in NYC the smart way with InstaGold. We are a licensed buyer on 47th Street in the Diamond District, paying top spot-based rates for gold bars, rounds, and ingots. We test, weigh, and value your bullion in front of you and pay the same day. No appointment needed. No obligation to sell."
    },

    process: {
        eyebrow: "How it works",
        title: "How It Works",
        ctaLabel: "Get My Free Offer",
        steps: [
            {
                title: "Get a Free Offer",
                body: "Submit the form or walk in and tell us what bullion you have.",
            },
            {
                title: "Free Evaluation",
                body: "We test, weigh, and value your bars and rounds in front of you.",
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
        title: "Why Sell Your Gold Bullion to InstaGold",
        description: "We make selling gold bullion simple, fair, and fast.",
        items: [
            {
                icon: BadgeCheck,
                title: "Licensed and Bonded",
                body: "NYC Lic# 2134780-DCWP.",
            },
            {
                icon: Banknote,
                title: "Same-Day Payment",
                body: "Cash or wire once you accept.",
            },
            {
                icon: LineChart,
                title: "Live Spot Pricing",
                body: "Every offer is based on the current gold spot price.",
            },
            {
                icon: MapPin,
                title: "Diamond District Location",
                body: "31 W 47th Street, Suite 202.",
            },
        ]
    },

    whatWeBuy: {
        eyebrow: "What we buy",
        title: "Gold Bullion We Buy",
        description: "We buy investment-grade gold bullion in every form and size, from a single gram to a full kilo.",
        items: [
            {
                icon: Boxes,
                title: "Gold Bars",
                body: "From 1 gram to 1 kilo, any refiner.",
            },
            {
                icon: Landmark,
                title: "Gold Rounds",
                body: "Private mint and refinery rounds.",
            },
            {
                icon: Scale,
                title: "Gold Ingots",
                body: "Cast and minted ingots of any weight.",
            },
            {
                icon: Gem,
                title: "Branded Bullion",
                body: "PAMP, Valcambi, Credit Suisse, Perth Mint and more.",
            },
        ],
        secondary_description: "We also buy bullion lots, mixed weights, and bullion with or without assay cards.",
    },

    about: {
        align: "left",
        tone: "stone",
        image: {
            title: "gold-examined",
            alt: "Gold bars weighed on a jeweler's scale during an InstaGold evaluation"
        },
        eyebrow: "Fair value",
        title: "Get More for Your Gold Bullion",
        description: `Most bullion sellers get less than the spot price. Pawn shops and mail-in buyers apply wide margins and count on you not checking the live market.\n\nOn bars and larger holdings, that gap can run into thousands of dollars.\n\nInstaGold pays against the live gold spot price, weighs and tests your bullion in front of you, and shows you exactly how your offer is calculated. Licensed, clear, and same day.`,
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
            title: "gold-bullion-end",
            alt: "InstaGold specialist testing a gold bar at the 47th Street Diamond District office"
        },
        eyebrow: "Location",
        title: "Where to Sell Gold Bullion in NYC",
        description: "InstaGold is located at 31 W 47th Street in the heart of the Diamond District, the most trusted place to sell gold bullion in New York. We buy from sellers across Manhattan and the greater NYC area. Walk in during business hours or get an offer online first.",
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
            quote: "Sold a handful of one ounce bars. They tested each one, kept the live spot price on the screen the whole time, and paid me the same visit with no haggling.",
            name: "Daniel Rosen",
            item: "Gold bars",
        },
        {
            quote: "I had a mix of rounds and small ingots from years of stacking. The offer was the fairest of three places I tried, and they walked me through the math.",
            name: "Marcus Lee",
            item: "Gold rounds & ingots",
        },
        {
            quote: "It's not common to be treated with respect in the Diamond District. How refreshing it was to meet the InstaGold team, who took care of all my needs with no pressure. This is definitely the place you'd like to visit.",
            name: "Przemysław Prusinowski",
            item: "Gold bullion",
        },
        {
            quote: "Brought in a kilo bar I inherited and was nervous about it. They handled it professionally, verified it in front of me, and the payout matched the live market.",
            name: "Olivia MacKinnon",
            item: "Kilo bar",
        },
        {
            quote: "Fast, transparent, and fair. They explained their margin openly and I got paid on the spot. Exactly how selling bullion should work.",
            name: "James Whitfield",
            item: "Gold bars",
        },
    ],

    faqs: [
        {
            q: "How much is my gold bullion worth?",
            a: "Bullion is valued by weight and purity against the live gold spot price on the day you sell. We weigh and test it in front of you and show you the math.",
        },
        {
            q: "Do you buy small bars or only large ones?",
            a: "Both. We buy bullion from a single gram bar up to full kilo bars, in any quantity.",
        },
        {
            q: "Do I need the original assay card or packaging?",
            a: "No. An assay card helps confirm the bar, but we test and buy bullion with or without it.",
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
            a: "Yes. We are a licensed and bonded NYC buyer, Lic# 2134780-DCWP, at 31 W 47th Street, Suite 202.",
        },
    ],

    cta: {
        title: "Sell Your Gold Bullion Today",
        intro: "Get a free, no-obligation offer in minutes, then decide.",
        primaryLabel: "Get My Free Offer"
    }
};
